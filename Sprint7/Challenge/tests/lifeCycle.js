import { check, sleep } from 'k6';

// 1. init code
// inicializa variaveis, define options (VUS, duration, Tresholds
let counter = 1

export function setup() {
    // 2. setup code
    // executa apenas 1 vez antes da função principal
    console.log(`SETUP ${counter}`)
};

 export default function (data) {
    // 3, VU code
    // ponto de entradas das VU's, onde realizam os testes/chamadas na API
    console.log(`FUNÇÃO PRINCIPAL - ${counter} VU=${__VU} ITER=${__ITER}`);
    counter = counter + 1;
    sleep(1);
 };

 export function teardown(data) {
    // 3. teardown code
    // executa apenas 1 vez após a execução da função principal
    console.log(`TEARDOWN - ${counter}`);
 };