# Capacitação em Qualidade de Software
## Modelos de ciclo de vida
- Sequencial: 
    - Cascata:
    ![Cascata]()
    - Modelo V:
    ![Modelo V]()
- Iterativo: 
    - SCRUM:
    ![SCRUM]()
    - Kanban:
    ![Kanban]()
## Níveis de Teste
- Os níveis de teste são caracterizados pelos seguintes atributos:
    - Objetivos específicos;
    - Base de teste, referenciada para derivar casos de teste;
    - Objeto de teste (o que está sendo testado);
    - Defeitos e falhas típicas;
    - Abordagens e responsabilidades específicas.
### Níveis de Teste (Teste de Componente)
- É o teste unitário, de responsabilidade do desenvolvedor;
- Seu objetivo é encontrar defeitos nos componentes e evitar que eles se espalhem para níveis mais altos da aplicação.
### Níveis de Teste (Teste de Integração)
- Testa a interface entre componentes;
- Não foca na funcionalidade dos módulos individualmente;
- O teste de integração pode ser entre componentes e também entre sistemas;
- Objetos de testes podem ser:
    - Bancos de dados, Interfaces, APIs, microserviços, etc.
### Níveis de Teste (Teste de Sistema)
- Concentra-se no comportamento e nas capacidades de todo um sistema ou produto;
- Testes END-TO-END;
- Fluxo ponta a ponta.
### Níveis de Teste (Teste de Aceite)
- Produz informações para avaliar a situação do sistema para implantação e uso pelo cliente;
- A diferença para o teste de sistema, é aqui que o teste é realizado pelo cliente ou representantes do cliente;
- Responde a pergunta: Esse sistema atende as minhas necessidades?
## Tipos de Teste
- Um tipo de teste é focado em um objetivo específico.
### Tipos de Teste (Teste Funcional)
- Avalia as funções que um sistema deve executar;
### Tipos de Teste (Teste não Funcional)
- Avalia comportamentos;
- Usabilidade;
- Performance;
- Estabilidade;
- Resistência a cargas de acesso;
- Latência.
### Tipos de Teste (Caixa Preta)
- Baseado nos requisitos do software, nas ações que o software deve desempenhar;
- São níveis de teste caixa preta: Integração, Sistema e Aceitação.
### Tipos de Teste (Caixa Branca)
- Se refere a estrutura a estrutura interna da aplicação;
- Tem acesso ao código fonte;
- Está relacionado ao nível unitário de teste;
- Tipicamente feito por desenvolvedores.
### Tipos de Teste (RETESTE)
- O teste de confirmação, ou RETESTE, tem por objetivo verificar se um bug foi corrigido.
### Teste de Regressão
- Está relacionado às mudanças do sistema;
- Visa garantir que as partes não alteradas continuem funcionando;
- Recomendável sua automatização;
- Necessita de periódicas atualizações.
## Conclusões
- O teste deve se adaptar a qualquer ciclo de vida existente;
- Cada nível de teste responde a característica próprias;
- Cada tipo de teste responde a um objetivo específico;
- Deve haver correlação de testes funcionais, de regressão, não funcionais e automatizados.