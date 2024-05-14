**EXERCÍCIO PRÁTICO DE SQL:**

EXERCÍCIOS REALIZADOS NO SITE sqliteonline.com

- **COM BASE NA TABELA USUÁRIOS:**
    1. Realizar uma consulta que conte o número de registros na tabela.
        Resposta: 
            Comando: SELECT COUNT(nome) FROM usuarios;
            Resultado: 16.

    2. Realizar uma consulta para encontrar o usuário com id 10.
        Resposta:
            Comando: SELECT nome FROM usuarios WHERE id = 10;
            Resultado: Lucca Ryan Jesus.
    
    3. Realizar uma consulta para encontrar o usuário com o nome "Bruce Wayne".
        Resposta:
            Comando: SELECT * FROM usuarios WHERE nome = 'Bruce Wayne';
            Resultado: Bruce Wayne (Usuário encontrado!).

    4. Realizar uma consulta para encontrar o usuário com o e-mail "ghost_silva@fantasma.com".
        Resposta:
            Comando: SELECT * FROM usuarios WHERE email = 'ghost_silva@fantasma.com'; 
            Resultado: Ghost Silva (Usuário encontrado!).

    5. Realizar uma consulta para deletar o usuário com e-mail "peterparker@marvel.com".
        Resposta:
            Comando: DELETE FROM usuarios WHERE email = 'peterparker@marvel.com'; 
            Resultado: Usuário deletado.

- **COM BASE NA TABELA PRODUTOS:**
    1. Realizar uma consulta que apresente produtos com descrição vazia.
        Resposta: 
            Comando: SELECT * FROM produtos WHERE descricao = ''; -> obs: NULL é **DIFERENTE** de vazio.
            Resultado: Produtos encontrados com sucesso -> Caneca chopp e copo grande térmico.

    2. Realizar uma consulta que apresente produtos com a categoria "games".
        Resposta:
            Comando: SELECT * FROM produtos WHERE categoria = 'games';
            Resultado: Produtos encontrados com sucesso -> Mouse gamer, teclado gamer, monitor gamer, jogo batman, jogo tomb raide, jogo spider-man e jogo pac-man.

    3. Realizar uma consulta que apresente produtos com preço "0".
        Resposta:
            Comando: SELECT * FROM produtos WHERE preco = 0;
            Resultado: Produtos encontrados com sucesso -> Adesivo e caneca.

    4. Realizar uma consulta que apresente produtos com o preço maior que "100.00".
        Resposta:
            Comando: SELECT * FROM produtos WHERE preco > 110;
            Resultado: Produtos encontrados com sucesso ->  Monitor gamer, jogo batman, jogo spider-man, jogo pac-man, quarda-roupas lady bug e cama solteiro.

    5. Realizar uma consulta que apresente produtos com o preço entre "1000.00" e "2000.00".
        Resposta:
            Comando: SELECT * FROM produtos WHERE preco BETWEEN 1000 and 2000;
            Resultado: Produtos encontrados com sucesso ->  Monitor gamer e cama solteiro.

    6. Realizar uma consulta que apresente produtos em que o nome contenha a palavra "jogo".
        Resposta:
            Comando: SELECT * FROM produtos WHERE nome like '%jogo%';
            Resultado: Produtos encontrados com sucesso -> Jogo batman, jogo tomb raider, jogo spider-man e jogo pac-man.