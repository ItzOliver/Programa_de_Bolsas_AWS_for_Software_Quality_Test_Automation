export const testConfig = {
    environment: {
        hml: {
            url: "http://localhost:3000"
        }
    },
    options: {
        smokeTresholds: {
            vus: 1, 
            duration: '1s',
            thresholds: {
                http_req_duration: ['p(95)<2000'],
                http_req_failed: ['rate<0.01']
            }
        },
        loadTresholdsLogin: {
            vus: 150,
            duration: '1m',
            thresholds: {
                http_req_duration: ['p(95)<2000'],  // Tempo de resposta menor que 2 segundos
                http_req_failed: ['rate<0.05'],     // Taxa de erro menor que 5%
            }
        },
        scalabilityTresholdsLogin: {
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
            }
        },
        stressTresholdsLogin: {
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
            }
        },
        peakTresholdsLogin: {
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
            }
        },
        resistanceTresholdsLogin: {
            vus: 100,
            duration: '5m',
            thresholds: {
                http_req_duration: ['p(95)<2000'],  // Tempo de resposta menor que 2 segundos
                http_req_failed: ['rate<0.05'],     // Taxa de erro menor que 5%
            }
        },
        loadTresholdsUsers: {
            vus: 100,
            duration: '1m',
            thresholds: {
                http_req_duration: ['p(95)<2000'],  // Tempo de resposta menor que 2 segundos
                http_req_failed: ['rate<0.05'],     // Taxa de erro menor que 5%
            }
        },
        scalabilityTresholdsUsers: {
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
            }
        },
        stressTresholdsUsers: {
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
            }
        },
        peakTresholdsUsers: {
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
            }
        },
        resistanceTresholdsUsers: {
            vus: 100,
            duration: '5m',
            thresholds: {
                http_req_duration: ['p(95)<2000'],  // Tempo de resposta menor que 2 segundos
                http_req_failed: ['rate<0.05'],     // Taxa de erro menor que 5%
            }
        },
        loadTresholdsProducsts: {
            vus: 60,
            duration: '1m',
            thresholds: {
                http_req_duration: ['p(95)<2000'],  // Tempo de resposta menor que 2 segundos
                http_req_failed: ['rate<0.05'],     // Taxa de erro menor que 5%
            },
            setupTimeout: '120s',
            teardownTimeout: '120s',
        },
        scalabilityTresholdsProducts: {
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
            }
        },
        stressTresholdsProducts: {
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
            }
        },
        peakTresholdsProducts: {
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
            }
        },
        resistanceTresholdsProducts: {
            vus: 100,
            duration: '5m',
            thresholds: {
                http_req_duration: ['p(95)<2000'],  // Tempo de resposta menor que 2 segundos
                http_req_failed: ['rate<0.05'],     // Taxa de erro menor que 5%
            }
        },
        loadTresholdsCarts: {
            vus: 100,
            duration: '1m',
            thresholds: {
                http_req_duration: ['p(95)<2000'],  // Tempo de resposta menor que 2 segundos
                http_req_failed: ['rate<0.05'],     // Taxa de erro menor que 5%
            }
        },
        scalabilityTresholdsCarts: {
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
            setupTimeout: '120s',
        },
        stressTresholdsCarts: {
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
            setupTimeout: '130s',
        },
        peakTresholdsCarts: {
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
            setupTimeout: '80s',
        },
        resistanceTresholdsCarts: {
            vus: 100,
            duration: '5m',
            thresholds: {
                http_req_duration: ['p(95)<2000'],  // Tempo de resposta menor que 2 segundos
                http_req_failed: ['rate<0.05'],     // Taxa de erro menor que 5%
            },
            setupTimeout: '330s',
        },
        loadTresholdsFlow: {
            vus: 20,
            duration: '1m',
            thresholds: {
                http_req_duration: ['p(95)<2000'],  // Tempo de resposta menor que 2 segundos
                http_req_failed: ['rate<0.05'],     // Taxa de erro menor que 5%
            },
            setupTimeout: '600s',
            teardownTimeout: '600s',
        },
        scalabilityTresholdsFlow: {
            stages: [
                { duration: '10s', target: 2 },
                { duration: '20s', target: 4 },
                { duration: '20s', target: 8 },
                { duration: '20s', target: 16 },
                { duration: '20s', target: 32 },
                { duration: '20s', target: 0 },
            ],
            thresholds: {
                http_req_duration: ['p(95)<2000'],  // Tempo de resposta menor que 2 segundos
                http_req_failed: ['rate<0.05'],     // Taxa de erro menor que 5%
            },
            setupTimeout: '600s',
            teardownTimeout: '600s',
        },
        stressTresholdsFlow: {
            stages: [
                { duration: '20s', target: 1 }, // abaixo da carga normal
                { duration: '20s', target: 4 }, // carga normal
                { duration: '20s', target: 8 }, // acima da carga normal
                { duration: '20s', target: 16 }, // perto do ponto de quebra
                { duration: '20s', target: 40 }, // além do ponto de quebra
                { duration: '20s', target: 0 }, // estágio de recuperação
            ],
            thresholds: {
                http_req_duration: ['p(95)<2000'],  // Tempo de resposta menor que 2 segundos
                http_req_failed: ['rate<0.05'],     // Taxa de erro menor que 5%
            },
            setupTimeout: '600s',
            teardownTimeout: '600s',
        },
        peakTresholdsFlow: {
            stages: [
                { duration: '30s', target: 10 }, // abaixo da carga normal
                { duration: '3s', target: 50 }, // carga normal
                { duration: '30s', target: 50 }, // acima da carga normal
                { duration: '3s', target: 10 }, // perto do ponto de quebra
                { duration: '5s', target: 0 }, // além do ponto de quebra
            ],
            thresholds: {
                http_req_duration: ['p(95)<2000'],  // Tempo de resposta menor que 2 segundos
                http_req_failed: ['rate<0.05'],     // Taxa de erro menor que 5%
            },
            setupTimeout: '600s',
            teardownTimeout: '600s',
        },
        resistanceTresholdsFlow: {
            vus: 25,
            duration: '5m',
            thresholds: {
                http_req_duration: ['p(95)<2000'],  // Tempo de resposta menor que 2 segundos
                http_req_failed: ['rate<0.05'],     // Taxa de erro menor que 5%
            },
            setupTimeout: '600s',
            teardownTimeout: '600s',
        },
        
    }
    

}