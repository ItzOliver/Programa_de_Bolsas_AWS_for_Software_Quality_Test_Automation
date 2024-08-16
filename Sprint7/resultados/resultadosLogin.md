# Resumo dos Resultados Obtidos - Testes de Performance na Rota Login Utilizando K6
## Teste de Carga - #L1
- **Cenário do Teste:** O teste foi realizado com 100 VUs e teve duração de 1 minuto.
- **Resultado Esperado:** A API deve manter tempos de resposta aceitáveis (abaixo de 2 segundos) e uma baixa taxa de erros (menos de 5%).
- **Resultado Obtido:** A API teve como maior tempo de resposta 365 milissegundos, Throughput 1043,55/seg e uma taxa de erro de 0%, o que demonstra que a API está dentro do tempo de resposta aceitável e dentro da taxa de erros aceitável.
- **Evidências:**

![[#L1]Metrics](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23L1%5DMetrics.png?raw=true)
![[#L1]Stats](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23L1%5DStats.png?raw=true)
![[#L1]Checks](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23L1%5DChecks.png?raw=true)

## Teste de Pico - #L2
- **Cenário do Teste:** O teste foi realizado com aumento gradual de 0 a 300 VUs e teve duração de 2 minutos. **Resultado Esperado:** API deve continuar a responder, sem falhas críticas.
- **Resultado Obtido:** A API teve como maior tempo de resposta 797 milissegundos, Throughput 941,18/seg e uma taxa de erro de 0%, o que demonstra que a API não consegue operar bem durante períodos de extremo esforço por passar bastante do tempo de resposta padrão.
- **Evidências:** 

![[#L2]Metrics](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23L2%5DMetrics.png?raw=true)
![[#L2]Stats](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23L2%5DStats.png?raw=true)
![[#L2]Checks](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23L2%5DChecks.png?raw=true)

## Teste de Resistência - #L3
- **Cenário do Teste:** O teste foi realizado com 100 VUs inicialmente com incremento de 50 VUs a cada 20 segundos até 300 VUs e teve duração de 2 minutos.
- **Resultado Esperado:** API deve escalar de forma eficiente sem degradação severa.
- **Resultado Obtido:** A API teve como maior tempo de resposta 389 milissegundos, Throughput 922,41/seg e uma taxa de erro de 0%, o que demonstra que a API consegue operar bem com uma carga maior que o habitual.
- **Evidências:**

![[#L3]Metrics](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23L3%5DMetrics.png?raw=true)
![[#L3]Stats](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23L3%5DStats.png?raw=true)
![[#L3]Checks](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23L3%5DChecks.png?raw=true)

## Teste de Escalabilidade - #L4
- **Cenário do Teste:** O teste foi realizado com 500 VUs e teve duração de 30 segundos.
- **Resultado Esperado:** A API deve suportar picos súbitos sem falhas críticas e retornar ao desempenho normal rapidamente após a diminuição da carga, mantendo um tempo de resposta menor que 2 segundos e taxa de erro inferior a 5%.
- **Resultado Obtido:** A API teve como maior tempo de resposta 617 milissegundos, Throughput 795,24/seg e uma taxa de erro de 0%, o que demonstra que a API não consegue lidar com um aumento abrupto de requisições.
- **Evidências:**

![[#L4]Metrics](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23L4%5DMetrics.png?raw=true)
![[#L4]Stats](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23L4%5DStats.png?raw=true)
![[#L4]Checks](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23L4%5DChecks.png?raw=true)

## Teste de Estresse - #L5
- **Cenário do Teste:** O teste foi realizado com 100 VUs e teve duração de 5 minutos.
- **Resultado Esperado:** A API deve manter um desempenho estável e aceitável ao longo do tempo, sem degradação significativa.
- **Resultado Obtido:** A API teve como maior tempo de resposta 2460 milissegundos (2,4 segundos), Throughput 1011,6/seg e uma taxa de erro de 0%, o que demonstra que a API consegue se manter estável por períodos de operação mais extensos. 
- **Evidências:** 

![[#L5]Metrics](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23L5%5DMetrics.png?raw=true)
![[#L5]Stats](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23L5%5DStats.png?raw=true)
![[#L5]Checks](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23L5%5DChecks.png?raw=true)
