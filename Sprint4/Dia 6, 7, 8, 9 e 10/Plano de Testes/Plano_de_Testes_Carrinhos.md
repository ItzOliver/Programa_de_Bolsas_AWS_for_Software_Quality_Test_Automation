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
Objetivo principal do sistema:

## Matriz de Rastreabilidade
| Requisito ID | Descrição do Requisito | Casos de Teste |
|:----------|:-------------:|:-------------:|
| DoR-1 | --- | --- |
| DoR-2 | --- | --- |
| DoR-3 | --- | --- |
| DoD-1 | --- | --- |
| DoD-2 | --- | --- |
| DoD-3 | Matriz de rastreabilidade atualizada | Este documento |
| DoD-4 | --- | --- |
| AC-1 | --- | --- |
| AC-2 | --- | --- |
| AC-3 | --- | --- |
| AC-4 | --- | --- |
| AC-5 | --- | --- |
| AC-6 | --- | --- |
| AC-7 | --- | --- |
| AC-8 | --- | --- |

## Cenários Macro na Suíte de Testes
### [Testes de Criação de Carrinhos]()
- **Cenário 1 - Criar carrinho com campos válidos**
    - **[CT-1.1 (Caso de Teste 1.1)]() - Criar Carrinho com Todos os Campos Válidos:** 
        - **Objetivo:** Garantir que um carrinho seja cadastrado caso todos os campos preenchidos sejam válidos.
        - **Pré-condições:** Ter realizado cadastro na plataforma.
        - **Resultado Esperado:** Mensagem dizendo "Cadastro realizado com sucesso" junto do id do carrinho. Status code: 201 enviado.

- **Cenário 2 - Criar carrinho com campos inválidos**
    - **[CT-2.1 (Caso de Teste 2.1)]() - Criar Carrinho com Produto Duplicado:** 
        - **Objetivo:** Garantir que um carrinho não seja cadastrado caso tenha produtos duplicados. 
        - **Pré-condições:** Tentar cadastrar carrinho com produto duplicado.
        - **Resultado Esperado:** Mensagem dizendo "Não é permitido possuir produto duplicado | Não é permitido ter mais de 1 carrinho | Produto não encontrado | Produto não possui quantidade suficiente". Status code: 400 enviado.

    - **[CT-2.2 (Caso de Teste 2.2)]() - Criar Carrinho já Possuindo um Carrinho Previamente:** 
        - **Objetivo:** Garantir que um carrinho não seja cadastrado caso o usuário já possua um carrinho cadastrado. 
        - **Pré-condições:** Tentar cadastrar carrinho já possuindo um carrinho previamente.
        - **Resultado Esperado:** Mensagem dizendo "Não é permitido possuir produto duplicado | Não é permitido ter mais de 1 carrinho | Produto não encontrado | Produto não possui quantidade suficiente". Status code: 400 enviado.

    - **[CT-2.3 (Caso de Teste 2.3)]() - Criar Carrinho com Produto Não Encontrado:** 
        - **Objetivo:** Garantir que um carrinho não seja cadastrado caso um dos produtos do carrinho não seja encontrado. 
        - **Pré-condições:** Tentar cadastrar carrinho com produto inexistente.
        - **Resultado Esperado:** Mensagem dizendo "Não é permitido possuir produto duplicado | Não é permitido ter mais de 1 carrinho | Produto não encontrado | Produto não possui quantidade suficiente". Status code: 400 enviado.

    - **[CT-2.4 (Caso de Teste 2.4)]() - Criar Carrinho com Produto com Quantidade Insuficiente:** 
        - **Objetivo:** Garantir que um carrinho não seja cadastrado caso o produto não possua quantidade suficiente. 
        - **Pré-condições:** Tentar cadastrar carrinho com produto sem quantidade suficiente.
        - **Resultado Esperado:** Mensagem dizendo "Não é permitido possuir produto duplicado | Não é permitido ter mais de 1 carrinho | Produto não encontrado | Produto não possui quantidade suficiente". Status code: 400 enviado.

    - **[CT-2.5 (Caso de Teste 2.5)]() - Criar Carrinho com Produto com Token Ausente, Inválido ou Expirado:** 
        - **Objetivo:** Garantir que um carrinho não seja cadastrado caso o Token esteja ausente, inválido ou expirado. 
        - **Pré-condições:** Tentar cadastrar carrinho com token ausente, inválido ou expirado.
        - **Resultado Esperado:** Mensagem dizendo "Token de acesso ausente, inválido, expirado ou usuário do token não existe mais". Status code: 401 enviado.

### [Testes de Busca de Carrinhos]()
- **Cenário 3 - Realizar busca de carrinho válida**
    - **[CT-3.1 (Caso de Teste 3.1)]() - Buscar por Carrinho Existente:**
        - **Objetivo:** Garantir que carrinhos existentes possam ser buscados no sistema.
        - **Pré-condições:** Não há.
        - **Resultado Esperado:** Lista de carrinhos. Status Code: 200 enviado.

    - **[CT-3.2 (Caso de Teste 3.2)]() - Buscar por Carrinho Existente Específico:**
        - **Objetivo:** Garantir que carrinhos existentes possam ser buscados no sistema.
        - **Pré-condições:** Não há.
        - **Resultado Esperado:** Lista de carrinhos que satisfaçam a condição de busca. Status Code: 200 enviado.

- **Cenário 4 - Realizar busca de carrinho inválida**
    - **[CT-4.1 (Caso de Teste 4.1)]() - Buscar por Carrinho Inexistente:**
        - **Objetivo:** Garantir que o usuário receba um feedback caso busque por carrinhos inexistentes no sistema.
        - **Pré-condições:** Carrinho(s) buscado não existir(em) no sistema. 
        - **Resultado Esperado:** Mensagem dizendo "Carrinho não encontrado". Status Code: 400 enviado.

### [Testes de Deleção de Carrinhos]()
- **Cenário 5 - Realizar deleção de produto válida**
    - **[CT-5.1 (Caso de Teste 5.1)]() - Deletar Carrinho Existente "concluir-compra":**
        - **Objetivo:** Garantir que o carrinho selecionado será deletado no endpoint "concluir-compra" ao concluir uma compra.
        - **Pré-condições:** Possuir a autenticação necessária.
        - **Resultado Esperado:** Mensagem dizendo "Registro excluído com sucesso | Não foi encontrado carrinho para esse usuário". Status Code: 200 enviado.

    - **[CT-5.2 (Caso de Teste 5.2)]() - Deletar Carrinho Existente "cancelar-compra":**
        - **Objetivo:** Garantir que o carrinho selecionado será deletado e que os produtos retornem ao estoque no endpoint "cancelar-compra" ao cancelar uma compra.
        - **Pré-condições:** Possuir a autenticação necessária.
        - **Resultado Esperado:** Mensagem dizendo "Registro excluído com sucesso | Não foi encontrado carrinho para esse usuário". Status Code: 200 enviado.

- **Cenário 6 - Realizar deleção de produto inválida**
    - **[CT-6.1 (Caso de Teste 6.1)]() - Deletar Carrinho com Token Ausente, Inválido ou Expirado:**
        - **Objetivo:** Garantir que o carrinho não será deletado caso Token esteja ausente, inválido ou expirado.
        - **Pré-condições:** Tentar deletar carrinho com token ausente, inválido ou expirado.
        - **Resultado Esperado:** Mensagem dizendo "Não é permitido excluir produto que faz parte de carrinho" junto do ID do carrinho. Status Code: 400 enviado.