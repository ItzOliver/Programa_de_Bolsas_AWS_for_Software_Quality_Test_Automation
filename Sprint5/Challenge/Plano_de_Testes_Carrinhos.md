# Plano de Testes para API ServeRest - Rota de Carrinhos
## Resumo
Objetivo: Garantir que a API de carrinhos permita a autenticação do usuário e as operações de CRUD (Criar, Atualizar, Listar e Deletar) dentro da rota de carrinhos.

## Estratégia de Testes
1) Testes Funcionais de API: Validação das Funcionalidade principais da API (CRUD).
2) Testes de Validação: Verificação das regras de negócio, critérios de aceitação e restrições.
3) Testes de Erro: Validação de que a API lida corretamente com entradas válidas, inválidas e casos de erro.
4) Automação de Testes: Identificação de testes repetitivos e críticos para automação, garantindo eficiência e cobertura contínua.

## Critérios de Aceitação:
- Usuários não autenticados não devem conseguir realizar ações na rota de Carrinhos;
- Não deve ser possível cadastrar mais que 1 carrinho por usuário;
- O carrinho deve ser vinculado ao usuário do token enviado no header Authorization;
- Ao cadastrar carrinho com sucesso é feita a redução da quantidade no cadastro de cada produto inserido no carrinho;
- Ao concluir uma compra o carrinho é excluído, o carrinho excluído será o vinculado ao usuário do token utilizado;
- Ao cancelar uma compra o carrinho é excluído e o estoque dos produtos desse carrinho é reabastecido;
- O carrinho excluído deverá ser o vinculado ao usuário do token utilizado.

## Priorização de Testes
### Fluxo Prioritário
Aplicação: [API] Rota de Carrinho
Objetivo principal do sistema: Garantir que um usuários possam se autenticar, cadastrar um carrinho e finalizar suas compras.

- Lista de fluxos prioritários ordenada:
    - Enviar uma requisição POST para cadastrar carrinho;
        - O carrinho será vinculado ao usuário do token no header Authorization;
        - Deverá ser reduzida no estoque a quantidade de cada produto inserido no carrinho ao cadastrar.
    - Submeter requisição após preencher campos;
        - Se houver produto duplicado no carrinho | usuário já possuir um carrinho | algum produto no carrinho não for encontrado | algum produto não possui quantidade suficiente:
            - Rejeita a requisição e envia uma mensagem informando ao usuário.
        - Se Token de acesso estiver ausente, inválido ou expirado:
            - Rejeita a requisição e envia uma mensagem informando ao usuário.
    - Carrinho cadastrado;
    - Enviar uma requisição DELETE para finalizar a compra do carrinho;
        - O carrinho será vinculado ao usuário do token no header Authorization;
        - Ao concluir uma compra o carrinho é excluído.
    - Submeter requisição após preencher campos;
        - Se Token de acesso estiver ausente, inválido ou expirado;
            - Rejeita a requisição e envia uma mensagem informando ao usuário.
    - Carrinho excluído e compra finalizada.



## Matriz de Rastreabilidade
| Requisito ID | Descrição do Requisito | Casos de Teste |
|:----------|:-------------:|:-------------:|
| DoR-1 | Banco de dados e infraestrutura para desenvolvimento disponibilizados | Todos os casos de teste dependem da infraestrutura adequada |
| DoR-2 | API de cadastro de usuários implementada | Todos os casos de teste dependem da existência de usuários autenticados |
| DoR-3 | API de autenticação implementada | Todos os casos de teste dependem da autenticação funcional |
| DoR-4 | Ambiente de testes disponibilizado | Todos os casos de teste dependem do ambiente de testes |
| DoD-1 | CRUD de cadastro de Carrinhos implementado (CRIAR, LISTAR, ATUALIZAR E DELETAR) | Todos os Casos de Teste |
| DoD-2 | Análise de testes cobrindo a rota de carrinhos | Todos os Casos de Teste |
| DoD-3 | Matriz de rastreabilidade atualizada | Este documento |
| DoD-4 | Automação de testes baseado na análise realizada | --- |
| AC-1 | Usuários não autenticados não devem conseguir realizar ações na rota de Carrinhos | CT-2.5, CT-4.3 |
| AC-2 | Não deve ser possível cadastrar amais que 1 carrinho por usuário | CT-2.2 |
| AC-3 | O carrinho deve ser vinculado ao usuário do token enviado no header Authorization | CT-1.1, CT-2.1, CT-2.2, CT-2.3, CT-2.4 |
| AC-4 | Ao cadastrar carrinho com sucesso é feita a redução da quantidade no cadastro de cada produto inserido no carrinho | CT-1.1 |
| AC-5 | Ao concluir uma compra o carrinho é excluído, o carrinho excluído será o vinculado ao usuário do token utilizado | CT-7.1 |
| AC-6 | Ao cancelar uma compra o carrinho é excluído e o estoque dos produtos desse carrinho é reabastecido | CT-7.2 |
| AC-7 | O carrinho excluído deverá ser o vinculado ao usuário do token utilizado | CT-7.1, CT-7.2 |
| AC-8 | A cobertura de testes deve se basear no Swagger e ir além, cobrindo cenários alternativos | Todos os Casos de Teste |
| AC-9 | Os testes executados deverão conter evidências | Evidências disponíveis no board do Jira |

## Cenários Macro na Suíte de Testes
### [Testes de Criação de Carrinhos](https://oliver-almeida.atlassian.net/plugins/servlet/ac/com.soldevelo.apps.test_management/test-cycle-details?testCycleId=99734#!testCycleId=99734)
- **Cenário 1 - Criar carrinho com campos válidos**
    - **[CT-1.1 (Caso de Teste 1.1)](https://oliver-almeida.atlassian.net/browse/PB-57) - Criar Carrinho com Todos os Campos Válidos:** 
        - **Objetivo:** Garantir que um carrinho seja cadastrado caso todos os campos preenchidos sejam válidos.
        - **Pré-condições:** Ter realizado cadastro na plataforma.
        - **Resultado Esperado:** Mensagem dizendo "Cadastro realizado com sucesso" junto do id do carrinho. Status code: 201 enviado.

- **Cenário 2 - Criar carrinho com campos inválidos**
    - **[CT-2.1 (Caso de Teste 2.1)](https://oliver-almeida.atlassian.net/browse/PB-58) - Criar Carrinho com Produto Duplicado:** 
        - **Objetivo:** Garantir que um carrinho não seja cadastrado caso tenha produtos duplicados. 
        - **Pré-condições:** Tentar cadastrar carrinho com produto duplicado.
        - **Resultado Esperado:** Mensagem dizendo "Não é permitido possuir produto duplicado | Não é permitido ter mais de 1 carrinho | Produto não encontrado | Produto não possui quantidade suficiente". Status code: 400 enviado.

    - **[CT-2.2 (Caso de Teste 2.2)](https://oliver-almeida.atlassian.net/browse/PB-59) - Criar Carrinho já Possuindo um Carrinho Previamente:** 
        - **Objetivo:** Garantir que um carrinho não seja cadastrado caso o usuário já possua um carrinho cadastrado. 
        - **Pré-condições:** Tentar cadastrar carrinho já possuindo um carrinho previamente.
        - **Resultado Esperado:** Mensagem dizendo "Não é permitido possuir produto duplicado | Não é permitido ter mais de 1 carrinho | Produto não encontrado | Produto não possui quantidade suficiente". Status code: 400 enviado.

    - **[CT-2.3 (Caso de Teste 2.3)](https://oliver-almeida.atlassian.net/browse/PB-60) - Criar Carrinho com Produto Não Encontrado:** 
        - **Objetivo:** Garantir que um carrinho não seja cadastrado caso um dos produtos do carrinho não seja encontrado. 
        - **Pré-condições:** Tentar cadastrar carrinho com produto inexistente.
        - **Resultado Esperado:** Mensagem dizendo "Não é permitido possuir produto duplicado | Não é permitido ter mais de 1 carrinho | Produto não encontrado | Produto não possui quantidade suficiente". Status code: 400 enviado.

    - **[CT-2.4 (Caso de Teste 2.4)](https://oliver-almeida.atlassian.net/browse/PB-61) - Criar Carrinho com Produto com Quantidade Insuficiente:** 
        - **Objetivo:** Garantir que um carrinho não seja cadastrado caso o produto não possua quantidade suficiente. 
        - **Pré-condições:** Tentar cadastrar carrinho com produto sem quantidade suficiente.
        - **Resultado Esperado:** Mensagem dizendo "Não é permitido possuir produto duplicado | Não é permitido ter mais de 1 carrinho | Produto não encontrado | Produto não possui quantidade suficiente". Status code: 400 enviado.

    - **[CT-2.5 (Caso de Teste 2.5)](https://oliver-almeida.atlassian.net/browse/PB-62) - Criar Carrinho com Token Ausente, Inválido ou Expirado:** 
        - **Objetivo:** Garantir que um carrinho não seja cadastrado caso o Token esteja ausente, inválido ou expirado. 
        - **Pré-condições:** Tentar cadastrar carrinho com token ausente, inválido ou expirado.
        - **Resultado Esperado:** Mensagem dizendo "Token de acesso ausente, inválido, expirado ou usuário do token não existe mais". Status code: 401 enviado.

### [Testes de Atualização de Dados de Carrinhos](https://oliver-almeida.atlassian.net/plugins/servlet/ac/com.soldevelo.apps.test_management/test-cycle-details?testCycleId=99734#!testCycleId=99734)
- **Cenário 3 - Realizar atualização de dados de carrinho válida**
    - **[CT-3.1 (Caso de Teste 3.1)](https://oliver-almeida.atlassian.net/browse/PB-63) - Remover Produto Existente de Carrinho:**
        - **Objetivo:** Garantir que carrinhos cadastrados possam ter produtos específicos removidos.
        - **Pré-condições:** Possuir a autenticação necessária.
        - **Resultado Esperado:** Mensagem dizendo "Produto removido com sucesso". Status Code: 200 enviado.

    - **[CT-3.2 (Caso de Teste 3.2)](https://oliver-almeida.atlassian.net/browse/PB-64) - Adicionar Produto Existente a Carrinho já Cadastrado:**
        - **Objetivo:** Garantir que carrinhos cadastrados possam ter produtos adicionados após o cadastro do carrinho.
        - **Pré-condições:** Possuir a autenticação necessária.
        - **Resultado Esperado:** Mensagem dizendo "Produto adicionado com sucesso". Status Code: 201 enviado.

- **Cenário 4 - Realizar atualização de dados de carrinho inválida**
    - **[CT-4.1 (Caso de Teste 4.1)](https://oliver-almeida.atlassian.net/browse/PB-65) - Remover Produto Inexsitente de Carrinho:**
        - **Objetivo:** Garantir que o usuário receba um feedback caso tente remover produtos inexistentes no carrinho.
        - **Pré-condições:** Possuir a autenticação necessária. 
        - **Resultado Esperado:** Mensagem dizendo "Produto não encontrado". Status Code: 400 enviado.

    - **[CT-4.2 (Caso de Teste 4.2)](https://oliver-almeida.atlassian.net/browse/PB-66) - Adicionar Produto Inexsitente ao Carrinho:**
        - **Objetivo:** Garantir que o usuário receba um feedback caso tente adicionar produtos inexistentes no carrinho.
        - **Pré-condições:** Possuir a autenticação necessária. 
        - **Resultado Esperado:** Mensagem dizendo "Produto não encontrado". Status Code: 400 enviado.

    - **[CT-4.3 (Caso de Teste 4.3)](https://oliver-almeida.atlassian.net/browse/PB-67) - Tentar Alterar Dados de Carrinho com Token Ausente, Inválido ou Expirado:** 
        - **Objetivo:** Garantir que um carrinho não seja alterado caso o Token esteja ausente, inválido ou expirado. 
        - **Pré-condições:** Tentar cadastrar carrinho com token ausente, inválido ou expirado.
        - **Resultado Esperado:** Mensagem dizendo "Token de acesso ausente, inválido, expirado ou usuário do token não existe mais". Status code: 401 enviado.

### [Testes de Busca de Carrinhos](https://oliver-almeida.atlassian.net/plugins/servlet/ac/com.soldevelo.apps.test_management/test-cycle-details?testCycleId=99734#!testCycleId=99734)
- **Cenário 5 - Realizar busca de carrinho válida**
    - **[CT-5.1 (Caso de Teste 5.1)](https://oliver-almeida.atlassian.net/browse/PB-68) - Buscar por Carrinho Existente:**
        - **Objetivo:** Garantir que carrinhos existentes possam ser buscados no sistema.
        - **Pré-condições:** Não há.
        - **Resultado Esperado:** Lista de carrinhos. Status Code: 200 enviado.

    - **[CT-5.2 (Caso de Teste 5.2)](https://oliver-almeida.atlassian.net/browse/PB-69) - Buscar por Carrinho Existente Específico:**
        - **Objetivo:** Garantir que carrinhos existentes possam ser buscados no sistema.
        - **Pré-condições:** Não há.
        - **Resultado Esperado:** Lista de carrinhos que satisfaçam a condição de busca. Status Code: 200 enviado.

- **Cenário 6 - Realizar busca de carrinho inválida**
    - **[CT-6.1 (Caso de Teste 6.1)](https://oliver-almeida.atlassian.net/browse/PB-70) - Buscar por Carrinho Inexistente:**
        - **Objetivo:** Garantir que o usuário receba um feedback caso busque por carrinhos inexistentes no sistema.
        - **Pré-condições:** Carrinho(s) buscado não existir(em) no sistema. 
        - **Resultado Esperado:** Mensagem dizendo "Carrinho não encontrado". Status Code: 400 enviado.

### [Testes de Deleção de Carrinhos](https://oliver-almeida.atlassian.net/plugins/servlet/ac/com.soldevelo.apps.test_management/test-cycle-details?testCycleId=99734#!testCycleId=99734)
- **Cenário 7 - Realizar deleção de carrinho válida**
    - **[CT-7.1 (Caso de Teste 7.1)](https://oliver-almeida.atlassian.net/browse/PB-71) - Deletar Carrinho Existente "concluir-compra":**
        - **Objetivo:** Garantir que o carrinho selecionado será deletado no endpoint "concluir-compra" ao concluir uma compra.
        - **Pré-condições:** Possuir a autenticação necessária.
        - **Resultado Esperado:** Mensagem dizendo "Registro excluído com sucesso | Não foi encontrado carrinho para esse usuário". Status Code: 200 enviado.

    - **[CT-7.2 (Caso de Teste 7.2)](https://oliver-almeida.atlassian.net/browse/PB-72) - Deletar Carrinho Existente "cancelar-compra":**
        - **Objetivo:** Garantir que o carrinho selecionado será deletado e que os produtos retornem ao estoque no endpoint "cancelar-compra" ao cancelar uma compra.
        - **Pré-condições:** Possuir a autenticação necessária.
        - **Resultado Esperado:** Mensagem dizendo "Registro excluído com sucesso | Não foi encontrado carrinho para esse usuário". Status Code: 200 enviado.

    - **[CT-7.3 (Caso de Teste 7.3)](https://oliver-almeida.atlassian.net/browse/PB-74) - Deletar Carrinho Inexistente "concluir-compra":**
        - **Objetivo:** Garantir que o usuário recebrá um feedback caso o carrinho deleta não exista.
        - **Pré-condições:** Possuir a autenticação necessária.
        - **Resultado Esperado:** Mensagem dizendo "Registro excluído com sucesso | Não foi encontrado carrinho para esse usuário". Status Code: 200 enviado.

    - **[CT-7.4 (Caso de Teste 7.4)](https://oliver-almeida.atlassian.net/browse/PB-75) - Deletar Carrinho Inexistente "concluir-compra":**
        - **Objetivo:** Garantir que o usuário recebrá um feedback caso o carrinho deleta não exista.
        - **Pré-condições:** Possuir a autenticação necessária.
        - **Resultado Esperado:** Mensagem dizendo "Registro excluído com sucesso | Não foi encontrado carrinho para esse usuário". Status Code: 200 enviado.

- **Cenário 8 - Realizar deleção de carrinho inválida**
    - **[CT-8.1 (Caso de Teste 8.1)](https://oliver-almeida.atlassian.net/browse/PB-73) - Deletar Carrinho com Token Ausente, Inválido ou Expirado:**
        - **Objetivo:** Garantir que o carrinho não será deletado caso Token esteja ausente, inválido ou expirado.
        - **Pré-condições:** Tentar deletar carrinho com token ausente, inválido ou expirado.
        - **Resultado Esperado:** Mensagem dizendo "Token de acesso ausente, inválido, expirado ou usuário do token não existe mais". Status Code: 401 enviado.

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
- **Cenário de Teste:** Simular múltiplos usuários realizando operações concorrentes na rota de carrinhos.
- **Métricas:** Tempo de resposta, taxa de erro, throughput.
- **Resultados Esperados:** A API deve gerenciar eficientemente operações concorrentes com tempos de resposta aceitáveis e uma baixa taxa de erros.

## Testes de Capacidade
### **Teste de Performance 7 - TP7:**

**Objetivo:** Determinar a capacidade máxima de processamento da API antes que o desempenho se torne inaceitável.
- **Cenário de Teste:** Gradualmente aumentar a carga de trabalho até atingir a capacidade máxima da API.
- **Métricas:** Tempo de resposta, taxa de erro, throughput no ponto de saturação.
- **Resultados Esperados:** A capacidade máxima deve ser identificada com métricas claras indicando quando o desempenho começa a degradar.