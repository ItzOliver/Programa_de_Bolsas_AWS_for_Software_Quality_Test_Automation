# Cobertura de Testes de API Rest
## Coberturas tradicionais
Quando se fala de cobertura de testes, é muito comum ouvir sobre coberturas tradicionais como:
- Cobertura de testes com base em requisito -> Quantidade de requisitos que existem / quantos testes existem para cada requisito;
    - Ex: 10 requisitos. Existem testes para 5 deles -> 50% de cobertura dos requisitos.
- Cobertura de testes com base em riscos;
- Cobertura de testes com base em código, etc.
## Coberturas de testes de API Rest
A abordagem de Martin Lopes trata especificamente de cobrir a interface da API Rest. Swagger é uma forma de descrever a interface de uma API Rest, também existem outras formas disso ser feito.
Para calcular a cobertura de testes nos baseamos nos critérios de cobertura de entrada (Input Coverage) e cobertura de saída (Output Coverage).
### Path Coverage (input)
- Verifica a cobertura da suíte de testes de acordo com os endpoints que API possui. Este critério é importante, pois ao receber uma solicitação, o programa pode executar caminhos diferentes, então precisamos garantir que os endpoints da API REST estão cobertos pelos testes.
- A análise é realizada pela quantidade de URI (URL + URN (*Resource name*)) que a API possui (se fir a nesna URI para métodos diferentes, considera-se apenas um).
- O ideal é realizar ao menos uma requisição para verificar cada endpoint.
    - Supondo que uma automação de uma determinada API tem apenas 4 desses endpoints implementados, mas a API possui 15.
        - Temos: 4/15 -> 26%, ou seja, 26% dos testes de path estão cobertos pela automação.
### Operator Coverage (input)
- Confere a cobertura de testes de todos os métodos existentes na API REST (GET, POST, PUT, DELETE...).
- Supondo que em um determinado swagger temos um total de 13 operações;
- Então, deve-se verificar quais métodos da API foram cobertos pela automação de testes. Vamos supor que 8 métodos tiveram testes automatizados implementados.
    - Temos: 8/13 -> 61%, ou seja, 61% dos testes de operação cobertos.
### Parameter Coverage (input)
- Verifica a cobertura de uma suíte de testes conforme os parâmetros existentes em cada método da API.
- Para atingir 100% de cobertura de testes é necessário testar todos os parâmetros de entrada de cada operação pelo menos uma vez. Realizar a combinação de todos os parâmetros é desejável, mas não estritamente necessário para chegar a 100% de cobertura.
- Suponha que a API tenha um total de 7 parâmetros, e na automação da API os 7 parâmetros foram cobertos;
    - Temos: 7/7 -> 100%, ou seja, 100% dos testes de parâmetros cobertos.
### Parameter Value Coverage (input)
- Confere a cobertura da suíte de testes de parâmetros booleano e enum nas operações (se existirem).
- Para atingir 100% de cobertura cada parâmetro booleano e enum deve assumir todos os valores possíveis.
### Operation Flow (input)
- Este critério mede um conjunto de testes de acordo com as sequências de operações que é executado.
- Por exemplo:
    - Fluxo1: Post-Get(id)
    - Fluxo2: Post-Put
    - Fluxo3: Post-Delete
    - Fluxo4: Post-Get(Query)
- Se todos os fluxos estiverem implementados no teste automatizado, então a API Rest está 100% coberta pela automação.
- Porém se é póssível criar 4 tipos de fluxos, mas sua automação possui apenas um, por exemplo, criação (Post) e consulta (Get id), então terás apenas 25% de cobertura.
    - Temos: 1/4 -> 25%
### Content-Type Coverage (input e output)
- Verifica a cobertura de testes automatizados onde o content-type está sendo exibido em cada endpoint, ou seja, se for demonstrado nas opções do content-type de envio application/json e um application/xml, então duas opções dos parâmetros de envio deveriam ser cobertas.
- Também devem ser verificadas as opções de content-type da resposta.
- Suponha uma API que possua as operações POST, PUT, GET e DELETE. POST e PUT possuem cada um 2 opções de content-type, logo a API possui um total de 4 content-type a serem cobertos. A automação cobriu apenas uma opção, no POST e uma opção, no PUT. 
    - Temos 2/4 -> 50%
### Response Properties Body Coverage (output)
- Este critério mede os parâmetros no corpo da resposta, então deve ser verificado se todas as propriedades da resposta estão cobertas pelo teste.
- Para calcular a cobertura deve-se dividir o número total de todas as propriedades de todos os objetos que pode ser obtido na reposta da API, pelo número de propriedades da resposta que os testes estão cobrindo.
### Status Code Coverage (output)
- Este critério verifica quais status codes existentes em cada endpoint estão cobertos pelos testes.
- Suponha que a API tenha um total de 25 status code, e na automação da API apenas 15 status code foram cobertos.
    - Temos: 15/25 -> 60%
- Portanto, para atingir 100% da cobertura de testes, todos os status codes de cada operação deve estar implementado nos testes.