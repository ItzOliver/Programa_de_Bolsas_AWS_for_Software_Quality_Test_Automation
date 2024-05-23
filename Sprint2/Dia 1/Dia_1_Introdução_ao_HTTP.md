## Introdução ao HTTP
HTTP ou Hyper Text Transfer Protocol, é um protocolo usado para obter recursos, como por exemplo documentos HTML que vemos e utilizamos diariamente na WEB e além disso servem também para intermediar a comunicação com APIs.
- Requests: São criadas pelo cliente (acesso a um Website, chamada para uma API)
- Responses: Retorno do servidor, acompanhadas de status code e informações solicitadas (json)
- HTTP e HTTPS: HTTP é um protocolo baseado em texto, HTTPS garante a segurança das informações através de chaves
## Verbos HTTP e STATUS CODES
Verbos HTTP:
- GET
- PUT
- POST
- DELETE

Famílias STATUS CODES
- 1XX -> INFORMATIVA
- 2XX -> SUCESSO
- 3XX -> REDIRECIONAMENTO
- 4XX -> ERRO DE CLIENTE
- 5XX -> ERROS DE SERVIDOR

## REST & RESTful
- **REST** (Representational State Transfer) é um estilo de arquitetura que define padrões que facilitam a comunicação entre sistemas via Web, permite que o cliente e o servidor sejam implementados independentemente, sem a necessidade que um tenha conhecimento da implementação do outro. USA o protocolo HTTP e é baseado em contrato.
- **RESTful** possui os mesmos princípios de REST. A diferença é que a API implementada precisa estar de acordo com todas as regras e restrições definidas para a construção de APIs REST. Em resumo a API precisa ter um grau de maturidade alto para cumprir todos os critérios de uma API REST definidos por Roy Fielding.