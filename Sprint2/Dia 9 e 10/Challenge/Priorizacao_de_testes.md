# Priorização de Testes
# Fluxo Prioritário
Aplicação: [API] Usuários
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