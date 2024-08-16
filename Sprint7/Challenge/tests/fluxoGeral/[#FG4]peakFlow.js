import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { BaseChecks, BaseRest, ENDPOINTS, testConfig } from '../../support/base/baseTest.js';
import { randomProduct } from '../../data/dynamic/randomProduct.js';
import { randomUser} from '../../data/dynamic/randomUser.js';

export const options = testConfig.options.peakTresholdsFlow;

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

export function handleSummary(data) {
    return {
      "resultadoFlow.html": htmlReport(data),
    };
  }

// Código feito com ajuda de Enzo Rossi e Ricardo Neckel

export default function () {
  // Cadastra um usuário
  const payloadUser = {
    "nome": "Fulano da Silva",
    "email": `user${(new Date().getTime())}@qa.com.br`,
    "password": "teste",
    "administrador": "true"
  };
  const resUser = baseRest.post(ENDPOINTS.USER_ENDPOINT, payloadUser);
  baseChecks.checkStatusCode(resUser, 201);

  // Realiza login
  const resLogin = baseRest.post(ENDPOINTS.LOGIN_ENDPOINT, {email: payloadUser.email, password: payloadUser.password});
  baseChecks.checkStatusCode(resLogin, 200);
  const token = resLogin.json().authorization;

  // Cadastra um produto
  const productPayload = randomProduct(); 
  const resProduct = baseRest.post(ENDPOINTS.PRODUCTS_ENDPOINT, productPayload, { Authorization: token });

  baseChecks.checkStatusCode(resProduct, 201);
  const productId = resProduct.json()._id;

  // Verifica se o produto foi realmente criado antes de continuar
  if (!productId) {
    throw new Error("Produto não foi criado corretamente");
  }

  const payload = {
    produtos: [{
      idProduto: productId,
      quantidade: 1
    }]
  };

  // Cria um carrinho
  const resCart = baseRest.post(ENDPOINTS.CARTS_ENDPOINT, payload, { Authorization: token });
  baseChecks.checkStatusCode(resCart, 201);

  // Verifica se o carrinho foi criado antes de tentar deletá-lo
  if (resCart.status === 201) {
    // Deleta um carrinho
    const resCarts = baseRest.delete(`${ENDPOINTS.CARTS_ENDPOINT}/concluir-compra`, { Authorization: token });
    baseChecks.checkStatusCode(resCarts, 200);
  } else {
    throw new Error("Carrinho não foi criado corretamente");
  }
}

export const teardown = () => {
    // Gera um novo token de usuário para remover os produtos
    const payload = randomUser();
    const resInsertUser = baseRest.post(ENDPOINTS.USER_ENDPOINT, payload);
    baseChecks.checkStatusCode(resInsertUser, 201)

    // Realiza login
    const resLogin = baseRest.post(ENDPOINTS.LOGIN_ENDPOINT, { email: payload.email, password: payload.password });
    baseChecks.checkStatusCode(resLogin, 200)
    const token =  resLogin.json().authorization;

    //Busca todos os carrinhos
    const resGetUsers = baseRest.get(ENDPOINTS.USER_ENDPOINT);
    baseChecks.checkStatusCode(resGetUsers, 200);
    const users = resGetUsers.json().usuarios;

    // Remove os carrinhos
    for (let user of users) {
        // Realiza login temporário
        const resLogin = baseRest.post(ENDPOINTS.LOGIN_ENDPOINT, { email: user.email, password: user.password });
        baseChecks.checkStatusCode(resLogin, 200);
        const temporaryToken =  resLogin.json().authorization;

        // Remove o carrinho
        const resDeleteCart = baseRest.delete(`${ENDPOINTS.CARTS_ENDPOINT}/cancelar-compra`, { Authorization: temporaryToken });
        baseChecks.checkStatusCode(resDeleteCart);
    }

    // Busca todos os produtos
    const res = baseRest.get(ENDPOINTS.PRODUCT_ENDPOINT, { Authorization: token});
    baseChecks.checkStatusCode(res, 200);
    const products = res.json().produtos;

    // Remove todos os produtos
    products.forEach(product => { 
        const resDeleteProduct = baseRest.delete(`${ENDPOINTS.PRODUCT_ENDPOINT}/${product._id}`, { Authorization: token });
        baseChecks.checkStatusCode(resDeleteProduct, 200);
    });

    // Remove todos os usuários
    users.forEach(user => { 
        const resDeleteUser = baseRest.delete(`${ENDPOINTS.USER_ENDPOINT}/${user._id}`);
        baseChecks.checkStatusCode(resDeleteUser, 200);
    });
}