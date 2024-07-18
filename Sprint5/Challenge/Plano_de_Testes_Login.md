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

# Testes de Performance
## Resumo dos Testes
| ID | Tipo de Teste | Configuração de Teste | Métricas | Resultado Esperado | Verbo |
|:---|:-------------:|:---------------------:|:--------:|:------------------:|:-----:|
| TP1 | Carga |  |  |  |  |  
| TP2 | Estresse |  |  |  |  |  
| TP3 | Escalabilidade |  |  |  |  |  
| TP4 | Pico |  |  |  |  |  
| TP5 | Resistência |  |  |  |  |  
| TP6 | Concorrência |  |  |  |  |  
| TP7 | Capacidade |  |  |  |  |  

## Testes de Carga
### **Teste de Performance 1 - TP1:**

**Objetivo:** Avaliar o desempenho da API sob condições normais de uso, simulando a quantidade de usuários e operações esperadas em um cenário real.
- **Cenário de Teste:** Simular um número crescente de usuários simultâneos realizando operações CRUD na rota de usuários.
- **Métricas:** Tempo de resposta, taxa de erro, throughput.
- **Resultados Esperados:** A API deve manter tempos de resposta aceitáveis (p.ex., abaixo de 2 segundos) e uma baixa taxa de erros (p.ex., menos de 1%).

## Testes de Estresse
### **Teste de Performance 2 - TP2:**

**Objetivo:** Determinar o limite máximo de capacidade da API e identificar o ponto de falha.
- **Cenário de Teste:** Incrementar a carga de usuários e operações na API até que o desempenho degrade significativamente ou ocorra uma falha.
- **Métricas:** Tempo de resposta, taxa de erro, número de usuários simultâneos no ponto de falha.
- **Resultados Esperados:** Identificação do ponto em que a API não consegue mais manter um desempenho aceitável, com tempos de resposta aumentando significativamente e a taxa de erro ultrapassando limites aceitáveis.

## Testes de Escalabilidade
### **Teste de Performance 3 - TP3:**

**Objetivo:** Avaliar a capacidade da API de escalar eficientemente com o aumento de carga.
- **Cenário de Teste:** Aumentar gradualmente a carga e monitorar o desempenho enquanto se adapta a recursos adicionais (p.ex., escalonamento horizontal/vertical).
- **Métricas:** Tempo de resposta, taxa de erro, eficiência de escalabilidade.
- **Resultados Esperados:** A API deve demonstrar capacidade de escalonamento com aumento linear ou sub-linear no tempo de resposta e taxa de erro.

## Testes de Pico
### **Teste de Performance 4 - TP4:**

**Objetivo:** Avaliar a capacidade da API de lidar com picos súbitos de carga.
- **Cenário de Teste:** Aplicar cargas de trabalho intensas e abruptas, simulando picos de acesso inesperados.
- **Métricas:** Tempo de resposta, taxa de erro, recuperação pós-pico.
- **Resultados Esperados:** A API deve suportar picos súbitos sem falhas críticas e retornar ao desempenho normal rapidamente após a diminuição da carga.

## Testes de Resistência
### **Teste de Performance 5 - TP5:**

**Objetivo:** Avaliar a estabilidade e desempenho da API em longos períodos de tempo sob carga contínua.
- **Cenário de Teste:** Simular uma carga constante de usuários e operações por um período prolongado (p.ex., 24 horas).
- **Métricas:** Tempo de resposta, taxa de erro, uso de recursos (CPU, memória), estabilidade.
- **Resultados Esperados:** A API deve manter um desempenho estável e aceitável ao longo do tempo, sem degradação significativa.

## Testes de Concorrência
### **Teste de Performance 6 - TP6:**

**Objetivo:** Avaliar a capacidade da API de lidar com múltiplas operações concorrentes.
- **Cenário de Teste:** Simular múltiplos usuários realizando operações concorrentes na rota de login.
- **Métricas:** Tempo de resposta, taxa de erro, throughput.
- **Resultados Esperados:** A API deve gerenciar eficientemente operações concorrentes com tempos de resposta aceitáveis e uma baixa taxa de erros.

## Testes de Capacidade
### **Teste de Performance 7 - TP7:**

**Objetivo:** Determinar a capacidade máxima de processamento da API antes que o desempenho se torne inaceitável.
- **Cenário de Teste:** Gradualmente aumentar a carga de trabalho até atingir a capacidade máxima da API.
- **Métricas:** Tempo de resposta, taxa de erro, throughput no ponto de saturação.
- **Resultados Esperados:** A capacidade máxima deve ser identificada com métricas claras indicando quando o desempenho começa a degradar.