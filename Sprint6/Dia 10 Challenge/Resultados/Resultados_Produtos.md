# Resumo dos Resultados Obtidos - Testes de Performance na Rota Produtos Utilizando K6
## Teste de Carga - TPP-1
- **Cenário do Teste:** O teste foi realizado com 100 VUs e teve duração de 1 minuto.
- **Resultado Esperado:** A API deve manter tempos de resposta aceitáveis (abaixo de 2 segundos) e uma baixa taxa de erros (menos de 5%).
- **Resultado Obtido:** A API teve como maior tempo de resposta 4084 milissegundos (4 segundos), Throughput 45,76/seg e uma taxa de erro de 13%, o que demonstra que a API está acima do tempo de resposta aceitável mas fora da taxa de erros aceitável.
- **Evidências:**

![Resultado Post Product Carga](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint6/src/ResultadoPostProductCarga.png?raw=true)

## Teste de Estresse - TPP-2
- **Cenário do Teste:** O teste foi realizado com aumento gradual de 0 a 300 VUs e teve duração de 2 minutos. **Resultado Esperado:** API deve continuar a responder, sem falhas críticas.
- **Resultado Obtido:** A API teve como maior tempo de resposta 2375 milissegundos (2,3 segundos), Throughput 160,34/seg e uma taxa de erro de 0%, o que demonstra que a API consegue operar bem durante períodos de extremo esforço, ficanso somente um pouco acima dos 2 segundos de tempo de resposta.
- **Evidências:** 

![Resultado Get Product Estresse](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint6/src/ResultadoGetProductEstresse.png?raw=true)

## Teste de Escalabilidade - TPP-3
- **Cenário do Teste:** O teste foi realizado com 100 VUs inicialmente com incremento de 50 VUs a cada 20 segundos até 300 VUs e teve duração de 2 minutos.
- **Resultado Esperado:** API deve escalar de forma eficiente sem degradação severa.
- **Resultado Obtido:** A API teve como maior tempo de resposta 1976 milissegundos (1,9 segundos), Throughput 149,15/seg e uma taxa de erro de 0%, o que demonstra que a API consegue operar bem com uma carga maior que o habitual.
- **Evidências:**

![Resultado Get Product Escalabilidade](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint6/src/ResultadoGetProductEscalabilidade.png?raw=true)

## Teste de Pico - TPP-4
- **Cenário do Teste:** O teste foi realizado com 500 VUs e teve duração de 30 segundos.
- **Resultado Esperado:** A API deve suportar picos súbitos sem falhas críticas e retornar ao desempenho normal rapidamente após a diminuição da carga, mantendo um tempo de resposta menor que 2 segundos e taxa de erro inferior a 5%.
- **Resultado Obtido:** A API teve como maior tempo de resposta 8683 milissegundos (8,6 segundos), Throughput 258,83/seg e uma taxa de erro de 33%, o que demonstra que a API não consegue lidar com um aumento abrupto de requisições.
- **Evidências:**

![Resultado Get Product Pico](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint6/src/ResultadoGetProductPico.png?raw=true)

## Teste de Resistência - TPP-5
- **Cenário do Teste:** O teste foi realizado com 100 VUs e teve duração de 5 minutos.
- **Resultado Esperado:** A API deve manter um desempenho estável e aceitável ao longo do tempo, sem degradação significativa.
- **Resultado Obtido:** A API teve como maior tempo de resposta 1927milissegundos (1,9 segundos), Throughput 168,07/seg e uma taxa de erro de 0%, o que demonstra que a API consegue se manter estável por períodos de operação mais extensos. 
- **Evidências:** 

![Resultado Get Product Resistencia](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint6/src/ResultadoGetProductResistencia.png?raw=true)
