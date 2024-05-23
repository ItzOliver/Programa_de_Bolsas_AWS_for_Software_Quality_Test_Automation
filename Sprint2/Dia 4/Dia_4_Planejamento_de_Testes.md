# Planejamento de Testes
## O que é o plano de teste de software
É um documento feito para explicitar algumas das atividades do processo de teste. Podem haver planos de teste separados para cada nível de teste (ex: planos de teste para testes de sistema). Também podemos ter um plano de teste criado para cada tipo de teste (ex: usabilidade, perfomance, testes funcionais). O plano de teste identifica as funcionalidades a serem testadas, o objetivo do teste, datas, pessoas envolvidas, os riscos que podem ocorrer dentro dos testes, etc. -> **O que? Por que? Quando? Quem? Onde? Quanto?**
### Por que criar um plano de teste?
- O plano de teste é um documento que ajuda a determinar o esforço necessário para validar a qualidade do aplicativo em teste;
- O plano de teste vai orientar as ações das pessoas envolvidas no teste -> ele representa uma espécie de livro de regras;
- O plano de teste pode ajudar pessoas que estão fora da equipe de teste (ex: desenvolvedores, clientes, stakeholders) a entender como os testes serão feitos, tendo informação como as coisas acontecem;
- A partir de um plano de testes passamos a ter dados para quem gerencia ou participa dos testes e com isso cria-se condições de melhorar a estimativa do gasto em geral do teste.
### O plano pode ser ajustado?
Pode! mas para que funcione todos os envolvidos devem concordar com a mudança e eles devem ser avisados de que aconteceu a mudança.

## Sugestão de conteúdo de plano de teste
### Nome do projeto
O nome do projeto é o resumo do resumo. Ajuda a identificar o tipo de teste que está sendo feito e em que ponto do projeto está sendo feito.
### Resumo
"Por que você vai fazer o teste?". Dentro do resumo existem dois itens que são interessantes de serem colocados: Hipótese (crença inicial sobre alguma característica do software a ser testado, seja ela boa ou ruim) e Resultado do teste (lembrar dos tipos de teste presentes no CTFL)
- Teste de usabilidade
- Exemplo: Deseja-se verificar se a usabilidade da interface do SITE XYZ é boa e para isso serão aplicados teste com usuários pertencentes ao público-alvo.
### Pessoas envolvidas
"Quem são os testadores?". Dependendo do tipo de teste (de desenvolvimento ou funcional), além da equipe de testadores, informações sobre o público-alvo do software podem ser adicionadas se usuários forem recrutados para responder o teste.
### Funcionalidades ou Módulos a serem testados
"O que será especificamente testado?". Tem relação com a atividade de análise do teste.
- Todos os membros do projeto deverão ter uma compreensão clara sobre o que será testado e o que não será;
- No caso de testes de usabilidade ou de interface, indicar qual a interface que especificamente será testada;
- No caso de testes unitários colocar o(s) nome(s) do(s) métodos(s);
- No caso de testes de integração inserir o nome do módulo do teste e das classes.
### Local dos testes
"Onde os testes serão feitos?". Tem relação com a atividade de implementação do teste.
- Serão feitos em um laboratório ou tentarão emular o ambiente real de uso?
### Recursos necessários (software, rede, sala, verba, ...)
Aqui podemos relacionar tudo o que for necessário para a realização dos testes, tem relação com a atividade de implementação dos testes;
- É um resumo dos tipos de recursos necessários para concluir a tarefa do projeto;
- Recursos podem ser humanos, equipamentos e materiais necessários para concluir um projeto;
- Há necessidade de um ambiente especial para a realização dos testes?
- É necessária alguma infra-estrutura de comunicação?
- É preciso instalar algum software?
- É preciso gerar algum Script de teste?
- É preciso gerar dados para os testes?
- É necessário usar recursos financeiros para a realização dos testes? Qual é o valor? Para que esse dinheiro será usado?
### Critérios usados
Tem relação com a atividade de Modelagem do teste;
- Quantidade de testes a serem feitos;
- Como os testes serão avaliados;
- Como os testes serão divididos entre as pessoas envolvidas;
- Foi feita amostragem?
- Que tarefas serão feitas pelos usuários?
### Riscos
O teste deve ser feito caso algo imprevisto ocorra durante a execução do teste?
- O risco é um evento futuro que tem uma probabilidade de ocorrência e que tem um potencial de perda. Quando o risco acontece, torna-se um "problema". Assim, é necessário que os riscos sejam catalogados de maneira que seja possível estabelecer um plano "B";
    - Exemplo: caso seja necessário uma conexão com a internet para a realização de um teste, o risco seria:
        - Falta de conexão com a internet via rede wifi.
- Além de catalogar os riscos, maneiras para mitigar esse problema devem ser criadas;
    - Usar uma conexão via rede celular.
### Como os resultados do teste serão divulgados
Como os resultados finais do teste serão fornecidos após o término dos ciclos de testes. Tem relação com a atividade de conclusão do teste;
- Será gerado um outro documento?
    - Relatório dos resultados dos testes;
    - Relatório de Defeitos.
- Quais serão as métricas usadas?
### Cronograma
O cronograma é uma ferramenta comum no gerenciamento de projetos. Ele determina quando as atividades a serem executadas em um projeto serão realizadas. Para isso, para cada uma delas deve-se indicar a data inicial e a data final;
- Um cronograma pode ser usado como um meio para monitorar o progresso do projeto, e ainda controlar os custos excedidos;
    - Período de entrevistas: 06/05/2024 - 17/05/2024
    - Período de dados: 17/05/2024 - 22/05/2024
    - Entrega dos resultados: 24/05/2024