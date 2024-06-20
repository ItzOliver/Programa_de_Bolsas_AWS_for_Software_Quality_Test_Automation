# Testes Exploratórios - Estratégias Iniciais
## Freestyle
Testes freestyle não seguem regras ou padrões, o testador navega pela aplicação e faz o que bem entender. Não há preocupações com as entradas ou com a cobertura. É simplesmente uma navegação onde o que for encontrado vai ter sido fruta da sorte.
**Explorar** a aplicação;
**Com** navegação livre;
**Para descobrir** as principais funcionalidades e o fluxo básico do sistema.

## Baseado em Cenários
- Adicionar passos
- Remover passos
- Alterar passos
- Repetir passos
- Substituir passos
- Executar igual, mas diferente...
### Fluxo Básico
1. Sistema exibe tela de pedido
2. Usuário seleciona item e clica em adicionar [FE1]
3. Sistema exibe valor do item
4. Usuário informa o CEP [FE2][FA1]
5. Sistema exibe o valor do frete [FE3]
6. Usuário confirma a compra
7. O caso de uso se encerra

- **FA1 - BUSCAR CEP POR ENDEREÇO**
- **FE1 - ITEM NÃO SELECIONADO**
- **FE2 - CEP INEXISTENTE**
- **FE3 - PRODUTO INDISPONÍVEL PARA A REGIÃO**

## Baseado em Feedback
- Densidade de erros reportados
- Priorização do especialista
- Criticidade de cenários
- Cobertura

## Baseado em Técnicas
- O universo de possibilidades é infinito e nunca conseguiremos testar TUDO.
- Existem um conjunto de técnicas que podem ajudar a reduzir essa quantidade enorme de possibilidades.

> "Testar é selecionar um conjunto finito de cenários que representem um conjunto infinito de possibilidades."

## Classe de Equivalência
Tenta mapear um conjunto infinito de possibilidades em um subconjunto finito manipulável.

## Transição de Estados
- Técnica boa para quando a aplicação que será testada pode ser mapeada como se fosse uma máquina de estados.
    - Ela deve ter um número finito de estados.
    - Devemos saber qual ação leva a qual estado.

## Tabela de Decisão
- Útil quando se desejar combinar várias regras em um ponto só.
### Exemplo
| Variáveis/Cenários | 1 | 2 | 3 | 4 |
|:-------------------|:-:|:-:|:-:|:-:|
| Usuário Válido?    | V | V | F | F |
| Senha Correta?     | V | F | V | F |
| Resultados                         |
| Login Com Sucesso  | X |   |   |   |
| Falha no Login     |   | X | X | X |

## Array Ortogonal
- Grande partes dos erros vem de uma só variável ou dos pares de relacionamento entre variáveis.
- Pairwise Tool