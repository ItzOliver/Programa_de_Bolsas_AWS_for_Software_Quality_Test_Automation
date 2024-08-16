export let randomUser = () => ({
    "nome": "Fulano da Silva",
    "email": `user${(new Date().getTime())}@qa.com.br`,
    "password": "teste",
    "administrador": "true"
});
