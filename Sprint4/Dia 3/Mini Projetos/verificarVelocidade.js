// Velocidade máxima de até 70
// a cada 5km acima do limite você ganha 1 ponto
// Math.Floor()
// caso ponto > 12 -> "Carteira Suspendida"
function verificarVelocidade(a){
    if (a > 70){
        let b = a - 70;
        let pontos = Math.floor(b/5);
        console.log('Pontos recebidos: ', pontos);
        if (pontos > 12){
            console.log('Carteira Suspendida.');
        }
    } else {
        console.log('Velocidade dentro do limite permitido: ', velocidade);
    }
};

let velocidade = 135;
verificarVelocidade(velocidade);