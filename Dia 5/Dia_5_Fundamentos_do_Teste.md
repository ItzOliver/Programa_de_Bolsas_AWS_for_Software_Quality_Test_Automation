# Como Gerar Qualidade
- A atividade de testar engloba uma variedade de artefatos, que juntos geram a qualidade do produto. Podemos citar:
    - Requisitos atendidos;
    - Confiança;
    - Identificar defeitos;
    - Tomadas de decisão;
    - Reduzir riscos;
    - Conformidades contratuais e regulatórias.

## Fundamentos do teste
### Estático vs Dinâmico
| Teste Dinâmico | Teste Estático |
|:----------:|:-------------:|
| - Necessita que o software seja executado | - Revisão, inspeção e análise estática dos artefatos |
| - É o mais utilizado pelo mercado | - Qualquer documento do projeto pode ser avaliado desta forma |
| - Custo tende a ser mais alto |  |
### Teste e Depuração
- Teste: Execução dos testes pode mostrar falhas causadas por defeitos no software.
- Depuração do código: É a atividade de desenvolvimento que localiza, analise e corrige esses defeitos.
- Testes de confirmação: Verificam se as correções resolveram os defeitos

&nbsp;

- Por via de regra, o mais usual é que o testador foque nas atividades de 'teste' e 'teste de confirmação', enquanto o desenvolvedor fique com a responsabilidade de depurar o código.
### EFICIÊNCIA X EFICÁCIA
- O desafio do teste de software é alcançar: Eficácia e Eficiência.
- O teste que encontra defeitos, cria a oportunidade de melhorar a qualidade do produto.
### TESTE = QUALIDADE?
-  O teste só aumenta a qualidade do software quando:
    - Defeitos são encontrados e corrigidos;
    - Defeitos são encontrados e corrigidos;
    - Requisitos não-funcionais (confiabilidade, usabilidade, escalabilidade, etc) são verificados.
- A qualidade custa menos!
    - Reduzimos drasticamente o retrabalho;
    - Reduzimos custos de manutenção e os chamados de suporte;
    - Obtemos um software bem estruturado que facilita novos projetos.
Técmicas aplicadas com o nível apropriado de experiência em testes + Técnicas aplicadas nos pontos certos do ciclo de vida de desenvolvimento de software = Redução da frequência de entregas problemáticas.
### Erro, Defeito e Falha:
Erro: 
- Ação humana que produz um resultado incorreto.
- Pode ser cometido em qualquer fase do desenvolvimento de software.
Defeito:
- Uma imperfeição ou deficiência em um produto de trabalho que faz com que ele não atenda seus requisitos ou especificações.
- É o resultado do erro cometido
Falha:
- Um evento no qual um componente ou sistema não executa uma função necessária dentro dos limites especificados.

&nbsp;

- Um software pode conter defeitos e nunca falhar;
- Falha é um evento;
- Defeito é um estado do software causado por um erro;
- Cuidado com falsos positivos;
- Cuidado com falsos negativos.
## Os Sete Princípios do Teste
### 1. O teste mostra a prenseça de defeitos
- Testar não é provar que o software está correto;
- O teste reduz a probabilidade de defeitos não descobertos permanecerem no software;
- Mesmo que não sejam encontrados defeitos, isso não é prova de que eles não existem.
### 2. Testes exaustivos são impossíveis
- Teste o quanto puder, mas testes exaustivos são impossíveis;
- Testes exaustivos custam caro;
- Testes exaustivos tomam muito tempo.
### 3. O teste inicial economiza tempo e dinheiro
- As atividades de teste precisam iniciar o mais cedo possível no ciclo de vida do desenvolvimento;
- Quanto antes iniciarem as atividades de teste, maior a probabilidade de não ocorrerem propagações de falhas.
### 4. Defeitos se agrupam
- Um pequeno número de módulos geralmente contém a maioria dos defeitos
    - Princípio de pareto: 20% das causas resultam em 80% dos efeitos.
### 5. Cuidado com o paradoxo do pesticida
- Os testes precisam ser regularmente atualizados, caso contrário eles se tornam ineficazes, tal qual um pesticida aplicado numa praga que já evoluiu e não é mais afetada por seus efeitos.
### 6. O teste depende do contexto
- O teste precisa ser realizado de forma diferente em diferentes domínios de aplicativos.
### 7. Ausência de erros é uma ilusão
- Independentemente de quantos defeitos foram encontrados e corrigidos, isso não significa necessariamente que os usuários estejam satisfeitos com o produto ou que ele atenderá ao seu propósito.
## Fatores Contextuais
- Conhecimento que pode ser usado para análise e modelagem do teste:
    - Exemplos:
        - Requisitos do projeto / produto
        - Histórias de usuário
        - Requisitos não funcionais
        - Especificações funcionais e/ou técnicas
        - Lista de navegadores que devem ser suportados
        - Ambientes operacionais
        - Dispositivos móveis;
## Atividades de Teste
**Planejamento do teste**
- Etapa para definir os propósitos e a abordagem do teste;
- Criação do plano de teste (cronograma, exceções, recursos necessários).
- Definir o escopo do teste;
- Selecionar as métricas (report diário por exemplo);
- Determinar o nível de detalhamento do teste.
**Análise do teste**
- Definir as condições de teste associadas à base de teste analisada na etapa anterior.
    - Condição de Teste: Um aspecto da base do teste que é relevante para atingir os objetivos específicos de teste.
        - Determina "o que testar" em termos dos critérios de cobertura mensuráveis.
**Modelagem do teste**
- Elaborar os casos de teste com base nas condições de teste levantadas na tarefa anterior.
- Priorizar o conjunto de casos de teste;
- Identificar os dados de teste (massa de dados);
- Projetar o ambiente de teste.
**Implementação do teste**
- Responde à pergunta: "Agora temos tudo para executar os testes?";
- Criar os scripts de teste automatizados;
- Criar a suíte de testes;
- Preparar os dados de teste e garantir que eles sejam carregados corretamente no ambiente de teste.
- Os produtos de trabalho de implementação do teste incluem:
    - Os procedimentos de teste e seu sequenciamento;
    - As suítes de teste;
    - Um cronograma de execução do teste.
**Execução do teste**
- Responde à pergunta: "Agora temos tudo para executar os testes?";
- Criar os scripts de teste automatizados;
- Criar a suíte de testes;
- Preparar os dados de teste e garantir que eles sejam carregados corretamente no ambiente de teste;
- Executar teste de confirmação e teste de regressão;
- Os produtos de trabalho da execução incluem:
    - Status dos casos de teste;
    - Relatórios de defeitos;
    - Reports diários;
    - Métricas consolidadas de encerramento dos testes.
**Conclusão do teste**
- Métricas consolidadas de encerramento dos testes;
- Lançamento do software;
- Verificar se todos os relatórios de defeitos estão fechados;
- Analisarlições aprendidas;
- Melhorar a maturidade dos processos
## A psicologia do Teste
O desenvolvimento de software, incluindo os testes de software, envolve seres humanos. -> Portanto, a \_psicologia humana\_ tem efeitos importantes no teste de software.
| Desenvolvedor | Testador |
|:----------:|:-------------:|
| - Projeta e contrói um produto | - Verifica e Valida o produto. Encontra defeitos antes da liberação |
| - Tem dificuldade de aceitar que seu código possa estar errado! | - Pode ser visto como destrutivo e tem o potencial de ofender aqueles cujo trabalho está sob revisão |
- Um bom testador deve ter respeito com sensibilidade e ser atencioso com os outros ao fornecer feedback ou discutir falhas.
## Conclusão
> Testar é o processo consiste em todas as atividades de ciclo de vida, estáticas e dinâmicas, relacionadas ao planejamento, preparação e avaliação de produtos de software e produtos de trabalho relacionados, para determinar se satisfazem os requisitos especificados, demonstrando que são adequados à sua finalidade e para detectar defeito.

&nbsp;

- A confiabilidade do software aumenta à medida em que ele é executado ao longo do tempo, sem apresentarfalhas;
- Testes de regressão precisam de atualizações de rotina;
- Quanto maior o risco de perda, maior o investimento em testes;
- Ao invés de testar tudo, é melhor criar uma estratégia de teste que busque priorizar determinadas partes do sistema;
- Dar boa cobertura de testes na aplicação;
- Respeitar a estimativa estipulada.
- Um software sem erros não é uma boa razão para lançar em produção;
- Encontrar e corrigir defeitos não ajuda se:
    - O produto não for utilizável;
    - O produto não atender às necessidades e expectativas dos usuários.
- Teste de software não é um trabalho aleatório até descobrir bugs, mas um processo para assegurar a realização de um teste eficaz.

&nbsp;

**Conteúdo desenvolvido com base no material fornecido no Dia 5 - Fundamentos do teste de software**