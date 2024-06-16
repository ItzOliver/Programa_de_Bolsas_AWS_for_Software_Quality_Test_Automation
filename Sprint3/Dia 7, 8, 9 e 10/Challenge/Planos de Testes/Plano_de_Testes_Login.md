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
        
## Cenários Macro na Suíte de Testes
### Testes de Login de Usuário
- **Cenário 1 - Realizar login com campos válidos**
    - **CT-1.1 (Caso de Teste 1.1) - Logar com Todos os Campos Válidos:** 
        - **Objetivo:** Garantir que um usuário consiga realizar login desde que entre com credenciais válidas.
        - **Pré-condições:** Ter realizado cadastro na plataforma.
        - **Resultado Esperado:** Mensagem dizendo "Login realizado com sucesso" junto do Token de autenticação. Status code: 200 enviado.

- **Cenário 2 - Realizar login com campos inválidos**
    - **CT-2.1 (Caso de Teste 2.1) - Logar com E-mail Inválido:** 
        - **Objetivo:** Impedir que um usuário consiga realizar login se suas credenciais forem inválidas.
        - **Pré-condições:** Tentar logar na plataforma com e-mail inválido.
        - **Resultado Esperado:** Mensagem dizendo "E-mail e/ou senha inválidos". Status code: 401 enviado.
    
    - **CT-2.2 (Caso de Teste 2.2) - Logar com Senha Inválida:** 
        - **Objetivo:** Impedir que um usuário consiga realizar login se suas credenciais forem inválidas.
        - **Pré-condições:** Tentar logar na plataforma com senha inválida.
        - **Resultado Esperado:** Mensagem dizendo "E-mail e/ou senha inválidos". Status code: 401 enviado.