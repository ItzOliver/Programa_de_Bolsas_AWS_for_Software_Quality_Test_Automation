# Resumo dos Resultados Obtidos - Testes de Performance na Rota Usuários Utilizando K6
## Teste de Carga - TPU-1
- **Cenário do Teste:** O teste foi realizado com 100 VUs e teve duração de 1 minuto.
- **Resultado Esperado:** A API deve manter tempos de resposta aceitáveis (abaixo de 2 segundos) e uma baixa taxa de erros (menos de 5%).
- **Resultado Obtido:** A API teve como maior tempo de resposta 1306 milissegundos (1,3 segundos), Throughput 134,4/seg e uma taxa de erro de 31%, o que demonstra que a API está abaixo do tempo de resposta aceitável mas fora da taxa de erros aceitável.
- **Evidências:**

![Resultado Post User Carga](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint6/src/ResultadoPostUserCarga.png?raw=true)

## Teste de Estresse - TPU-2
- **Cenário do Teste:** O teste foi realizado com aumento gradual de 0 a 300 VUs e teve duração de 2 minutos. **Resultado Esperado:** API deve continuar a responder, sem falhas críticas.
- **Resultado Obtido:** A API teve como maior tempo de resposta 10009 milissegundos (10 segundos), Throughput 39,84/seg e uma taxa de erro de 31%, o que demonstra que a API não consegue operar bem durante períodos de extremo esforço.
- **Evidências:** 

![Resultado Get User Estresse](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint6/src/ResultadoGetUserEstresse.png?raw=true)

## Teste de Escalabilidade - TPU-3
- **Cenário do Teste:** O teste foi realizado com 100 VUs inicialmente com incremento de 50 VUs a cada 20 segundos até 300 VUs e teve duração de 2 minutos.
- **Resultado Esperado:** API deve escalar de forma eficiente sem degradação severa.
- **Resultado Obtido:** A API teve como maior tempo de resposta 10013 milissegundos (10 segundos), Throughput 36,76/seg e uma taxa de erro de 57%, o que demonstra que a API não consegue operar bem com uma carga maior que o habitual.
- **Evidências:**

![Resultado Get User Escalabilidade](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint6/src/ResultadoGetUserEscalabilidade.png?raw=true)

## Teste de Pico - TPU-4
- **Cenário do Teste:** O teste foi realizado com 500 VUs e teve duração de 30 segundos.
- **Resultado Esperado:** A API deve suportar picos súbitos sem falhas críticas e retornar ao desempenho normal rapidamente após a diminuição da carga, mantendo um tempo de resposta menor que 2 segundos e taxa de erro inferior a 5%.
- **Resultado Obtido:** A API teve como maior tempo de resposta 10014 milissegundos (10 segundos), Throughput 153,26/seg e uma taxa de erro de 69%, o que demonstra que a API não consegue lidar com um aumento abrupto de requisições.
- **Evidências:**

![Resultado Get User Pico](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint6/src/ResultadoGetUserPico.png?raw=true)

## Teste de Resistência - TPU-5
- **Cenário do Teste:** O teste foi realizado com 100 VUs e teve duração de 5 minutos.
- **Resultado Esperado:** A API deve manter um desempenho estável e aceitável ao longo do tempo, sem degradação significativa.
- **Resultado Obtido:** A API teve como maior tempo de resposta 4578 milissegundos (4,5 segundo), Throughput 37,47/seg e uma taxa de erro de 0%, o que demonstra que a API consegue se manter estável por períodos de operação mais extensos. 
- **Evidências:** 

![Resultado Get User Resistencia](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint6/src/ResultadoGetUserResistencia.png?raw=true)
