import http from 'k6/http';
import { Trend, Rate } from 'k6/metrics';
import { check } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { dataUser } from '../utils.js';

export const options = {
    stages: [
        { duration: '10s', target: 100 },
        { duration: '20s', target: 150 },
        { duration: '20s', target: 200 },
        { duration: '20s', target: 250 },
        { duration: '20s', target: 300 },
        { duration: '20s', target: 0 },
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

export function setup() { // setup feito com ajuda de Ricardo Neckel
    let data = dataUser();
    const req = http.post('http://localhost:3000/usuarios', JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' }
    });
    const userID = JSON.parse(req.body)

    return {
        data, userID
    }
}

export default function(data) {
    const urlLog = 'http://localhost:3000/login';
    
    let response = http.post(urlLog, JSON.stringify({email: data.data.email, password: data.data.password}), {
        headers: { 'Content-Type': 'application/json' }
    });
    console.log(response.body);

    const result = check(response, {
        'status is 200': (r) => r.status === 200,
    });
    
    getUsersTrend.add(response.timings.duration);
    errorRate.add(!result);
}