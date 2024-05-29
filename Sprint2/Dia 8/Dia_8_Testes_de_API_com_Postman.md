# Testes de API com Postman
## introdução ao Postman
O **Postman** é uma ferramenta utilizada para testar comunicações com APIs, ele possui ambiente para documentação, testes e todo tipo de requisições em geral.
Por que usar o **Postman**? Simples! O seu tempo para desenvolver e testar as APIs irá diminuir bastante, além de poder armazenar seus testes para refaze-los posteriormente, contendo também uma resposta detalhada sobre o response da sua requisição.
### Vantagens do Postman
- Suporta qualquer tipo de chamada de API, sendo ela REST, SOAP ou HTTP.
- Fácil acesso! Para usar basta fazer login a qualquer momento e a qualquer lugar, todas as suas collection e workspaces estarão disponíveis.
- Criação de collections, faz com que você possa organizar muito melhor suas requisições, dentro de pastas referentes a cada uma, e utilizá-las mais facilmente.
- Criação de ambientes, diminui a necessidade de repetição de testes, podendo também, usar as mesmas coleções em ambientes diferentes.
- Facilita a elaboração dos seus testes com pontos de verificação, validação de responses, integração contínua, automações, depuração e entre outos...
### Collection e Organização
O uso de *Collections* permite que a pessoa mantenha uma boa organização das requisições e tenha uma boa visualização das rotas e casos cobertos. 
Collection contém pastas, Pastas contém requisições, Requisições contém instruções e dados para realizar ações segundo contrato da API.
## Ambientes e Variáveis
Sabemos que precisamos de diferentes valores de entrada para realizar testes em uma API. No caso de precisar testar o mesmo sistema em diferentes ambientes - como produção, desenvolvimento e homologação - podemos ter necessidade de aplicar diferentes conjuntos de dados de entrada. Para tornar esta seleção dinâmica usamos diferentes ambiente (environments) no Postman.
Ambiente contém dados (variáveis) aplicáveis aos testes, Variáveis de ambiente são dados que serão aplicado em função do ambiente selecionado para o teste.
### Workspace
Postman permite organizar as APIs, collections, ambientes, mocks e outras entidades em workspaces que podem ser colaborativos, usados simultaneamente por colegas de equipe. Dessa maneira, o estado dos recursos se mantém atualizado com as últimas modificações e sincronizado entre todos os colaboradores.
### Corpo de Requisição
Requisições podem exigir o envio de dados em seu corpo (body), (Principalmente requisições POST) e podem teronar uma resposta contendo um body com dados. Considerando esse funcionamento básico, Postman nos permite criar um body de envio e verificar um recebido como resposta.
### Autenticação Básica
Postman permite usar diferentes métodos de autenticação. A escolha do método de autenticação deve ser em função do tipo de autenticação utilizada pela API em questão. Além disso ela pode ser feita de maneiras diferentes.
## Automação com Postman
O Postman permite que organizemos requisições e possamos executá-las de maneira rápida para verificar o comportamento de cada verbo e conjunto de dados setados sobre cada rota nos ambientes desejados.
Outro recurso que nos ajuda é a automação das validações. Podemos inserir scripts de automação que fazem a verificação da resposta para nós economizando tempo de conferência dos valores.