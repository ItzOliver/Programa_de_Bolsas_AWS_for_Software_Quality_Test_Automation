# Plano de Testes para API ServeRest - Rota de Usuários
## Resumo
Objetivo: Garantir que a API de cadastro de usuários no Marketplace do ServeRest funcione corretamente para que usuários possam realizar a venda de seus produtos.

## Estratégia de Testes
1) Testes Funcionais de API: Validação das Funcionalidade principais da API (CRUD).
2) Testes de Validação: Verificação das regras de negócio, critérios de aceitação e restrições.
3) Testes de Erro: Validação de que a API lida corretamente com entradas válidas, inválidas e casos de erro.
4) Automação de Testes: Identificação de testes repetitivos e críticos para automação, garantindo eficiência e cobertura contínua.

## Critérios de Aceitação:
- CRUD de cadastro de vendedores (usuários) implementado (CRIAR, ATUALIZAR, LISTAR E DELETAR);
- Análise de testes cobrindo todos verbos;
- Os vendedores (usuários) deverão possuir os campos NOME, E-MAIL, PASSWORD e ADMINISTRADOR;
- Não deverá ser possível fazer ações e chamadas para usuários inexistentes;
- Não deve ser possível criar um usuário com e-mail já utilizado;
- Caso não seja encontrado usuário com o ID informado no PUT, um novo usuário deverá ser criado;
- Não deve ser possível cadastrar usuário com e-mail já utilizado utilizando PUT;
- Os testes executados deverão conter evidências;
- Não deverá ser possível cadastrar usuários com e-mails de provedor gmail e hotmail;
- Os e-mails devem seguir um padrão válido de e-mail para o cadastro;
- As senhas devem possuír no mínimo 5 caracteres e no máximo 10 caracteres;
- A cobertura de testes deve se basear no Swagger e ir além, cobrindo cenários alternativos.

## Priorização de Testes
### Fluxo Prioritário
Aplicação: [API] Rota de Usuários
Objetivo principal do sistema: Se cadastrar no Marketplace do ServeRest.
- Lista de fluxos prioritários ordenada:
    - Enviar uma requisição POST para cadastrar usuário;
        - Deverão ser preenchidos os campos NOME, E-MAIL, PASSWORD e ADMINISTRADOR.
    - Submeter requisição após preencher campos;    
        - Se E-MAIL fornecido já estiver sendo utilizado;
            - Rejeita a requisição e envia uma mensagem informando ao usuário.
        - Se E-MAIL for do provedor gmail ou hotmail;
            - Rejeita a requisição e envia uma mensagem informando ao usuário.
        - Se PASSWORD for menor que 5 caracteres ou maior que 10 caracteres:
            - Rejeita a requisição e envia uma mensagem informando ao usuário.
    - Usuário cadastrado.

## Matriz de Rastreabilidade
| Requisito ID | Descrição do Requisito | Casos de Teste |
|:----------|:-------------:|:-------------:|
| DoR-1 | Banco de dados e infraestrutura para desenvolvimento disponibilizados | Todos os casos de teste dependem da infraestrutura adequada |
| DoR-2 | Ambiente de testes disponibilizado | Todos os casos de teste dependem do ambiente de testes |
| DoD-1 | CRUD de cadastro de Produtos implementado (CRIA, ATUALIZA, LISTA e DELETA) | Todos os Casos de Teste |
| DoD-2 | Análise de testes cobrindo todos os verbos | Todos os casos de teste |
| DoD-3 | Matriz de rastreabilidade atualizada | Este documento |
| DoD-4 | Automação de testes baseada na análise realizada | - |
| AC-1 | Os vendedores (usuários) deverão possuir os campos NOME, E-MAIL, PASSWORD e ADMINISTRADOR | CT-1.1 |
| AC-2 | Não deverá ser possível fazer ações e chamadas para usuários inexistentes | CT-6.1 |
| AC-3 | Não deve ser possível criar um usuário com e-mail já utilizado | CT-2.1 |
| AC-4 | Caso não seja encontrado usuário com o ID informado no PUT, um novo usuário deverá ser criado | CT-3.2 |
| AC-5 | Não deve ser possível cadastrar usuário com e-mail já utilizado utilizando PUT | CT-4.1 |
| AC-6 | Os testes executados deverão conter evidências | Evidências disponíveis no board do Jira |
| AC-7 | Não deverá ser possível cadastrar usuários com e-mails de provedor gmail e hotmail | CT-2.2 |
| AC-8 | Os e-mails devem seguir um padrão válido de e-mail para o cadastro | CT-2.2 e CT-4.2 |
| AC-9 | As senhas devem possuír no mínimo 5 caracteres e no máximo 10 caracteres | CT-2.3 e CT-4.2 |
| AC-10 | A cobertura de testes deve se basear no Swagger e ir além, cobrindo cenários alternativos | Todos os Casos de Teste |

## Cenários Macro na Suíte de Testes
### [Testes de Criação de Usuário](https://oliver-almeida.atlassian.net/plugins/servlet/ac/com.soldevelo.apps.test_management/test-cycle-details?testCycleId=98353#!testCycleId=98353)
- **Cenário 1 - Criar usuário com campos válidos**
    - **[CT-1.1 (Caso de Teste 1.1)](https://oliver-almeida.atlassian.net/browse/PB3-30) - Criar Usuário com Todos os Campos Válidos:**
        - **Objetivo:** Garantir que um usuário seja criado caso todos os campos preenchidos sejam válidos.
        - **Pré-condições:** Não há.
        - **Resultado Esperado:** Mensagem dizendo "Cadastro realizado com sucesso" junto do ID do usuário. Status Code: 201 enviado.

- **Cenário 2 - Criar usuário com campos inválidos**
    - **[CT-2.1 (Caso de Teste 2.1)](https://oliver-almeida.atlassian.net/browse/PB3-31) - Criar Usuário com E-mail já Utilizado:** 
        - **Objetivo:** Garantir que um usuário não seja criado caso o e-mail já esteja sendo utilizado.
        - **Pré-condições:** Tentar criar usuário com e-mail já utlizado.
        - **Resultado Esperado:** Mensagem dizendo "Este e-mail já está sendo utilizado". Status Code: 400 enviado.

    - **[CT-2.2 (Caso de Teste 2.2)](https://oliver-almeida.atlassian.net/browse/PB3-32) - Criar Usuário com Provedor de E-mail Inválido:** 
        - **Objetivo:** Garantir que um usuário não seja criado caso seu provedor de e-mail seja inválido.
        - **Pré-condições:** Tentar criar usuário com e-mails de provedor gmail ou hotmail.
        - **Resultado Esperado:** Mensagem dizendo "E-mail e/ou senha inválidos". Status Code: 401 enviado.

    - **[CT-2.3 (Caso de Teste 2.3)](https://oliver-almeida.atlassian.net/browse/PB3-33) - Criar Usuário com Senha Inválida:** 
        - **Objetivo:** Garantir que um usuário não seja criado caso sua senha seja inválida.
        - **Pré-condições:** Tentar criar usuário com senha menor que 5 caracteres ou maior que 10.
        - **Resultado Esperado:** Mensagem dizendo "E-mail e/ou senha inválidos". Status Code: 401 enviado.

### [Testes de Atualização de Dados de Usuário](https://oliver-almeida.atlassian.net/plugins/servlet/ac/com.soldevelo.apps.test_management/test-cycle-details?testCycleId=98353#!testCycleId=98353)
- **Cenário 3 - Realizar alteração com campos válidos**
    - **[CT-3.1 (Caso de Teste 3.1)](https://oliver-almeida.atlassian.net/browse/PB3-34) - Alterar Dados de Usuário Cadastrado:** 
        - **Objetivo:** Garantir que um usuário possa ter seus dados alterados.
        - **Pré-condições:** Possuir a autenticação necessária.
        - **Resultado Esperado:** Mensagem dizendo "Registo alterado com sucesso". Status code: 200 enviado.

    - **[CT-3.2 (Caso de Teste 3.2)](https://oliver-almeida.atlassian.net/browse/PB3-35) - Alterar Dados de Usuário Não Cadastrado:** 
        - **Objetivo:** Garantir que, caso não seja encontrado usuário com ID informado, é realizado novo cadastro ao invés de alteração.
        - **Pré-condições:** Possuir a autenticação necessária e não existir usuário com ID informado.
        - **Resultado Esperado:** Mensagem dizendo "Cadastro realizado com sucesso" junto do ID do usuário. Status Code: 200 enviado.

- **Cenário 4 - Realizar alteração com campos inválidos**
    - **[CT-4.1 (Caso de Teste 4.1)](https://oliver-almeida.atlassian.net/browse/PB3-36) - Alterar Dados de Usuário Não Cadastrado com E-mail já Utilizado:**
        - **Objetivo:** Garantir que um usuário não seja criado caso o e-mail já esteja sendo utilizado.
        - **Pré-condições:** Possuir a autenticação necessária, não existir usuário com ID informado e e-mail já estar sendo utilizado.
        - **Resultado Esperado:** Mensagem dizendo "Este e-mail já está sendo utilizado". Status Code: 400 enviado.

    - **[CT-4.2 (Caso de Teste 4.2)](https://oliver-almeida.atlassian.net/browse/PB3-37) - Alterar Dados de Usuário com E-mail e/ou Senha inválidos:**
        - **Objetivo:** Garantir que um usuário não seja criado caso o e-mail já esteja sendo utilizado.
        - **Pré-condições:** Possuir a autenticação necessária, não existir usuário com ID informado e e-mail e/ou senha serem inválidos.
        - **Resultado Esperado:** Mensagem dizendo "E-mail e/ou senha inválidos". Status Code: 401 enviado.

### [Testes de Busca de Usuário](https://oliver-almeida.atlassian.net/plugins/servlet/ac/com.soldevelo.apps.test_management/test-cycle-details?testCycleId=98353#!testCycleId=98353)
- **Cenário 5 - Realizar busca de usuário válida**
    - **[CT-5.1 (Caso de Teste 5.1)](https://oliver-almeida.atlassian.net/browse/PB3-38) - Buscar por Usuário Existente:**
        - **Objetivo:** Garantir que usuários existentes possam ser buscados no sistema.
        - **Pré-condições:** Não há.
        - **Resultado Esperado:** Lista de usuários que satisfaçam a condição de busca (se houver). Status Code: 200 enviado.

- **Cenário 6 - Realizar busca de usuário inválida**
    - **[CT-6.1 (Caso de Teste 6.1)](https://oliver-almeida.atlassian.net/browse/PB3-39) - Buscar por Usuário Inexistente:**
        - **Objetivo:** Garantir que o usuário receba um feedback caso busque por usuários inexistentes no sistema.
        - **Pré-condições:** Usuário(s) buscados não existir(em) no sistema.
        - **Resultado Esperado:** Mensagem dizendo "Usuário não encontrado". Status Code: 400 enviado.

### [Teste de Deleção de Usuário](https://oliver-almeida.atlassian.net/plugins/servlet/ac/com.soldevelo.apps.test_management/test-cycle-details?testCycleId=98353#!testCycleId=98353)
- **Cenário 7 - Realizar deleção de usuário válida**
    - **[CT-7.1 (Caso de Teste 7.1)](https://oliver-almeida.atlassian.net/browse/PB3-40) - Deletar Usuário Existente/Inexistente:**
        - **Objetivo:** Garantir que o usuário selecionado será deletado (se existir).
        - **Pré-condições:** Possuir a autenticação necessária e usuário não pode possuir carrinho.
        - **Resultado Esperado:** Mensagem dizendo "Registro Excluído | Nenhum registro excluído". Status Code: 200 enviado.

- **Cenário 8 - Realizar deleção de usuário inválida**
    - **[CT-8.1 (Caso de Teste 8.1)](https://oliver-almeida.atlassian.net/browse/PB3-41) - Deletar Usuário com Carrinho:**
        - **Objetivo:** Garantir que o usuário selecionado não será deletado caso tenha um carrinho.
        - **Pré-condições:** Possuir a autenticação necessária e usuário possuir carrinho.
        - **Resultado Esperado:** Mensagem dizendo "Não é permitido excluir usuário com carrinho". Status Code: 400 enviado.

# Testes de Performance da Rota Usuários Utilizando K6
## Resumo dos Testes
| ID | Tipo de Teste | Configuração de Teste | Métricas | Resultado Esperado | Verbo |
|:---|:-------------:|:---------------------:|:--------:|:------------------:|:-----:|
| TPU-1 | Carga | 100 VUs durante 1 minuto | Tempo de resposta, taxa de erro, throughput | Tempo de resposta < 2s, taxa de erro < 5% | POST |
| TPU-2 | Estresse | Aumento gradual de 0 a 300 VUs em 2 minutos | Tempo de resposta, taxa de erro, throughput | API deve continuar a responder, sem falhas críticas | GET |
| TPU-3 | Escalabilidade | 100 VUs inicial com incremento de 50 VUs a cada 20 segundos até 300 VUs | Tempo de resposta, taxa de erro, throughput | API deve escalar de forma eficiente sem degradação severa | GET |
| TPU-4 | Pico | 500 VUs durante 30 segundos | Tempo de resposta, taxa de erro, throughput | Tempo de resposta < 2s, taxa de erro <5% | GET |
| TPU-5 | Resistência | 100 VUs durante 5 minutos | Tempo de resposta, taxa de erro, throughput | Desempenho estável durante todo o período, sem aumento significativo no tempo de resposta ou taxa de erro | GET |

## Detalhamento dos Testes
**[TPU-1: Teste de Carga]()**
**Objetivo:** Validar a capacidade da API de lidar com um número constante de usuários simultâneos.
- Configuração: Simular 100 Usuários Virtuais (VUs) durante 1 minuto.
- Métricas: Tempo de resposta, taxa de erro, throughput.
- Resultado Esperado: O tempo de resposta deve ser inferior a 2 segundos e a taxa de erro inferior a 5%.

**[TPU-2: Teste de Estresse]()**
- **Objetivo:** Identificar o ponto de falha da API sob carga crescente.
- Configuração: Aumentar gradualmente de 0 a 300 VUs em 2 minutos.
- Métricas: Tempo de resposta, taxa de erro, throughput.
- Resultado Esperado: A API deve continuar a responder às solicitações, sem falhas críticas ou interrupções no serviço.

**[TPU-3: Teste de Escalabilidade]()**
**Objetivo:** Avaliar a capacidade da API de escalar conforme a carga aumenta.
- Configuração: Iniciar com 100 VUs e aumentar em 50 VUs a cada 20 segundos até atingir 300 VUs.
- Métricas: Tempo de resposta, taxa de erro, throughput.
- Resultado Esperado: A API deve escalar de forma eficiente sem degradação severa no tempo de resposta ou aumento significativo na taxa de erro.

**[TPU-4: Teste de Pico]()**
**Objetivo:** Testar a resposta da API sob um pico de carga elevada.
- Configuração: Simular 500 VUs durante 30 segundos.
- Métricas: Tempo de resposta, taxa de erro, throughput.
- Resultado Esperado: O tempo de resposta deve ser inferior a 2 segundos e a taxa de erro inferior a 5%.

**[TPU-5: Teste de Resistência]()**
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