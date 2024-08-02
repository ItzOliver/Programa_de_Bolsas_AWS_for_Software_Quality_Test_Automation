import http from 'k6/http';
import { Trend, Rate } from 'k6/metrics';
import { check } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { dataUser, dataProduct } from '../utils.js';

export const options = {
    vus: 100,
    duration: '1m',
    thresholds: {
        http_req_duration: ['p(95)<2000'],  // Tempo de resposta menor que 2 segundos
        http_req_failed: ['rate<0.05'],     // Taxa de erro menor que 5%
    },
};

const getUsersTrend = new Trend('get_users_duration');
const errorRate = new Rate('errors');

export function handleSummary(data) {
    return {
      "summary.html": htmlReport(data),
    };
};

export function setup() { // setup feito com ajuda de Ricardo Neckel
    let data = dataUser();
    const req = http.post('http://localhost:3000/usuarios', JSON.stringify(data), {
        heardes: { 'Content-Type': 'application/json' }
    });
    const userID = JSON.parse(req.body)

    const reqLog = http.post('http://localhost:3000/login', JSON.stringify({email: data.email, password: data.password}), {
        headers: { 'Content-Type': 'application/json' }
    });

    const userAuthorization = JSON.parse(reqLog.body).authorization

    return {
        data, userID, userAuthorization
    }
}

export default function(data) {
    const urlPro = 'http://localhost:3000/produtos';
    let product = dataProduct()
    
    let response = http.post(urlPro, JSON.stringify(product), {
        headers: { 'Content-Type': 'application/json', 'Authorization': data.userAuthorization }
    });
    console.log(response.body);

    const result = check(response, {
        'status is 201': (r) => r.status === 201,
    });
    
    getUsersTrend.add(response.timings.duration);
    errorRate.add(!result);
}