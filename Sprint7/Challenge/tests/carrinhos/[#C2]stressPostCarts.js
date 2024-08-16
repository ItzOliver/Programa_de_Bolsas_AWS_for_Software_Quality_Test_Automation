import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { BaseChecks, BaseRest, ENDPOINTS, testConfig } from '../../support/base/baseTest.js';
import { randomProduct} from '../../data/dynamic/randomProduct.js';
import exec from 'k6/execution';

export const options = testConfig.options.stressTresholdsCarts;

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

export function handleSummary(data) {
  return {
    "resultadoCarts.html": htmlReport(data),
  };
}

// Código feito com ajuda de Enzo Rossi e Ricardo Neckel
let maxIteration = 10000;

export const setup = () => {

    let bearerUsers = [];
    let token;
    let userId;

    for (let i = 0; i < maxIteration; i++) {
        // Cadastra um usuário
        const payload = {
            "nome": "Fulano da Silva",
            "email": `user${(new Date().getTime())}@qa.com.br`,
            "password": "teste",
            "administrador": "true"
          }
        const resUser = baseRest.post(ENDPOINTS.USER_ENDPOINT, payload);
        baseChecks.checkStatusCode(resUser, 201)
        userId = resUser.json()._id;
        
        // Realiza login
        const resLogin = baseRest.post(ENDPOINTS.LOGIN_ENDPOINT, {email: payload.email, password: payload.password});
        baseChecks.checkStatusCode(resLogin, 200)
        token = resLogin.json().authorization;
        console.log(token);
        
        bearerUsers.push({ userId, token });
    }
    
    // Cadastra um produto
    const resUser = baseRest.post(ENDPOINTS.PRODUCTS_ENDPOINT, randomProduct(maxIteration), { Authorization: token });
    baseChecks.checkStatusCode(resUser, 201)
    const productId = resUser.json()._id;

    return {
        bearerUsers,
        productId
    };
}

export default function (data) {
    let iteration = exec.scenario.iterationInTest;
    const payload = {
        produtos: [{
            idProduto: data.productId,
            quantidade: 1
        }]
    }; 

    const res = baseRest.post(ENDPOINTS.CARTS_ENDPOINT, payload, {'Authorization': data.bearerUsers[iteration].token})
    baseChecks.checkStatusCode(res, 201)
}

export function teardown(data) {
    
    for (let i = 0; i < data.bearerUsers.length; i++) {
        const token = data.bearerUsers[i].token;
        const resCarts = baseRest.del(`${ENDPOINTS.CARTS_ENDPOINT}/concluir-compra`, { Authorization: token });
        baseChecks.checkStatusCode(resCarts, 200)
    }
}
