# Plano de Testes para API ServeRest - Rota de Produtos
## Resumo
Objetivo: Garantir que a API de produtos permita a autenticação e o cadastro correto de produtos no Marketplace da ServeRest, assim como as operações de CRUD (Criar, Atualizar, Listar e Deletar).

# Testes de Performance Utilizando K6
## Resumo dos Testes
| ID | Tipo de Teste | Configuração de Teste | Métricas | Resultado Esperado | Verbo |
|:---|:-------------:|:---------------------:|:--------:|:------------------:|:-----:|
| TP1 | Carga | 400 VUs durante 1 minuto | Tempo de resposta, taxa de erro, throughput | Tempo de resposta < 2s, taxa de erro < 1% |  |
| TP2 | Estresse | Aumenta gradual de 0 a 700 VUs em 2 minutos | Tempo de resposta, taxa de erro, throughput | API deve continuar a responder, sem falhas críticas |  |
| TP3 | Escalabilidade | 300 VUs inicial com incremento de 50 VUs a cada 30 segundos até 600 VUs | Tempo de resposta, taxa de erro, throughput | API deve escalar de forma eficiente sem degradação severa |  |
| TP4 | Pico | 700 VUs durante 2 minutos | Tempo de resposta, taxa de erro, throughput | Tempo de resposta < 3s, taxa de erro <2% |  |
| TP5 | Resistência | 300 VUs durante 10 minutos | Tempo de resposta, taxa de erro, throughput | Desempenho estável durante todo o período, sem aumento significativo no tempo de resposta ou taxa de erro |  |

## Detalhamento dos Testes
**TP1: Teste de Carga**
**Objetivo:** Validar a capacidade da API de lidar com um número constante de usuários simultâneos.
- Configuração: Simular 400 Usuários Virtuais (VUs) durante 1 minuto.
- Métricas: Tempo de resposta, taxa de erro, throughput.
- Resultado Esperado: O tempo de resposta deve ser inferior a 2 segundos e a taxa de erro inferior a 1%.

**TP2: Teste de Estresse**
- **Objetivo:** Identificar o ponto de falha da API sob carga crescente.
- Configuração: Aumentar gradualmente de 0 a 700 VUs em 2 minutos.
- Métricas: Tempo de resposta, taxa de erro, throughput.
- Resultado Esperado: A API deve continuar a responder às solicitações, sem falhas críticas ou interrupções no serviço.

**TP3: Teste de Escalabilidade**
**Objetivo:** Avaliar a capacidade da API de escalar conforme a carga aumenta.
- Configuração: Iniciar com 300 VUs e aumentar em 50 VUs a cada 30 segundos até atingir 600 VUs.
- Métricas: Tempo de resposta, taxa de erro, throughput.
- Resultado Esperado: A API deve escalar de forma eficiente sem degradação severa no tempo de resposta ou aumento - significativo na taxa de erro.

**TP4: Teste de Pico**
**Objetivo:** Testar a resposta da API sob um pico de carga elevada.
- Configuração: Simular 700 VUs durante 2 minutos.
- Métricas: Tempo de resposta, taxa de erro, throughput.
- Resultado Esperado: O tempo de resposta deve ser inferior a 3 segundos e a taxa de erro inferior a 2%.

**TP5: Teste de Resistência**
**Objetivo:** Avaliar o desempenho da API sob carga constante por um período prolongado.
- Configuração: Simular 300 VUs durante 10 minutos.
- Métricas: Tempo de resposta, taxa de erro, throughput.
- Resultado Esperado: O desempenho deve permanecer estável durante todo o período de teste, sem aumento significativo no tempo de resposta ou na taxa de erro.

## Ferramentas Utilizadas
- K6: Ferramenta de código aberto para testes de carga e desempenho.
- Prometheus & Grafana: Para monitoramento e visualização das métricas durante os testes.

## Preparação para os Testes
- Ambiente de Teste: Certifique-se de que o ambiente de teste esteja configurado e isolado do ambiente de produção.
- Dados de Teste: Prepare um conjunto de dados de teste que será utilizado durante os testes de carga.
- Monitoramento: Configure ferramentas de monitoramento para acompanhar o desempenho da API em tempo real.

## Execução dos Testes
Carregar o Script de Teste: Utilize scripts K6 para definir os cenários de teste conforme descrito nas configurações de cada teste.
Iniciar o Teste: Execute cada teste de acordo com o plano.
Coleta de Métricas: Monitore as métricas em tempo real e colete os dados para análise posterior.
Análise dos Resultados: Após a execução de cada teste, analise os resultados para identificar possíveis gargalos e áreas de melhoria.

## Relatório de Teste
Resumo dos Resultados: Apresentar um resumo dos resultados de cada teste, destacando as métricas principais.
Análise de Desempenho: Identificar possíveis problemas e propor soluções para otimização da API.
Conclusões e Recomendações: Fornecer conclusões sobre a capacidade da API de lidar com diferentes níveis de carga e recomendar ações para melhorar o desempenho, se necessário.
Este plano de testes visa garantir que a API de cadastro de usuários no ServeRest atenda aos requisitos de desempenho e esteja preparada para operar sob diferentes condições de carga.