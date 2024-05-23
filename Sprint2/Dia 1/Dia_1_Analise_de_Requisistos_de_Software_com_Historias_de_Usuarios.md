# Análise de Requisitos de Software com Histórias de Usuários
## O que são Histórias de Usuário
Uma descrição resumida da feature que será implementada para seu cliente.
- Cada história de usuario precisa ser independente, não se pode utilizar outra história de usuário para complementar a história que está sendo trabalhada (Autocontida).
- A história de usuário precisa ser mensurável, é necessário saber todos os detalhes escondidos dentro de uma história
- Uma história de usuário deve ser testável -> Definir os critérios de aceitação dessa história e verificar se os critérios estão sendo atendidos.
## Example Mapping
É uma técnica utilizada para identificar o que está oculto em uma história de usuário e que irá ajudar a mensurar a história e saber quais são os passos que devem ser implementados para que aquela história seja atendida. 
- Conceito dos três amigos:
    - No mundo das metodologias ágeis os três amigos representam os três aspectos diferentes do momento em que se está desenvolvendo o sistema;
        - O aspecto do cliente (O dono do produto);
        - A visão do desenvolvedor;
        - A visão do testador.
    - Essas três visões diferentes devem ser tratadas em conjunto para que consigam identificar todas as regras que devem ser implementadas e todos os exemplos que devem ser trabalhados dentro da história de usuário.
## Como Funciona o Example Mapping
Você deve escolher uma história que vai ser trabalhada naquela reunião e junto de sua equipe explicar que haverá um cronômetro pra limitar a reunião pra ter no máximo 30 minutos. Dessa forma, todos conseguem focar e se concentrar.
Para cada história deve-se montar um quadro utilizando cartões coloridos para poder desmembrar a história de usuário.
- Cartão amarelo -> A história que será trabalhada (Uma breve descrição do que será implementado);
- Cartão azul -> Regras;
- Cartão verde -> Exemplo de como cada regra deve ser implementada;
    - Um exemplo deve ter:
        - Contexto;
        - Uma ação;
        - Um resultado esperado.
- Cartão rosa -> Questionamentos para responder alguma dúvida sobre a história de usuário.
## Visão Geral do Projeto Prático
Depois de ter uma reunião com o cliente a equipe inicia uma breve entrevista para levantar todos os pontos chaves. À medida que o cliente responder, é definido se aquilo (a resposta) se tornará uma história de usuário. Muitas vezes uma história de usuário leva à outra e, dessa forma, vai sendo montado o Product Backlog.
### Exemplo:
Uma história de usuário "Cadastri de usuário" leva a uma outra história de usuário "Autenticação de usuário", por exemplo. Assim como uma história de usuário "Publicando anúncio gratuito" leva a história de usuário "Publicando anúncio pago".
## Exemplos de Mapeamento de Histórias de Usuário
### Mapeando História de Usuário 1: Cadastro de Usuário
Cartão amarelo -> Como um usuário devo me cadastrar no site para poder criar um anúncio;
Cartão azul -> Dados obrigatórios devem ser informados (1), identificador no sistema deve ser único (e-mail) (2), a senha do usuário deve ter no mínimo 8 caracteres (3);
Cartão verde -> Preencheu todos os sados e submeteu o formulário = ok (1); Deixou algum campo obrigtório em brando e submeteu o formulário = erro (1); Tem um usuario com o exmail x, quando o usuário tentar se cadastar com o mesmo e-mail x = erro (2); Não existe usuário com o e-mail x, quando o usuário tenta se cadastrar com o e-mail x = ok (2); Tentou se cadastrar com a senha "12345" = erro (3); Tentou se cadastrar com a senha "12345ABCDE" = ok;
Cartão rosa -> O usuário tem que validar o e-mail?
### Mapeando História de Usuário 2: Autenticação de Usuário
Cartão amarelo -> Sendo um usuário cadastrado quero me autenticar no site;
Cartão azul -> Usuário deve ter cadastro (1), Bloquear conta após muitas tentativas e falhas na autenticação (2), 
Cartão verde -> Usuário informou dados válidos e submeteu o formulário = ok (1); Usuário informou dados incorretos e submeteu formulário = erro (1); Dao que o sistema tem um limite de 10 tentativas e o usuário já errou 9x, quando ele enviar os dados incorretors novamente = Bloqueio da conta (2);
Cartão rosa -> Deve ter limite de tentativas de login?; Recuperação de senha? -> Vira outra história de usuário.
### Mapeando História de Usuário 3: Publicando Anúncio Gratuito
Cartão amarelo -> Como um usuário autenticado quero criar um anúncio gratuito para vender meu produto;
Cartão azul -> Deve preencher os dados obrigatórios do produto (1); Anúncio sem destaque é publicado imediatamente (2).
Cartão verde -> Preencheu todos os dados obrigatórios e submeteu o formulário = ok (1); Esqueceu de informar o título do produto e submeteu o formulário = erro (1); Preencheu todos os campos, selecionou anúncio sem destaque e submeteu o formulário = ok.
### Mapeando História de Usuário 4: Criar Anúncio Pago
Cartão amarelo -> Como um usuário autenticada quero criar um anúncio pago para vender meu produto mais rapidamente;
Cartão azul -> Deve preencher os dados obrigatórios do produto (1); Anúncio com destaque deve ficar pendente até confirmação do pagamento (2);
Cartão verde -> Preencheu todos os dados obrigatórios e submeteu o formulário = ok; Esqueceu de informar o título do produto e submeteu o formulário = erro (1); Preencheu todos os campos, selecionou o anúncio destacado e submeteu o formulário = pendente (2)
Cartão rosa -> Como o usuário faz para pagar o anúncio? -> Vira outra história de usuário; O usuário deve receber algum aviso por e-mail do anúncio publicado?