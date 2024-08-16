# Resumo dos Resultados Obtidos - Testes de Performance na Rota Produtos Utilizando K6
## Teste de Carga - #P1
- **Cenário do Teste:** O teste foi realizado com 100 VUs e teve duração de 1 minuto.
- **Resultado Esperado:** A API deve manter tempos de resposta aceitáveis (abaixo de 2 segundos) e uma baixa taxa de erros (menos de 5%).
- **Resultado Obtido:** A API teve como maior tempo de resposta 3087 milissegundos (3 segundos), Throughput 52,88/seg e uma taxa de erro de quase 0%, o que demonstra que a API está acima do tempo de resposta aceitável mas dentro da taxa de erros aceitável.
- **Evidências:**

![[#P1]Metrics](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23P1%5DMetrics.png?raw=true)
![[#P1]Stats](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23P1%5DStats.png?raw=true)
![[#P1]Checks](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23P1%5DChecks.png?raw=true)

## Teste de Estresse - #P2
- **Cenário do Teste:** O teste foi realizado com aumento gradual de 0 a 300 VUs e teve duração de 2 minutos. **Resultado Esperado:** API deve continuar a responder, sem falhas críticas.
- **Resultado Obtido:** A API teve como maior tempo de resposta 5083 milissegundos (5 segundos), Throughput 53,39/seg e uma taxa de erro de 42%, o que demonstra que a API não consegue operar bem durante períodos de extremo esforço.
- **Evidências:** 

![[#P2]Metrics](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23P2%5DMetrics.png?raw=true)
![[#P2]Stats](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23P2%5DStats.png?raw=true)
![[#P2]Checks](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23P2%5DChecks.png?raw=true)

## Teste de Escalabilidade - #P3
- **Cenário do Teste:** O teste foi realizado com 100 VUs inicialmente com incremento de 50 VUs a cada 20 segundos até 300 VUs e teve duração de 2 minutos.
- **Resultado Esperado:** API deve escalar de forma eficiente sem degradação severa.
- **Resultado Obtido:** A API teve como maior tempo de resposta 10019 milissegundos (10 segundos), Throughput 34,72/seg e uma taxa de erro de 79%, o que demonstra que a API não consegue operar bem com uma carga maior que o habitual.
- **Evidências:**

![[#P3]Metrics](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23P3%5DMetrics.png?raw=true)
![[#P3]Stats](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23P3%5DStats.png?raw=true)
![[#P3]Checks](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23P3%5DChecks.png?raw=true)

## Teste de Pico - #P4
- **Cenário do Teste:** O teste foi realizado com 500 VUs e teve duração de 30 segundos.
- **Resultado Esperado:** A API deve suportar picos súbitos sem falhas críticas e retornar ao desempenho normal rapidamente após a diminuição da carga, mantendo um tempo de resposta menor que 2 segundos e taxa de erro inferior a 5%.
- **Resultado Obtido:** A API teve como maior tempo de resposta 10011 milissegundos (10 segundos), Throughput 56,12/seg e uma taxa de erro de 82%, o que demonstra que a API não consegue lidar com um aumento abrupto de requisições.
- **Evidências:**

![[#P4]Metrics](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23P4%5DMetrics.png?raw=true)
![[#P4]Stats](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23P4%5DStats.png?raw=true)
![[#P4]Checks](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23P4%5DChecks.png?raw=true)

## Teste de Resistência - #P5
- **Cenário do Teste:** O teste foi realizado com 100 VUs e teve duração de 5 minutos.
- **Resultado Esperado:** A API deve manter um desempenho estável e aceitável ao longo do tempo, sem degradação significativa.
- **Resultado Obtido:** A API teve como maior tempo de resposta 4469 milissegundos (4,4 segundos), Throughput 26,31/seg e uma taxa de erro de 0%, o que demonstra que a API consegue se manter estável por períodos de operação mais extensos. 
- **Evidências:** 

![[#P5]Metrics](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23P5%5DMetrics.png?raw=true)
![[#P5]Stats](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23P5%5DStats.png?raw=true)
![[#P5]Checks](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/src/%5B%23P5%5DChecks.png?raw=true)
