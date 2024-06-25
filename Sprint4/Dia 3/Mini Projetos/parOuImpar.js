// Receber uma quantidade de valores para avaliar
// Função exibe se cada valor é par ou impar

function exibirTipo(total){
    for(let i = 0; i <= total; i++){
        if (i % 2 === 0){
            console.log(i, "Par.");
        } else {
            console.log(i , "Impar.")
        };
    };
};

exibirTipo(10);