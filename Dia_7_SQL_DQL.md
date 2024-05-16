# CONSULTAS EM SQL:
- DQL (Data Query Language):
    - SELECT 'lista_de_campos'
    - FROM 'nome_tabela'
    - WHERE 'condições_de_filtragem';
        
- **FILTRO DE TEXTO:**
    - SELECT NOME
    - FROM CLIENTES
    - WHERE NOME **LIKE** '%MARIA%';

    - Por padrão, o SQL diferencia caixa baixa de caixa alta. Para eliminar essa diferença, utiliza a função UPPER. Veja abaixo:
        - SELECT NOME
        - FROM CLIENTES
        - WHERE **UPPER**(NOME) LIKE '%MARIA%';
    
- **ORDENAÇÃO:**
    - SELECT NOME
    - FROM CLIENTES
    - **ORDER BY** NOME;

    - A utilização da palavra DESC garante a ordenação invertida:
        - SELECT NOME
        - FROM CLIENTES
        - **ORDER BY** NOME **DESC**;

- **JUNÇÃO DE TABELAS:**
    - O SELECT permite juntar duas ou mais tabelas no mesmo resultado. Isso pode ser feito de várias formas. Uma delas segue abaixo:
        - SELECT CLIENTES.CODIGO, CLIENTES.NOME, PEDIDOS.DATA
        - FROM CLIENTES, PEDIDOS
        - WHERE CLIENTES.CODIGO = PEDIDOS.CODCLIENTE
    - Nesta linha as tabelas relacionadas CLIENTES e PEDIDOS são unificadas através do campo chave, em uma operação de igualdade. Repare que os nomes dos campos passam a ser prefixados pelo nome das tabelas, resolvendo duplicidades. Uma versão resumida desse comando pode ser como abaixo:    
           - SELECT A.CODIGO, A.NOME, B.DATA, B.VALOR
        - FROM CLIENTES A, PEDIDOS B
        - WHERE A.CODIGO = B.CODCLIENTE
    - O uso de aliases no código SQL torna a manutenção mais simples.
    
- **COMANDO JOIN:**
    - A junção de tabelas no comando SELECT também pode ser feita com o comando JOIN. Este comando deve ser utilizado com a palavra reservada INNER ou com a palavra OUTER:
        - **INNER**: Semelhante ao uso do operador “=” na junção de tabelas. Aqui os registros sem correspondências não são incluídos. Esta cláusula é opcional e pode ser omitida no comando JOIN.
        - **OUTER**: Os registros que não se relacionam também são exibidos. Neste caso, é possível definir qual tabela será incluída na seleção, mesmo não tendo correspondência.

    - Exemplo 1:
        - SELECT A.CODIGO, A.DESCRICAO, B.DESCRICAO, B.QTD
        - FROM PRODUTOS A
        - INNER JOIN COMPONENTES B
        - ON (A.CODIGO = B.CODPRODUTO)

    - Exemplo 2:
        - SELECT A.CODIGO, A.DESCRICAO, B.DESCRICAO
        - FROM PRODUTOS A
        - JOIN COMPONENTES B
        - ON (A.CODIGO = B.CODPRODUTO)

    - Exemplo 3:
        - SELECT A.CODIGO, A.DESCRICAO, B.DESCRICAO, B.QTDE
        - FROM PRODUTOS A
        - LEFT OUTER JOIN COMPONENTES B
        - ON (A.CODIGO = B.CODPRODUTO)

    - FULL OUTER JOIN: Podemos ainda combinar o uso de INNER e OUTER através do comando FULL OUTER JOIN. Neste caso, todos os registros das duas tabelas envolvidas serão exibidos, tendo ou não relacionamento. Observe:
        - UNION: Existe ainda uma segunda forma de juntar tabelas com o comando SELECT. Através do parâmetro UNION, é possível colar o conteúdo de duas tabelas. Veja o exemplo:
            - SELECT CODIGO, NOME FROM CLIENTES
            - UNION
            - SELECT CODIGO. NOME FROM FUNCIONARIOS
        - O resultado deste comando é a listagem de todos os clientes e a listagem de todos os funcionários, dentro do mesmo result set. Repare que no comando JOIN á união é horizontal e no UNION a união é vertical.

- **FUNÇÕES DE AGRUPAMENTO:**
    - São cinco as funções básicas de agrupamento:
        - AVG: Retorna a média do campo especificado
        - SELECT AVG(VALOR) FROM PEDIDOS
        - MIN/MAX/SUM: Respectivamente retorna o menor valor, o maior e o somatório de um grupo de registros:
        - SELECT MIN(VALOR) FROM PEDIDOS
        - SELECT MAX(VALOR) FROM PEDIDOS
        - SELECT AVG(VALOR) FROM PEDIDOS
        - COUNT: Retorna a quantidade de itens da seleção

        - Exemplo: 
            - SELECT COUNT(CODIGO) FROM CLIENTES
        
    - **AGRUPAMENTO:**
        - Um poderoso recurso do comando SELECT é o parâmetro GROUPY BY. Através dele podemos retornar informações agrupadas de um conjunto de registros, estabelecendo uma condição de agrupamento. É um recurso muito utilizado na criação de relatórios. Para exemplificar, temos as tabelas CLIENTES E PEDIDOS a seguir.
            - SELECT CODCLIENTE, MAX(VALOR)
            - FROM PEDIDOS
            - GROUP BY CODCLIENTE 
        - O comando acima retorna o maior valor de pedido de cada cliente. Observe o resultado:
            - SELECT CODCLIENTE, COUNT(*)
            - FROM PEDIDOS
            - GROUPY BY CODCLIENTE
        - Acima vemos quantos pedidos foram feitos por cada cliente.
        
    - **HAVING:**
        - Através do comando HAVING podemos filtrar a cláusula GROUP BY. Observe o comando abaixo:
            - SELECT CODCLIENTE, COUNT(*)
            - FROM PEDIDOS
            - GROUPY BY CODCLIENTE
            - HAVING COUNT(*) >= 2
        - Somente os clientes com 2 ou mais pedidos serão selecionados. Repare que o HAVING é utilizado, geralmente com alguma função de agrupamento. Para filtros normais, pode-se utilizar o comando WHERE. Observe o exemplo abaixo:
            - SELECT CODCLIENTE, COUNT(*)
            - FROM PEDIDOS
            - WHERE DATA > ‘06/10/2002’
            - GROUPY BY CODCLIENTE
            - HAVING COUNT(*) >= 2