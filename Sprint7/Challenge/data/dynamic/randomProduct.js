export let randomProduct = (quantidade = 1000) => ({
    "nome": `user${(new Date().getTime())}`,
    "preco": 100,
    "descricao": "teste",
    quantidade
});
