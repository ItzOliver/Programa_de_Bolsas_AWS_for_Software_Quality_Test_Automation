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
#### Passo 1