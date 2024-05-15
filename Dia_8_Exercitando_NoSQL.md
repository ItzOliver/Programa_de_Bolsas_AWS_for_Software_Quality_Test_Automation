- **Com Base Nos Usuários Listados:**

    - 1) Realizar uma consulta que conte o número de registros existentes;
        - Resposta: 
            - Comando: db.usuarios.count()

    - 2) Realizar uma consulta para alterar o usuário com o nome "Teste Start" para "Teste Finish";
        - Resposta: 
            - Comando: db.usuarios.updateOne({ nome: "Teste Start" }, { $set: { nome: "Teste Finish" } })

    - 3) Realizar uma consulta para encontrar o usuário com o nome "Bruce Wayne";
        - Resposta: 
            - Comando: db.usuarios.find({ nome: "Bruce Wayne" })
    
    - 4) Realizar uma consulta para encontrar o usuário com o e-mail "ghost_silva@fantasma.com";
        - Resposta: 
            - Comando: db.usuarios.find({ email: "ghost_silva@fantasma.com" })

    - 5) Realizar uma consulta para deletar o usuário com e-mail "peterparker@marvel.com";
        - Resposta: 
            - Comando: db.usuarios.deleteOne({ email: "peterparker@marvel.com" })

- **Com Base Nos Produtos Listados:**

    - 1) Realizar uma consulta que apresente produtos com descrição vazia;
        - Resposta: 
            - Comando: db.produtos.find({ descricao: "" })

    - 2) Realizar uma consulta que apresente produtos com a categoria "games";
        - Resposta:
            - Comando: db.produtos.find({ categoria: "games" })

    - 3) Realizar uma consulta que apresente produtos com preço "0";
        - Resposta:
            - Comando: db.produtos.find({ preco: 0 })

    - 4) Realizar uma consulta que apresente produtos com o preço maior que "100.00";
        - Resposta:
            - Comando: db.produtos.find({ preco: { $gt: 100.00} })

    - 5) Realizar uma consulta que apresente produtos com o preço entre "1000.00" e "2000.00";
        - Resposta:
            - Comando: db.produtos.find({ preco: { $gte: 1000.00, $lte: 2000.00} })

    - 6) Realizar uma consulta que apresente produtos em que o nome contenha a palavra "jogo".
        - Resposta:
            - Comando: db.produtos.find({ nome: /jogo/ })