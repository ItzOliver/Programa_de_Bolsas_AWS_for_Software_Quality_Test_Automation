// Criar função somar que retorna a soma de todos os múltiplos de 3 e 5

function somar(limite){
    let resultado = 0;
    for(let i = 0; i <= limite; i++){
        if (i % 3 === 0 || i % 5 === 0){
            resultado += i;
        };
    };
    console.log(resultado);
};

somar(10);