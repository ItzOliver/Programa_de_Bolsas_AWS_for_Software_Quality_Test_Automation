# Testes Estáticos (Swagger)
## Conceitos básicos de APIs Rest
O App faz uma chamada direta a API enviando a ela o que chamamos de Requisição. Geralmente, requisições são enviadas a partir do protocolo HTTP ou HTTPS. Vemos abaixo a estrutura da requisição:
**ADICIONAR IMAGEM 1 e 2 AQUI**
Método -> Intenção do que se deseja fazer 
URI -> Caminho de qual recurso que queremos acessar
Cabeçalho -> Informações técnicas, ex: token -> representa a autenticação do usuário (Algumas requisições não precisam do token)
Corpo -> é geralmente utilizada quando se usa um método que tem a intenção de inserir ou alterar e no corpo se armazena qual objeto será armazenado dentro do recurso (Algumas requisições não precisam do corpo)
## Swagger
Swagger é um framework para descrição, consumo e visualização de serviços RESTful e seu grande objetivo é permitir que a documentação possa evoluir no mesmo ritmo da implementação. Swagger = Documentação da API. É escrito em um arquivo yml.
- Path: é tipicamente utilizado para apontar para um recurso específico em uma coleção, como um usuário identificado por um ID. Uma url pode ter múltiplos parâmetros Path, cada um denotado por { }.
- Query: são o tipo mais comum de parâmetro. Eles aparecem no final da Url de request depois de um "?", com diferentes pares de namo=valor separador por "&". Parâmetros Query podem ser opcionais ou obrigatórios. 
- Body: é tipicamente usado para operações de "criar" e "atualizar" (POST, PUT, PATCH). Por exemplo, quando se cria um recurso usando Post ou Put, o request body geralmente contém a representação do recursos. 

O Swagger informa quais são os valores que devem ser enviados em cada campo de uma requisição. 
O Swagger também informa quais são as respostas possíveis para uma requisição através de um STATUS CODE.