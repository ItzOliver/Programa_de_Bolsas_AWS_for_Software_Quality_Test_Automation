# Definition of Ready (DoR) - Mias qualidade no Product Backlog
## O que é DoR?
É uma técnica de qualidade e gestão de risco que apoia a entrada de uma história para o delivery. Basicamente são pré-requisitos de um backlog, para que seja considerado apto para iniciar o desenvolvimento.
o **Definition of Ready (DoR)** garante a qualidade de uma história, épico, tarefa, sprint ou produto para que o trabalho possa ser iniciado. Seu uso não é restrito ao framework Scrum, ele pode ser utilizado também no Kanban e outras metodologias ágeis.

Definition of Done (DoD) tem objetivos diferentes do DoR, DoD são os critérios para considerar uma história como concluída. Enquanto DoR são os critérios necessários para que uma história possa ser iniciada.

## O que é importante estar no DoR?
Para ajudar a identificar o que é importante estar no DoR, faça as seguintes perguntas:
- O que o devTeam precisa ter para iniciar o desenvolvimento?
- O que precisa estar pronto para iniciar o desenvolvimento?
- Quais acessos, ferramentas, documentação e ambientes precisamos possuir para iniciar o desenvolvimento?
- Quais permissões e aprovações precisam ser realizadas para iniciar o desenvolvimento?
- Quais práticas e técnicas precisam ser feitas para iniciar o desenvolvimento?

### Exemplo 1: Equipe Front-End – História XYZ
- Protótipo de alta fidelidade **pronto e validado** com o usuário.
- Protótipo de alta fidelidade **pronto e entregue** para devs.
- Protótipo de acessibilidade **pronto e entregue** para devs.
- Todas histórias **refinadas** pelo time de desenvolvimento.
- Todas histórias **estimadas** pelo time de desenvolvimento.
- Todas as APIs **prontas e validadas** pelo time.
### Exemplo 2: Produto Open Banking
- As histórias devem estar **escritas** utilizando o modelo **INVEST**.
- Todas histórias **refinadas**.
- **Possuir** massa para testes.
- APIs dos parceiros **prontas e validadas**, que iremos utilizar na jornada X.
- Arquitetura **desenhada**.
- Ambientes de desenvolvimento **pronto** e devs com **acesso**.
- Ambiente de homologação **pronto**.

## Caso algum critério não seja cumprido no DoR, posso iniciar o desenvolvimento?
Depois de todos os critérios serem descritos, é muito importante que todos sejam cumpridos, pois os itens que foram levantados são critérios importantes para se iniciar o desenvolvimento. Caso esses critérios não sejam cumpridos ou sejam deixados de lado, pode haver bloqueios e dificuldades na etapa de desenvolvimento. Dessa forma haverá retrabalho, prazos atrasados e estresse para todo time.
Imagine a seguinte situação utilizando o **Exemplo 2.** 
O critério **APIs dos parceiros prontas e validadas**, não está pronto e muito menos validado, é o último critério que resta para iniciar a sprint, porém há uma pressão externa para que o desenvolvimento seja iniciado.
Caso a história seja iniciada, todo o desenvolvimento e testes será feito e baseado em mocks e não nas apis. Tudo isso até que as APIs estejam prontas. Dessa forma, em algum momento haverá um retrabalho e pode até impactar o prazo e objetivo da sprint.
Resumindo a resposta da pergunta. **Caso algum crite´rio não seja cumprido no DoR, posso iniciar o desenvolvimento?** -> Poder pode, mas o risco é bem alto.

## Responsabilidades no Definition of Ready
### Quem é responsável por definir o DoR?
A responsabilida de definir o DoR é de todas as pessoas no time. É muito importante envolver todas as partes, pois assim podemos mapear os critérios de uma forma sistêmica, trazendo critério de documentação, testes, arquitetura, negócio e desenvolvimento.
Porém, depois disso feito, poucas mudanças devem ocorrer, aí basta seguir o DoR.
### Quem é responsável por tornar um critério Ready?
A responsabilidade por tornar um critério ready é das lideranças do projeto, por exemplo, Team Lead, Scrum Master, Tech Lead e Product Owner.
Obviamente o devTeam pode ser envolvido para ajudar a tornar os critérios Ready, mas as lideranças têm a responsabilidade de garantir e maperar os riscos, caso algum dos critérios não esteja Ready.

## Benefícios do DoR
Alguns exemplos:
- Evitar bloqueios na etapa de desenvolvimento;
- Cumprimento dos prazos estabelecidos, pois não teremos nenhuma surpresa, time motivado por enxergar seu código sendo entregue na data correta.
Além disso, ao longo do tempo haverá uma quedra do próprio Lead Time e do time-to-market. Pois agora o desenvolvimento é contínuo, com pouquíssimas interrupções e pessoas motivadas por enxergarem o progresso de suas entregas.

## Desafios do DoR
DoR pode ser uma ferramenta muito útil, porém ela pode se tornar uma muleta para seu time e gerar uma burocracia desnecessária ao invés de agilidade.
**A equipe pode inserir critérios do DoR que engessam o processo.** Por exemplo, APIs do parceiro disponibilizada pelo Swagger, porém o parceiro nunca documentou suas APIs pelo Swagger ou História documentada no padrão XYZ, porém a história é muito simples, talvez a documentação dê mais trabalho do que o próprio desenvolvimento.
Outro desafio comum é a **adesão do DoR**. Não é fazendo uma lista de itens que os problemas irão se resolver magicamente. É muito importante que o time compreenda a importância e como isso será benéfico para o seu dia a dia, até que a técnica vire parte da cultura do grupo. 
Com algumas repetições, o hábito de antecipar possíveis riscos será natural e muitos irão acabar sendo identificados na própria Inception. Comece pequeno, colete os feedbacks e vá evoluindo.

# Conceitos HTTP e APIs REST
## Microsserviços vc Monolito
As principais diferenças entre os dois e qual seria considerado melhor para cada projeto
### Monolito
- Principais vantagens: Fácil de entender, curva de aprendizado.
- Principais desvantagens: Escalabilidade, dependência entre componentes.
### Microsserviços
- Principais vantagens: Manutenção, escalabilidade.
- Principais desvantagens: Complexidade adicional, entendimento da arquitetura
## Introdução a APIs
### O que é uma API?
A sigla API ou 'Interface de Programação de Aplicações' refere-se a serviços que são uma forma de integrar sistemas, possibilitando
benefícios como a segurança dos dados, facilidade no intercâmbio entre informações com diferentes linguagens de programação e a
monetização de acessos.
## Vantagens ao usar APIs
### Redução de Custos:
- Não necessita de muitas aplicações para se conectar com outros serviços, o que melhora a eficiência do serviço.
### Segurança:
- Permite que apenas informações específicas sejam acessadas pelos usuários, usando de API keys e tokens para facilitar esse controle.
### Melhoria na Comunicação:
- Reforça e padroniza a maneira de comunicação dentro da empresa, melhorando as estratégias de desenvolvimento.
### Volume de dados:
- Consegue acessar somente informações necessárias entre aplicações, restringindo as que não tem utilidade.
### Controle de Acessos:
- Também melhora a segurança possibilitando identificar todos os acessos da aplicação.