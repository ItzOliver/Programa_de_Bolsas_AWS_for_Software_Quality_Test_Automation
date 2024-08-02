# Plano de Testes para API ServeRest - Rota de Produtos
## Resumo
Objetivo: Garantir que a API de produtos permita a autenticação e o cadastro correto de produtos no Marketplace da ServeRest, assim como as operações de CRUD (Criar, Atualizar, Listar e Deletar).

## Estratégia de Testes
1) Testes Funcionais de API: Validação das Funcionalidade principais da API (CRUD).
2) Testes de Validação: Verificação das regras de negócio, critérios de aceitação e restrições.
3) Testes de Erro: Validação de que a API lida corretamente com entradas válidas, inválidas e casos de erro.
4) Automação de Testes: Identificação de testes repetitivos e críticos para automação, garantindo eficiência e cobertura contínua.

## Critérios de Aceitação:
- Usuários não autenticados não devem conseguir realizar ações na rota de Produtos;
- Não deve ser possível realizar o cadastro de produtos com nomes já utilizados;
- Não deve ser possível excluir produtos que estão dentro de carrinhos (dependência API Carrinhos);
- Caso não exista produto com o o ID informado na hora do UPDATE, um novo produto deverá ser criado;
- Produtos criados através do PUT não poderão ter nomes previamente cadastrados;
- Os testes executados deverão conter evidências;
- A cobertura de testes deve se basear no Swagger e ir além, cobrindo cenários alternativos.

## Priorização de Testes
### Fluxo Prioritário
Aplicação: [API] Rota de Produtos
Objetivo principal do sistema: Garantir que usuários possam se autenticar e cadastrar produtos no Marketplace do ServeRest.
- Lista de fluxos prioritários ordenada:
    - Enviar uma requisição POST para cadastrar Produto;
        - Deverão ser preenchidos os campos NOME, PRECO, DESCRICAO e QUANTIDADE.
    - Submeter requisição após preencher campos;    
        - Se NOME fornecido já estiver sendo utilizado;
            - Rejeita a requisição e envia uma mensagem informando ao usuário.
        - Se Token de acesso estiver ausente, inválido ou expirado:
            - Rejeita a requisição e envia uma mensagem informando ao usuário.
        - Se usuário não tiver permissões de administrador:
            - Rejeita a requisição e envia uma mensagem informando ao usuário.
    - Produto cadastrado.

## Matriz de Rastreabilidade
| Requisito ID | Descrição do Requisito | Casos de Teste |
|:----------|:-------------:|:-------------:|
| DoR-1 | Banco de dados e infraestrutura para desenvolvimento disponibilizados | Todos os casos de teste dependem da infraestrutura adequada |
| DoR-2 | API de cadastro de usuários implementada | Todos os casos de teste dependem da existência de usuários autenticados |
| DoR-3 | Ambiente de testes disponibilizado | Todos os casos de teste dependem do ambiente de testes |
| DoR-4 | API de autenticação implementada | Todos os casos de teste dependem da autenticação funcional |
| DoD-1 | CRUD de cadastro de Produtos implementado (CRIA, ATUALIZA, LISTA e DELETA) | Todos os Casos de Teste |
| DoD-2 | Análise de testes cobrindo a rota de produtos | Todos os casos de teste |
| DoD-3 | Matriz de rastreabilidade atualizada | Este documento |
| DoD-4 | Automação de testes baseada na análise realizada | CT-1.1, CT-2.1, CT-2.2, CT-2.3, CT-3.1, CT-3.2, CT-4.1, CT-4.2, CT-4.3, CT-7.1, CT-7.2, CT-8.1, CT-8.2, CT-8.3 |
| AC-1 | Usuários não autenticados não devem conseguir realizar ações na rota de Produtos | CT-2.2, CT-4.2 e CT-8.2 |
| AC-2 | Não deve ser possível realizar o cadastro de produtos com nomes já utilizados | CT-2.1 |
| AC-3 | Não deve ser possível excluir produtos que estão dentro de carrinhos (dependência API Carrinhos) | CT-8.1 |
| AC-4 | Caso não exista produto com o o ID informado na hora do UPDATE, um novo produto deverá ser criado | CT-3.2 |
| AC-5 | Produtos criados através do PUT não poderão ter nomes previamente cadastrados | CT-2.1 |
| AC-6 | Os testes executados deverão conter evidências | Evidências disponíveis no board do Jira |
| AC-7 | A cobertura de testes deve se basear no Swagger e ir além, cobrindo cenários alternativos | Todos os Casos de Teste |

## Cenários Macro na Suíte de Testes
### [Testes de Cadastro de Produtos](https://oliver-almeida.atlassian.net/plugins/servlet/ac/com.soldevelo.apps.test_management/test-cycle-details?testCycleId=98347#!testCycleId=98347)
- **Cenário 1 - Cadastrar produto com campos válidos**
    - **[CT-1.1 (Caso de Teste 1.1)](https://oliver-almeida.atlassian.net/browse/PB3-10) - Cadastrar Produto com Todos os Campos Válidos:**
        - **Objetivo:** Garantir que um produto seja cadastrado caso todos os campos preenchidos sejam válidos.
        - **Pré-condições:** Possuir a autenticação necessária.
        - **Resultado Esperado:** Mensagem dizendo "Cadastro realizado com sucesso" junto do ID do produto. Status Code: 201 enviado.

- **Cenário 2 - Cadastrar produto com campos inválidos**
    - **[CT-2.1 (Caso de Teste 2.1)](https://oliver-almeida.atlassian.net/browse/PB3-11) - Cadastrar Produto com Nome já Existente:**
        - **Objetivo:** Garantir que um produto não seja cadastrado caso já existe outro produto com o mesmo nome.
        - **Pré-condições:** Tentar cadastrar produto com nome já utilizado.
        - **Resultado Esperado:** Mensagem dizendo "Já existe produto com esse nome". Status Code: 400 enviado.
    
    - **[CT-2.2 (Caso de Teste 2.2)](https://oliver-almeida.atlassian.net/browse/PB3-12) - Cadastrar Produto com Token Ausente, Inválido ou Expirado:**
        - **Objetivo:** Garantir que um produto não seja cadastrado caso o Token esteja ausente, inválido ou expirado.
        - **Pré-condições:** Tentar cadastrar produto com Token ausente, inválido ou expirado.
        - **Resultado Esperado:** Mensagem dizendo "Token de acesso ausente, inválido, expirado ou usuário do token não existe mais". Status Code: 401 enviado.
    
    - **[CT-2.3 (Caso de Teste 2.3)](https://oliver-almeida.atlassian.net/browse/PB3-13) - Cadastrar Produto sem Ser Administrador:**
        - **Objetivo:** Garantir que um produto não seja cadastrado caso o usuário não tenha permissões de administrador.
        - **Pré-condições:** Tentar cadastrar produto sem permissões de admnistrador.
        - **Resultado Esperado:** Mensagem dizendo "Rota exclusiva para administradores". Status Code: 403 enviado.

### [Testes de Atualização de Dados de Produtos](https://oliver-almeida.atlassian.net/plugins/servlet/ac/com.soldevelo.apps.test_management/test-cycle-details?testCycleId=98347#!testCycleId=98347)
- **Cenário 3 - Atualizar um produto existe com dados válidos**
    - **[CT-3.1 (Caso de Teste 3.1)](https://oliver-almeida.atlassian.net/browse/PB3-16) - Atualizar Dados de Produto com Todos os Campos Válidos:**
        - **Objetivo:** Garantir que um produto tenha seus dados alterados caso todos os campos preenchidos sejam válidos.
        - **Pré-condições:** Possuir a autenticação necessária.
        - **Resultado Esperado:** Mensagem dizendo "Registro alterado com sucesso". Status Code: 200 enviado.
    
    - **[CT-3.2 (Caso de Teste 3.2)](https://oliver-almeida.atlassian.net/browse/PB3-17) - Atualizar Dados de Produto Não cadastrado e com Todos os Campos Válidos:**
        - **Objetivo:** Garantir que, caso não seja encontrado produto com ID informado, é realizado novo cadastro ao invés de alteração.
        - **Pré-condições:** Possuir a autenticação necessária e não existir produto com ID informado.
        - **Resultado Esperado:** Mensagem dizendo "Cadastro realizado com sucesso" junto do ID do produto. Status Code: 201 enviado.

- **Cenário 4 - Atualizar um produto existe com dados inválidos**
    - **[CT-4.1 (Caso de Teste 4.1)](https://oliver-almeida.atlassian.net/browse/PB3-18) - Alterar Dados de Produto Não Cadastrado com Nome já Utilizado:**
        - **Objetivo:** Garantir que um produto não seja cadastrado caso o nome já esteja sendo utilizado.
        - **Pré-condições:** Possuir a autenticação necessária, não existir produto com ID informado e nome já estar sendo utilizado.
        - **Resultado Esperado:** Mensagem dizendo "Já existe produto com esse nome". Status Code: 400 enviado.
    
    - **[CT-4.2 (Caso de Teste 4.2)](https://oliver-almeida.atlassian.net/browse/PB3-19) - Alterar Dados de Produto com Token Ausente, Inválido ou Expirado:**
        - **Objetivo:** Garantir que um produto não seja cadastrado caso o Token esteja ausente, inválido ou expirado.
        - **Pré-condições:** Tentar alterar produto com Token Ausente, Inválido ou Expirado.
        - **Resultado Esperado:** Mensagem dizendo "Token de acesso ausente, inválido, expirado ou usuário do token não existe mais". Status Code: 401 enviado.

    - **[CT-4.3 (Caso de Teste 4.3)](https://oliver-almeida.atlassian.net/browse/PB3-20) - Alterar Dados de Produto sem Ser Administrador:**
        - **Objetivo:** Garantir que um produto não seja cadastrado caso o usuário não tenha permissões de administrador.
        - **Pré-condições:** Tentar alterar produto sem permissões de admnistrador.
        - **Resultado Esperado:** Mensagem dizendo "Rota exclusiva para administradores". Status Code: 403 enviado.

### [Testes de Busca de Produto](https://oliver-almeida.atlassian.net/plugins/servlet/ac/com.soldevelo.apps.test_management/test-cycle-details?testCycleId=98347#!testCycleId=98347)
- **Cenário 5 - Realizar busca de produto válida**
    - **[CT-5.1 (Caso de Teste 5.1)](https://oliver-almeida.atlassian.net/browse/PB3-21) - Buscar por Produto Existente:**
        - **Objetivo:** Garantir que produtos existentes possam ser buscados no sistema.
        - **Pré-condições:** Não há.
        - **Resultado Esperado:** Lista de produtos. Status Code: 200 enviado.

    - **[CT-5.2 (Caso de Teste 5.2)](https://oliver-almeida.atlassian.net/browse/PB3-22) - Buscar por Produto Existente Específico:**
        - **Objetivo:** Garantir que produtos existentes possam ser buscados no sistema.
        - **Pré-condições:** Não há.
        - **Resultado Esperado:** Lista de produtos que satisfaçam a condição de busca. Status Code: 200 enviado.

- **Cenário 6 - Realizar busca de produto inválida**
    - **[CT-6.1 (Caso de Teste 6.1)](https://oliver-almeida.atlassian.net/browse/PB3-23) - Buscar por Produto Inexistente:**
        - **Objetivo:** Garantir que o usuário receba um feedback caso busque por produtos inexistentes no sistema.
        - **Pré-condições:** Produto(s) buscado não existir(em) no sistema. 
        - **Resultado Esperado:** Mensagem dizendo "Produto não encontrado". Status Code: 400 enviado.

### [Testes de Deleção de Produto](https://oliver-almeida.atlassian.net/plugins/servlet/ac/com.soldevelo.apps.test_management/test-cycle-details?testCycleId=98347#!testCycleId=98347)
- **Cenário 7 - Realizar deleção de produto válida**
    - **[CT-7.1 (Caso de Teste 7.1)](https://oliver-almeida.atlassian.net/browse/PB3-24) - Deletar Produto Existente:**
        - **Objetivo:** Garantir que o produto selecionado será deletado (se existir).
        - **Pré-condições:** Possuir a autenticação necessária e produto não fazer parte de carrinho.
        - **Resultado Esperado:** Mensagem dizendo "Registro excluído | Nenhum registro excluído". Status Code: 200 enviado.

    - **[CT-7.2 (Caso de Teste 7.2)](https://oliver-almeida.atlassian.net/browse/PB3-25) - Deletar Produto Inexistente:**
        - **Objetivo:** Garantir que o produto selecionado será deletado (se existir).
        - **Pré-condições:** Possuir a autenticação necessária e produto não fazer parte de carrinho.
        - **Resultado Esperado:** Mensagem dizendo "Registro excluído | Nenhum registro excluído". Status Code: 200 enviado.

- **Cenário 8 - Realizar deleção de produto inválida**
    - **[CT-8.1 (Caso de Teste 8.1)](https://oliver-almeida.atlassian.net/browse/PB3-26) - Deletar Produto que Faz Parte de Carrinho:**
        - **Objetivo:** Garantir que o produto não será deletado caso faça parte de um carrinho.
        - **Pré-condições:** Possuir a autenticação necessária e produto fazer parte de carrinho.
        - **Resultado Esperado:** Mensagem dizendo "Não é permitido excluir produto que faz parte de carrinho" junto do ID do carrinho. Status Code: 400 enviado.
    
    - **[CT-8.2 (Caso de Teste 8.2)](https://oliver-almeida.atlassian.net/browse/PB3-27) - Deletar Produto com Token Ausente, Inválido ou Expirado:**
        - **Objetivo:** Garantir que um produto não será deletado caso o Token esteja ausente, inválido ou expirado.
        - **Pré-condições:** Tentar deletar produto com Token ausente, inválido ou expirado.
        - **Resultado Esperado:** Mensagem dizendo "Token de acesso ausente, inválido, expirado ou usuário do token não existe mais". Status Code: 401 enviado.
    
    - **[CT-8.3 (Caso de Teste 8.3)](https://oliver-almeida.atlassian.net/browse/PB3-28) - Deletar Produto sem Ser Administrador:**
        - **Objetivo:** Garantir que um produto não será deletado caso o usuário não tenha permissões de administrador.
        - **Pré-condições:** Tentar deletar produto sem permissões de administrador.
        - **Resultado Esperado:** Mensagem dizendo "Rota exclusiva para administradores". Status Code: 403 enviado.

# Testes de Performance da Rota Produtos Utilizando K6
## Resumo dos Testes
| ID | Tipo de Teste | Configuração de Teste | Métricas | Resultado Esperado | Verbo |
|:---|:-------------:|:---------------------:|:--------:|:------------------:|:-----:|
| TPP-1 | Carga | 100 VUs durante 1 minuto | Tempo de resposta, taxa de erro, throughput | Tempo de resposta < 2s, taxa de erro < 5% | POST |
| TPP-2 | Estresse | Aumento gradual de 0 a 300 VUs em 2 minutos | Tempo de resposta, taxa de erro, throughput | API deve continuar a responder, sem falhas críticas | GET |
| TPP-3 | Escalabilidade | 100 VUs inicial com incremento de 50 VUs a cada 20 segundos até 300 VUs | Tempo de resposta, taxa de erro, throughput | API deve escalar de forma eficiente sem degradação severa | GET |
| TPP-4 | Pico | 500 VUs durante 30 segundos | Tempo de resposta, taxa de erro, throughput | Tempo de resposta < 2s, taxa de erro <5% | GET |
| TP-P5 | Resistência | 100 VUs durante 5 minutos | Tempo de resposta, taxa de erro, throughput | Desempenho estável durante todo o período, sem aumento significativo no tempo de resposta ou taxa de erro | GET |

## Detalhamento dos Testes
**[TPP-1: Teste de Carga](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint6/Sprint6/Dia%2010%20Challenge/Plano%20de%20Testes/Produtos/Resultados_Produtos.md#teste-de-carga---tpp-1)**
**Objetivo:** Validar a capacidade da API de lidar com um número constante de usuários simultâneos.
- Configuração: Simular 100 Usuários Virtuais (VUs) durante 1 minuto.
- Métricas: Tempo de resposta, taxa de erro, throughput.
- Resultado Esperado: O tempo de resposta deve ser inferior a 2 segundos e a taxa de erro inferior a 5%.

**[TPP-2: Teste de Estresse](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint6/Sprint6/Dia%2010%20Challenge/Plano%20de%20Testes/Produtos/Resultados_Produtos.md#teste-de-estresse---tpp-2)**
- **Objetivo:** Identificar o ponto de falha da API sob carga crescente.
- Configuração: Aumentar gradualmente de 0 a 300 VUs em 2 minutos.
- Métricas: Tempo de resposta, taxa de erro, throughput.
- Resultado Esperado: A API deve continuar a responder às solicitações, sem falhas críticas ou interrupções no serviço.

**[TPP-3: Teste de Escalabilidade](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint6/Sprint6/Dia%2010%20Challenge/Plano%20de%20Testes/Produtos/Resultados_Produtos.md#teste-de-escalabilidade---tpp-3)**
**Objetivo:** Avaliar a capacidade da API de escalar conforme a carga aumenta.
- Configuração: Iniciar com 100 VUs e aumentar em 50 VUs a cada 20 segundos até atingir 300 VUs.
- Métricas: Tempo de resposta, taxa de erro, throughput.
- Resultado Esperado: A API deve escalar de forma eficiente sem degradação severa no tempo de resposta ou aumento significativo na taxa de erro.

**[TPP-4: Teste de Pico](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint6/Sprint6/Dia%2010%20Challenge/Plano%20de%20Testes/Produtos/Resultados_Produtos.md#teste-de-pico---tpp-4)**
**Objetivo:** Testar a resposta da API sob um pico de carga elevada.
- Configuração: Simular 500 VUs durante 30 segundos.
- Métricas: Tempo de resposta, taxa de erro, throughput.
- Resultado Esperado: O tempo de resposta deve ser inferior a 2 segundos e a taxa de erro inferior a 5%.

**[TPP-5: Teste de Resistência](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint6/Sprint6/Dia%2010%20Challenge/Plano%20de%20Testes/Produtos/Resultados_Produtos.md#teste-de-resistência---tpp-5)**
**Objetivo:** Avaliar o desempenho da API sob carga constante por um período prolongado.
- Configuração: Simular 100 VUs durante 5 minutos.
- Métricas: Tempo de resposta, taxa de erro, throughput.
- Resultado Esperado: O desempenho deve permanecer estável durante todo o período de teste, sem aumento significativo no tempo de resposta ou na taxa de erro.

## Ferramentas Utilizadas
- K6: Ferramenta de código aberto para testes de carga e desempenho.
