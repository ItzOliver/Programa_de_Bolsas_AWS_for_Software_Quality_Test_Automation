import http from 'k6/http';
import { check, sleep } from 'k6';
import { Rate } from 'k6/metrics';

// Define a custom metric to measure the error rate
let errorRate = new Rate('errors');

export const options = {
    vus: 400,
    duration: '1m',
    thresholds: {
        http_req_duration: ['p(95)<500'],
        errors: ['rate<0.1'],
        http_reqs: ['rate>100']
    },
};

export default function () {
    let res = http.get('http://localhost:3000/usuarios'); // substitua pela URL da sua API Serverest

    // Check if the request was successful
    let success = check(res, {
        'status is 200': (r) => r.status === 200,
    });

    // Add to the error rate if the request was not successful
    errorRate.add(!success);

    sleep(1); // dormir por 1 segundo entre as requisições
};