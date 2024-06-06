# User Stories
## Por que escrever histórias de usuário?
De uma forma geral, podemos dizer que a escrita das histórias de usuário funcionam como uma narrativa sobre o quê, para quem e porque entregar aquela funcionalidade.
- É um direcionador ao desenvolvimento!
## Template para escrita de User Story
Veja que para escrever uma história de usuário é bem simples, basta que sigamos o modelo apresentado, trazendo as informações:
- **Como** – autor da ação (persona);
- **eu quero** – funcionalidade desejada;
- **para** – valor agregado à funcionalidade desejada.
### Técnica 3W 
Na utilização desse técnica devemos nos atentar a **quem é** o nosso sujeito ou usuário, ou seja, como o usuário se encontra (persona), **o que ele deseja** realizar e **para quê ou porquê ele deseja** executar aquela atividade ou ação.
- **Como (quem?) -** aqui eu devo referenciar para quem eu estou construindo àquela funcionalidade. Quem é a minha persona atingida por aquela história?
- **Eu quero (o quê?) -** aqui eu devo colocar qual a funcionalidade esperada. O que minha persona deseja realizar?
- **Para (por quê?) -** devo descrever qual a motivação para a construção daquela história. Qual o valor esperado pela pessoa usuária? 
### Técnica 3C
Essa técnica nos trás para uma preocupação com o conteúdo dos questionamentos da técnica do 3W. Os 3C representam card (cartão)/ conversation (conversa)/ confirmation (confirmação), onde:
- **Cartão -** uma User Story não deve ser muito extensa, tornando possível escrevê-la em um único cartão;
- **Conversa -** seu conteúdo deve gerar discussões de alinhamento entre o time sobre o que se deseja atender;
- **Confirmação -** é importante que a história de usuário possua critérios de aceitação para que seja possível a validação de êxito na construção e entrega.
![ExemploUserStory](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint3/src/ExemploUserStory.png?raw=true)
## Refinando uma história de usuário
Toda *user story* que entra em fila de priorização do backlog deve passar por um processo de refinamento, onde ela é melhor detalhada pelo Product Owner e o time. Isso ocorre para, além de eliminar incertezas, o time possa ter mais entendimento do que deve ser feito para atender àquela necessidade, até mesmo avaliar se ela ainda faz ou não sentido para o contexto atual do produto.
Nesse sentido, é importante entender que as vezes pode ser necessário a quebra das User Story em itens menores para entrega de valor em menor período de tempo ao usuário. Para atender aquela proposta de valor apresentada inicialmente, pode demorar muito tempo até o usuário conseguir enxergar de fato o seu valor. Assim a quebra atua de forma a gerar valor ao entregar parter menores da feature principal, mas que façam sentido ao usuário.
### Técnica INVEST
![Invest](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint3/src/Invest.png?raw=true)
- **Independent (independente) -** é uma história que não tem dependências ou amarrações com outras;
- **Negotiable (negociável) -** não existe um contrato fechado para as definições da história, ela está passível de conversas e ajustes se necessário, de acordo com uma mudança de contexto ou novas avaliações do time;
- **Valuable (valiosa) -** sua entrega representa entrega de valor para o usuário final;
- **Estimable (estimável) -** possui informações suficientes que garantem que o time a compreenda e que seja possível ser estimada;
- **Sized-Appropriately/Small (Tamanho Ideal - Pequena) -** é uma história pequena que gera o mínimo de incertezas e que seja possível fazer parte de uma interação;
- **Testable (testável) -** seja possível a definição de testes individuais da funcionalidade entregue pela história.
&nbsp;
![ExemploUserStory](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint3/src/ExemploUserStory.png?raw=true)
Para realizar a quebra dessa user story, eu posso pensar no que eu preciso para atender a essa necessidade do meu usuário, e o que precisarei construir para de fato chegar ao resultado esperado. Então imaginemos que o sistema dessa minha loja ainda não é informatizado, então antes de pendar na visualização dos produtos e sua quantidade em estoque eu tenho primeiro que **cadastrar os produtos**, **dar entrada no valor em estoque**, **dar baixa nos produtos vendidos**, etc.
## Critérios de Aceitação (Acceptance Criteria)
Na escrita das histórias, também devemos possuir os critérios de aceitação. Eles são como checklists que devem ser repassados para garantir que aquela história esteja entregando o que foi pedido e planejado em sua definição, em caráter de funcionalidade para entrega de valor ao usuário. Os critérios de aceitação funcionam como uma forma de detalhamento maior sobre o que deve ser entregue naquela história, auxiliando também os desenvolvedores na definição e planejamento dos testes.
## Definição dos cenários em histórias de usuário
Uma forma de escrita dos critérios de aceitação pode ser através da definição de cenários que podem auxiliar o desenvolvimento de uma história de usuário. Isso ocorre, pois traz os caminhos que um usuário pode percorrer em seu produto, finalizando no sucesso ou insucesso da tarefa, auxiliando assim nas tratativas desses caminhos previstos e alternativos.
Uma forma de escrita desses cenários pode ser utilizando do template conhecido como BDD. A técnica de desenvolvimento BDD – Behavior Driven Development, se caracteriza como sendo o desenvolvimento baseado no comportamento. Com essa técnica, os desenvolvedores descrevem o comportamento esperado para a funcionalidade, e validam a construção da estória em cima desse comportamento.
![Exemplo-bdd](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint3/src/Exemplo-bdd.png?raw=true)
### Exemplo
- **COMO** vendedor
- **EU QUERO** visualizar os produtos da loja
- **PARA** ver sua quantidade em estoque
Descrevendo em formato de tópicos:
O perfil vendedor teve:
- ter acesso ao sistema de gestão da loja;
- possuir permissão de geração de relatórios;
- possuir permissão a opção de relatório "Produtos em Estoque".
Descrevendo utilizando cenários:
**Cenário 1:** Gerar relatório de Produtos em Estoque
**Dado** que o vendedor esteja lojado no sistema da loja
    **E** possua permissão de geração de relatórios
**Quando** ele clicar no menu "Relatórios"
    **E** ser apresentada a opção "Relatório de Produtos em Estoque"
**Então** ele deve conseguir gerar o relatório
## Definição das tarefas para as histórias de usuários (Tasks)
Para as histórias de usuário, o time também deve definir as tarefas (tasks) que fazem parte daquela história, ou seja, quais as tarefas são necessárias para a construção daquela feature. Este ponto do refinamento da história é mais a nível de desenvolvimento, trazendo em uma linguagem mais direta o que precisa ser feito, na maioria das vezes, de forma técnica. Normalmente, o próprio time de desenvolvimento as define.
Exemplificando um pouco melhor sobre as tasks para o exemplo apresentado:
- Task 1 - Criar perfil de usuário "vendedor";
- Task 2 - Criar permissão de geração de relatório;
- Task 3 - Criar permissão de "Relatório de Produtos em Estoque".
&nbsp;
Não existe uma regra quanto à forma que as tasks devem ser descritas, mas o principal é que elas sejam objetivas e claras, como uma espécie de roteiro de implementação.
**Observação:** devemos estar atentos às definições das tasks para que elas não sejam muito grandes. Pois, talvez, devemos transformá-las em uma nova user story. Ou seja, fazer uma quebra da história principal (como discutimos alguns tópicos acima).
## Criação das interfaces com o usuário
Por último, dependendendo da história a ser construída, pode ser necessário a representação de interfaces do sistema com o usuário. Estas representações podem vir em **baixa fidelidade** (rabiscoframes, papel), em **média fidelidade** (wireframes) ou **alta fidelidade** (protótipos navegáveis ou não), desenvolvidas pela sua equipe de design UX/UI.