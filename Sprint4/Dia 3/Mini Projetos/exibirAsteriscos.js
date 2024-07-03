// Criar uma função que exibe a quantidade de * 
// que aquela linha possui

// Agradeço ao Mathias pela ajuda com a atividade e elaboração

exibirAsteriscos(10);

function exibirAsteriscos(linhas) {
    for (let linha = 1; linha <= linhas; linha++) {
        let padrao = '';
        for (let i = 0; i < linha; i++) {
            padrao += '*';
        }
        console.log(padrao);
    }
}