import { BaseChecks, BaseRest, ENDPOINTS, testConfig } from '../../support/base/baseTest.js';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = testConfig.options.loadTresholdsProducsts;

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

export function handleSummary(data) {
    return {
      "resultadoProducts.html": htmlReport(data),
    };
};

const payload = {
    "nome": "Fulano da Silva",
    "email": `user${Math.floor(Math.random()*10000)}@qa.com.br`,
    "password": "teste",
    "administrador": "true"
  };

export function setup() {
    const res = baseRest.post(ENDPOINTS.USER_ENDPOINT, payload)
    const userID = res.body._id;
    const urlRes = baseRest.post(ENDPOINTS.LOGIN_ENDPOINT, {email: payload.email, password: payload.password})
    const userAuthorization = JSON.parse(urlRes.body).authorization
    return {
        userID, userAuthorization
    }
};

export default function (data) {
    const payloadPro = {
        "nome": `user${(new Date().getTime())}`,
        "preco":  100,
        "descricao": "teste",
        "quantidade": 100
    }
    const res = baseRest.post(ENDPOINTS.PRODUCTS_ENDPOINT, payloadPro, {'Authorization': data.userAuthorization})
    baseChecks.checkStatusCode(res, 201)
}

// Código desenvolvido com a ajuda de Jorge Soares
export function teardown(data) {
    const authToken = data.authToken;
    const productId = data.productId;
    const userId = data.userId;

    if (productId) {
        try {
            const deleteRes = baseRest.delete(`${ENDPOINTS.PRODUCTS_ENDPOINT}/${productId}`, { 
                headers: { 'Authorization': `${authToken}` } 
            });
            baseChecks.checkStatusCode(deleteRes, 200);
            console.log(`Produto ${productId} excluído: ${deleteRes.json().message}`);
        } catch (error) {
            console.error(`Não foi possível excluir o produto ${productId}: ${error}`);
        }
    }

    if (userId) {
        try {
            const deleteUserRes = baseRest.delete(`${ENDPOINTS.USER_ENDPOINT}/${userId}`, { 
                headers: { 'Authorization': `${authToken}` } 
            });
            baseChecks.checkStatusCode(deleteUserRes, 200);
            console.log(`Usuário ${userId} excluído: ${deleteUserRes.json().message}`);
        } catch (error) {
            console.error(`Não foi possível excluir o usuário ${userId}: ${error}`);
        }
    }
}