# DoR, DoD e Critérios de Aceite
## Definition of Ready (DoR)
É um acordo de trabalho entre o time de Desenvolvimento e o Product Owner, aplicado a **todas** a Histórias de Usuário, com a intenção de que os itens do Backlog não cheguem para a reunião de planejamento com granularidade ruim, pouco ou nenhum detalhamento.
> Antes que um item do Backlog entre para a Sprint o time deve garantir que ele esteja atendendo aos critérios de “Ready”, em termos de estarem suficientemente bem descritos e compreendidos por todo time de desenvolvimento, para que eles tenham condições suficiente para planejá-lo em uma Sprint e estabelecer um compromisso em relação à sua implementação.
- Histórias de Usuário devem ter sido escritas com o padrão de escrita [INVEST](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint3/Sprint3/Dia%203/Dia_3_User_Stories.md#técnica-invest);
- Histórias de Usuário devem possuir ao menos um critério de aceite;
- Histórias de Usuário devem possuir [wireframe](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint3/Sprint3/Dia%203/Dia_3_User_Stories.md#criação-das-interfaces-com-o-usuário) de baixa fidelidade.
## Definition of Done (DoD)
É um acordo genérico, definido pelos membros do time Scrum (Desenvolvedores e Product Owner), aplicável a **todas** as Histórias de Usuário, com o intuito de que todos os membros do time tenham um entendimento compartilhado do que significa "Done" para garantir a transparência. Ou seja, uma lista de verificação de atividades necessária para que um incremento de software seja considerado como completo.
- Funcionalidades devem ter sido testadas;
- Testes unitários devem ter sido criados;
- Funcionalidades devem ter atendido a todos os critérios de aceite;
- Todas as funcionalidades devem ter sido testadas no Chrome, IE e Firefox;
- O código deve ter sido revisado por outro desenvolvedor.
## Critérios de Aceite
É uma lista de critérios que precisam ser alcançados para que a User Story atendo os requisitos do usuário e seja aceia pelo Product Owner. Os critérios de aceitação contém informações adicionais que não foram inseridas nas users stories para não poluir o corpo principal do texto.
São específicos e diferentes para diferentes Histórias de Usuário.
Os critérios de aceitação têm o objetivo de:
- Definir limites para as user stories
- Ajudar o P.O. a detalhar em alto nível o que é necessário para entregar valor ao cliente
- Ajudar o time a entender melhor o objetivo da user story
- Ajudar programadores e testadores a planejarem os testes
- Informar ao programador quando parar de adicionar funcionalidade à user story
**O que são bons critérios de aceitação?**
- São escritos com menor nível de detalhamento
- São independente de implementação
- Definem o que fazer e não como fazer
### Exemplos:
- **Iniciante:** Descrição simples de como a funcionalidade deve funcionar.
    - Exemplo: Exibir apenas os dois últimos e-mails não lidos ao acessar pela primeira vez.
- **Avançado:** Dado (pré condição), Quando (cenário), Então (resultado esperado).
    - Exemplo: Dado que o cliente ainda não recebeu nenhum email, quando o cliente abrir o painel, a seguinte mensagem "nenhum email anterior" é exibida.

**User Story:**

**Como** um operador de marcação de consulta
**Eu gostaria** de visualizar a agenda de consultas dos médicos
**Para** saber quais horários estão disponíveis para novas marcações.

**Critérios de aceitação**
- Eu quero ter opções de visualização da agenda por dia, semana e mês.
- Eu quero visualizar a agenda de consultas do mês atual e do mês posterior.
- Cada consulta agendada deve mostrar o nome e o convênio do paciente.