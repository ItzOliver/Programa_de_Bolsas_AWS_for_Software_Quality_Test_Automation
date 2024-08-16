import { check } from "k6";

export class BaseChecks {
    checkStatusCode(response, expectedStatus = 200) {
        check( response, {
            'status code check': (r) => r.status === expectedStatus,
        })
    }
    checkResponseTime(response, expectedTime = 2000) {
        check( response, {
            'response time is less than 2000ms': (r) => r.timings.duration <= expectedTime,
        })
    }
}