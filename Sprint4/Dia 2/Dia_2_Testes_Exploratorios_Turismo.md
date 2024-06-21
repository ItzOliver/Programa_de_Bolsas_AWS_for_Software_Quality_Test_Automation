# Testes Exploratórios - Turismo
## Tours
### Business District
- Funcionalidades importantes da aplicação
    - Guidebook Tour
        - Manual da aplicação é um ótimo guia
        - Essa rota força o testador a tomar o mesmos caminhos que o usuário
        - Defeitos nesta rota têm prioridade alta
    - Money Tour
        - Identificar a razão principal pela qual os usuários utilizam a aplicação
        - Se essa função parar de funcionar ninguém mais irá utilizar a aplicação
    - Landmark Tour
        - Escolha pontos da aplicação que se deseja visitar e monte uma rota passando por todos eles
        - Mantenha um registro dos pontos visitados para confirmar a cobertura deles
    - FedEx Tour
        - Identificar entradas que são armazenadas no sistema e procurar segui-las pelo software
    - After-Hours Tour
        - Nos horários em que as funcionalidades mais importantes não são utilizadas em larga escala, algumas outras funcionalidades podem ser acionadas
        - Algumas problemas surgem dependendo do horário
    - Garbage Collector's Tour
        - Quando queremos verificar as interfaces nós visitamos tela por tela, mensagem por mensagem, sempre buscando a menor rota possível
        - Esse teste vem atrelado a alguma meta específica

### Historical District
- Códigos legados
    - Bad Neighborhood Tour
        - Áreas infestas de Bugs
    - Museum Tour
        - Códigos legados
    - Prior Version Tour
        - É preciso que uma funcionalidade não perca sua essência após uma reforma

### Entertainment District
- Funcionalidades que saiem da linha principal de uso do software
    - Supporting Actor Tour
        - Focar nas funcionalidades que dividem a tela com as principais funcionalidades da aplicação
    - Back Alley Tour
        - Visite as funcionalidades que raramente alguém irá utilizar
    - All-Nighter Tour
        - Manter a aplicação rodando durante um bom tempo para verificar como ela faz o gerenciamento de memória e recursos

### Tourism District
- Collector's Tour
    - Nos testes tente mapear todas as funcionalidades e catalogar todas as visitas à medida que elas forem ocorrendo
- Lonely Businessman Tour
    - Procure as funcionalidades que estão mais distantes do ponto inicial da aplicação
- Supermodel Tour
    - Não tente se aprofundar muito nos testes, foque nas interfaces (elas estão boas? demora muito pra responder?)

### Hotel District
- Onde o testador pode dar uma olhada nas funcionalidades menos importantes do projeto
    - Rained-Out Tour
        - Iniciar operações e cancela-las logo em seguida para ver se a aplicação vai agir bem
    - Couch Potato Tour
        - Tente passar pelas funcionalidades sempre com os valores default