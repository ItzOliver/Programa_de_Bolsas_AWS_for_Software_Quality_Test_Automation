# Testes Exploratórios - Introdução
## Automatizado Vs Manual
- Testes manuais são mais lentos de se executar;
- Os testes não são sustentáveis de forma manual pois à medida que o desenvolvimento aumenta o esforço de teste também aumenta e, a partir de certo ponto. para ocnseguir garantir a qualidade o esforço de teste se torna maior que o desenvolvimento;
- Testes automatizados demandam um esforço maior para serem implementados, mas depois de implementados eles retornam o valor do esforço investido ao longo do tempo;
- Em determinado ponto, o esforço para fazer testes automatizados se torna menor do que o esforço para fazer testes manuais;

![Pirâmide de testes](https://martinfowler.com/bliki/images/testPyramid/test-pyramid.png)

> "Se os testes forem julgados pela quantidade de vezes que são realizados, automação ganhará sempre. Se o julgamento for baseado na qualidade dos testes executados, os manuais levam alguma vantagem." - James Wittaker
## Roteiros Vs Exploratórios
| Testes baseados em roteiros | Testes Exploratórios |
|:---------|:---------|
| Executado seguindo um roteiro | Executado de acordo com o propósito definido |
| Os passos são bem definidos | Apenas um direcionamento inicial |
| A fase de planejamento se dá na criação dos roteiros, não durante a execução do teste | O planejamento se dá durante a execução do teste |
| Leva o tempo necessário para executar todos os passos | Possui um limite de tempo pré-determinado |
| Previne erros | Encontra erros |
| Pode ser automatizado | Não pode ser automatizado (ainda) |
| Como resultado final, temos "Sucesso" ou "Falha". | Como resultado final, temos: - "Sucesso" ou "Falha"; - Dúvidas e observações realizadas; - Mais entendimento e ideias para outras execuções. |

> Two Sides of Testing: Tested = Checked + Explored. - Elizabeth Hendrickson
## Automação é nossa amiga
- Automação ajuda muito em testes manuais em alguns casos, como no auxílio para gerenciamento de massa de dados;
- Automação pode ajudar não apenas em um teste de fato, ela pode facilitar o trabalho em alguns casos;
- Testes manuais ajudam na automação pois através deles é possível encontrar cenários que não foram levantando anteriormente.

> "Use automação para as atividades que o computador é bom (Tarefas repetitivas) e use humanos para o que nós somos bons (ver, pensar e lidar com o inesperado)." - Lisa Crispin
## Gerencimaneto de massa de dados
Teste: 
([Entrada + Ação] Ambiente) = Resultado
- Um teste é a comparação do resultado esperado com o resultado obtido.
## Quando parar de testar?
- Deadlines
- Fim dos Recursos
- Cobertura de testes atingir a meta
- Taxa de erros reduzir até um determinado patamar
- Liberar a aplicação de maneira mais controlado: Alpha / Beta / RC

> "A meta é chegar ao ponto em que tudo que não foi feito é menos importante do que as coisas que foram feitas." - James A. Whittaker
## Planejamento de testes
- Planeje antecipadamente
    - Casos de teste > AQUI > ???
    - O que, como, por que?
- Crie sessões com tempo pré-determinado
- Evite distrações