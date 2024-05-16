# Módulo 0 - Pilares e as políticas de Segurança da informação
## Segurança da Informação
A segurança da Informação é a proteção de informações e sistemas de informação contra o acesso, o uso, a divulgação, a interrupção, a modificação ou a destruição não autorizados, a fim de fornecer confidencialidade, integridade e disponibilidade. -> NIST (National Institute of Standards and Technology)

## Os pilares de Segurança da Informação
### Confidencialidade 
Protege a informação de acessos não autorizados, evitando situações de ataques por acesso indevido.
- O objetivo é controlar o acesso por múltiplos fatores autenticação e criptografias.
    - Especificar requisitos mínimos para uma senha segura.
    - Autenticação multifator.
    - Verificação de senha fraca.
    - Identificador e gerenciador de sessões.

### Integridade
Este é o pilar que devemos atender para manter as características originais dos dados, conforme sua criação.
- A implementação de controles para impedir a alteração não autorizada devem ser pensados e implementados.
    - Validação de dados, como hashes.
    - Verificação de duplicidade.
    - Tratamento de dados de entrada, como caracteres especiais e comandos.
**Original e confiável é a regra aqui!**

### Disponibilidade
Queremos que os dados estejam disponíveis para o que for necessário, quando precisarmos. Isso demanda a estabilidade e acesso permanente ao ambiente e aos sistemas.
- Pense aqui nos controles existentes para acessar e usar informações.
    - Recursos de redundância, como backup de dados e balanceamento de carga.
    - Infraestrutura de carga.
    - Gestão de vulnerabilidades.
**A qualquer hora que preicse!**

## A segurança da informação é responsabilidade de todos!
### Política de Segurança da Informação (PSI)
Na PSI estão as boas práticas a serem seguidas para proteger as informações, tudo que estiver contrário a isso deve ser considerado um incidente de segurança e deve ser reportado ao time InfoSec.
A Compass, assim como todas as demais empresas do grupo, segue atualmente as orientações da PSI publicada pelo Grupo UOL que diz:
>  "A política de Segurança da Informação e Segurança Cibernética pretende (i) descrever as melhores práticas de Segurança da Informação e Segurança Cibernética quanto à confidencialidade, integridade e disponibilidade de informações; (ii) estabelecer diretrizes para todos os usuários, e (iii) minimizar os riscos de Segurança da Informação."

### Política de Classificação da Informação
Para definir o controle mais adequado é necessário conhecer o tipo de informação, a sua criticidade e o público.
> "Essa política descreve o processo de classificação da informação, caracterizado pela definição do nível de sensibilidade e os grupos de acesso à informação, visando assegurar que esta receba um nível adequado de proteção, conforme seu valor, sensibilidade e criticidade para a organização."

# Módulo 1 - Classificação da Informação
Toda e qualquer informação deve ser classificada, seja física ou lógica, de acordo com sua sensibilidade, criticidade e valor. A Classificação deve tratas as informações durante o seu ciclo de vida, ou seja, sua criação, edição, compartilhamento, armazenamento e descarte.
- Por que classificar? -> Para aplicar a devida proteção das informações e reduzir a probabilidade de ocorrer incidentes.
- Incidentes podem ocasionar impactos financeiros, regulatórios e reputacionais, trazendo sanções e prejuízos a Compass, seus clientes, parceiros e profissionais.
## Níveis de Classificação
### Confidencial
São informações altamente sigilosas e que não podem ser divulgadas para evitar danos à empresa, terceiros, funcionários e clientes.
- Requer medidas de controle e proteção rigorosos contra acessos, cópias, reproduções ou divulgações não autorizados.
- Devido à sensibilidade dessas informações, várias restrições de uso são aplicadas e o destinatário consegue apenas consultar o documento.
**ATENÇÃO: Sob esta classificação, um possível vazamento de dados certamente causaria grandes danos à empresa.**
### Restrita
São informações exclusivas de alguns profissionais e/ou determinadas áreas.
- Nem todos têm acesso à elas, pois os dados desta categoria são disponibilizados apenas aos destinatários nos quais você delega confiança para tratar do assunto.
Exemplos:
- E-mail com feedback;
- Divulgação de metas e resultados institucionais;
- Informações sobre produtos, serviços e projetos;
- Dados ou informações referentes às políticas comerciais.
**Atenção: Sob esta classificação, um possível vazamento de dados pode causar um impacto significativo à empresa, seus profissionais, seus parceiros ou seus clientes.**
###  Interna
São informações que competem aos profissionais, estagiários, prestadores de serviços da empresa e precisam de cuidados para evitar a divulgação ao público externo.
Exemplos:
- Comunicadores;
- Políticas e normas corporativas;
- Procedimentos operacionais e técnicos;
- Relação de endereços de e-mail internos;
- Informações disponibilizadas no Intranet.
### Pública
São informações que podem ser divulgadas sem restrição para o público em geral, incluindo clientes, fornecedores, imprensa, concorrentes, entre outros
As inforamções públicas são aqueles dados que podem ser divulgados sem oferecer risco algum à empresa, seus colaboradores e clientes. 

# Módulo 2 - Engenharia Social
É a habilidade de conseguir acesso a informações ou áreas importantes de algo ou alguém através de habilidades de persuasão.
O atacante se aproveita da falta de conhecimento, da boa vontade e simpatia da sua vítima para convencê-la a passar informações ou tomar ações de forma que lhe pareçam legitimas.
### Por que a engenharia social funciona? 
O ser humano confia e coopera por natureza, praticamente qualquer pessoa pode ser induzida a compartilhar informações, seja por capricho, carência de comunicação, colocar-se como centro das atenções, sentir-se útil, etc. Em geral, toda característica pode ser explorada com a abordagem correta.
Com os investimento para proteção da informação estão cada vez maiores e as tecnologias mais avançadas, os fraudadores atacam o fator humano por ser a parte do processo de controles de segurança que tem menos atenção das empresas.
### Táticas de abordagem
- Baiting: Uma isca física ou digital como um pendrive ou download de um filme, podem trazer um malware para o computador ao inserir o pendrive ou baixar e executar um arquivo, o malware oculto ganha acesso ao computador.
- Phishing: O mais eficiente. O atacante criar conteúdo enganoso muito próximo de algo legítimo e confiável, afim de obter credenciais ou instalar um malware. É comum se utilizar do e-mail, mas é muito comum também por SMS (Smishing) ou ligações de voz (Vishing).
- Dumpster Diving: É uma das abordagens menos óbvias, porém, caso as empresas não tenham cuidados com o descarte de informações o atacante pode encontrar relatórios inteiros, discos removíveis entre outros tipos de mídia com informações de todos os níveis de classificacação.
### Dicas de prevenção
- Sempre deconfiar! ler de novo!
- Não baixe arquivos e anexos em e-mails suspeitos;
- Não responda nem interaja com mensagens de textos suspeitas;
- Valide os links e o remetente dos e-mails;
- Descarte corretamente documentos e equipamentos;
- Pratique "mesa e tela limpa", bloqueie a tela e deixe apenas o necessário em seu ambiente de trabalho.