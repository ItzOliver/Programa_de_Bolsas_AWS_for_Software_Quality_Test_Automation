# Testes Exploratórios - Outras Estratégias
## Shoe Test
"Pegar um sapato e bater no teclado com um sapato" - Algumas aplicações apresentam comportamentos estranhos quando várias teclas são pressionadas ao mesmo tempo.

## Null, Zero, Vazio
Tentar como entrada em formulárias o que for possível (Null, Zero, Vázio, Strings, Ints, Floats, etc).

## Get One, Take One
Abrir duas instâncias de uma aplicação quando ela trabalha com recursos e verificar se, o fato de estar trabalhando com um lado acaba afetando o outro lado > ajuda a testar questões de paralelismo.

## Bookmark
Em aplicações web dependendo de como navegamos pela aplicação a Url dela muda, esse método consiste em salvar um link de algum estágio e tentar acessá-lo sem ter feito os passos anteriores para ver como a aplicação se comporta.

## Sabotage
Entender o funcionamento da aplicação, quais dependências ela possui e sabotá-la para testar como ela se comporta.

## Ferramentas de Desenvolver
Simular situações que não são possíveis somente manipulando o formulário através das ferramentas de desenvolvedor dos navegadores.

## Requisições
Requisições REST, Postman, Status Codes, etc.

## Responsividade e Acessibilidade
Responsividade -> Independente do tamanho ou layout da tela, os elementos presentes nela irão se adaptar a ele.
Como testar isso? Diminuir o tamanho da janela do navegador.
Acessibilidade -> Como uma pessoa com alguma dificuldade especial poderia interagir com sua aplicação.

## Segurança
Manipulação de formulários através das ferramentas de desenvolvedor, html injection, JS injection, Sql injection, etc.
Barrar que formulário da aplicação aceite códigos.

## Banco de Dados
Raciocinando como determinada aplicação funciona é possível inferir modelos e entender como testar e manipular a aplicação.
Através da inferência de como funciona um banco de daods é possível testar injeção de valores que causariam problemas a estrutura dele.

## Resumão
[Test Heuristics Cheat Sheets](https://www.ministryoftesting.com/articles/test-heuristics-cheat-sheet)