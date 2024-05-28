# Análise HTTP e API REST
Quando estiver sendo feita a análise de uma documentção e quando estiver sendo montado um mapa mental devemos considerar os tratamentos que estiverem faltando na documentação.
- E se o servidor não estiver funcionando?
- E se o usuário entrar com um dado/valor inválido?
- E se o recurso não estiver disponível?
-> Devemos ter códigos de tratamento específicos para todos os casos.
-> Regras na documentação são testes que precisam estar previstos no mapa mental.

# Mapa Mental API / Mapeamento com XMind
## Mapeamento com XMind
- A XMind é uma ferramenta para construção de mapas mentais em formato de árvores. 
- Nela Podemos organizar nossas ideias, conectando-as em tópicos, características e/ou funcionalidades.
- Na automação de testes com Gherkin, construímos nosso desenvolvimento baseado em features.
    - Features nos indicam padrões para desenvolvimento dividido em: Funcionalidades, contexto, esquemas dos cenários, exemplos e cenários.
Utilizando a ferramenta XMind devemos montar um mapa mental, ao lado direito devemos colocar as rotas dos testes prioritários.
## Análise de Funcionalidades e Mapeamento de cenários
![PadraoXMind.png](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint2/src/PadraoXMind.png?raw=true)
Funcionalidades nos apresentam contextos, cenários e esquemas do cenário ou com diferentes casos de teste a serem executados.
- Conforme navegar por uma aplicação vá acrescentando novas funcionalidades ao mapa. 
- Após mapear a funcionalidade é necessário se aprofundar e mapear seus cenários de teste.
## Mapeamento para automação de APIs
Para exemplificar o mapeamento para a construção da automação de testes de APIs usaremos a API ServeRest.
No site oficial da API (https//serverest.dev/#/) encontramos as rotas disponíveis em um swagger.
- Cada rota principal se torna uma funcionalidade;
- E para cada funcionalidade estarão disponíveis algumas requisições diferentes;
- São mapeados todos os status possíveis, para um verbo HTTP em uma rota;
- As cores no mapa auxiliam no entendimento das rotas;
- As rotas são como "pastas" que armazenam verbos http e status;
    - Em alguns casos armazenam outras rotas, como é o caso de "/carrinho/concluir-compra" e "/carrinho/cancelar-compra".
## Conclusão
A Xmind é uma ótima plataforma para mapear todos os caminhos possíveis dentro de um determinado site ou app.
É extremamente necessário planejar todos os caminhos e cenários antes de iniciar a programação, pois conseguimos mensurar o quanto do site ou app pode ser testado, e o que deve ser testado.