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