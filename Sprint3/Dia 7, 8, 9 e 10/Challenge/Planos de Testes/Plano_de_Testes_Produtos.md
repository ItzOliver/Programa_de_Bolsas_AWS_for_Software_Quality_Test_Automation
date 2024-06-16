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

## Cenários Macro na Suíte de Testes
### Testes de Cadastro de Produtos
- **Cenário 1 - Cadastrar produto com campos válidos**
    - **CT-1.1 (Caso de Teste 1.1) - Cadastrar Produto com Todos os Campos Válidos:**
        - **Objetivo:** Garantir que um produto seja cadastrado caso todos os campos preenchidos sejam válidos.
        - **Pré-condições:** Possuir a autenticação necessária.
        - **Resultado Esperado:** Mensagem dizendo "Cadastro realizado com sucesso" junto do ID do produto. Status Code: 201 enviado.
         
- **Cenário 2 - Cadastrar produto com campos inválidos**
    - **CT-2.1 (Caso de Teste 2.1) - Cadastrar Produto com Nome já Existente:**
        - **Objetivo:** Garantir que um produto não seja cadastrado caso já existe outro produto com o mesmo nome.
        - **Pré-condições:** Tentar cadastrar produto com nome já utilizado.
        - **Resultado Esperado:** Mensagem dizendo "Já existe produto com esse nome". Status Code: 400 enviado.
    
    - **CT-2.2 (Caso de Teste 2.2) - Cadastrar Produto com Token Ausente, Inválido ou Expirado:**
        - **Objetivo:** Garantir que um produto não seja cadastrado caso o Token esteja ausente, inválido ou expirado.
        - **Pré-condições:** Tentar cadastrar produto com Token ausente, inválido ou expirado.
        - **Resultado Esperado:** Mensagem dizendo "Token de acesso ausente, inválido, expirado ou usuário do token não existe mais". Status Code: 401 enviado.
    
    - **CT-2.3 (Caso de Teste 2.3) - Cadastrar Produto sem Ser Administrador:**
        - **Objetivo:** Garantir que um produto não seja cadastrado caso o usuário não tenha permissões de administrador.
        - **Pré-condições:** Tentar cadastrar produto sem permissões de admnistrador.
        - **Resultado Esperado:** Mensagem dizendo "Rota exclusiva para administradores". Status Code: 403 enviado.

### Testes de Atualização de Dados de Produtos
- **Cenário 3 - Atualizar um produto existe com dados válidos**
    - **CT-3.1 (Caso de Teste 3.1) - Atualizar Dados de Produto com Todos os Campos Válidos:**
        - **Objetivo:** Garantir que um produto tenha seus dados alterados caso todos os campos preenchidos sejam válidos.
        - **Pré-condições:** Possuir a autenticação necessária.
        - **Resultado Esperado:** Mensagem dizendo "Registro alterado com sucesso". Status Code: 200 enviado.
    
    - **CT-3.2 (Caso de Teste 3.2) - Atualizar Dados de Produto Não cadastrado e com Todos os Campos Válidos:**
        - **Objetivo:** Garantir que, caso não seja encontrado produto com ID informado, é realizado novo cadastro ao invés de alteração.
        - **Pré-condições:** Possuir a autenticação necessária e não existir produto com ID informado.
        - **Resultado Esperado:** Mensagem dizendo "Cadastro realizado com sucesso" junto do ID do produto. Status Code: 201 enviado.

- **Cenário 4 - Atualizar um produto existe com dados inválidos**
    - **CT-4.1 (Caso de Teste 4.1) - Alterar Dados de Produto Não Cadastrado com Nome já Utilizado:**
        - **Objetivo:** Garantir que um produto não seja cadastrado caso o nome já esteja sendo utilizado.
        - **Pré-condições:** Possuir a autenticação necessária, não existir produto com ID informado e nome já estar sendo utilizado.
        - **Resultado Esperado:** Mensagem dizendo "Já existe produto com esse nome". Status Code: 400 enviado.
    
    - **CT-4.2 (Caso de Teste 4.2) - Alterar Dados de Produto com Token Ausente, Inválido ou Expirado:**
        - **Objetivo:** Garantir que um produto não seja cadastrado caso o Token esteja ausente, inválido ou expirado.
        - **Pré-condições:** Tentar alterar produto com Token Ausente, Inválido ou Expirado.
        - **Resultado Esperado:** Mensagem dizendo "Token de acesso ausente, inválido, expirado ou usuário do token não existe mais". Status Code: 401 enviado.

    - **CT-4.3 (Caso de Teste 4.3) - Alterar Dados de Produto sem Ser Administrador:**
        - **Objetivo:** Garantir que um produto não seja cadastrado caso o usuário não tenha permissões de administrador.
        - **Pré-condições:** Tentar alterar produto sem permissões de admnistrador.
        - **Resultado Esperado:** Mensagem dizendo "Rota exclusiva para administradores". Status Code: 403 enviado.

### Testes de Busca de Produto
- **Cenário 5 - Realizar busca de produto válida**
    - **CT-5.1 (Caso de Teste 5.1) - Buscar por Produto Existente:**
        - **Objetivo:** Garantir que produtos existentes possam ser buscados no sistema.
        - **Pré-condições:** Não há.
        - **Resultado Esperado:** Lista de produtos que satisfaçam a condição de busca (se houver). Status Code: 200 enviado.

- **Cenário 6 - Realizar busca de produto inválida**
    - **CT-6.1 (Caso de Teste 6.1) - Buscar por Produto Inexistente:**
        - **Objetivo:** Garantir que o usuário receba um feedback caso busque por produtos inexistentes no sistema.
        - **Pré-condições:** Produto(s) buscado não existir(em) no sistema. 
        - **Resultado Esperado:** Mensagem dizendo "Produto não encontrado". Status Code: 400 enviado.

### Testes de Deleção de Produto
- **Cenário 7 - Realizar deleção de produto válida**
    - **CT-7.1 (Caso de Teste 7.1) - Deletar Produto Existente/Inexistente:**
        - **Objetivo:** Garantir que o produto selecionado será deletado (se existir).
        - **Pré-condições:** Possuir a autenticação necessária e produto não fazer parte de carrinho.
        - **Resultado Esperado:** Mensagem dizendo "Registro excluído | Nenhum registro excluído". Status Code: 200 enviado.

- **Cenário 8 - Realizar deleção de produto inválida**
    - **CT-8.1 (Caso de Teste 8.1) - Deletar Produto que Faz Parte de Carrinho:**
        - **Objetivo:** Garantir que o produto não será deletado caso faça parte de um carrinho.
        - **Pré-condições:** Possuir a autenticação necessária e produto fazer parte de carrinho.
        - **Resultado Esperado:** Mensagem dizendo "Não é permitido excluir produto que faz parte de carrinho" junto do ID do carrinho. Status Code: 400 enviado.
    
    - **CT-8.2 (Caso de Teste 8.2) - Deletar Produto com Token Ausente, Inválido ou Expirado:**
        - **Objetivo:** Garantir que um produto não será deletado caso o Token esteja ausente, inválido ou expirado.
        - **Pré-condições:** Tentar deletar produto com Token ausente, inválido ou expirado.
        - **Resultado Esperado:** Mensagem dizendo "Token de acesso ausente, inválido, expirado ou usuário do token não existe mais". Status Code: 401 enviado.
    
    - **CT-8.3 (Caso de Teste 8.3) - Deletar Produto sem Ser Administrador:**
        - **Objetivo:** Garantir que um produto não será deletado caso o usuário não tenha permissões de administrador.
        - **Pré-condições:** Tentar deletar produto sem permissões de administrador.
        - **Resultado Esperado:** Mensagem dizendo "Rota exclusiva para administradores". Status Code: 403 enviado.