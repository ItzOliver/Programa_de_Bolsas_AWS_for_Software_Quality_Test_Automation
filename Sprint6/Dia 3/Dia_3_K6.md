# Testes de Performance
## Smoke Test
- Verifica se o sistema consegue rodar com o mínimo de carga sem problemas.
    - Verifica se o script de teste não tem erros;
    - Verifica se o sistema não lança nenhum erro com uma carga mínima.

## Load Test
- Verifica a performance do sistema com usuários concorrente ou muitas requisições por segundo.
    - Analisa a performance do sistema sob condições típicas e picos;
    - Garante que os padrões de performance continuem a ser atingidos conforme mudanças forem feitas no sistema.

## Stress and Spike Test
- Verifica os limites do sistema e estabilidade dele sob condições extremas.
    - Verifica qual é a capacidade maxima do sistema em termos de usuários;
    - Verifica qual é o ponto de falha do sistema;
    - Verifica se o sistema vai se recuperar sem intervenção manual após o teste de stress.

## Soak Test
- Verifica a confiabilidade da performance do sistema em períodos extensos.
    - Verifica se o sistema não tem um bug ou vazamento de memória que pode resultar em um crash ou restart depois de muitas horas de operação;
    - Verifica se a aplicação não perde dados depois do restart;
    - Encontrar bugs relacionados a condição de corrida que podem aparecer esporadicamente;
    - Garantir que o banco de dados não terá seu armazenamento alocado exausto e pare;
    - Garantir que os logs não exaustem o espaço alocado em disco;
    - Garantir que os serviços externos que o sistema depende não parem de funcionar depois de uma certa quantidade de requisições são executadas.

## Thresholds
Exemplos:
- Sistema não produz mais que 1% de erros.
- Tempo de resposta para 95% das requisições deve ser menor que 200ms.
- Endpoint específico deve sempre responder dentro de 300ms.
    
```
import http from 'k6/http';

export const options = {
  thresholds: {
    http_req_failed: ['rate<0.01'], // http errors should be less than 1%
    http_req_duration: ['p(95)<200'], // 95% of requests should be below 200ms
  },
};

export default function () {
  http.get('https://test-api.k6.io/public/crocodiles/1/');
}
```

### Thresholds em Grupo
```
import http from 'k6/http';
import { group, sleep } from 'k6';

export const options = {
  thresholds: {
    'group_duration{group:::individualRequests}': ['avg < 400'],
    'group_duration{group:::batchRequests}': ['avg < 200'],
  },
  vus: 1,
  duration: '10s',
};

export default function () {
  group('individualRequests', function () {
    http.get('https://test-api.k6.io/public/crocodiles/1/');
    http.get('https://test-api.k6.io/public/crocodiles/2/');
    http.get('https://test-api.k6.io/public/crocodiles/3/');
  });

  group('batchRequests', function () {
    http.batch([
      ['GET', `https://test-api.k6.io/public/crocodiles/1/`],
      ['GET', `https://test-api.k6.io/public/crocodiles/2/`],
      ['GET', `https://test-api.k6.io/public/crocodiles/3/`],
    ]);
  });

  sleep(1);
}
```

## Tipos de Métricas
### Trend
Calcula estatísticas para múltiplos valores.

### Rate
Armazena o percentual.

### Counter
Soma valores.

### Gauges
Armazena o maior, o menor e o último valor.

## Opções e Estrutura de Teste
### Opções
O K6 permite configurar as opções fora do script principal, dentro de um arquivo json separado.

## Testes Híbridos
- Frontend + Backend.
- As ferramentas de performance geralmente focam muito no backend e deixam o frontend de lado.
- xk6.