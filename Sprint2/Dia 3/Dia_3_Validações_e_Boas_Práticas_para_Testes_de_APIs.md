# Quais Validações devo realizar em uma API
- Tipos de validações que fazemos em uma API: status, header, body, json;
    - Header -> é uma parte da requisição que será enviada para o servidor onde se coloca algumas informações técnicas que ajudam o servidor a processar aquela informação que está sendo enviada para a requisição;
    - Body -> através do body envia-se a autenticação para o servidor.
# Boas Práticas para Testar API
## Entender o projeto
- A partir do entendimento do projeto é possível entender o que é o projeto, qual é o objetivo dele e com isso é possível escolher qual tecnologias/ferramentas serão utlizadas na criação do teste. Assim como também saber qual é o fluxo, quais são as integrações que todo o sistema terá.
## Documentação
- A documentação é a referência que usaremos para avaliar se os métodos estão corretos, quais são os end-points, o que é preciso fazer, quais são as respostas que devemos ter, etc.
## Validação
- Que tipo de teste será aplica? 
    - Teste funcional, baseado nos resquisitos do projeto?
    - Teste não funcional, avaliar a performance da API?
    - Teste estrutural, avaliar se a documentação está correta, se o STATUS está sendo retornado de forma correta, se o body está correto, etc.
## Segurança
- Autenticação garante a segurança do sistema.