// Valor divisível por 3 => retorna Fizz
// Valor divisível por 5 => retorna Buzz
// Valor divisível por 3 e 5 => retorna FizzBuzz
// Valor não é divisível por 3 e 5 => retorna o próprio valor
// Se valor não for um número => retorna uma mensagem informando que não é um número

function fizzBuzz(a){
    if (typeof a != "number"){
        console.log('Não é um número.');
        return;
    }
    if (a % 3 === 0 && a % 5 === 0){
        console.log('FizzBuzz.');
    } else if (a % 3 === 0){
        console.log('Fizz.');
    } else if (a % 5 === 0){
        console.log('Buzz.');
    } else {
        console.log(a);
    }
};

let a = 3
let b = 5;
let c = 15;
let d = 4;
let e = 'três';
fizzBuzz(a);
fizzBuzz(b);
fizzBuzz(c);
fizzBuzz(d);
fizzBuzz(e);