# Modos comuns de falha de eficiência de performance e suas causas
**Conteúdo Retirado do Material do Dia 3 do Sharepoint** 
> Durante testes dinâmicos, alguns problemas comuns de desempenho podem surgir, incluindo:

    **Resposta lenta em todas as cargas:** Pode ser causado por problemas subjacentes como modelagem inadequada do banco de dados, latência de rede e outras cargas de fundo.

    **Resposta lenta sob carga moderada a pesada:** A resposta pode se degradar de forma inaceitável com cargas dentro dos limites permitidos. A causa geralmente é a saturação dos recursos ou variações de cargas pesadas.

    **Resposta degradada ao longo do tempo:** Este é um problema em que a resposta se degrada gradualmente com o tempo. Causas típicas incluem vazamentos de memória, fragmentação de disco, aumento da carga de rede, crescimento do repositório de arquivos e crescimento inesperado do banco de dados.

    **Tratamento inadequado de erros sob alta carga ou além do limite:** Aqui, o tempo de resposta é aceitável, mas o tratamento de erros é inadequado em altos níveis de carga. Defeitos subjacentes comuns incluem recursos insuficientes, filas e pilhas pequenas e configurações de tempo limite muito rápidas.

> Exemplos específicos desses problemas incluem um aplicativo web que não responde dentro de um prazo aceitável, um sistema que falha sob uma grande quantidade súbita de solicitações, sistemas que apresentam resposta lenta quando lidam com grandes volumes de dados, processamento em lote que não pode ser concluído a tempo e sistemas em tempo real que ficam sem memória suficiente ao lidar com grandes demandas de memória dinâmica.