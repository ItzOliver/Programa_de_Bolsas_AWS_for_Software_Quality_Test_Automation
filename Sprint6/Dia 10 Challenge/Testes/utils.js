// Código feito por Ricado Neckel
export let dataUser = () => ({
    nome: "Fulano da Silva",
    email: `user${Math.floor(Math.random()*10000)}@qa.com.br`,
    password: "teste",
    administrador: "true"
});

export let dataProduct = () => ({
    nome: `user${Math.floor(Math.random()*10000)}`,
    preco:  100,
    descricao: "teste",
    quantidade: 100
});