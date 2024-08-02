import http from 'k6/http';
import { Trend, Rate } from 'k6/metrics';
import { check } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
    stages: [
        { duration: '30s', target: 50 }, // abaixo da carga normal
        { duration: '3s', target: 500 }, // carga normal
        { duration: '30s', target: 500 }, // acima da carga normal
        { duration: '3s', target: 50 }, // perto do ponto de quebra
        { duration: '5s', target: 0 }, // além do ponto de quebra
    ],
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

export default function() {
    const url = 'http://localhost:3000/usuarios';
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    
    let response = http.get(url, params);
    const result = check(response, {
        'status is 200': (r) => r.status === 200,
    });
    
    getUsersTrend.add(response.timings.duration);
    errorRate.add(!result);
}