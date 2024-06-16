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
### Testes de Criação de Usuário
- **Cenário 1 - Criar usuário com campos válidos**
    - **CT-1.1 (Caso de Teste 1.1) - Criar Usuário com Todos os Campos Válidos:**
        - **Objetivo:** Garantir que um usuário seja criado caso todos os campos preenchidos sejam válidos.
        - **Pré-condições:** Não há.
        - **Resultado Esperado:** Mensagem dizendo "Cadastro realizado com sucesso" junto do ID do usuário. Status Code: 201 enviado.

- **Cenário 2 - Criar usuário com campos inválidos**
    - **CT-2.1 (Caso de Teste 2.1) - Criar Usuário com E-mail já Utilizado:** 
        - **Objetivo:** Garantir que um usuário não seja criado caso o e-mail já esteja sendo utilizado.
        - **Pré-condições:** Tentar criar usuário com e-mail já utlizado.
        - **Resultado Esperado:** Mensagem dizendo "Este e-mail já está sendo utilizado". Status Code: 400 enviado.

    - **CT-2.2 (Caso de Teste 2.2) - Criar Usuário com Provedor de E-mail Inválido:** 
        - **Objetivo:** Garantir que um usuário não seja criado caso seu provedor de e-mail seja inválido.
        - **Pré-condições:** Tentar criar usuário com e-mails de provedor gmail ou hotmail.
        - **Resultado Esperado:** Mensagem dizendo "E-mail e/ou senha inválidos". Status Code: 401 enviado.

    - **CT-2.3 (Caso de Teste 2.3) - Criar Usuário com Senha Inválida:** 
        - **Objetivo:** Garantir que um usuário não seja criado caso sua senha seja inválida.
        - **Pré-condições:** Tentar criar usuário com senha menor que 5 caracteres ou maior que 10.
        - **Resultado Esperado:** Mensagem dizendo "E-mail e/ou senha inválidos". Status Code: 401 enviado.

### Testes de Atualização de Dados de Usuário
- **Cenário 3 - Realizar alteração com campos válidos**
    - **CT-3.1 (Caso de Teste 3.1) - Alterar Dados de Usuário Cadastrado:** 
        - **Objetivo:** Garantir que um usuário possa ter seus dados alterados.
        - **Pré-condições:** Possuir a autenticação necessária.
        - **Resultado Esperado:** Mensagem dizendo "Registo alterado com sucesso". Status code: 200 enviado.

    - **CT-3.2 (Caso de Teste 3.2) - Alterar Dados de Usuário Não Cadastrado:** 
        - **Objetivo:** Garantir que, caso não seja encontrado usuário com ID informado, é realizado novo cadastro ao invés de alteração.
        - **Pré-condições:** Possuir a autenticação necessária e não existir usuário com ID informado.
        - **Resultado Esperado:** Mensagem dizendo "Cadastro realizado com sucesso" junto do ID do usuário. Status Code: 200 enviado.

- **Cenário 4 - Realizar alteração com campos inválidos**
    - **CT-4.1 (Caso de Teste 4.1) - Alterar Dados de Usuário Não Cadastrado com E-mail já Utilizado:**
        - **Objetivo:** Garantir que um usuário não seja criado caso o e-mail já esteja sendo utilizado.
        - **Pré-condições:** Possuir a autenticação necessária, não existir usuário com ID informado e e-mail já estar sendo utilizado.
        - **Resultado Esperado:** Mensagem dizendo "Este e-mail já está sendo utilizado". Status Code: 400 enviado.

    - **CT-4.2 (Caso de Teste 4.2) - Alterar Dados de Usuário com E-mail e/ou Senha inválidos:**
        - **Objetivo:** Garantir que um usuário não seja criado caso o e-mail já esteja sendo utilizado.
        - **Pré-condições:** Possuir a autenticação necessária, não existir usuário com ID informado e e-mail e/ou senha serem inválidos.
        - **Resultado Esperado:** Mensagem dizendo "E-mail e/ou senha inválidos". Status Code: 401 enviado.

### Testes de Busca de Usuário
- **Cenário 5 - Realizar busca de usuário válida**
    - **CT-5.1 (Caso de Teste 5.1)- Buscar por Usuário Existente:**
        - **Objetivo:** Garantir que usuários existentes possam ser buscados no sistema.
        - **Pré-condições:** Não há.
        - **Resultado Esperado:** Lista de usuários que satisfaçam a condição de busca (se houver). Status Code: 200 enviado.

- **Cenário 6 - Realizar busca de usuário inválida**
    - **CT-6.1 (Caso de Teste 6.1) - Buscar por Usuário Inexistente:**
        - **Objetivo:** Garantir que o usuário receba um feedback caso busque por usuários inexistentes no sistema.
        - **Pré-condições:** Usuário(s) buscados não existir(em) no sistema.
        - **Resultado Esperado:** Mensagem dizendo "Usuário não encontrado". Status Code: 400 enviado.

### Teste de Deleção de Usuário
- **Cenário 7 - Realizar deleção de usuário válida**
    - **CT-7.1 (Caso de Teste 7.1) - Deletar Usuário Existente/Inexistente:**
        - **Objetivo:** Garantir que o usuário selecionado será deletado (se existir).
        - **Pré-condições:** Possuir a autenticação necessária e usuário não pode possuir carrinho.
        - **Resultado Esperado:** Mensagem dizendo "Registro Excluído | Nenhum registro excluído". Status Code: 200 enviado.

- **Cenário 8 - Realizar deleção de usuário inválida**
    - **CT-8.1 (Caso de Teste 8.1) - Deletar Usuário com Carrinho:**
        - **Objetivo:** Garantir que o usuário selecionado não será deletado caso tenha um carrinho.
        - **Pré-condições:** Possuir a autenticação necessária e usuário possuir carrinho.
        - **Resultado Esperado:** Mensagem dizendo "Não é permitido excluir usuário com carrinho". Status Code: 400 enviado.