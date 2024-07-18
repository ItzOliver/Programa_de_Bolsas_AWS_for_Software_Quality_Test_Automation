# Resumo dos Resultados Obtidos - Testes de Performance na Rota Usuários
## Teste de Carga - TP1
- **Cenário do Teste:** O teste foi realizado com 800 Threads, Período de Ramp-up de 20 de segundos e duração de 120 segundos.
- **Resultado Esperado:** A API deve manter tempos de resposta aceitáveis (abaixo de 2 segundos) e uma baixa taxa de erros (menos de 5%).
- **Resultado Obtido:** A API teve como maior tempo de resposta 3133 milissegundos (3,1 segundos) e uma taxa de erro de 0%, o que demonstra que a API está acima do tempo de resposta aceitável mas dentro da taxa de erros aceitável.
- **Evidências:**

[TabelaCarga]()

[GraficoCarga]()

## Teste de Estresse - TP2
- **Cenário do Teste:** O teste foi realizado com 420 Threads, Período de Ramp-up de 20 segundos e duração de 60 segundos.
- **Resultado Esperado:** A API deve tentar se manter dentro de um tempo de resposta aceitável e taxa de erros não pode ultrapassar um valor de 5% mesmo sob extremo estresse.
- **Resultado Obtido:** A API teve como maior tempo de resposta 54 milissegundos e uma taxa de erro de 0%, o que demonstra que a API consegue operar bem durante períodos de extremo esforço.
- **Evidências:**

[TabelaEstresse]()

[GraficoEstresse]()

## Teste de Escalabilidade - TP3
- **Cenário do Teste:** 960 Threads, Período de Ramp-up de 24 segundos e duração de 120 segundos.
- **Resultado Esperado:** A API deve demonstrar capacidade de escalonamento com aumento linear ou sub-linear no tempo de resposta e taxa de erro.
- **Resultado Obtido:** O hardware não conseguiu sustentar 960 Threads e encerrou o processo.
- **Evidências:** Não há.

## Teste de Pico - TP4
- **Cenário do Teste:** 400 Threads, Período de Ramp-up de 1 segundo e duração de 2 segundos.
- **Resultado Esperado:** A API deve suportar picos súbitos sem falhas críticas e retornar ao desempenho normal rapidamente após a diminuição da carga.
- **Resultado Obtido:** A API teve como maior tempo de resposta 1614 milissegundos (1,6 segundos) e uma taxa de erro de 0%, o que demonstra que a API consegue lidar com um número abrupto de requisições.
- **Evidências:**

[TabeloPico]()

[GraficoPico]()

## Teste de Resistência - TP5
- **Cenário do Teste:** 100 Threads, Período de Ramp-up de 1 segundo e duração de 600 segundos.
- **Resultado Esperado:** A API deve manter um desempenho estável e aceitável ao longo do tempo, sem degradação significativa.
- **Resultado Obtido:** A API teve como maior tempo de resposta 1021 milissegundos (1 segundo) e uma taxa de erro de 0%, o que demonstra que a API consegue se manter estável por períodos de operação mais extensos. 
- **Evidências:** 

[TabelaResistencia]()

[GraficoResistencia]()

## Teste de Concorrência - TP6
- **Cenário do Teste:** 50 Threads, Período de Ramp-up de 5 segundos e duração de 60 segundos.
- **Resultado Esperado:** A API deve gerenciar eficientemente operações concorrentes com tempos de resposta aceitáveis e uma baixa taxa de erros.
- **Resultado Obtido:** A API teve como maior tempo de resposta 491 milissegundos e uma taxa de erro de 0%, o que demonstra que operações concorrentes conseguem ser processadas de forma eficiente.
- **Evidências:**

[TabelaConcorrencia]()

[GraficoConcorrencia]()

## Teste de Capacidade - TP7
- **Cenário do Teste:** 600 Threads, Período de Ramp-up de 10 segundos e duração de 60 segundos.
- **Resultado Esperado:** A API deve conseguir manter se manter no mesmo nível de desempenho ou próximo dele mesmo com uma quantidade usuários maior que o normal.
- **Resultado Obtido:** A API teve como maior tempo de resposta 4851 milissegundos e uma taxa de erro de 0%, o que demonstra que a API fica acima do tempo esperado quando lida com um número maior de requisições do que o normal mas consegue manter a taxa de falhas em 0%.
- **Evidências:**

[TabelaCapacidade]()

[GraficoCapacidade]()