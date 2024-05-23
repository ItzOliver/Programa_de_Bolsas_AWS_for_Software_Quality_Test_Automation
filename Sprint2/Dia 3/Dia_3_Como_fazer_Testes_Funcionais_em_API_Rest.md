# Como Fazer Testes Funcionais em API Rest
## Testes Funcionais
- Swagger não descreve regras de negócio;
- Testes funcionais -> Validam a função do software;
    - função -> dados de entrada, processamento, dados recebidos na resposta.
- Sempre que se fala em teste funcional estamos falando de testar funções/validar funções.
## No contexto de API Rest
- O que seria um teste funcional?
    - Dadas as regras de negócio/requisitos, um teste funcional no contexto de uma API Rest é testar as regras de negócio implementadas na API.
- É importante interpretar as regras de negócio/requisitos;
- Quando se fala em teste de software não é só sobre a abordagem empírica;
    - Também é sobre a abordagem sistemática, o uso de técnicas de teste formais pra se identificar o que testar.
## Técnicas de teste de software
### Partição / Classes de Equivalência
- É uma técnica que ajuda o testador a pensar quais são as possíveis entradas que serão dadas a uma função da aplicação. -> **E o que mais?**
- Nem tudo pode estar descrito nos requisitos, a mentalidade **"E o que mais?"** ajuda a identificar possibilidades que não estavam listadas.
- Exemplo:
    - Regra de Negócio: Apenas administradores podem registrar novas viagens
        - Entradas: Credencial (Administrador, Usuario e **o que mais?**)
            - Se eu for Admimistrador o que tem que acontecer? **Registrar**;
            - Se eu for Usuário o que tem que acontecer? **Não registrar**;
            - **O que mais** além de Administrador e Usuário pode aparecer nas Entradas?
                - Inválida;
                - Expirada.
                    - O que fazer se for uma credencial inválida? **Não registrar**;
                    - o que fazer se for uma credencial expirada? **Não registrar**.