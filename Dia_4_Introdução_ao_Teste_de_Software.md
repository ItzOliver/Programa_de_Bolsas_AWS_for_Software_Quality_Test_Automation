**Uma Breve História do Teste:**
- Século 19 -> Charles Babbage cria a primeira máquina de somar com a ajuda de Ada Lovelace, ele dizia que "É melhor tomar uma má decisão com dados do que tomar uma má decisão com dado nenhum.";
- Entre 1840 e 1850, Ada envia uma carta a Charles informando que encontrou um defeito -> "Antes de existir computadores já existiam bugs";
- No final do século 19 -> Herman Hollerith inventou as máquinas cartão perfurado -> Teste de caixa branca tem seu nome derivado da caixa dos cartões perfurados;
- Máquina enigma usada pelos nazistas na segunda guerra -> Alan Turing criou uma máquina que conseguiu quebrar a criptografia da máquina nazista;
- Primeiro bug a ter seu descobrimento de fato foi documentado por Grace Hopper em 1947;
- Glenford Myers -> escreveu a Arte de Testar Software - "Bíblia do Software" -> "O custo de um defeito vai aumentando quanto mais tempo ele existe" -> "Um defeito que você encontra amanhã custa mais caro que um defeito encontrado hoje";
- Emerson Rios -> Escreveu o livro "Base de Conhecimento em teste de software";

**Importância do Teste x Danos dos Bugs:**
- Danos dos Bugs:
    - Empresas/Organizações:
        - Atrasos;
        - Perda de Confiança;
        - Vendas.
    
    - Governos:
        - Vulnerabilidade de Informações;
        - Decisões Estratégicas Incorretas;
        - Derrotas Militares.

    - Pessoas:
        - Constrangimentos;
        - Perda ou Supressão de Direitos;
        - Risco de Vida e Acidentes.

    - Meio Ambiente:
        - Alertas Atrasados;
        - Desperdício de Recursos;
        - Poluição.

-> Prejuízos Financeiros e de Imagem.

**Os 7 Fundamentos do Teste (ISTQB):**
- Teste Demonstra a Presença de Defeitos:
    - O teste pode demonstrar a presença de defeitos, mas não pode provar que eles não existem;
    - Teste reduz a probabilidade que os defeitos permaneçam em um software, mas mesmo se nenhum defeito for encontrado, não prova que ele esteja perfeito.

- Teste Exaustivo Não É Possível:
    - Testar tudo (todas as combinações de entradas e pré-condições) não é viável, exceto para casos triviais;
    - Em vez do teste exaustivo, riscos e prioridades são levados em consideração para dar foco aos esforços de teste.

- Teste Antecipado:
    - A atividade de teste deve começar o mais breve possível no ciclo de desenvolvimento do software ou sistema e deve ser focado em objetivos definidos;
    - "Quanto mais cedo encontrarmos um defeito, mais barata será sua identificação e correção" - Regra 10 de Myers.

- Agrupamento de Defeitos:
    - Um número pequeno de módulos contém a maioria dos defeitos descobertos durante o teste antes de sua entrega ou exibe a maioria das falhas operacionais;
    - Os bugs estão distribuídos de forma heterogênea. Alguns módulos têm mais defeitos do que outros.

- Paradoxo do Pesticida:
    - Pode ocorrer de um mesmo conjunto de testes repetidos várias vezes não encontraram novos defeitos após determinado momento;
    - Para superar este "paradoxo do pesticida", os casos de testes necessitam ser frequentemente revisado e atualizado;
    - Um conjunto de testes novo e diferente precisa ser escrito para exercitar diferentes partes do software ou sistema com objetivo de aumentar a possibilidade de encontrar mais erros.

- Teste Depende de Contexto:
    - Testes são realizados de forma diferente conforme o contexto;
    - Exemplo: Software de piloto automático de um avião deve ser testado com amplitude e profundidade diferentes de um software de um quiosque de informações em um shopping.

- A Ilusão da Ausência de Erros:
    - Encontrar e consertar defeitos não ajuda se o sistema construído não atende às expectativas e necessidades dos usuários;
    - Exemplo: Microsoft Windows X IBM OS2.

**Diferença Entre Teste e QA:**
- Projetos anteriores devem prover lições aprendidas:
    - Entendimento da causa raiz dos defeitos encontrados;
    - Aprimorar os processos;
    - Prevenir reincidência de erros;
    - Melhorar a qualidade dos sistemas futuros.
- Testes devem ser integrados como uma das atividades de garantia de qualidade;
- Juntamente aos padrões de desenvolvimento, treinamento, análise de defeitos, e outras ações.

**Erro -> Defeito -> Falha:**
- Software são feitos por pessoas para pessoas;
- Pessoas cometem erros (enganos), que produzem defeitos(bugs) no código, em um software ou sistema ou em um documento;
- Se um defeito no código for executado, o sistema falhará ao tentar fazer o que deveria (ou, em algumas vezes, o que não deveria), causando uma falha;
- Nem todos os defeitos causam falhas (a falha só existe quando o defeito é executado);
- Falhas geram insatisfação com a qualidade.