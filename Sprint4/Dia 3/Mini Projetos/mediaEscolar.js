// Obter a média a partir de um array

// 0-59: E
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A
// REFAZER!!!
function mediaEscolar(array){
    let soma = 0;
    for (let i = 0; i <= array.length; i++){
        soma += array[i];
    };
    const mediaFinal = soma /(array.length);
    if (mediaFinal <= 59){
        return "E";
    } else if (mediaFinal >= 60 && mediaFinal <=69){
        return "D";
    } else if (mediaFinal >= 70 && mediaFinal <= 79){
        return "C";
    } else if (mediaFinal >= 80 && mediaFinal <= 89){
        return "B";
    } else if (mediaFinal >= 90 && mediaFinal <= 100){
        return "A";
    };
};

const array = [70, 70, 80];
mediaEscolar(array);