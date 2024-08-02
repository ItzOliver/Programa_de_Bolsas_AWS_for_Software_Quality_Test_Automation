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
| TPF-1 | Carga | 100 VUs durante 1 minuto | Tempo de resposta, taxa de erro, throughput | Tempo de resposta < 2s, taxa de erro < 5% | GET e POST |
| TPF-2 | Estresse | Aumento gradual de 0 a 300 VUs em 2 minutos | Tempo de resposta, taxa de erro, throughput | API deve continuar a responder, sem falhas críticas | GET e POST |
| TPF-3 | Escalabilidade | 100 VUs inicial com incremento de 50 VUs a cada 20 segundos até 300 VUs | Tempo de resposta, taxa de erro, throughput | API deve escalar de forma eficiente sem degradação severa | GET e POST |
| TPF-4 | Pico | 500 VUs durante 30 segundos | Tempo de resposta, taxa de erro, throughput | Tempo de resposta < 2s, taxa de erro <5% | GET e POST |
| TPF-5 | Resistência | 100 VUs durante 5 minutos | Tempo de resposta, taxa de erro, throughput | Desempenho estável durante todo o período, sem aumento significativo no tempo de resposta ou taxa de erro | GET e POST |

## Detalhamento dos Testes
**[TPF-1: Teste de Carga](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint6/Sprint6/Dia%2010%20Challenge/Resultados/Resultados_Fluxo_Geral.md#teste-de-carga---tpf-1)**
**Objetivo:** Validar a capacidade da API de lidar com um número constante de usuários simultâneos.
- Configuração: Simular 100 Usuários Virtuais (VUs) durante 1 minuto.
- Métricas: Tempo de resposta, taxa de erro, throughput.
- Resultado Esperado: O tempo de resposta deve ser inferior a 2 segundos e a taxa de erro inferior a 5%.

**[TPF-2: Teste de Estresse](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint6/Sprint6/Dia%2010%20Challenge/Resultados/Resultados_Fluxo_Geral.md#teste-de-estresse---tpf-2)**
- **Objetivo:** Identificar o ponto de falha da API sob carga crescente.
- Configuração: Aumentar gradualmente de 0 a 300 VUs em 2 minutos.
- Métricas: Tempo de resposta, taxa de erro, throughput.
- Resultado Esperado: A API deve continuar a responder às solicitações, sem falhas críticas ou interrupções no serviço.

**[TPF-3: Teste de Escalabilidade](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint6/Sprint6/Dia%2010%20Challenge/Resultados/Resultados_Fluxo_Geral.md#teste-de-escalabilidade---tpf-3)**
**Objetivo:** Avaliar a capacidade da API de escalar conforme a carga aumenta.
- Configuração: Iniciar com 100 VUs e aumentar em 50 VUs a cada 20 segundos até atingir 300 VUs.
- Métricas: Tempo de resposta, taxa de erro, throughput.
- Resultado Esperado: A API deve escalar de forma eficiente sem degradação severa no tempo de resposta ou aumento significativo na taxa de erro.

**[TPF-4: Teste de Pico](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint6/Sprint6/Dia%2010%20Challenge/Resultados/Resultados_Fluxo_Geral.md#teste-de-pico---tpf-4)**
**Objetivo:** Testar a resposta da API sob um pico de carga elevada.
- Configuração: Simular 500 VUs durante 30 segundos.
- Métricas: Tempo de resposta, taxa de erro, throughput.
- Resultado Esperado: O tempo de resposta deve ser inferior a 2 segundos e a taxa de erro inferior a 5%.

**[TPF-5: Teste de Resistência](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint6/Sprint6/Dia%2010%20Challenge/Resultados/Resultados_Fluxo_Geral.md#teste-de-resistência---tpf-5)**
**Objetivo:** Avaliar o desempenho da API sob carga constante por um período prolongado.
- Configuração: Simular 100 VUs durante 5 minutos.
- Métricas: Tempo de resposta, taxa de erro, throughput.
- Resultado Esperado: O desempenho deve permanecer estável durante todo o período de teste, sem aumento significativo no tempo de resposta ou na taxa de erro.

## Ferramentas Utilizadas
- K6: Ferramenta de código aberto para testes de carga e desempenho.
