# Plano de Testes Geral para API ServeRest
## Resumo
Objetivo: Garantir que o sistema permita que usuários sejam criados, realizem login e criem um produto, tudo dentro do mesmo fluxo.

## Priorização de Testes
### Fluxo Prioritário
Aplicação: API ServeRest
Objetivo principal do sistema: Garantir que usuários possam se cadastrar, autenticar, cadastrar produtos no Marketplace do ServeRest e buscar produtos.
- Lista de fluxos prioritários ordenada:
    - Enviar uma requisição POST para cadastrar usuário;
        - Deverão ser preenchidos os campos NOME, EMAIL, PASSWORD e ADMINISTRADOR.
    - Enviar uma requisição POST para realizar login;
        - Deverão ser preenchidos os campos EMAIL e PASSWORD.
    - Enviar uma requisição POST para cadastrar um produto;
        - Deverão ser preenchidos os campos NOME, PREÇO, DESCRIÇÂO e QUANTIDADE.
    - Enviar uma requisição GET para buscar produtos cadastrados.

# Testes de Performance do Fluxo geral Utilizando K6
## Resumo dos Testes
| ID | Tipo de Teste | Configuração de Teste | Métricas | Resultado Esperado | Verbo |
|:---|:-------------:|:---------------------:|:--------:|:------------------:|:-----:|
| #FG1 | Carga | 20 VUs durante 1 minuto | Tempo de resposta, taxa de erro, throughput | Tempo de resposta < 2s, taxa de erro < 5% | GET, POST e DELETE |
| #FG2 | Estresse | Aumento gradual de 0 a 40 VUs em 2 minutos | Tempo de resposta, taxa de erro, throughput | API deve continuar a responder, sem falhas críticas | GET, POST e DELETE |
| #FG3 | Escalabilidade | 2 VUs inicial com incremento de 2 x a quantidade VUs atuais a cada 20 segundos até 32 VUs | Tempo de resposta, taxa de erro, throughput | API deve escalar de forma eficiente sem degradação severa | GET, POST e DELETE |
| #FG4 | Pico | 50 VUs durante 30 segundos | Tempo de resposta, taxa de erro, throughput | Tempo de resposta < 2s, taxa de erro <5% | GET, POST e DELETE |
| #FG5 | Resistência | 25 VUs durante 5 minutos | Tempo de resposta, taxa de erro, throughput | Desempenho estável durante todo o período, sem aumento significativo no tempo de resposta ou taxa de erro | GET, POST e DELETE |

## Detalhamento dos Testes
**[#FG1: Teste de Carga](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/Sprint7/resultados/resultadosFluxoGeral.md#teste-de-carga---fg1)**
**Objetivo:** Validar a capacidade da API de lidar com um número constante de usuários simultâneos.
- Configuração: Simular 20 Usuários Virtuais (VUs) durante 1 minuto.
- Métricas: Tempo de resposta, taxa de erro, throughput.
- Resultado Esperado: O tempo de resposta deve ser inferior a 2 segundos e a taxa de erro inferior a 5%.

**[#FG2: Teste de Estresse](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/Sprint7/resultados/resultadosFluxoGeral.md#teste-de-estresse---fg2)**
- **Objetivo:** Identificar o ponto de falha da API sob carga crescente.
- Configuração: Aumentar gradualmente de 0 a 40 VUs em 2 minutos.
- Métricas: Tempo de resposta, taxa de erro, throughput.
- Resultado Esperado: A API deve continuar a responder às solicitações, sem falhas críticas ou interrupções no serviço.

**[#FG3: Teste de Escalabilidade](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/Sprint7/resultados/resultadosFluxoGeral.md#teste-de-escalabilidade---fg3)**
**Objetivo:** Avaliar a capacidade da API de escalar conforme a carga aumenta.
- Configuração: 2 VUs inicial com incremento de 2 x a quantidade VUs atuais a cada 20 segundos até 32 VUs.
- Métricas: Tempo de resposta, taxa de erro, throughput.
- Resultado Esperado: A API deve escalar de forma eficiente sem degradação severa no tempo de resposta ou aumento significativo na taxa de erro.

**[#FG4: Teste de Pico](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/Sprint7/resultados/resultadosFluxoGeral.md#teste-de-pico---fg4)**
**Objetivo:** Testar a resposta da API sob um pico de carga elevada.
- Configuração: Simular 50 VUs durante 30 segundos.
- Métricas: Tempo de resposta, taxa de erro, throughput.
- Resultado Esperado: O tempo de resposta deve ser inferior a 2 segundos e a taxa de erro inferior a 5%.

**[#FG5: Teste de Resistência](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint7/Sprint7/resultados/resultadosFluxoGeral.md#teste-de-resistência---fg5)**
**Objetivo:** Avaliar o desempenho da API sob carga constante por um período prolongado.
- Configuração: Simular 25 VUs durante 5 minutos.
- Métricas: Tempo de resposta, taxa de erro, throughput.
- Resultado Esperado: O desempenho deve permanecer estável durante todo o período de teste, sem aumento significativo no tempo de resposta ou na taxa de erro.

## Ferramentas Utilizadas
- K6: Ferramenta de código aberto para testes de carga e desempenho.
