// Escreva uma função que recebe dois número e retorna o maior entre eles
function maior (a, b){
    if (a > b){
        return a;
    } else if (b > a){
        return b;
    } else {
        return a; // se número iguais > retorna o primeiro número
    }
};
let a = 20;
let b = 10;
console.log(maior(a, b));