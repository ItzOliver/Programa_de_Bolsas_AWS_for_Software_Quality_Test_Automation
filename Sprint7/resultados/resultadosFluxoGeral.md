# Resumo dos Resultados Obtidos - Testes de Performance de Fluxo Geral Utilizando K6
## Teste de Carga - #FG1
- **Cenário do Teste:** O teste foi realizado com 100 VUs e teve duração de 1 minuto.
- **Resultado Esperado:** A API deve manter tempos de resposta aceitáveis (abaixo de 2 segundos) e uma baixa taxa de erros (menos de 5%).
- **Resultado Obtido:** A API teve como maior tempo de resposta 3712 milissegundos (3,7 segundos), Throughput 501,18/seg e uma taxa de erro de 0%, o que demonstra que a API está acima do tempo de resposta aceitável mas dentro da taxa de erros aceitável.
- **Evidências:**

![[#FG1]Metrics](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23FG1%5DMetrics.png?raw=true)
![[#FG1]Stats](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23FG1%5DStats.png?raw=true)
![[#FG1]Checks](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23FG1%5DChecks.png?raw=true)

## Teste de Estresse - #FG2
- **Cenário do Teste:** O teste foi realizado com aumento gradual de 0 a 300 VUs e teve duração de 2 minutos. **Resultado Esperado:** API deve continuar a responder, sem falhas críticas.
- **Resultado Obtido:** A API teve como maior tempo de resposta 10158 milissegundos (10,58 segundos), Throughput 195,33/seg e uma taxa de erro de 0%, o que demonstra que a API consegue operar bem durante períodos de extremo esforço.
- **Evidências:** 

![[#FG2]Metrics](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23FG2%5DMetrics.png?raw=true)
![[#FG2]Stats](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23FG2%5DStats.png?raw=true)
![[#FG2]Checks](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23FG2%5DChecks.png?raw=true)

## Teste de Escalabilidade - #FG3
- **Cenário do Teste:** O teste foi realizado com 100 VUs inicialmente com incremento de 50 VUs a cada 20 segundos até 300 VUs e teve duração de 2 minutos.
- **Resultado Esperado:** API deve escalar de forma eficiente sem degradação severa.
- **Resultado Obtido:** A API teve como maior tempo de resposta 6343 milissegundos (6,3 segundos), Throughput 260,9/seg e uma taxa de erro de 0%, o que demonstra que a API consegue operar relativamente bem com uma carga maior que o habitual ficando apenas com um tempo de resposta maior que o esperado.
- **Evidências:**

![[#FG3]Metrics](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23FG3%5DMetrics.png?raw=true)
![[#FG3]Stats](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23FG3%5DStats.png?raw=true)
![[#FG3]Checks](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23FG3%5DChecks.png?raw=true)

## Teste de Pico - #FG4
- **Cenário do Teste:** O teste foi realizado com 500 VUs e teve duração de 30 segundos.
- **Resultado Esperado:** A API deve suportar picos súbitos sem falhas críticas e retornar ao desempenho normal rapidamente após a diminuição da carga, mantendo um tempo de resposta menor que 2 segundos e taxa de erro inferior a 5%.
- **Resultado Obtido:** A API teve como maior tempo de resposta 11963 milissegundos (11,96 segundos), Throughput 350,43/seg e uma taxa de erro de 0%, o que demonstra que a API consegue operar bem durante períodos de extremo esforço.
- **Evidências:**

![[#FG4]Metrics](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23FG4%5DMetrics.png?raw=true)
![[#FG4]Stats](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23FG4%5DStats.png?raw=true)
![[#FG4]Checks](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23FG4%5DChecks.png?raw=true)

## Teste de Resistência - #FG5
- **Cenário do Teste:** O teste foi realizado com 100 VUs e teve duração de 5 minutos.
- **Resultado Esperado:** A API deve manter um desempenho estável e aceitável ao longo do tempo, sem degradação significativa.
- **Resultado Obtido:** A API teve como maior tempo de resposta 7467 milissegundos (7,4 segundos), Throughput 101,37/seg e uma taxa de erro de 0%, o que demonstra que a API consegue se manter estável por períodos de operação mais extensos, somente tendo um aumento significativo no tempo de resposta. 
- **Evidências:** 

![[#FG5]Metrics](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23FG5%5DMetrics.png?raw=true)
![[#FG5]Stats](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23FG5%5DStats.png?raw=true)
![[#FG5]Checks](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23FG5%5DChecks.png?raw=true)
