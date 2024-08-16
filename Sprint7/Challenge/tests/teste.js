import { SharedArray} from 'k6/data';
import { BaseChecks, BaseRest, ENDPOINTS, testConfig } from '../support/base/baseTest.js';

export const options = testConfig.options.smokeTresholds;

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

const data = new SharedArray('Users', function () {
  const jsonData = JSON.parse(open('../data/static/user.json'));
  return jsonData.users;
});

const payload = {
  "nome": "Fulano da Silva",
  "email": "fulano@qa.com.br",
  "password": "teste",
  "administrador": "true"
};

export function setup() {
  const res = baseRest.post(ENDPOINTS.USER_ENDPOINT, payload)
  baseChecks.checkStatusCode(res, 201)
  return {responseData : res.json() }
};

export default () => {
  let userIndex = __ITER % data.length;
  let user = data[userIndex];
  const res = baseRest.post(ENDPOINTS.LOGIN_ENDPOINT, user);
  baseChecks.checkStatusCode(res, 200)
  sleep(1);
};

export function teardown(responseData) {
  const userId = responseData.responseData._id
  const res = baseRest.delete(ENDPOINTS.USER_ENDPOINT + `/${userId}`);
  baseChecks.checkStatusCode(res, 200)
  console.log(`teardown deletando o usuario com ID ${userId}`)
};