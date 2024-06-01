# Atividade Postman
Utilizando a API https://serverest.dev/ como base de estudos.
1) Crie uma requisição Get para validar o retorno de usuários através da API.
![ReqGetUsuarios.png](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint2/src/ReqGetUsuarios.png?raw=true)
2) Crie uma requisição Post para cadastrar um novo usuário através da API.
![ReqPostNovoUsuario.png](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint2/src/ReqPostNovoUsuario.png?raw=true)
3) Crie uma requisição Get para validar o retorno de um usuário apenas através da API (pode utilizar os IDs dos usuários que vocês irão criar).
![ReqGetUsuarioAtravesDaAPI.png](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint2/src/ReqGetUsuarioAtravesDaAPI.png?raw=true)
4) Crie cenários alternativos no cadastro de usuários, explore possíveis erros que podem ocorrer e mapeie as requisições através do Postman.
Abaixo foi realizada uma tentativa de cadastrar um usuário já cadastrado.
![ReqPostMesmoUsuario.png](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint2/src/ReqPostMesmoUsuario.png?raw=true)
Abaixo foi realizada uma tentativa de cadastrar um usuário com campos em branco.
![ReqPostUsuarioEmBranco.png](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint2/src/ReqPostUsuarioEmBranco.png?raw=true)
Abaixo foi realizada uma tentativa de cadastrar um usuário com o campo "Admnistrador": false.
![ReqPostUsuarioADMFalse.png](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint2/src/ReqPostUsuarioADMFalse.png?raw=true)
5) Crie cenários alternativos na atualização de usuários, explore possíveis erros que podem ocorrer e mapeie as requisições através do Postman.
Abaixo foi realizada uma tentativa de alterar a senha de um usuário já cadastrado.
![ReqPutAlterarSenha.png](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint2/src/ReqPutAlterarSenha.png?raw=true)
Abaixo foi realizada uma tentativa de alterar o nome de um usuário já cadastrado deixando o campo em branco.
![ReqPutAlterarNomeEmBranco.png](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint2/src/ReqPutAlterarNomeEmBranco.png?raw=true)
Abaixo foi realizada uma tentativa de alterar um usuário com id não encontrado.
![ReqPutAlterarComIdNaoEncontrado.png](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint2/src/ReqPutAlterarComIdNaoEncontrado.png?raw=true)

6) Crie cenários alternativos na exclusão de usuários, explore possíveis erros que podem ocorrer e mapeie as requisições através do Postman.
Abaixo foi realizada uma tentativa de excluir um usuário já cadastrado.
![ReqDeleteUsuarioExistente.png](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint2/src/ReqDeleteUsuarioExistente.png?raw=true)
Abaixo foi realizada uma tentativa de excluir um usuário não cadastrado.
![ReqDeleteUsuarioNaoCadastrado.png](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint2/src/ReqDeleteUsuarioNaoCadastrado.png?raw=true)
Abaixo foi realizada uma tentativa de excluir um mesmo usuário já excluído anteriormente.
![ReqDeleteUsuarioJaExcluido.png](https://github.com/ItzOliver/Programa_de_Bolsas_AWS_for_Software_Quality_Test_Automation/blob/pb_sprint2/src/ReqDeleteUsuarioJaExcluido.png?raw=true)