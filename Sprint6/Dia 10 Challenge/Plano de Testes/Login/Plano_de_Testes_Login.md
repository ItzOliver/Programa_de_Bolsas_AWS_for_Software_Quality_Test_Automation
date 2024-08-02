# Plano de Testes para API ServeRest - Rota de Login
## Resumo
Objetivo: Garantir que o sistema permita a autenticação de usuários registrados no Marketplace da ServeRest conforme os critérios de aceitação definidos.

## Estratégia de Testes
1) Testes Funcionais de API: Validação das Funcionalidade principais da API (CRUD).
2) Testes de Validação: Verificação das regras de negócio, critérios de aceitação e restrições.
3) Testes de Erro: Validação de que a API lida corretamente com entradas válidas, inválidas e casos de erro.
4) Automação de Testes: Identificação de testes repetitivos e críticos para automação, garantindo eficiência e cobertura contínua.

## Critérios de Aceitação:
- Usuários não cadastrados não deverão conseguir autenticar;
- Usuários com senha inválida não deverão conseguir autenticar;
- No caso de não autenticação, deverá ser retornado um status code 401 (Unauthorized);
- Usuários existentes e com a senha correta deverão ser autenticados;
- A autenticação deverá gerar um token Bearer;
- A duração da validade do token deverá ser de 10 minutos;
- Os testes executados deverão conter evidências;
- A cobertura de testes deve se basear no Swagger e ir além, cobrindo cenários alternativos.

## Priorização de Testes
### Fluxo Prioritário
Aplicação: [API] Rota de Login
Objetivo principal do sistema: Autenticar usuários no Marketplace do ServeRest.
- Lista de fluxos prioritários ordenada:
    - Enviar uma requisição POST para realizar login;
        - Deverão ser preenchidos os campos E-MAIL e PASSWORD.
    - Submeter requisição após preencher os campos;
        - Se não houver usuário cadastrado com os dados informados:
            - Rejeita a requisição e envia uma mensagem informando ao usuário.
        - Se E-MAIL informado for inválido:
            - Rejeita a requisição e envia uma mensagem informando ao usuário.
        - Se PASSWORD informado for inválida:
            - Rejeita a requisição e envia uma mensagem informando ao usuário.
    - Usuário logado e autenticado.

## Matriz de Rastreabilidade
| Requisito ID | Descrição do Requisito | Casos de Teste |
|:----------|:-------------:|:-------------:|
| DoR-1 | Banco de dados e infraestrutura para desenvolvimento disponibilizados | Todos os casos de teste dependem da infraestrutura adequada |
| DoR-2 | API de cadastro de usuários implementada | Todos os casos de teste dependem da existência de usuários autenticados |
| DoR-3 | Ambiente de testes disponibilizado | Todos os casos de teste dependem do ambiente de testes |
| DoD-1 | Autenticação com geração de token Bearer implementada | - |
| DoD-2 | Análise de testes cobrindo a rota de login | Todos os casos de teste |
| DoD-3 | Matriz de rastreabilidade atualizada | Este documento |
| DoD-4 | Automação de testes baseado na análise realizada | - |
| AC-1 | Usuários não cadastrados não deverão conseguir autenticar | CT-2.1 e CT-2.2 |
| AC-2 | Usuários com senha inválida não deverão conseguir autenticar | CT-2.2 |
| AC-3 | No caso de não autenticação, deverá ser retornado um status code 401 (Unauthorized) | CT-2.1 e CT-2.2 |
| AC-4 | Usuários existentes e com a senha correta deverão ser autenticados | CT-1.1 |
| AC-5 | A autenticação deverá gerar um token Bearer | CT-1.1 |
| AC-6 | A duração da validade do token deverá ser de 10 minutos | - |
| AC-7 | Os testes executados deverão conter evidências | Evidências disponíveis no board do Jira |
| AC-8 | A cobertura de testes deve se basear no Swagger e ir além, cobrindo cenários alternativos. | Todos os Casos de Teste |

## Cenários Macro na Suíte de Testes
### [Testes de Login de Usuário](https://oliver-almeida.atlassian.net/plugins/servlet/ac/com.soldevelo.apps.test_management/test-cycle-details?testCycleId=98328#!testCycleId=98328)
- **Cenário 1 - Realizar login com campos válidos**
    - **[CT-1.1 (Caso de Teste 1.1)](https://oliver-almeida.atlassian.net/browse/PB3-6) - Logar com Todos os Campos Válidos:** 
        - **Objetivo:** Garantir que um usuário consiga realizar login desde que entre com credenciais válidas.
        - **Pré-condições:** Ter realizado cadastro na plataforma.
        - **Resultado Esperado:** Mensagem dizendo "Login realizado com sucesso" junto do Token de autenticação. Status code: 200 enviado.

- **Cenário 2 - Realizar login com campos inválidos**
    - **[CT-2.1 (Caso de Teste 2.1)](https://oliver-almeida.atlassian.net/browse/PB3-8) - Logar com E-mail Inválido:** 
        - **Objetivo:** Impedir que um usuário consiga realizar login se suas credenciais forem inválidas.
        - **Pré-condições:** Tentar logar na plataforma com e-mail inválido.
        - **Resultado Esperado:** Mensagem dizendo "E-mail e/ou senha inválidos". Status code: 401 enviado.
    
    - **[CT-2.2 (Caso de Teste 2.2)](https://oliver-almeida.atlassian.net/browse/PB3-8) - Logar com Senha Inválida:** 
        - **Objetivo:** Impedir que um usuário consiga realizar login se suas credenciais forem inválidas.
        - **Pré-condições:** Tentar logar na plataforma com senha inválida.
        - **Resultado Esperado:** Mensagem dizendo "E-mail e/ou senha inválidos". Status code: 401 enviado.
    
    - **[CT-2.3 (Caso de Teste 2.3)](https://oliver-almeida.atlassian.net/browse/PB3-50) - Logar com E-mail Em Branco:** 
        - **Objetivo:** Impedir que um usuário consiga realizar login se suas credenciais forem inválidas.
        - **Pré-condições:** Tentar logar na plataforma com e-mail em branco.
        - **Resultado Esperado:** Mensagem dizendo "E-mail não pode ficar em branco". Status code: 400 enviado.

    - **[CT-2.4 (Caso de Teste 2.4)](https://oliver-almeida.atlassian.net/browse/PB3-51) - Logar com Senha Em Branco:** 
        - **Objetivo:** Impedir que um usuário consiga realizar login se suas credenciais forem inválidas.
        - **Pré-condições:** Tentar logar na plataforma com senha em branco.
        - **Resultado Esperado:** Mensagem dizendo "Senha não pode ficar em branco". Status code: 400 enviado. 

# Testes de Performance da Rota Login Utilizando K6
## Resumo dos Testes
| ID | Tipo de Teste | Configuração de Teste | Métricas | Resultado Esperado | Verbo |
|:---|:-------------:|:---------------------:|:--------:|:------------------:|:-----:|
| TPL-1 | Carga | 100 VUs durante 1 minuto | Tempo de resposta, taxa de erro, throughput | Tempo de resposta < 2s, taxa de erro < 5% | POST |
| TPL-2 | Estresse | Aumento gradual de 0 a 300 VUs em 2 minutos | Tempo de resposta, taxa de erro, throughput | API deve continuar a responder, sem falhas críticas | POST |
| TPL-3 | Escalabilidade | 100 VUs inicial com incremento de 50 VUs a cada 20 segundos até 300 VUs | Tempo de resposta, taxa de erro, throughput | API deve escalar de forma eficiente sem degradação severa | POST |
| TPL-4 | Pico | 500 VUs durante 30 segundos | Tempo de resposta, taxa de erro, throughput | Tempo de resposta < 2s, taxa de erro <5% | POST |
| TPL-5 | Resistência | 100 VUs durante 5 minutos | Tempo de resposta, taxa de erro, throughput | Desempenho estável durante todo o período, sem aumento significativo no tempo de resposta ou taxa de erro | POST |

## Detalhamento dos Testes
**[TPL-1: Teste de Carga]()**
**Objetivo:** Validar a capacidade da API de lidar com um número constante de usuários simultâneos.
- Configuração: Simular 100 Usuários Virtuais (VUs) durante 1 minuto.
- Métricas: Tempo de resposta, taxa de erro, throughput.
- Resultado Esperado: O tempo de resposta deve ser inferior a 2 segundos e a taxa de erro inferior a 5%.

**[TPL-2: Teste de Estresse]()**
- **Objetivo:** Identificar o ponto de falha da API sob carga crescente.
- Configuração: Aumentar gradualmente de 0 a 300 VUs em 2 minutos.
- Métricas: Tempo de resposta, taxa de erro, throughput.
- Resultado Esperado: A API deve continuar a responder às solicitações, sem falhas críticas ou interrupções no serviço.

**[TPL-3: Teste de Escalabilidade]()**
**Objetivo:** Avaliar a capacidade da API de escalar conforme a carga aumenta.
- Configuração: Iniciar com 100 VUs e aumentar em 50 VUs a cada 20 segundos até atingir 300 VUs.
- Métricas: Tempo de resposta, taxa de erro, throughput.
- Resultado Esperado: A API deve escalar de forma eficiente sem degradação severa no tempo de resposta ou aumento significativo na taxa de erro.

**[TPL-4: Teste de Pico]()**
**Objetivo:** Testar a resposta da API sob um pico de carga elevada.
- Configuração: Simular 500 VUs durante 30 segundos.
- Métricas: Tempo de resposta, taxa de erro, throughput.
- Resultado Esperado: O tempo de resposta deve ser inferior a 2 segundos e a taxa de erro inferior a 5%.

**[TPL-5: Teste de Resistência]()**
**Objetivo:** Avaliar o desempenho da API sob carga constante por um período prolongado.
- Configuração: Simular 100 VUs durante 5 minutos.
- Métricas: Tempo de resposta, taxa de erro, throughput.
- Resultado Esperado: O desempenho deve permanecer estável durante todo o período de teste, sem aumento significativo no tempo de resposta ou na taxa de erro.

## Ferramentas Utilizadas
- K6: Ferramenta de código aberto para testes de carga e desempenho.
- Prometheus & Grafana: Para monitoramento e visualização das métricas durante os testes.

## Preparação para os Testes
- Ambiente de Teste: Certifique-se de que o ambiente de teste esteja configurado e isolado do ambiente de produção.
- Dados de Teste: Prepare um conjunto de dados de teste que será utilizado durante os testes de carga.
- Monitoramento: Configure ferramentas de monitoramento para acompanhar o desempenho da API em tempo real.

## Execução dos Testes
Carregar o Script de Teste: Utilize scripts K6 para definir os cenários de teste conforme descrito nas configurações de cada teste.
Iniciar o Teste: Execute cada teste de acordo com o plano.
Coleta de Métricas: Monitore as métricas em tempo real e colete os dados para análise posterior.
Análise dos Resultados: Após a execução de cada teste, analise os resultados para identificar possíveis gargalos e áreas de melhoria.

## Relatório de Teste
Resumo dos Resultados: Apresentar um resumo dos resultados de cada teste, destacando as métricas principais.
Análise de Desempenho: Identificar possíveis problemas e propor soluções para otimização da API.
Conclusões e Recomendações: Fornecer conclusões sobre a capacidade da API de lidar com diferentes níveis de carga e recomendar ações para melhorar o desempenho, se necessário.
Este plano de testes visa garantir que a API de cadastro de usuários no ServeRest atenda aos requisitos de desempenho e esteja preparada para operar sob diferentes condições de carga.