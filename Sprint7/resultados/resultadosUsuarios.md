# Resumo dos Resultados Obtidos - Testes de Performance na Rota Usuários Utilizando K6
## Teste de Carga - #U1
- **Cenário do Teste:** O teste foi realizado com 100 VUs e teve duração de 1 minuto.
- **Resultado Esperado:** A API deve manter tempos de resposta aceitáveis (abaixo de 2 segundos) e uma baixa taxa de erros (menos de 5%).
- **Resultado Obtido:** A API teve como maior tempo de resposta 1875 milissegundos (1,8 segundos), Throughput 912,25/seg e uma taxa de erro de 99%, o que demonstra que a API está abaixo do tempo de resposta aceitável mas fora da taxa de erros aceitável.
- **Evidências:**

![[#U1]Metrics](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23U1%5DMetrics.png?raw=true)
![[#U1]Stats](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23U1%5DStats.png?raw=true)
![[#U1]Checks](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23U1%5DChecks.png?raw=true)

## Teste de Estresse - #U2
- **Cenário do Teste:** O teste foi realizado com aumento gradual de 0 a 300 VUs e teve duração de 2 minutos. **Resultado Esperado:** API deve continuar a responder, sem falhas críticas.
- **Resultado Obtido:** A API teve como maior tempo de resposta 774 milissegundos, Throughput 659,12/seg e uma taxa de erro de 0%, o que demonstra que a API consegue operar bem durante períodos de extremo esforço.
- **Evidências:** 

![[#U2]Metrics](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23U2%5DMetrics.png?raw=true)
![[#U2]Stats](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23U2%5DStats.png?raw=true)
![[#U2]Checks](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23U2%5DChecks.png?raw=true)

## Teste de Escalabilidade - #U3
- **Cenário do Teste:** O teste foi realizado com 100 VUs inicialmente com incremento de 50 VUs a cada 20 segundos até 300 VUs e teve duração de 2 minutos.
- **Resultado Esperado:** API deve escalar de forma eficiente sem degradação severa.
- **Resultado Obtido:** A API teve como maior tempo de resposta 2434 milissegundos (2,4 segundos), Throughput 802,51/seg e uma taxa de erro de 0%, o que demonstra que a API consegue operar relativamente bem com uma carga maior que o habitual.
- **Evidências:**

![[#U3]Metrics](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23U3%5DMetrics.png?raw=true)
![[#U3]Stats](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23U3%5DStats.png?raw=true)
![[#U3]Checks](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23U3%5DChecks.png?raw=true)

## Teste de Pico - #U4
- **Cenário do Teste:** O teste foi realizado com 500 VUs e teve duração de 30 segundos.
- **Resultado Esperado:** A API deve suportar picos súbitos sem falhas críticas e retornar ao desempenho normal rapidamente após a diminuição da carga, mantendo um tempo de resposta menor que 2 segundos e taxa de erro inferior a 5%.
- **Resultado Obtido:** A API teve como maior tempo de resposta 2558 milissegundos (2,5 segundos), Throughput 528,15/seg e uma taxa de erro de 0%, o que demonstra que a API consegue lidar relativamente bem com um aumento abrupto de requisições.
- **Evidências:**

![[#U4]Metrics]()
![[#U4]Stats]()
![[#U4]Checks]()

## Teste de Resistência - #U5
- **Cenário do Teste:** O teste foi realizado com 100 VUs e teve duração de 5 minutos.
- **Resultado Esperado:** A API deve manter um desempenho estável e aceitável ao longo do tempo, sem degradação significativa.
- **Resultado Obtido:** A API teve como maior tempo de resposta 903 milissegundos, Throughput 781,84/seg e uma taxa de erro de 0%, o que demonstra que a API consegue se manter estável por períodos de operação mais extensos. 
- **Evidências:** 

![[#U5]Metrics]()
![[#U5]Stats]()
![[#U5]Checks]()
