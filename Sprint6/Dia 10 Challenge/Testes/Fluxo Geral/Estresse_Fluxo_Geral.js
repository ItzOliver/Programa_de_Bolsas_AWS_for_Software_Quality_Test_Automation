import http from 'k6/http';
import { check, sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { dataUser, dataProduct } from '../utils.js';

export const options = {
    stages: [
        { duration: '20s', target: 50 }, // abaixo da carga normal
        { duration: '20s', target: 100 }, // carga normal
        { duration: '20s', target: 150 }, // acima da carga normal
        { duration: '20s', target: 200 }, // perto do ponto de quebra
        { duration: '20s', target: 300 }, // além do ponto de quebra
        { duration: '20s', target: 0 }, // estágio de recuperação
    ],
    thresholds: {
        http_req_duration: ['p(95)<2000'],  // Tempo de resposta menor que 2 segundos
        http_req_failed: ['rate<0.05'],     // Taxa de erro menor que 5%
    },
};

export function handleSummary(data) {
    return {
      "summary.html": htmlReport(data),
    };
};

// Código feito com ajuda de Ricardo Neckel
export default function () {

    const url = 'http://localhost:3000/';

    // Cadastrar usuário
    let data = dataUser();
    const rUser = http.post(url + 'usuarios', JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' }
    });
    check(rUser, { 'POST /usuarios status was 201': (r) => r.status === 201 });
    sleep(1);
    console.log(rUser.body);

    // Realizar login
    const rLogin = http.post(url + 'login', JSON.stringify({ email: data.email, password: data.password}), {
        headers: { 'Content-Type': 'application/json' }
    });
    check(rLogin, { 'POST /usuarios status was 200': (r) => r.status === 200});
    let userAuthorization = JSON.parse(rLogin.body).authorization
    sleep(1);

    // Cadastrar produto
    let product = dataProduct();

    const rProduct = http.post(url + 'produtos', JSON.stringify(product), {
        headers: { 'Content-Type': 'application/json', 'Authorization': userAuthorization }
    });

    check(rProduct, { 'POST /usuarios status was 201': (r) => r.status === 201 });
    sleep(1);
    console.log(rProduct.body);

    // Buscar produtos
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    
    let response = http.get(url + 'produtos', params);
    const result = check(response, {
        'status is 200': (r) => r.status === 200,
    });
    
}