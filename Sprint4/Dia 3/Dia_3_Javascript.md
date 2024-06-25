# Javascript
## Variáveis
- Como declarar varíavies:
    - exemplo: "**let** idade = 5;"
- Varíaveis **const** não pode ser alterada.

## Tipos de Valores
### Tipos Primitivos
let nome = 'Oliver'; //string literal
let idade = '22'; //number literal
let aprovado = true; //boolean
let sobrenome = undefined; //undefined
let corSelecionado = null; //Redefinir um valor

### Tipagem Dinâmica
typeof nomeDaVariável -> verifica qual o tipo da variável

## Tipos de Referência
### Objetos
Um objeto junta informações em um único lugar que podemos acessar pela propriedade do objeto
sintaxe:
let pessoa = {
    nome: 'Oliver',
    idade: 22,
    estaAprovado: true,
    sobrenome: 'Almeida',
    naturalidade: RJ,
    filiacao: 'Elizabeth',
    cidade: 'Niterói'
};

### Arrays
É um conjunto de dados que pode ser acessado por um índice.
sintaxe:
let familia = [26,45,50,17];
Arrays aceitam múltiplos tipos de variáveis.

### Functions
Como nomear uma função: Verbo + Substantivo, exemplo:
resetaCor;
sintaxe:
    function resetaCor(){
        sorSite = '';
    }

sintaxe com parâmetros:
    function resetaCor(cor, tonalidade){
        corSite = cor + tonalidade;
    };

### Tipos de Funções
**Realiza uma tarefa e não devolve nada**
function dizerNome(){
    console.log('Oliver');
};

**Faz um cálculo/operação e retorna algo**
function multiplicarPorDois(valor){
    return valor * 2;
};

## Operadores Aritiméticos (Matemáticos)
Operadores: +, -, *, /, **;
Operador de incremento: ++ (se for colocado antes da variável exibe o resultado antes, depois da variável só exibe o resultado na linha seguinte)
Operador de decremento: -- (se for colocado antes da variável exibe o resultado antes, depois da variável só exibe o resultado na linha seguinte)
## Operadores de Atribuição
Operadores: =, +=, -=;

## Operadores de Comparação
Operador de igualdade estrita: === (compara valores e o tipo);
Operador de igualdade solta: == (compara apenas valores) -> não é recomendado ser utilizado;

## Operador Ternário:
Operador: (o que deve ser comparado/expressão) ? 'O que acontecerá caso seja verdadeiro' : 'O que acontecerá caso seja falso';

## Operadores Lógicos
Operadores: && (and), || (or), ! (not);

## Comparações Não Booleanas
Falsy: Todos os valores que são -> undefined, null, 0, false, '', NaN (Not a Number);
Truthy: Todos os valores que não são Falsy.

## Condicionais
Dois tipos de operadores condicionais: If ... Else e Switch ... case.
### If
Exemplo:
if (condicao) {
    // Condição a ser executada
}
else if (condicao){
    // Condição a ser executada
}
else {
    // Código a ser executado
}
### Switch
Exemplo:
switch (variavel) {
    case 'variavel que irá ativar esse bloco de código':
    // Código
    break;
    case 'variavel que irá ativar esse bloco de código':
    // Código
    break;
    case 'variavel que irá ativar esse bloco de código':
    // Código
    break;
    default: 
    // Código que será executado caso não seja nenhum dos casos
}
## Laços de Repetição
1. For
2. While
3. Do...while
4. For...In
5. For...Of

### Laço For
Exemplo: 
for(let i = 0; i < 5 ; i++){
    console.log(i++);
};

### Laço While
Exemplo:
let i = 5;
while (i >= 1){
    console.log(i)
    i--;
};

### Laço Do While
Exemplo: 
let i = 0;
do {
    console.log('digitando!');
    i++
} while (i < 10);

### Laço For In
Funciona melhor para objetos e arrays.
Exemplo1:
const humano = {
    nome: 'Oliver',
    idade: 22
};

for (let chave in humano) {
    console.log(chave, pessoa.nome);
};
Exemplo2:
const cores = ['Vermelho', 'Azul', 'Verde'];

for (let indice in cores) {
    console.log(indice, cores[indice]);
};

### Laço For Of
Exemplo:
const cores = ['Vermelho', 'Azul', 'Verde'];

for(let cor of cores){
    console.log(cor);
}; 