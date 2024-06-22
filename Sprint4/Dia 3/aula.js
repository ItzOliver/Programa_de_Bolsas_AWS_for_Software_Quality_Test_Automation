let idade = 5;
console.log(idade);
let ingresso = 10;
console.log(ingresso);
let dia = 8;
console.log(dia);
let corSelecionado = null;
let sobrenome = undefined;

let pessoa = {
    nome: 'Oliver',
    idade: 22,
    estaAprovado: true,
    sobrenome: 'Almeida',
    naturalidade: 'RJ',
    filiacao: 'Elizabeth',
    cidade: 'Niterói'
};

console.log(pessoa);

let familia = [26,45,50,17];
console.log(familia);
console.log(familia.length);

let corSite = "azul";
function resetaCor(cor, tonalidade){
    corSite = cor + " " + tonalidade;
};

console.log(corSite);
resetaCor("vermelho", "escuro");
console.log(corSite);

function dizerNome(){
    console.log('Oliver');
};
dizerNome();

function multiplicarPorDois(valor){
    return valor * 2;
};

console.log(multiplicarPorDois(5));

console.log('');
console.log('Condicional IF');
let hora = 16;
if (hora > 6 && hora < 12) {
    console.log("Bom dia!");
}
else if (hora > 12 && hora < 18){
    console.log("Boa tarde!");
}
else {
    console.log("Boa noite!");
}
console.log('');
console.log('Condicional Switch');
let permissao = 'diretor';
switch (permissao){
    case 'comum':
    console.log('usuário comum');
    break;
    case 'gerente':
    console.log('usuário gerente');
    break;
    case 'diretor':
    console.log('usuário diretor');
    break;
    default: 
    console.log('Usuário não reconhecido!');
}
console.log('');
console.log('Laço For:');
for(let i = 0; i < 5 ; i++){
    console.log(i);
};

console.log('');
console.log('Laço While:');
let i = 5;
while (i >= 1){
    console.log(i)
    i--;
};

console.log('');
console.log('Laço Do While:');
let h = 0;
do {
    console.log('digitando!');
    h++
} while (h < 10);

console.log('');
console.log('Laço For In:');
const humano = {
    nome: 'Oliver',
    idade: 22
};

for (let chave in humano) {
    console.log(chave, humano.nome);
};

const cores = ['Vermelho', 'Azul', 'Verde'];

for (let indice in cores) {
    console.log(indice, cores[indice]);
};

console.log('');
console.log('Laço For Of:');
for(let cor of cores){
    console.log(cor);
};