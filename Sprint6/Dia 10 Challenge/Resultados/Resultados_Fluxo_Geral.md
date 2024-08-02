# Resumo dos Resultados Obtidos - Testes de Performance de Fluxo Geral Utilizando K6
## Teste de Carga - TPF-1
- **Cenário do Teste:** O teste foi realizado com 100 VUs e teve duração de 1 minuto.
- **Resultado Esperado:** A API deve manter tempos de resposta aceitáveis (abaixo de 2 segundos) e uma baixa taxa de erros (menos de 5%).
- **Resultado Obtido:** A API teve como maior tempo de resposta 5168 milissegundos (5,1 segundos), Throughput 80,73/seg e uma taxa de erro de 33%, o que demonstra que a API está acima do tempo de resposta aceitável e fora da taxa de erros aceitável.
- **Evidências:**

![Resultado Fluxo Carga](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint6/src/ResultadoFluxoGeralCarga.png?raw=true)

## Teste de Estresse - TPF-2
- **Cenário do Teste:** O teste foi realizado com aumento gradual de 0 a 300 VUs e teve duração de 2 minutos. **Resultado Esperado:** API deve continuar a responder, sem falhas críticas.
- **Resultado Obtido:** A API teve como maior tempo de resposta 16708 milissegundos (16 segundos), Throughput 67,4/seg e uma taxa de erro de 40%, o que demonstra que a API não consegue operar bem durante períodos de extremo esforço.
- **Evidências:** 

![Resultado Fluxo Estresse](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint6/src/ResultadoFluxoGeralEstresse.png?raw=true)

## Teste de Escalabilidade - TPF-3
- **Cenário do Teste:** O teste foi realizado com 100 VUs inicialmente com incremento de 50 VUs a cada 20 segundos até 300 VUs e teve duração de 2 minutos.
- **Resultado Esperado:** API deve escalar de forma eficiente sem degradação severa.
- **Resultado Obtido:** A API teve como maior tempo de resposta 23205 milissegundos (23 segundos), Throughput 59,21/seg e uma taxa de erro de 61%, o que demonstra que a API não consegue operar bem com uma carga maior que o habitual.
- **Evidências:**

![Resultado Fluxo Escalabilidade](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint6/src/ResultadoFluxoGeralEscalabilidade.png?raw=true)

## Teste de Pico - TPF-4
- **Cenário do Teste:** O teste foi realizado com 500 VUs e teve duração de 30 segundos.
- **Resultado Esperado:** A API deve suportar picos súbitos sem falhas críticas e retornar ao desempenho normal rapidamente após a diminuição da carga, mantendo um tempo de resposta menor que 2 segundos e taxa de erro inferior a 5%.
- **Resultado Obtido:** A API teve como maior tempo de resposta 21789 milissegundos (21 segundos), Throughput 203,2/seg e uma taxa de erro de 65%, o que demonstra que a API não consegue lidar com um aumento abrupto de requisições.
- **Evidências:**

![Resultado Fluxo Pico](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint6/src/ResultadoFluxoGeralPico.png?raw=true)

## Teste de Resistência - TPF-5
- **Cenário do Teste:** O teste foi realizado com 100 VUs e teve duração de 5 minutos.
- **Resultado Esperado:** A API deve manter um desempenho estável e aceitável ao longo do tempo, sem degradação significativa.
- **Resultado Obtido:** A API teve como maior tempo de resposta 8627 milissegundos (8,6 segundos), Throughput 57,28/seg e uma taxa de erro de 4%, o que demonstra que a API consegue se manter estável por períodos de operação mais extensos, somente tendo um aumento significativo no tempo de resposta. 
- **Evidências:** 

![Resultado Fluxo Resistencia](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint6/src/ResultadoFluxoGeralResistencia.png?raw=true)
