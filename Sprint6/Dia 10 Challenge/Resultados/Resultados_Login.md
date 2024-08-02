# Resumo dos Resultados Obtidos - Testes de Performance na Rota Login Utilizando K6
## Teste de Carga - TPL-1
- **Cenário do Teste:** O teste foi realizado com 100 VUs e teve duração de 1 minuto.
- **Resultado Esperado:** A API deve manter tempos de resposta aceitáveis (abaixo de 2 segundos) e uma baixa taxa de erros (menos de 5%).
- **Resultado Obtido:** A API teve como maior tempo de resposta 1132 milissegundos (1,1 segundos), Throughput 135,86/seg e uma taxa de erro de 0%, o que demonstra que a API está dentro do tempo de resposta aceitável e dentro da taxa de erros aceitável.
- **Evidências:**

![Resultado Post Login Carga](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint6/src/ResultadoPostLoginCarga.png?raw=true)

## Teste de Estresse - TPL-2
- **Cenário do Teste:** O teste foi realizado com aumento gradual de 0 a 300 VUs e teve duração de 2 minutos. **Resultado Esperado:** API deve continuar a responder, sem falhas críticas.
- **Resultado Obtido:** A API teve como maior tempo de resposta 4893 milissegundos (4,8 segundos), Throughput 85,75/seg e uma taxa de erro de 0%, o que demonstra que a API não consegue operar bem durante períodos de extremo esforço por passar bastante do tempo de resposta padrão.
- **Evidências:** 

![Resultado Get Login Estresse](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint6/src/ResultadoPostLoginEstresse.png?raw=true)

## Teste de Escalabilidade - TPL-3
- **Cenário do Teste:** O teste foi realizado com 100 VUs inicialmente com incremento de 50 VUs a cada 20 segundos até 300 VUs e teve duração de 2 minutos.
- **Resultado Esperado:** API deve escalar de forma eficiente sem degradação severa.
- **Resultado Obtido:** A API teve como maior tempo de resposta 2036 milissegundos (2 segundos), Throughput 140,99/seg e uma taxa de erro de menos de 1%, o que demonstra que a API consegue operar bem com uma carga maior que o habitual.
- **Evidências:**

![Resultado Get Login Escalabilidade](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint6/src/ResultadoPostLoginEscalabilidade.png?raw=true)

## Teste de Pico - TPL-4
- **Cenário do Teste:** O teste foi realizado com 500 VUs e teve duração de 30 segundos.
- **Resultado Esperado:** A API deve suportar picos súbitos sem falhas críticas e retornar ao desempenho normal rapidamente após a diminuição da carga, mantendo um tempo de resposta menor que 2 segundos e taxa de erro inferior a 5%.
- **Resultado Obtido:** A API teve como maior tempo de resposta 5326 milissegundos (5,3 segundos), Throughput 246,53/seg e uma taxa de erro de 52%, o que demonstra que a API não consegue lidar com um aumento abrupto de requisições.
- **Evidências:**

![Resultado Get Login Pico](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint6/src/ResultadoPostLoginPico.png?raw=true)

## Teste de Resistência - TPL-5
- **Cenário do Teste:** O teste foi realizado com 100 VUs e teve duração de 5 minutos.
- **Resultado Esperado:** A API deve manter um desempenho estável e aceitável ao longo do tempo, sem degradação significativa.
- **Resultado Obtido:** A API teve como maior tempo de resposta 2476 milissegundos (2,4 segundo), Throughput 119,86/seg e uma taxa de erro de 0%, o que demonstra que a API consegue se manter estável por períodos de operação mais extensos. 
- **Evidências:** 

![Resultado Get Login Resistencia](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint6/src/ResultadoPostLoginResistencia.png?raw=true)
