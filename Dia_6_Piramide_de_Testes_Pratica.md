**Pirâmide de Testes Prática:**

 - **Teste unitário ou Teste de unidade:**
    - A fundação da sua base de testes será formada for testes unitários. Seus testes unitários garantem que um certa unidade do seu código funcione conforme o esperado;
    - Testes unitários tem o escopo mais restrito de todos os testes em seu conjunto de testes;
    - O número de testes unitários no seu conjunto de testes vai superar em grande parte todo outro tipo de teste;

    - **Mas o que é uma unidade?**
        - "Se você perguntar para três pessoas diferentes o que 'unidade' significa no contexto de testes unitários, você provavelmente irá receber 4 respostas diferentes";
        - Se você estiver trabalhando em uma **linguagem funcional**, uma unidade provavelmente será uma função única:
            - Seus testes unitários chamarão uma função com parâmetros diferentes e garantirão que ela retorne os valores esperados.
        - Em uma **linguagem orientada a objetos**, uma unidade pode variar de um único método até uma classe inteira.

        - **Sociável e Solitário:**
            - Alguns argumentam que todos os colaboradores (por exemplo, outras classes que são chamadas pela sua classe em teste) do seu objeto em teste devem ser substituídos por simulações(mocks) ou esboços(stubs) para obter um isolamento perfeito e evitar efeitos colaterais e uma configuração de teste complicada.
            - Outros argumentam que apenas colaboradores que são lentos ou que apresentam efeitos colaterais maiores (por exemplo, classes que acessam bancos de dados ou fazem chamadas de rede) devem ser esboçados ou simulados.
            - Ocasionalmente, as pessoas rotulam esses dois tipos de testes como testes unitários solitários para testes que "stubam" todos os colaboradores e testes unitários sociáveis ​​para testes que permitem conversar com colaboradores reais.
            - No final das contas, não é importante decidir se você vai fazer testes de unidade solitários ou sociáveis. Escrever testes automatizados é o que importa.
            - Na prática usamos os dois o tempo todo. Se ficar estranho usar colaboradores reais, usamos mocks e stubs generosamente. Se sentirmos que envolver o verdadeiro colaborador nos dará mais confiança em um teste, apenas esboce as partes mais externas do seu serviço.

        - **Mocking e Stubbing:**
            - Mocks e Stubs são dois tipos diferentes de testes dublês (existem mais do que esses dois);
            - Muitas pessoas usam os termos Mock e Stub de forma intercambiável -> É bom ser preciso e ter em mente suas propriedades específicas;
            - Você pode usar testes dublês para substituir objetos que usaria na produção por uma implementação que o ajude nos testes;
            - Em palavras simples, significa que você substitui uma coisa real (por exemplo, uma classe, módulo ou função) por uma versão falsa dessa coisa -> A versão falsa parece e age como a versão real (respostas às mesmas chamadas de método), mas responde com respostas prontas que você mesmo define no início do teste de unidade;
            - O uso de testes dublês não é específico para testes unitários. Testes dublês mais elaborados podem ser usados ​​para simular partes inteiras do seu sistema de forma controlada. No entanto, em testes unitários, é mais provável que você encontre muitos mocks e stubs (dependendo se você é um desenvolvedor sociável ou solitário), simplesmente porque muitas linguagens e bibliotecas modernas tornam a configuração de mocks e stubs fácil e confortável;
            - Seus testes unitários serão executados muito rápido. Em uma máquina decente, você pode executar milhares de testes unitários em poucos minutos. Teste pequenas partes de sua base de código isoladamente e evite atingir bancos de dados, o sistema de arquivos ou disparar consultas HTTP (usando simulações e stubs para essas partes) para manter seus testes rápidos.

        - **O que testar?**
            - A vantagem dos testes unitários é que você pode escrevê-los para todas as classes de código de produção, independentemente de sua funcionalidade ou a qual camada da estrutura interna eles pertencem;
            - Você pode testar unitariamente controladores da mesma forma que você pode testar unitariamente repositórios, classes de domínio ou leitores de arquivos. Basta seguir a regra prática de uma classe de teste por classe de produção e você terá um bom começo;
            - Uma classe de teste unitário deve testar pelo menos a interface pública da classe. Os métodos privados não podem ser testados de qualquer maneira, pois você simplesmente não pode chamá-los de uma classe de teste diferente. Protected ou package-private são acessíveis a partir de uma classe de teste (dado que a estrutura do pacote da sua classe de teste é a mesma da classe de produção), mas testar esses métodos já pode ir longe demais;
            - Há uma linha tênue quando se trata de escrever testes unitários: eles devem garantir que todos os seus caminhos de código não triviais sejam testados. Ao mesmo tempo, eles não devem estar muito vinculados à sua implementação.
                - Testes muito próximos do código de produção rapidamente se tornam irritantes -> Assim que você refatorar seu código de produção, seus testes unitários irão quebrar;
                - Dessa forma, você perde um grande benefício dos testes unitários: atuar como uma rede de segurança para alterações de código.
                - O que você faz em vez disso? Não reflita sua estrutura interna de código nos testes unitários. Em vez disso, teste o comportamento observável. Pense sobre:

                    - se eu inserir os valores x e y, o resultado será z?

                    em vez de

                    - se eu inserir x e y, o método chamará a classe A primeiro, depois chamará a classe B e retornará o resultado da classe A mais o resultado da classe B?
                
                - Os métodos privados geralmente devem ser considerados um detalhe de implementação. É por isso que você nem deveria ter vontade de testá-los.
            
        - **Estrutura de Teste:**
            - Uma boa estrutura para todos os seus testes (isso não se limita a testes unitários) é essa:
            1. Configure os dados de teste;
            2. Chame seu método em teste;
            3. Afirme que os resultados esperados são retornados.

            - Esse padrão também pode ser aplicado a outros testes de mais alto nível. Em todos os casos, eles garantem que seus testes permaneçam fáceis e consistentes de ler. Além disso, testes escritos com essa estrutura em mente tendem a ser mais curtos e expressivos.

 - **Testes de Integração:**
    - Todas as aplicações não triviais serão integradas a algumas outras partes (bancos de dados, sistemas de arquivos, chamadas de rede para outros aplicativos). Ao escrever testes unitários, essas são geralmente as partes que você deixa de fora para obter um melhor isolamento e testes mais rápidos. Ainda assim, sua aplicação irá interagir com outras partes e isso precisa ser testado. Os testes de integração estão aí para ajudar. Eles testam a integração da sua aplicação com todas as partes que residem fora da sua aplicação.
    - Para seus testes automatizados isso significa que você não precisa apenas executar a própria aplicação, mas também o componente com a qual está integrando. Se você estiver testando a integração com um banco de dados, precisará executar um banco de dados ao executar seus testes. Para testar se você pode ler arquivos de um disco, você precisa salvar um arquivo em seu disco e carregá-lo em seu teste de integração.
    - Como mencionado antes, "testes unitários" é um termo vago, mas isso é ainda mais verdadeiro para "testes de integração". Para algumas pessoas, o teste de integração significa testar toda a pilha da sua aplicação conectado a outras aplicações do seu sistema.
    - Gosto de tratar os testes de integração de forma mais restrita e testar um ponto de integração por vez, substituindo serviços e bancos de dados separados por testes dublês.
    - Juntamente com os testes de contrato e a execução de testes de contrato contra testes duplos, bem como as implementações reais, você pode criar testes de integração que são mais rápidos, mais independentes e geralmente mais fáceis de raciocinar.
    - Os testes de integração restritos residem nos limites do seu serviço. Conceitualmente, trata-se sempre de desencadear uma ação que leva à integração com a parte externa (sistema de arquivos, banco de dados, serviço separado). Um teste de integração de banco de dados ficaria assim:
        1. Inicie o banco de dados;
        2. Conecte sua aplicação ao banco de dados;
        3. Acione uma função em seu código que grava dados no banco de dados;
        4. Verifique se os dados esperados foram gravados no banco de dados lendo os dados do banco de dados.

        Outro exemplo, testar se seu serviço se integra a um serviço separado por meio de uma API REST poderia ser assim:

        1. Inicie sua aplicação;
        2. Inicie uma instância separada do serviço (ou um teste dublê com a mesma interface);
        3. acione a função em seu código que lê a API do serviço separado;
        4. Verifique se seu aplicativo pode analisar a resposta corretamente.

    - Escreva testes de integração para todos os trechos de código onde você serializa ou desserializa dados. Isso acontece com mais frequência do que você imagina. Pense sobre:
        - Chamadas para a API REST dos seus serviços;
        - Lendo e gravandoem bancos de dados;
        - Chamando APIs de outros aplicativos;
        - Lendo e gravando em filas;
        - Escrevendo no sistema de arquivos.
    - Escrever testes de integração em torno desses limites garante que a gravação e a leitura de dados desses colaboradores externos funcionem bem.

    - Com relação à pirâmide de testes, os testes de integração estão em um nível superior aos testes unitários. A integração de partes lentas, como sistemas de arquivos e bancos de dados, tende a ser muito mais lenta do que a execução de testes unitários com essas partes eliminadas. 
    - Eles também podem ser mais difíceis de escrever do que testes unitários pequenos e isolados, afinal você precisa cuidar de criar uma parte externa como parte de seus testes. Ainda assim, eles têm a vantagem de lhe dar a confiança de que sua aplicação pode funcionar corretamente com todas as partes externas com as quais precisa se comunicar. Os testes unitários não podem ajudá-lo com isso.

 - **Testes E2E:**
    - Testar sua aplicação lançada por meio de sua interface de usuário é a maneira mais completa de testar seu aplicativo;
    - Os testes End-to-End (também chamados de testes Broad Stack) oferecem maior confiança quando você precisa decidir se seu software está funcionando ou não;
    - Os testes ponta a ponta apresentam seus próprios tipos de problemas. Eles são notoriamente instáveis ​​e muitas vezes falham por motivos inesperados e imprevisíveis;
    - Muitas vezes o seu fracasso é um falso positivo. Quanto mais sofisticada for sua interface de usuário, mais instáveis ​​os testes tendem a se tornar -> Peculiaridades do navegador, problemas de tempo, animações e caixas de diálogo pop-up inesperadas são apenas alguns dos motivos que me fizeram gastar mais tempo com depuração do que gostaria de admitir;
    - No mundo dos microsserviços, há também a grande questão de quem é o responsável por escrever esses testes. Como eles abrangem vários serviços (todo o seu sistema), não há uma equipe única responsável por escrever testes de ponta a ponta;
    - Além de tudo isso, os testes ponta a ponta exigem muita manutenção e são executados muito lentamente;
    - Devido ao seu alto custo de manutenção, você deve tentar reduzir o número de testes ponta a ponta ao mínimo;
    - Pense nas interações de alto valor que os usuários terão com seu aplicativo. Tente criar jornadas do usuário que definam o valor central do seu produto e traduza as etapas mais importantes dessas jornadas do usuário em testes automatizados de ponta a ponta;
        - Se você estiver construindo um site de e-commerce, sua jornada de cliente mais valiosa pode ser um usuário pesquisando um produto, colocando-o no carrinho de compras e finalizando a compra. É isso. Enquanto esta jornada ainda funcionar, você não deverá ter muitos problemas;
        - Talvez você encontre mais uma ou duas jornadas de usuário cruciais que possam ser traduzidas em testes completos. Tudo além disso provavelmente será mais doloroso do que útil.
    
    - **Lembre-se: você tem muitos níveis inferiores em sua pirâmide de testes onde já testou todos os tipos de casos extremos e integrações com outras partes do sistema. Não há necessidade de repetir esses testes em um nível superior. O alto esforço de manutenção e muitos falsos positivos irão atrasá-lo e fazer com que você perca a confiança em seus testes, mais cedo ou mais tarde.**

 - **Evite Duplicação de Testes:**
    - Agora que sabemos que devemos escrever diferentes tipos de testes, há mais uma armadilha a evitar: 
        - duplicar testes nas diferentes camadas da pirâmide:
            - Embora nosso instinto possa dizer que não existem muitos testes, pode ter certeza que existem. Cada teste em seu conjunto de testes é uma bagagem adicional e não é gratuito. Escrever e manter testes leva tempo. Ler e compreender o teste de outras pessoas leva tempo. E, claro, executar testes leva tempo;
            - Tal como acontece com o código de produção, você deve buscar a simplicidade e evitar duplicação. No contexto da implementação de sua pirâmide de testes, você deve manter duas regras básicas em mente:
                1. Se um teste de nível superior detectar um erro e não houver falha no teste de nível inferior, você precisará escrever um teste de nível inferior;
                2. Empurre seus testes o mais baixo possível na pirâmide de testes.

            - A primeira regra é importante porque os testes de nível inferior permitem restringir melhor os erros e replicá-los de forma isolada. Eles serão executados mais rapidamente e ficarão menos inchados quando você estiver depurando o problema em questão. E servirão como um bom teste de regressão para o futuro; 
            - A segunda regra é importante para manter seu conjunto de testes rápido. Se você testou todas as condições com segurança em um teste de nível inferior, não há necessidade de manter um teste de nível superior em seu conjunto de testes. Simplesmente não adiciona mais confiança de que tudo está funcionando. Ter testes redundantes se tornará irritante em seu trabalho diário. Seu conjunto de testes será mais lento e você precisará alterar mais testes ao alterar o comportamento do seu código.
            - Vamos expressar isso de forma diferente: 
                - **se um teste de nível superior lhe der mais confiança de que seu aplicativo funciona corretamente, você deverá fazê-lo.**
            
 - **Escreva Código de Teste Limpo:**
    - Assim como acontece com a escrita de código em geral, criar um código de teste bom e limpo exige muito cuidado. Aqui estão mais algumas dicas para criar um código de teste sustentável:
        1. O código de teste é tão importante quanto o código de produção. Dê-lhe o mesmo nível de cuidado e atenção. "este é apenas um código de teste" não é uma desculpa válida para justificar um código desleixado;
        2. Teste uma condição por teste. Isso ajuda você a manter seus testes curtos e fáceis de raciocinar;
        3. “organizar, agir, afirmar” ou “dado, quando, então” são bons mnemônicos para manter seus testes bem estruturados;
        4. A legibilidade é importante. Não tente ser excessivamente SECO. A duplicação é aceitável, se melhorar a legibilidade. Tente encontrar um equilíbrio entre o código SECO e ÚMIDO.
        5. Em caso de dúvida, use a Regra de Três para decidir quando refatorar. Use antes de reutilizar;