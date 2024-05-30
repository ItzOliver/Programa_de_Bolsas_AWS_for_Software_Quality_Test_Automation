# Atividade
Utilizando a API https://serverest.dev/ como base de estudos.
1) Crie uma requisição Get para validar o retorno de usuários através da API.
![ReqGetUsuarios.png]()
2) Crie uma requisição Post para cadastrar um novo usuário através da API.
![ReqPostNovoUsuario.png]()
3) Crie uma requisição Get para validar o retorno de um usuário apenas através da API (pode utilizar os IDs dos usuários que vocês irão criar).
![ReqGetUsuarioAtravesDaAPI.png]()
4) Crie cenários alternativos no cadastro de usuários, explore possíveis erros que podem ocorrer e mapeie as requisições através do Postman.
Abaixo foi realizada uma tentativa de cadastrar um usuário já cadastrado.
![ReqPostMesmoUsuario.png]()
Abaixo foi realizada uma tentativa de cadastrar um usuário com campos em branco.
![ReqPostUsuarioEmBranco.png]()
Abaixo foi realizada uma tentativa de cadastrar um usuário com o campo "Admnistrador": false.
![ReqPostUsuarioADMFalse.png]()
5) Crie cenários alternativos na atualização de usuários, explore possíveis erros que podem ocorrer e mapeie as requisições através do Postman.
Abaixo foi realizada uma tentativa de alterar a senha de um usuário já cadastrado.
![ReqPutAlterarSenha.png]()
Abaixo foi realizada uma tentativa de alterar o nome de um usuário já cadastrado deixando o campo em branco.
![ReqPutAlterarNomeEmBranco.png]()
Abaixo foi realizada uma tentativa de alterar um usuário com id não encontrado.
![ReqPutAlterarComIdNaoEncontrado.png]()

6) Crie cenários alternativos na exclusão de usuários, explore possíveis erros que podem ocorrer e mapeie as requisições através do Postman.
Abaixo foi realizada uma tentativa de excluir um usuário já cadastrado.
![ReqDeleteUsuarioExistente.png]()
Abaixo foi realizada uma tentativa de excluir um usuário não cadastrado.
![ReqDeleteUsuarioNaoCadastrado.png]()
Abaixo foi realizada uma tentativa de excluir um mesmo usuário já excluído anteriormente.
![ReqDeleteUsuarioJaExcluido.png]()