import { BaseChecks, BaseRest, ENDPOINTS, testConfig } from '../../support/base/baseTest.js';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = testConfig.options.loadTresholdsUsers;

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

export function handleSummary(data) {
    return {
      "resultadoUsers.html": htmlReport(data),
    };
};

const payload = {
    "nome": "Fulano da Silva",
    "email": `user${Math.floor(Math.random()*10000)}@qa.com.br`,
    "password": "teste",
    "administrador": "true"
  };

export default () => {
    const res = baseRest.post(ENDPOINTS.USER_ENDPOINT, payload)
    baseChecks.checkStatusCode(res, 201)
}