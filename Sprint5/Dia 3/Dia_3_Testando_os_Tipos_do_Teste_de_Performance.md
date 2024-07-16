# Testando os Tipos do Teste de Performance
**Conteúdo Retirado do Material do Dia 3 do Sharepoint** 
> Os testes de performance são cruciais para garantir a eficácia e eficiência de um sistema. Eles podem ser classificados em testes estáticos e testes dinâmicos.

    **Testes Estáticos:** Envolvem a análise da performance do sistema sem executar o programa. Eles são especialmente úteis para detectar problemas de performance que podem ocorrer durante a modelagem e arquitetura do sistema. Os testes estáticos incluem revisões de requisitos, análise do banco de dados e esquemas de redes, e revisões do código do sistema.

    **Testes Dinâmicos:** Estes são conduzidos enquanto o sistema está em execução. Podem ser realizados em vários estágios do ciclo de vida do desenvolvimento do software, incluindo o teste de unidade, teste de integração de componentes, teste de sistema e teste de integração do sistema. É importante para os testes de performance serem incorporados ao ciclo de vida iterativo do desenvolvimento do software desde o início. O teste de performance dinâmico também pode ser realizado usando simuladores, embora seja ideal testar o hardware real o mais cedo possível.

    **Geração de Carga:** Para a realização de vários tipos de testes de performance, é necessário modelar, gerar e submeter cargas representativas ao sistema em teste. As cargas podem ser geradas de várias maneiras:

    **Geração de Carga através da Interface do Usuário:** Adequada quando apenas um pequeno número de usuários precisa ser representado. No entanto, essa abordagem pode ser limitada quando o número de usuários a serem simulados aumenta.

    **Geração de Carga usando Grupos:** Envolve muitos testadores que representam usuários reais. Essa abordagem é útil para testar aplicações acessíveis globalmente, mas a carga gerada pode não ser tão precisa ou reprodutível.

    **Geração de Carga por meio de API (Application Programming Interface):** Permite simular a interação do usuário com o sistema em teste de uma maneira menos sensível a alterações na interface do usuário. Scripts dedicados podem ser criados para chamar rotinas API específicas.

    **Geração de Carga usando Protocolos de Comunicação Capturados:** Involui a captura da interação do usuário com o sistema em teste no nível do protocolo de comunicação e reprodução desses scripts para simular um grande número de usuários.

> Esses testes são fundamentais para garantir que o sistema pode lidar com diferentes cargas e condições enquanto mantém uma performance consistente e estável.