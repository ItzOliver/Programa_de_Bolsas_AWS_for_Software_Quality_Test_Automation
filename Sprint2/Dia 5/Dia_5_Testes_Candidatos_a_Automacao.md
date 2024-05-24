# Testes Candidatos à Automação
## Como selecionar os testes candidatos à automação
- Comunicação franca e honesta com o cliente -> Entender quais são as prioridades do cliente, quais são os fluxos mais importantes que o cliente considera que precisam ser automatizados para ter sempre uma resposta adequada, elaborar uma lista de prioridades vinculadas ao segmento vinculado à aplicação do cliente.
- Identificar riscos -> Quais partes da aplicação tem um risco maior? Através do risco maior podemos definir alguns cenários para fazer parte do conjunto de testes automatizados. 
> Se determinada parte da aplicação estiver com problemas qual é o impacto disso?
- Tudo que for percebido como tarefas repetitivas também são bons candidatos.

## Demandas novas
- Demandas novas não podem ter seus testes automatizados sem que antes exista uma demanda de testes manual.
    - A demanda nova levaria um tempo para ser automatizada, porém a demanda nova também precisa que rapidamente todos os stakeholdes do projeto saibam que aquela demanda está funcionando e os bugs foram removidos para que ela possa ser disponibilizada no ambiente produtivo.
        - Ou seja, no primeiro momento a automação não vai conseguir fazer esse papel -> O teste manual não é excluído devido a automação. 
        - Nesse caso, existem equipes de testadores manuais/analistas de teste que vão realizar esses testes manuais em demandas novas e em um segundo momento essas demandas novas vão ter os cenários de testes avaliados -> No sentido de selecionar quais cenários de testes dessas demandas novas devem ser incluidos nas automações de testes.
            - As justificativas podem ser duas: Se essa demanda nova tornasse uma prioridade e se essa demanda nova, caso não esteja na automação, vai fazer com que a automação quebre.

> A automação de testes não deve ser aleatória. Devemos seguir alguns critérios para escolher a prioridade de quais testes vamos automatizar. O foco é o retorno de valor para o time e para o projeto. 