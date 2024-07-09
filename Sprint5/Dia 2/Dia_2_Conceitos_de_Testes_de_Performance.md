# Conceitos de Testes de Performance
- Teste de Performance:
    - Teste onde submetemos aplicações a cargas e condições específicas por tempo determinado a fim de observar e avaliar os diferentes comportamentos que essas condições e cargas vão proporcionar.
## Requisições HTTP
- Definição:
    - HTTP é um protocolo baseado em streams de texto. Muito resumidamente, o cliente abre um socket para falar com o servidor e, nesse socket, envia requisições (requests), as quais o servidor responderá com respostas (responses).
## Status Code
- Definição:
    - Esta é uma lista dos códigos de status de resposta HTTP, os códigos de status são emitidos por um servidor em resposta à solicitação de um cliente feita ao servidor, o primeiro dígito do código de status especifica uma das cinco classes padrão de respostas.
- Categorias:
    - 1xx Resposta informativa - a solicitação foi recebida, continuando o processo;
    - 2xx Sucesso - a solicitação foi recebida, compreendida e aceita com êxito;
    - 3xx Redirecionamento - é necessário executar outras ações para concluir a solicitação;
    - 4xx Erro no client - a solicitação contém sintaxe incorreta ou não pode ser atendida;
    - 5xx Erro no server - o servidor falhou ao atender uma solicitação aparentemente válida.
## Modelos de Testes
- Teste de carga (Load test):
    - A aplicação é submetida a uma determinada carga e tem seu comportamento observado;
    - A carga submetida deve ser a carga esperada em produção.
- Teste de estresse (Stress test):
    - Execitar o sistema sob condições hostis ao seu funcionamento, volume excessivo de dados, restrições de hardware ou software, sob ataques de segurança.
- Teste de pico (Peak test):
    - A mesma definição do Load test no entanto é realizado quando a aplicação está passando por um momento de pico, Black Friday por exemplo.
- Teste de continuidade (Soak test):
    - Visa usar uma carga próxima à esperada em produção, mantendo essa carga por um longo período de tempo, semanas por exemplo;
    - Usado para identificar falhas como memory leak resultante de uma garbage collector mau configurada ou restrição de banda do provedor.
## Cenários
- Elaborar os cenários pensando em situações semelhantes às reais;
- Os cenários em geral devem estar aderentes aos requisitos da aplicação, mas também visando a qualidade refletida ao usuário final;
- Também podem ser considerados cenários relacionados a otimização da infraestrutura em nuvem, visando diminuir custos.
## Volumetria
- Planejar um volume de dados para o que se espera da aplicação, considerando o dia do release, seis meses depois do release, um ano depois do release e dois anos depois do release.
## Ambiente
- O ambiente deve ser o mais próximo do ambiente de produção possível. Se não for o caso, pode-se aplicar um cálculo de escala;
- Horizontalmente (adicionando novas máquinas): seu ambiente de produção tem vinte máquinas por exemplo, você pode simular um micro ambiente de produção com duas máquinas e "imaginar" que seu teste vai escalar algo em torno de seis a oito vezes;
- Verticalmente (adicionando recursos como memória e CPU): você pode simular um ambiente parecido com o de performance mas com a infraestrutura mais básica;
- Caso tenha a oportunidade de executar uma ferramenta de acompanhamento da performance em produção, como o New Relic, use-a para entender qual é a relação entre performance de produção e do seu ambiente emulado.
## Indicadores Orientados a Serviço
- Percebidos pelo usuário final, indicam quão bem a aplicação provê seus serviços para seu usuário final;
- Disponibilidade:
    - Capacidade da aplicação manter-se operando sobre a carga durante um período x de tempo.
- Tempo de reposta:
    - Tempo que a aplicação leva para dar um feedback ao usuário.
## Indicadores Orientados a Eficiência
- Percepção interna, indicam quão bem a aplicação usa os recursos internos;
- Vazão (Throughput):
    - Quantidade de dados processados em um determinado espaço de tempo.
- Utilização de recursos:
    - Otimização de infraestrutura e custos de escalabilidade vertical e horizontal.
## Terminologias
- Baseline:
    - A criação de uma linha de base é o processo de execução de um conjunto de testes para capturar dados de métricas de desempenho;
    - O objetivo é avaliar a eficácia das alterações subsequentes de melhoria de desempenho do sistema ou aplicativo.
- Benchmarking:
    - Benchmarking é o processo de comparar o desempenho do seu sistema com uma linha de base que você criou internamente ou com um padrão da indústria aprovado por alguma outra organização;
    - Server para que a análise seja feita sobre valores realistas e a compração dos resultados seja palpável de execução.
- Métricas:
    - As métricas são medidas obtidas por meio da execução dos testes de desempenho e expressos em uma escala comumente compreendida;
    - Algumas dessas métricas são obtidas por meio de testes de desempenho que incluem a utilização do processador ao longo do tempo e o uso da memória pela carga.
- Saturação:
    - A saturação se refere ao ponto que o recurso atingiu a utilização total;
    - Muitas vezes após uma certa quantidade de execuções os resultados começam a apresentar uma degradação, devido aos recursos estarem saturados pela carga aplicada.
- Workload:
    - A carga de trabalho é o estímulo aplicado a um sistema, aplicativo ou componente para simular um padrão de uso em relação à simultaneidade e / ou entradas de dados;
    - A carga de trabalho inclui o número total de usuários, usuários ativos simultâneos, volume de dados e volume de transações, junto com a combinação das transações.
- Think Time:
    - Corresponde ao intervalo de tempo entre duas requisições do usuário, durante este período, o servidor não faz o processamento algum para o usuário em questão;
    - Basicamente é o tempo que o usuário passa lendo os dados da tela e tomando as ações necessárias para seguir dentro do fluxo do sistema.
- Ramp Up:
    - Ramp Up é o aumento gradual de carga de usuários em um determinado teste;
    - Durante o Ramp Up o nosso throughput será crescente devido ao aumento repentino de carga e nesse momento as métricas estarão apontando diversos picos.
- Steady State:
    - Corresponde ao intervalo de tempo onde podemos ter os melhores dados para análise dos resultados, ele é iniciado após o período de Ramp Up;
    - Nesse ponto temos a carga estável no sistema e podemos realizar uma análise detalhada do resultado, se aproximando muito do uso real do sistema.