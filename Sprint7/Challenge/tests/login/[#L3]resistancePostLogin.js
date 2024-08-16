import { BaseChecks, BaseRest, ENDPOINTS, testConfig } from '../../support/base/baseTest.js';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = testConfig.options.resistanceTresholdsLogin;

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

export function handleSummary(data) {
  return {
    "resultadoLogin.html": htmlReport(data),
  };
};

const payload = {
  "nome": "Fulano da Silva",
  "email": `user${Math.floor(Math.random()*10000)}@qa.com.br`,
  "password": "teste",
  "administrador": "true"
};


export function setup() { // setup feito com ajuda de Ricardo Neckel
    const res = baseRest.post(ENDPOINTS.USER_ENDPOINT, payload)
    baseChecks.checkStatusCode(res, 201)

    return { responseData: res.json(), payload }
}

export default (data) => {
    let res = baseRest.post(ENDPOINTS.LOGIN_ENDPOINT, {email: data.payload.email, password: data.payload.password})
    baseChecks.checkStatusCode(res, 200)

}

export function teardown() {
  const users = baseRest.get(ENDPOINTS.USER_ENDPOINT);
  baseChecks.checkStatusCode(users, 200);
  const userData = users.json();
  const userArray = userData.usuarios;

  userArray.forEach(user => {
    const userId = user._id;
    const res = baseRest.delete(`${ENDPOINTS.USER_ENDPOINT}/${userId}`);
    baseChecks.checkStatusCode(res, 200);
    console.log(`Teardown deletando o usuário com ID ${userId}`);
  });
}