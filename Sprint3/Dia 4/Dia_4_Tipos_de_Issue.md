# Tipos de Issue
## Melhoria:
É quando um determinado requisito é identificado no sistema que ainda não está implementado mas pode ser implementado para gerar um benefício ao cliente. 
- Por exemplo, o sistema, hoje, gera relatórios com informações baseadas na data escolhida pelo usuário. Mas poderia existir a opção de escolher a data e o local.
## BUG:
É quando uma determinada funcionalidade do sistema não está funcionando como foi definido pelo cliente.
- Por exemplo, o botão salvar não está executando nenhuma ação ao clicar. 
- Ou, uma determinada tela do sistema não está sendo carregada conforme o layout especificado pelo cliente.
## Status de Execução de um Caso de Teste:
- **Aberto:** Caso de teste criado que ainda não foi executado.
- **Em Execução:** Está sendo executado (testado).
- **Passou:** Foi executado e está sem bugs abertos vinculados ao fluxo.
- **Falhou:** Foi executado sendo encontrado bugs no fluxo (Todo status de falha deverá estar vinculado ao bug criado durante a execução).
- **Bloqueado:** Algumas ação externa está bloqueando a execução do fluxo.
    - Exemplo: Massa de dados específica que deverá ser entregue pelo cliente, como cpf/cnpj de usuário da loja que possua algum dado que não conseguimos criar através da nossa aplicação e que só existe na base do cliente.
- **Cancelado:** Não setá executado, geralmente ocorre quando a funcionalidade foi retirada do escopo do projeto.
## Report de Teste:
Quando estamos homologando o sistema criamos bugs para os problemas localizados durante a homologação. Durante a etapa de aceite o cliente vai abrir também solicitações do tipo bug para verificação. Podemos criar uma issue para essas solicitações do cliente e o tipo issue de aceitação, assim fica mais fácil a rastreabilidade do que foi aberto pela equipe interna ou cliente.
### Como identificar uma solicitação do cliente:
- **O problema encontrado é um bug ou uma melhoria?**
Para responder a esse questionamento, lembre-se sempre que a melhoria deve ser sugerida para proporcionar algum benefício no software, enquanto o erro impactará na obtenção de um resultado diferente do esperado. Uma melhoria deverá ser avaliada pela gestão do projeto para verificação se será ou não implementada nessa etapa.
### Classificar o bug
Os bugs podem ocorrer devido a vários motivos e devemos localizar a causa raiz.
- **Dev:** O bug pode ter ocorrido devido a uma falha no desenvolvimento da demanda.
- **Análise:** Especificações funcionais e técnicas elaboradas erroneamente ou que não suprem a necessidade do cliente.
- **Massa:** Inconsitência nos dados utilizados para testes.
- **Ambiente:** Falha no ambiente que está sendo utilizado para testes. Nesse caso pode ser necessário entrar em contato com a fornecedora do produto ou administrador do sistema.