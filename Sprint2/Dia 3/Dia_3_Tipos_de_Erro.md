# Tipos de erros (backend)
## Gravidade:
- A medida de quanto o bug é problemática e o grau do dano que o bug pode causar ao programa.
- O nível de Gravidade ajuda a identificar o quanto e que tipo de dano pode ser causado pelo defeito: perigoso, destrutivo, degradado e sem solução alternativa.
## Prioridade:
- Quão rápido e quão perfeitamente o bug é erradicado;
- Se o programa tiver um erro a prioridade será remove-lo o mais rápido possível;
- A detecção de erros é feita pelos testadores que, após a detcção, enviam o programa de volta ao desenvolvedor para que o erro seja removido o mais rápido possível;
- A prioridade do defeito é decidida pelo gerente do programa ou pelo líder do projeto;
- Em resumo a prioridade é a avaliação de quão prejudicial é o bug e de quão importante é corrigi-lo, deve ser fixado com base na importância do requisito.
## Risco:
- Risco é qualquer evento improvável e incerto com impacto possitivo ou negativo no sucesso do projeto;
- Os eventos imprevisíveis podem afetar os negócios, o custo, a qualidade do produto e a pontualidade na entrega;
- Primeiramente os fatores são identificados e em seguida suas categorias são criadas com base na probabilidade e no impacto;
- Os riscos são identificados por vários meios, tais como;
    - Workshops;
    - Brainstorm;
    - Diagrama de causa e efeito;
    - Entrevista de especialistas no assunto.
- A análise de risco é usada para filtrar e analisar o risco com base em seu impacto nos negócios;
    - Uma matriz de análise de risco é criada para definir a probabilidade vs o impacto do risco.
## Causado por Documentação:
- Uma documentação mal escrita, requisitos que geram dúvidas, um mockup da tela não feito corretamente -> erros causados por documentação;
- um Swagger errado pode causar falhas no teste;
## Causado por Massa de Dados:
- Massa de dados é usada para validar e avaliar a aceitabilidade dos limites operacionais;
- Quando não temos limites bem definidos temos um problema;
- Se já sabemos quais são os limites do sistema podemos testar e validar massa de dados;
- Por exemplo:
    - Um site que suporta 1500 cadastros;
    - Se for feito um teste de 150 cadastros não é possível saber se o sistema conseguiria um número maior que esse.