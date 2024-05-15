- **NoSQL MongoDB:**

- No MongoDB não temos tabelas, temos collections.
- No MongoDB "não temos queries", utilizamos métodos -> Como em linguagens orientadas a objeto.

- **Como inserir dados:**
    - Inserir dados sem criar um collection irá criar a collection, se não existir banco também criará o banco;
        Exemplo:
            db.pessoas.insertOne({ nome: "Matheus", idade: 30, profissao: "Programador", esta_empregado: true });

            db -> banco de dados atual;
            pessoas -> collection;
            insertOne -> método;
        Exemplo2:
            db.pessoas.insertMany([
                { nome: "João", idade: 40, profissao: "Arquiteto", esta_empregado: false },
                { nome: "Maria", idade: 23, profissao: "Professora", esta_empregado: true }
            ]);

- Exibir collections -> show *nome_da_collection*;

- **Como verificar dados:**
    - Método find! 
        - db.*nome_da_collection*.find() -> exibe todos os dados da collection -> obs: findOne() pode ser usado para que retorne apenas um dado independente da quantidade de dados que satisfaçam a condição de busca;
        - Exemplo:
            db.pessoas.find(); -> para deixar o resultado mais légivel basta adicionar .pretty() no final do comando;

        - Para encontrar cadeias de caracteres específicos basta usar -> .find({ *dado: /cadeia de caracteres procurada/* });
            db.pessoas.find({ nome: /Silva/ })

- **Como usar parametros para buscas:**
    - db.*nome_da_collection*.find({ *o que está procurando* });
        - Exemplo:
            db.pessoas.find({ esta_empregado: true });

- **Como contar dados na collection:**
    - db.*nome_da_collection*.count();
        - Exemplo:
            db.pessoas.count();

- **Como atualizar dados:**
    - Método update!
        - db.pessoas.updateOne({ *filtro para encontrar o dado* }, { *filtro para especificar a mudança* $set: { esta_empregado: true } });
        - db.pessoas.updateMany({ *como o objetivo é modificar todos os dados o filtro é vazio* }, { *filtro para especificar a mudança* $set: { salario: 5000 } });
        - obs: MongoDB permite adicionar tipos de dados que NÃo estão previamente definidos na collection;

- **Como remover dados:**
    - Método delete!
        - db.pessoas.deleteOne({ name: "Josias" });
        - db.pessoas.deleteMany({ name: "josias" });

- **Operadores do MongoDB:**
    - Maior que: $gt -> greater than;
        - db.pessoas.find({ idade: { $gt: 30 } });

    - Maior ou igual que: $gte: -> greater than or equal;
        - db.pessoas.find({ idade: { $gte: 30} });

    - Menor que: $lt -> less than;
        - db.pessoas.find({ idade: { $lt: 25} });

    - Menor ou igual que: -> less than or equal;
        - db.pessoas.find({ idade: { $lte: 25} });
    
    - Entre dois valores:
        - db.produtos.find({ idade: { $gte: 25, $lte: 30} })