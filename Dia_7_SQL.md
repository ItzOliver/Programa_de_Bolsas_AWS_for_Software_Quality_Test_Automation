- **SQL:**
    - O que é SQL?
        - SQL (Structured Query Language) é um conjunto de comandos de manipulação de banco de dados para criar e manter a estrutura desse banco de dados, além de incluir, excluir, modificar e pesquisar informações nas tabelas dele;
        - É uma linguagem declarativa, ou seja, especifica-se o que deve ser feito e não como deve ser feito;

    - **Subconjuntos da linguagem SQL:**
        - **DDL** (Data Definition Language)
            - CREATE TABLE;
            - ALTER TABLE;
            - DROP TABLE;
        - **DML** (Data Manipulation Language)
            - INSERT;
            - DELETE;
            - UPDATE;
        - **DQL** (Data Query Language)
            - SELECT;
        - **DCL** (Data Control Language) - **Este não será abordado no momento**
            - CREATE USER;
            - ALTER USER;
        - **DTL** (Data Transaction Language) - **Este não será abordado no momento**
            - BEGIN TRANSACTION;
            - COMMIT;
            - ROLLBACK;
    
    **DDL:** (Data Definition Language)

    **Criando o banco de dados:**
        CREATE DATABASE myecommerce;

    **Apagando o banco de dados:**
        DROP DATABASE myecommerce;

    - Exemplo de uso:
        - Criando uma tablea:

        **CREATE TABLE** products (
            id int,
            name varchar(60),
            description varchar(150),
            category varchar(40);
            price numeric(10,2);
            in_stock boolean
        );

        - Apagando uma tabela:

        **DROP TABLE** products;

    **DML:** (Data Manipulation Language)
        
    **Inserindo registros**
        INSERT INTO nome_da_tabela(coluna1, coluna2) VALUES(valor1, valor2);

    **Atualizando registros**
        UPDATE nome_da_tabela SET coluna1 = valor1, coluna2 = valor 2...
        WHERE condição;
            obs: se n adicionar uma condição com WHERE o comando afetará toda a tabela.

    **Removendo registros**
        DELETE FROM nome_da_tabela WHERE condição;
            obs: se n adicionar uma condição com WHERE o comando afetará toda a tabela.
    
    **Selecionando registros**
        SELECT coluna1, coluna2, coluna3 FROM nome_da_tabela;
    
    - Exemplos de uso:
        Inserindo registros:
            **INSERT INTO** products (id, name, description, category, price, in_stock)
            **VALUES** (1, 'computador', 'computador 8 nucleos gamer', 'informatica', 2600, 'true');

        Selecionando registros para consulta:
            **SELECT** *
            **FROM** products;

        Atualizando um registro:
            **UPDATE** products **SET** price = 230.50, in_stock = 'true'
            **WHERE** id = 3;

        Removendo registros:
            **DELETE FROM** products
            **WHERE** id = 6;

    