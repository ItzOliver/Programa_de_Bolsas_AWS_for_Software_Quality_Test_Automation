import http from 'k6/http';
import { Trend, Rate } from 'k6/metrics';
import { check } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { dataUser } from '../utils.js';

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

export default function() {
    const url = 'http://localhost:3000/usuarios';
    let data = dataUser();
    
    let response = http.post(url, JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' }
    });
    
    const result = check(response, {
        'status is 201': (r) => r.status === 201,
    });
    
    getUsersTrend.add(response.timings.duration);
    errorRate.add(!result);
}