# EXERCÍCIO PRÁTICO DE SQL

EXERCÍCIOS REALIZADOS NO SITE sqliteonline.com

- **COM BASE NA TABELA USUÁRIOS:**
    1) Realizar uma consulta que conte o número de registros na tabela.
        - Resposta: 
            - Comando: SELECT COUNT(nome) FROM usuarios;

    2) Realizar uma consulta para encontrar o usuário com id 10.
        - Resposta:
            - Comando: SELECT nome FROM usuarios WHERE id = 10;
    
    3) Realizar uma consulta para encontrar o usuário com o nome "Bruce Wayne".
        - Resposta:
            - Comando: SELECT * FROM usuarios WHERE nome = 'Bruce Wayne';

    4) Realizar uma consulta para encontrar o usuário com o e-mail "ghost_silva@fantasma.com".
        - Resposta:
            - Comando: SELECT * FROM usuarios WHERE email = 'ghost_silva@fantasma.com'; 

    5) Realizar uma consulta para deletar o usuário com e-mail "peterparker@marvel.com".
        - Resposta:
            - Comando: DELETE FROM usuarios WHERE email = 'peterparker@marvel.com'; 

- **COM BASE NA TABELA PRODUTOS:**
    1) Realizar uma consulta que apresente produtos com descrição vazia.
        - Resposta: 
            - Comando: SELECT * FROM produtos WHERE descricao = ''; -> obs: NULL é **DIFERENTE** de vazio.

    2) Realizar uma consulta que apresente produtos com a categoria "games".
        - Resposta:
            - Comando: SELECT * FROM produtos WHERE categoria = 'games';

    3) Realizar uma consulta que apresente produtos com preço "0".
        - Resposta:
            - Comando: SELECT * FROM produtos WHERE preco = 0;

    4) Realizar uma consulta que apresente produtos com o preço maior que "100.00".
        - Resposta:
            - Comando: SELECT * FROM produtos WHERE preco > 110;

    5) Realizar uma consulta que apresente produtos com o preço entre "1000.00" e "2000.00".
        - Resposta:
            - Comando: SELECT * FROM produtos WHERE preco BETWEEN 1000 and 2000;

    6) Realizar uma consulta que apresente produtos em que o nome contenha a palavra "jogo".
        - Resposta:
            - Comando: SELECT * FROM produtos WHERE nome like '%jogo%';