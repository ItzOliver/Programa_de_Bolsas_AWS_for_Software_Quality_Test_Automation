# O que é o Git?
- O Git é um sistema distribuído opensource de controle de versão – o mais popular do mundo, diga-se de passagem;
    - Ser opensource significa que o Git é um software de livre utilização, ou seja, permite que qualquer pessoa com conhecimentos de programação use-o, modifique-o e aprimore-o;
    - Dizer que o Git faz controle de versões é a mesma coisa que dizer que ele armazena conteúdo e mantém um histórico das alterações feitas nele (seja por um usuário só ou muitos);
    - E, finalmente, o fato de ser um sistema distribuído significa que cada diretório de trabalho do Git é um repositório com um histórico completo e habilidade total de acompanhamento das revisões, independente de acesso a uma rede ou a um servidor central. Cada desenvolvedor tem, na sua máquina, acesso ao histórico completo do código trabalhado.

- Apesar de ser usado para registrar o histórico de edições de qualquer tipo de arquivo, incluindo trabalhos de TCC e monografias de doutorado, a adoção mais ampla desta ferramenta se dá na área de desenvolvimento de software;
- Dentro deste universo, o objetivo do Git é registrar todas as mudanças feitas no código-fonte de um projeto, evitando que algo importante se perca no meio do caminho.

# Os 13 Comandos Git mais usados:
- **git init:**
    - Para começar um projeto que ainda não seja um repositório (ou repo), o Git Init costuma ser o comando mais indicado;
    - Basicamente, ele cria um repositório vazio ou transforma uma pasta que você já tem e que não está com controle de versão em um repositório:
        - git init

- **git clone:**
    - O Git clone é um comando para baixar o código-fonte existente de um repositório remoto (como o Github, por exemplo).
    - Existem algumas maneiras de baixar o código-fonte, mas eu prefiro o clone com o modo https:
        - git clone <https://url-do-link>
    - Quando você clonar um repositório, o código é copiado para a o seu computador e continua linkado ao original, como foi explicado lá na descrição do que é um sistema distribuído;
    - Se você quiser desvincular a sua cópia do original, rode o comando abaixo:
        - git remote rm origin

- **git branch:**
    - Com as branches (ou ramificações), vários desenvolvedores podem trabalhar paralelamente no mesmo projeto. Assim, cada um pode codar a sua parte sem que haja confusão!
    - Funciona basicamente da seguinte forma: a cada alteração realizada no código, seja para adicionar um novo recurso ou até mesmo corrigir um erro, cria-se um novo ponto de ramificação que consolida essas mudanças, sem interferir nos arquivos originais;
    - Considerado um dos comandos Git mais importantes, o branch pode ser usado para três finalidades diferentes: criar, listar e excluir ramificações. Veja, na sequência, como trabalhar com cada uma delas. Para criar uma nova branch local, digite:
        - git branch <nome-da-branch>
    - Este comando criará uma branch local. Para upar a nova branch para o repositório remoto, você precisa usar o seguinte comando:
        - git push -u <remote> <nome-da-branch>
    - Para ver as ramificações, por sua vez, use:
        - git branch ou git branch --list
    - Por último, delete uma branch a partir do comando:
        - git branch -d <nome-da-branch>

- **git checkout:**
    - Esse é um dos comandos git mais utilizados. Para trabalhar em uma branch, primeiro você precisa mudar para ela. Apesar de parecer algo óbvio, não ir para a branch que você acabou de criar e na qual quer trabalhar é um erro bastante comum no começo;
    - Neste contexto, o principal objetivo do git checkout é ajudar você a mudar de uma branch para outra ou então verificar arquivos e commits:
        - git checkout <nome-da-ramificação>
    - Há ainda um comando de atalho que te permite criar e ir para um branch de uma vez só:
        - git checkout -b <nome-da-branch>

- **git status:**
    - O comando Git status serve para fornecer algumas informações importantes sobre a branch em que você estiver no momento, incluindo se ela está atualizada em relação à master e quais arquivos foram alterados;
        - git status

- **git diff:**
    - Apesar de o git status fornecer muitas informações relevantes, às vezes é preciso ir além;
    - Caso você queira, por exemplo, saber exatamente o que você alterou (e não apenas quais arquivos foram alterados), o melhor a se fazer é utilizar o comando:
        - git diff
    - Basicamente, sua execução realiza uma função de comparação nas fontes de dados Git e mostra quais linhas foram adicionadas e removidas.

- **git add:**
    - Quando criamos, modificamos ou excluímos um arquivo, essas alterações ocorrerão em nosso ambiente local e não serão incluídas no próximo commit (a menos que alteremos as configurações);
    - Para incluir as alterações de um arquivo em nosso próximo commit, será preciso usar o comando git add;
    - Para adicionar apenas um arquivo:
        - git add <arquivo>
    - Para adicionar, de uma vez, todos os arquivos modificados:
        - git add -A
    - Vale lembrar que o comando git add não altera o repositório e as alterações não são salvas até usarmos o git commit.
    
- **git commit:**
    - Esse comando visa definir um ponto de verificação no processo de desenvolvimento, para o qual você pode voltar mais tarde, se necessário:
        - git commit -m "mensagem explicando a mudança no código"

- **git push:**
    - Após confirmar as alterações, a próxima coisa que você deseja fazer é enviar as alterações para o servidor remoto usando o comando git push:
        - git push <remote> <nome-do-branch>
    - No entanto, se seu branch for criado recentemente, você também precisará fazer upload do branch com o seguinte comando:
        - git push -u origin <nome-do-branch>

- **git pull:**
    - O git pull é usado para obter atualizações do repositório remoto;
    - Trata-se de um comando que depende do referencial de onde ele foi feito, ou seja, um git pull feito da sua máquina vai puxar informações do repositório original para ela. Mas um git pull feito a partir do repositório original vai puxar as informações da sua máquina;
    - Este comando é uma combinação de git fetch (baixa as alterações do repositório remoto, mas não as mescla com o seu) e git merge (que mescla tudo junto);
    - Isso significa que, quando usamos o git pull, ele recebe as atualizações do repositório remoto (git fetch) e aplica imediatamente as alterações mais recentes no seu local (git merge);
        - git pull <remote>

- **git revert:**
    - Existem várias maneiras de desfazer nossas alterações local ou remotamente (dependendo da necessidade), mas devemos usar esses comandos com cuidado para evitar problemas;
    - Uma maneira segura de desfazer os commits é usando git revert;
        - git revert 'número do hash'
    - O número do hash pode ser conseguido pelo comando:
        - git log -- oneline

- **git merge:**
    - Quando você conclui o desenvolvimento em sua branch e tudo funciona bem, sem conflitos, a etapa final é mesclar as branches, isso é feito com o comando git merge;
    - Como mencionado no tópico sobre git pull, esse comando vai mesclar, no seu repositório local, todas as alterações feitas.
        - git merge <nome-da-branch>

- **git stash:**
    - Sabe quando você está trabalhando em uma parte do projeto que não está fluindo como deveria e, então, decide mudar de branch por um tempo para trabalhar em outra coisa?
    - Bom, quando isso acontece não é preciso necessariamente fazer o commit. Com o comando git stash, existe a possibilidade de apenas arquivar as alterações que você fez na cópia de trabalho durante um determinado período para que seja possível retornar a ela mais tarde;
    - Para salvar as alterações sem commit, basta executar:
        - git stash
    - Já para ver todas as stashes que você guardou, use:
        - git stash list
    - Por último, você também pode aplicar stashes antigos, especificando:
        - git stash apply stash@{2}