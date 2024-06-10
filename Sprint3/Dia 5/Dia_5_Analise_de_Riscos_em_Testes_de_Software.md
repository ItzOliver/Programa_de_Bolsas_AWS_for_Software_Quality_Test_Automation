# Risco & Impacto
## Análise de Riscos em Testes de Software
### Por onde começar a testar?
Identifique os riscos. Comece pelas partes mais importantes do negócio.
### Por que testar o que é mais importante primeiro?
Não há zero defeitos, logo, é importante que eu teste o que é mais importante para encontrar problemas que poderiam afetar o negócio.
## Testes Baseados em Riscos (Risk-Based Testing)
Os riscos estão presentes em diversas áreas de conhecimento, porém eles têm um significado distinto em cada contexto. A definição generalizada do termo, segundo a Wikipedia:
> É a possibilidade de algo ruim acontecer. Envolve incertezas/implicações sobre o efeito de uma atividade com relação a algo que os humanos valorizam, geralmente focando nas consequências negativas e indesejáveis.
No contexto de engenharia de software, os riscos podem estar relacionados diretamente ao gerenciamento do projeto como um todo ou voltados estritamente para o uso da aplicação, focando nas possíveis experiências negativas que serão percebidas pelos usuários do produto. É aí que entra a abordagem de testes baseada em riscos!
- Essa técnica checa a **probabilidade de ocorrência** de falhas na aplicação, utilizando casos de teste previamente criados para prever o impacto do que foi desenvolvido nos negócios do cliente. Além disso, partes **críticas** da aplicação são priorizadas, onde a probabilidade de ocorrer falhas é maior e onde também deve ser investido esforço na corrção de bugs críticos.
### Aplicação dos testes baseados em riscos
#### Passo 1: Identificação dos Riscos
Para identificas os ricos, podemos realizar:
- **Reuniões de brainstorming**, envolvendo, se possível, todas as áreas participantes do projeto, tanto a área técnica quanto a de negócios ou até mesmo o próprio usuário. O intuito da cerimônia é que cada um identifique um risco na aplicação/projeto.
- **Histórico de falhas/Riscos já conhecidos:** quantas vezes o deploy de determinada funcionalidade gerou bugs em produção? Qual a funcionalidade mais problemática nos últimos meses? Qual parte do sistema gera mais queixas dos usuários? Coletando essas informações, podemos ter uma noção básica de pontos da aplicação que precisam ser observados com mais cautela e possíveis riscos já identificados anteriormente, devido ao histórico de problemas no software.
- **Estratégia Inside Out:** fazer repetidas vezes a pergunta “o que pode dar errado aqui?”. As respostas devem levar em consideração as possíveis falhas que podem vir a existir na aplicação, situações de vulnerabilidade e também quem será impactado pela possível falha.
Estratégia Outside In: os riscos são explorados baseando-se em modelos de qualidade, a exemplo da NBR ISO/IEC 9126, e para cada tópico desse modelo é feita a pergunta: “O que pode acontecer se esse item não for atendido?”.
- **Avaliação da complexidade da aplicação ou funcionalidade:** devido ao nível de complexidade do que foi desenvolvido, o que pode dar errado? Como essa funcionalidade influencia no sistema? O código da funcionalidade está muito acoplado?
#### Passo 2: Priorização dos Riscos
Após a identificação dos riscos, eles devem ser priorizados. As abordagens comumente utilizadas são a relação probabilidade x impacto e a matriz de riscos.
##### Probabilidade X Impacto
Para cada risco é dado um valor, de 1 a 5 para a probabilidade e para o impacto. Quanto menor o valor, menor a probabilidade da situação ocorrer e menor o impacto para os usuários/negócios. Posteriormente, o valor da probabilidade e do impacto são multiplicados, resultando no fator de risco, o qual será utilizado para **priorização**. Os riscos com maior pontuação precisam de maior atenção e demandarão maior tempo para testes.
|  | Probabilidade | Impacto | Fator de Risco |
|:----------|:-------------:|:-------------:|:-------------:|
| Risco 4 | 4 | 3 | 12 |
| Risco 3 | 2 | 4 | 8 |
| Risco 2 | 5 | 1 | 5 |
| Risco 1 | 1 | 5 | 5 |

Geralmente, a probabilidade é definida pelo time técnico do produto e o impacto pela área de
##### Matriz de Riscos
É uma ferramenta de gerenciamento de riscos que permite de forma visual **identificar quais são os riscos que devem receber mais atenção**. Por se tratar de uma ferramenta para priorização de riscos, ela pode ser aplicada na etapa de avaliação de riscos. Dessa forma, a identificação dos riscos é uma etapa que deve ser feita antes da aplicação da ferramenta.
O grande diferencial da Matriz de Riscos é a facilidade que ela proporciona para visualizar informações sobre um determinado conjunto de riscos. Por se tratar de uma ferramenta gráfica, se torna fácil **identificar quais riscos** irão afetar menos ou mais a organização, possibilitando a tomada de decisões e a realização de medidas preventivas para tratar esses riscos.
A matriz de risco consiste em uma matriz (tabela) orientada por duas dimensões: probabilidade e impacto. Por meio dessas duas dimensões, é possível **calcular e visualizar a classificação do risco**.
A matriz de riscos segue a mesma linha de raciocínio da tabela anterior, no entanto são utilizadas as **palavras-chave** baixo (low), médio (medium) e alto (high) ao invé de valores para determinar a priorização das atividades, conforme a figura abaixo:

&nbsp;

![Matriz de Riscos](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint3/src/MatrizDeRiscos.png?raw=true)

&nbsp;

Nessa figura, os riscos foram priorizados de acordo com os valores da tabela anterior.
Visto que as duas dimensões de uma Matriz de Riscos são compostas pela probabilidade e impacto, a seguir é apresentado de forma mais detalhada a definição dessas duas variáveis.
###### Probabilidade
A probabilidade (eixo vertical) consiste na medição de o quão provável é a ocorrência do risco.
- Muito baixo = 1 a 10%;
- Baixo = 11% a 30%;
- Moderado = 31% a 50%;
- Alto = 51% a 70%;
- Muito alto = 71% a 90%.
###### Impacto
O impacto se refere às consequências do risco caso ele venha a ocorrer.
- Muito baixo = Os ricos possuem consequências pouco significativas;
- Baixo = Os riscos possuem consequências reversíveis em curto e médio prazo com custos pouco significativos;
- Moderado = Os riscos possuem consequências reversíveis em curto e médio prazo com custos baixos;
- Alto = Os riscos possuem consequências reversíveis em curto e médio prazo com custos altos;
- Muito alto = Os riscos possuem consequência irreversíveis ou com custos inviáveis.
###### Quando utilizar a Matriz de Riscos?
O risco é o efeito da incerteza sobre um determinado objetivo ou evento.  Como o próprio nome da ferramenta indica, a Matriz de Riscos deve ser utilizada na avaliação de qualquer risco, desde riscos organizacionais de processos até riscos de um projeto, por exemplo. Em cenários com grandes quantidades de riscos identificados, a Matriz de Riscos é uma ferramenta eficaz para direcionar o trabalho, ou seja, para ajudar a saber por quais riscos começar a tratativa.
Um ponto importante e que vale ser relembrado é que um risco pode ser tanto uma ameaça quanto uma oportunidade. Uma ameaça é um risco “ruim”, uma fonte de perdas, ou seja, é um risco que, se incidir, gera danos negativos à organização ou projeto. Já uma oportunidade é um risco “bom”, uma fonte de ganhos que a organização pode ter para melhorar seus resultados (impacto positivo). Diante desse cenário, pode-se utilizar a Matriz de Riscos para avaliar ameaças e oportunidades, para tal basta expandir a matriz de risco.
#### Passo 3: Definir as estratégias para a mitigação dos riscos
Com os riscos devidamente identificados, sabemos onde investir esforços em testes. Usando o exemplo anterior, podemos associar cada módulo do sistema a um risco específico, por exemplo, o risco 1 diz respeito ao módulo 1.
Os riscos 4 e 3 tiveram as maiores pontuações, então eles devem ser o foco da estratégia. O plano de mitigação pode englobar:
- Definir quais técnicas de testes serão utilizadas para cobrir os riscos;
- Criar casos de testes especificamente voltados para cobrir os riscos encontrados;
- Priorizar a execução de todos os casos de testes associados à esses módulos;
- Realizar uma análise mais aprofundada dos impactos na modificação desses dois módulos no ambiente de produção, levando em consideração o histórico de falhas;
- Negociar o aumento do prazo para a entrega do projeto, visto que foram detectados pontos críticos nos módulos 3 e 4 (esse ponto pode estar diretamente relacionado ao anterior).
## Testes Baseados em Riscos no Contexto Ágil
Em um artigo da InfoQ, Ben Linders relata a experiência de Csaba Szökőcs na implementação de testes baseados em riscos em um time ágil que utiliza o Scrum. 
Csaba afirma que os times tentaram coletar os riscos de cada história antes do planejamento da sprint e que isso os ajudou a como pensar em testar as atividades antes que as histórias fossem implementadas. Depois de coletados, dois profissionais priorizam os riscos através da relação probabilidade x impacto e todos os pontos críticos com alta exposição devem ser tratados de alguma forma.
Esse tipo de teste normalmente é adotado quando se tem um curto espaço de tempo para testar e é feito por equipes de teste para encontrar os casos mais críticos que precisam ser testados, onde os testadores executam testes separados e independentes baseados nos riscos identificados para quase todas as histórias de usuários.
## Prós e Contras da Adoção dos Testes Baseados em Riscos
### Vantagens
- Os itens mais críticos são desenvolvidos e testados primeiro, o que reduz o risco geral no projeto;
- Se o prazo for apertado, existe uma diretriz para guiar o que deve ser testado e o que não deve ser testado;
- A qualquer momento, pode-se indicar novos riscos no projeto. Dessa forma os riscos podem ser priorizados novamente, levando em conta os itens mais críticos que ainda não foram testados;
- Os riscos identificados são uma informação valiosa para todos os envolvidos no projeto e podem ser utilizadas em negociações.
### Desvantagens
- Com essa abordagem, partes do sistema não serão testadas intencionalmente;
- Os valores atribuídos aos riscos podem ser subjetivos, por isso é necessário discutir com o time os valores propostos;
- Pode aumentar a carga de documentação.
## Riscos X Incertezas
James Thomas, em seu artigo publicado no Ministry of Testing, traz uma reflexão sobre relação entre risco e incerteza na aplicação da abordagem de testes baseados em riscos e todo o conteúdo dessa seção é baseado nesse artigo.
Segundo Frank Knight:
> Riscos: são reservados para cenários em que podem ser medidos quantitativamente, geralmente usando a probabilidade;
> Incerteza: situações que não são quantificáveis ou medidas, com as ferramentas que o time tem atualmente.

Sabendo das diferenças, podemos construir uma matriz que traz a relação entre esses dois conceitos, conforme a figura abaixo:
| | Conhecido | Desconhecido |
|:----------|:-------------:|:-------------:|
| Conhecido | Coisas que estamos cientes e entendemos | Coisas que estamos cientes, mas não entendemos |
| Desconhecido | Coisas que entendemos, mas não temos consciência | Coisas que não estamos cientes nem entendemos |

James afirma que os riscos estão associados ao primeiro quadrante (known known), onde todo o time está ciente do problema e entende todas as suas nuances a ponto de medi-lo quantitativamente.
Em todos os outros quadrantes, há um nível de incerteza que pode ser desvendado com as atividades de testes e análise mais aprofundada da situação.
## Conclusão
Os testes baseados em riscos ajudam a priorizar esforços em histórias e partes críticas da aplicação e existem diversas formas de como colocar essa técnica em prática.