# Resumo dos Resultados Obtidos - Testes de Performance na Rota Carrinhos Utilizando K6
## Teste de Carga - #C1
- **Cenário do Teste:** O teste foi realizado com 150 VUs e teve duração de 1 minuto.
- **Resultado Esperado:** A API deve manter tempos de resposta aceitáveis (abaixo de 2 segundos) e uma baixa taxa de erros (menos de 5%).
- **Resultado Obtido:** A API teve como maior tempo de resposta 49 milissegundos, Throughput 144,21/seg e uma taxa de erro de 0%, o que demonstra que a API está dentro do tempo de resposta aceitável e dentro da taxa de erros aceitável.
- **Evidências:**

![[#C1]Metrics](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23C1%5DMetrics.png?raw=true)
![[#C1]Stats](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23C1%5DStats.png?raw=true)
![[#C1]Checks](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23C1%5DChecks.png?raw=true)

## Teste de Estresse - #C2
- **Cenário do Teste:** O teste foi realizado com aumento gradual de 0 a 300 VUs e teve duração de 2 minutos. **Resultado Esperado:** API deve continuar a responder, sem falhas críticas.
- **Resultado Obtido:** A API teve como maior tempo de resposta 78 milissegundos, Throughput 54,58/seg e uma taxa de erro de 0%, o que demonstra que a API consegue operar bem durante períodos de extremo esforço.
- **Evidências:** 

![[#C2]Metrics](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23C2%5DMetrics.png?raw=true)
![[#C2]Stats](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23C2%5DStats.png?raw=true)
![[#C2]Checks](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23C2%5DChecks.png?raw=true)

## Teste de Escalabilidade - #C3
- **Cenário do Teste:** O teste foi realizado com 100 VUs inicialmente com incremento de 50 VUs a cada 20 segundos até 300 VUs e teve duração de 2 minutos.
- **Resultado Esperado:** API deve escalar de forma eficiente sem degradação severa.
- **Resultado Obtido:** A API teve como maior tempo de resposta 117 milissegundos, Throughput 65,82/seg e uma taxa de erro de menos de 0%, o que demonstra que a API consegue operar bem com uma carga maior que o habitual.
- **Evidências:**

![[#C3]Metrics](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23C3%5DMetrics.png?raw=true)
![[#C3]Stats](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23C3%5DStats.png?raw=true)
![[#C3]Checks](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23C3%5DChecks.png?raw=true)

## Teste de Pico - #C4
- **Cenário do Teste:** O teste foi realizado com 500 VUs e teve duração de 30 segundos.
- **Resultado Esperado:** A API deve suportar picos súbitos sem falhas críticas e retornar ao desempenho normal rapidamente após a diminuição da carga, mantendo um tempo de resposta menor que 2 segundos e taxa de erro inferior a 5%.
- **Resultado Obtido:** A API teve como maior tempo de resposta 63 milissegundos, Throughput 152,4/seg e uma taxa de erro de 0%, o que demonstra que a API consegue lidar com um aumento abrupto de requisições.
- **Evidências:**

![[#C4]Metrics](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23C4%5DMetrics.png?raw=true)
![[#C4]Stats](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23C4%5DStats.png?raw=true)
![[#C4]Checks](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23C4%5DChecks.png?raw=true)

## Teste de Resistência - #C5
- **Cenário do Teste:** O teste foi realizado com 100 VUs e teve duração de 5 minutos.
- **Resultado Esperado:** A API deve manter um desempenho estável e aceitável ao longo do tempo, sem degradação significativa.
- **Resultado Obtido:** A API teve como maior tempo de resposta 138 milissegundos, Throughput 54,17/seg e uma taxa de erro de 0%, o que demonstra que a API consegue se manter estável por períodos de operação mais extensos. 
- **Evidências:** 

![[#C5]Metrics](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23C5%5DMetrics.png?raw=true)
![[#C5]Stats](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23C5%5DStats.png?raw=true)
![[#C5]Checks](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23C5%5DChecks.png?raw=true)
