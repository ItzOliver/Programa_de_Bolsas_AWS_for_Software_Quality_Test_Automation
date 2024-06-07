# Gestão de Defeitos
Garantir qualidade significa minimizar os riscos e deixar o produto final com o menor número de erros possível. Risco é a probabilidade de insucesso, em função de algum acontecimento eventual, incerto, cuja ocorrência não depende exclusivamente da vontade dos interessados. Para evitar os defeitos, diminuir os riscos torna-se fundamental. Afinal, quanto menor o risco, menor a probabilidade de encontrar bugs. Essa afirmação deve ser aplicada tanto para o projeto de desenvolvimento de software, como para o de Teste.
É importante que a gestão de defeitos seja realizada, pois a mesma possibilita uma visão geral e consequentemente um melhor acompanhamento do andamento do projeto, através da verificação dos bugs registrados.
Neste contexto, a qualidade do sistema pode ser medida a partir dos bugs encontrados durante todo o seu ciclo de vida, desde a fase de projeto, até ser colocado efetivamente em produção. E para que os bugs sejam gerenciados com sucesso, é necessário que a gestão de defeitos seja utilizada de maneira simples, tornando-se de fundamental importância dentro de um processo de Teste de Software.
## Processo de Gestão de Defeitos
Para facilitar o entendimento da gestão de defeitos, é necessário, antes de tudo, esclarecer alguns conceitos. Muitas pessoas confundem o significado de defeito, erro e falha. Mas afinal, qual a diferença entre eles?
- **Erro (engano):** ação humana que produz resultados incorretos, como por exemplo, a implementação errada de um algoritmo;
- **Defeito (bug):** falha em um sistema que pode ocasionar uma anomalia ao tentar desempenhar sua devida função. Por exemplo, omissão de informações e cálculos incorretos;
- **Falha:** ação inesperada no software. Por exemplo, o sistema apresenta resultados diferentes do planejado.
Além da definição do que é um bug, outras questões devem estar bem claras para toda a equipe:
- **O problema encontrado é um defeito ou uma melhoria?** Para responder a esse questionamento, lembre-se sempre que a melhoria deve ser sugerida para proporcionar algum benefício no software, enquanto o erro impactará na obtenção de um resultado diferente do esperado;
- **O quão crítico é o bug?** Cada bug encontrado deve ser classificado de acordo com a sua criticidade. Para isso, é essencial definir qual será o impacto no projeto caso o problema não seja resolvido.
# Jira
## Tipos de Jira: Bug ou Issue de aceitação
Quando estamos homologando o sistema criamos bugs para os problemas localizados durante a homologação. Durante a etapa de aceite o cliente vai abrir também solicitações do tipo bug para verificação. Podemos ativar no jira para essas solicitações do cliente o tipo issue de aceitação, assim fica mais fácil a rastreabilidade do que foi aberto pela equipe interna ou pelo cliente.
## Como identificar uma solicitação do cliente:
### O problema encontrada é um bug ou uma melhoria?
Para responder a esse questionamento, lembre-se sempre que a melhoria deve ser sugerida para proporcionar algum benefício no software, enquanto o erro impactará na obtenção de um resultado diferente do esperado. Uma melhoria deverá ser avaliada pela gestão do projeto para verificação se será ou não implementada nessa etapa.
## Como classificar bug em dev/análise/massa/ambiente
Os bugs podem ocorrer devido a vários motivos e devemos localizar a causa raiz.
- **DEV:** O bug pode ter ocorrido devido a uma falha no desenvolvimento da demanda.
- **ANÁLISE:** Especificações funcionais e técnicas elaboradas erroneamente ou que não suprem a necessidade do cliente.
- **MASSA:** Incosistência nos dados utilizados para testes.
- **AMBIENTE:** Falha no ambiente que está sendo utilizado para testes. Nesse caso pode ser necessário entrar em contato com a fornecedora do produto ou admnistrador do sistema.