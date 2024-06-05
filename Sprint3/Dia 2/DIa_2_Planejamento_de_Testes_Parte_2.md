# Planejamento de Testes Parte 2
## Épicos
- Conjuntos de Estórias e/ou Funcionalidades que formam uma grande entrega;
- Analogia do Quebra-Cabeça.
## Features
- Funcionalidades;
- Podem ser mais visíveis para os usuários que as estórias;
- Pode depender de várias estórias para existir;
- Analogia do celular que sempre se conecta.
## Análise de Riscos
- Risco é um evento negativo;
    - Probabilidade de Ocorrer;
    - Impacto;
        - Prejuízo;
        - Dor.
- Processo;
    - Identificação dos Riscos;
    - Análise dos Riscos;
        - Probabilidade;
            - Alta;
            - Média;
            - Baixa.
        - Impacto;
            - Alto;
            - Médio;
            - Baixo.
    - Priorização dos Riscos;
        - Risco = Probabilidade x Impacto;
        - Ranking = Pareto.
    - Estratégias de Tratamento dos Riscos;
        - Eliminar ou Evitar;
        - Mitigar ou Prevenir;
        - Aceitar;
            - Passivamente;
            - Ativamente.
        - Transferir.
    - Acompanhas os Riscos;
        - Período;
        - Responsável;
        - Reavaliar.
## Matriz de Risco
| Nome do Risco | Probabilidade | Impacto | Risco = Probabilidade x Impacto | Estratégia | Como? | Responsável | Reavaliar |
|:----------|:------:|:------:|:------:|:------:|:------:|:------:|:------:|
| Integração com o Cactus | 3 | 3 | 9 | Mitigar | Testar | Fulano | Mensalmente |
| Misturar Pedidos | 2 | 3 | 6 | Mitigar | Testar | Fulano | Mensalmente |
| Pagamento fora do ar | 1 | 3 | 3 | Aceitar Ativo | Gateway Backup | Beltrano | Semanalmente |
| Analista Sênior sair | 2 | 2 | 4 | Aceitar Passivo |  | Ciclano do RH | Por Evento |
- Legenda:
    - 1: Baixo(a)
    - 2: Médio(a)
    - 3: Alto(a)
## Planning Poker
- Dinâmica de grupo;
- Facilita discussões e votações;
    - Escopo;
    - Prazo;
    - Complexidade;
    - Esforço;
    - Risco.
## Histórico dos Riscos
- Raro ter;
- Ajuda muito a tomar decisões;
- Criar uma cultura de preservar;
    - Estimativas;
    - Riscos;
    - Decisões;
        - O mais barato;
        - O mais rápido;
        - O melhor. 
## Análise de Pareto
- Priorização;
- Baseia-se na existência de restrições;
    - Prazo;
    - Orçamento;
    - Pessoas;
    - Recursos.
## Priorização por Impulso
- Seguir a ordem do maior para o menor (ordem pura do Pareto).
## Priorização por Atração
- Um item priorizado atrai itens menos priorizados que podem ser resolvidos juntos.
## Análise da Cauda Longa
- Amostragem;
- Baseia-se em que há receita distribuída em uma ampla variação de produtos ou serviços;
- Técnicas de Teste Combinatórias ajudam;
    - Pairwise;
    - Matriz Ortogonal.