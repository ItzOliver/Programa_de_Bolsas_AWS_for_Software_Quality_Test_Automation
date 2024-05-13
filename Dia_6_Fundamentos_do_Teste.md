**Fundamentos do Teste**
- Conforme o projeto avança no desenvolvimento, os testes também avançam junto.
    - Enquanto o time do desenvolvimento está trabalhando no projeto a equipe de testes já pode começar a planjear e projetar os testes a fim de garantir qualidade.

- **Pirâmide de testes;**
 - **Teste unitário ou Teste de unidade:**
    - Verificam o funcionamento da menor unidade de código testável da aplicação, independente da interação dela com outras partes do código;
    - A unidade geralmente é vista como um método público em uma classe (quando falamos em Orientação a Objetos), mas pode ser vista também como um conjunto de classes/métodos/objetos interagindo entre si;
    - O que é interessante sobre testes de unidade é que eles, além de pequenos (por testarem uma parte pequena do seu sistema), são independentes de colaboradores externos à unidade;
    - Pelo fato do teste de unidade ser independente de qualquer agente externo real, podendo ser realmente pequeno, simples e, portanto, rápido de rodar.;
    - Outra vantagem que temos com isso é que quando um teste de unidade falha, você sabe exatamente onde está o problema: não precisa nem pensar!;
    - Testes de unidade podem guiar o design do seu código, especialmente quando o desenvolvimento orientado a testes (*Test Driven Development - TDD*) é usado. Porque o teste age como o primeiro usuário do código, acabamos escrevendo um código mais simples e coeso.

 - **Teste de integração:**
    - A ideia deles é verificar se um conjunto de unidades se comporta da maneira correta, só que de forma menos abrangente do que os testes de ponta a ponta;
    - Podemos ter testado duas unidades que interagem entre si separadamente e concluído que ambas então funcionando como esperado -> Ainda assim, é possível que as duas unidades não funcionem em conjunto;
    - Para resolver esse problema, temos os testes de integração, que testam algumas unidades funcionando em conjunto. Diferente dos testes de ponta a ponta, são testes que testam funcionalidades, e não o sistema como um todo;
        - Mais complicados (de fazer e manter) e demorados que os testes de unidade, por testarem uma funcionalidade inteira (muitas vezes com persistência de dados);
        - Bem mais simples (de fazer e manter) e rápidos que os testes de ponta a ponta, por testarem uma única funcionalidade de cada vez, sem precisar subir a aplicação inteira.

 - **Teste E2E**;
    - Teste ponta a ponta que simulam o ambiente real;
    - O objetivo deles é imitar o comportamento do usuário final nas nossas aplicações (seja ele uma pessoa, uma api, ou qualquer outro tipo de cliente);
        - Esses testes são complexos de escrever e costumam demorar um tempo considerável pra rodar (afinal, interações do usuário com a aplicação são complexas e demoradas);
        - Além disso, quando um teste de ponta a ponta falha, não é trivial inferir onde está o problema da aplicação, já que o teste é bem abrangente -> **geralmente são testes que cobrem apenas os fluxos principais da aplicação.**

    - Ciclo de teste E2E:
        - Cadastrar;
        - Escolher item;
        - Calcular frete;
        - Sacola;
        - Pagamento;
        - Finalizar pagamento;
        - Informações do pedido;
        - Boleto;
        - Meus pedidos;

- **Recapitulando:**
    - é importante sempre lembrar que a base da pirâmide é mais fácil de fazer e mais rápida para rodar, enquanto o topo é mais difícil e lento;
    - Com isso em mente, a pirâmide nos mostra a importância de que a maior parte do seu código seja coberto por testes de unidade, já que eles rodam muito rápido e são muito simples (de fazer e manter);
    - Já o nível de teste mais complexo e demorado (os de ponta a ponta), deve possuir menos testes (assim o deploy não fica travado por mais de 1h enquanto os testes estão sendo rodados);
    - Os testes de integração existem para os cenários que não podem ser cobertos por testes de ponta a ponta, e para cenários que os testes de unidade já cobrem muito bem.

    | ----------- | Quantidade | Tempo para rodar | |----------|:-------------:|------:| | Ponta a ponta| 13 | ~ 15 min | |----------|:-------------:|------:| | Integração| ~ 3k | ~ 3 min | |----------|:-------------:|------:| | Unidade| ~ 6k | ~ 1 min |