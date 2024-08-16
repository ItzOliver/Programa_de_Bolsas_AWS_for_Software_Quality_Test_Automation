# Resumo dos Resultados Obtidos - Testes de Performance na Rota Carrinhos Utilizando K6
## Teste de Carga - #C1
- **Cenário do Teste:** O teste foi realizado com 150 VUs e teve duração de 1 minuto.
- **Resultado Esperado:** A API deve manter tempos de resposta aceitáveis (abaixo de 2 segundos) e uma baixa taxa de erros (menos de 5%).
- **Resultado Obtido:** A API teve como maior tempo de resposta 49 milissegundos, Throughput 144,21/seg e uma taxa de erro de 0%, o que demonstra que a API está dentro do tempo de resposta aceitável e dentro da taxa de erros aceitável.
- **Evidências:**

![[#C1]Metrics]()
![[#C1]Stats]()
![[#C1]Checks]()

## Teste de Estresse - #C2
- **Cenário do Teste:** O teste foi realizado com aumento gradual de 0 a 300 VUs e teve duração de 2 minutos. **Resultado Esperado:** API deve continuar a responder, sem falhas críticas.
- **Resultado Obtido:** A API teve como maior tempo de resposta 78 milissegundos, Throughput 54,58/seg e uma taxa de erro de 0%, o que demonstra que a API consegue operar bem durante períodos de extremo esforço.
- **Evidências:** 

![[#C2]Metrics]()
![[#C2]Stats]()
![[#C2]Checks]()

## Teste de Escalabilidade - #C3
- **Cenário do Teste:** O teste foi realizado com 100 VUs inicialmente com incremento de 50 VUs a cada 20 segundos até 300 VUs e teve duração de 2 minutos.
- **Resultado Esperado:** API deve escalar de forma eficiente sem degradação severa.
- **Resultado Obtido:** A API teve como maior tempo de resposta 117 milissegundos, Throughput 65,82/seg e uma taxa de erro de menos de 0%, o que demonstra que a API consegue operar bem com uma carga maior que o habitual.
- **Evidências:**

![[#C3]Metrics]()
![[#C3]Stats]()
![[#C3]Checks]()

## Teste de Pico - #C4
- **Cenário do Teste:** O teste foi realizado com 500 VUs e teve duração de 30 segundos.
- **Resultado Esperado:** A API deve suportar picos súbitos sem falhas críticas e retornar ao desempenho normal rapidamente após a diminuição da carga, mantendo um tempo de resposta menor que 2 segundos e taxa de erro inferior a 5%.
- **Resultado Obtido:** A API teve como maior tempo de resposta 63 milissegundos, Throughput 152,4/seg e uma taxa de erro de 0%, o que demonstra que a API consegue lidar com um aumento abrupto de requisições.
- **Evidências:**

![[#C4]Metrics]()
![[#C4]Stats]()
![[#C4]Checks]()

## Teste de Resistência - #C5
- **Cenário do Teste:** O teste foi realizado com 100 VUs e teve duração de 5 minutos.
- **Resultado Esperado:** A API deve manter um desempenho estável e aceitável ao longo do tempo, sem degradação significativa.
- **Resultado Obtido:** A API teve como maior tempo de resposta 138 milissegundos, Throughput 54,17/seg e uma taxa de erro de 0%, o que demonstra que a API consegue se manter estável por períodos de operação mais extensos. 
- **Evidências:** 

![[#C5]Metrics]()
![[#C5]Stats]()
![[#C5]Checks]()
