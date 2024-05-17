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

# Módulo 3 - Boas práticas e diretrizes
## Compartilhamente de Acesso
As credenciais de acesso, de qualquer sistema, constituem a identificação do usuário, isto é, se ele é autorizado a acessar e trabalhar aquelas informações.
As ações executadas com uma credencial são de responsabilidade do próprio profissional e todos os acessos podem ser monitorados, portanto proteja seu login e senha.
## Armazenamento
As informações devem ser armazenadas nos repositórios oficiais, onde estarão seguras com os devidos controles de proteção.
Faça uso dos recursos da Udemy, do OneDrive e do Sharepoint de seu respectivo iStudio para armazenar suas informações.
## Softwares e malwares
Softwares maliciosos e malwares são muito comuns em programas ou arquivos baixados da internet, portanto, é necessário ter muital cautela. 
O antivírus da Compass gera um alerta à todo software não autorizado e damos o devido tratamento envolvendo os profissionais e seus gestores, porém, o ideal é que sempre seja avaliada a lista de softwares homologados antes de instalar algo em seu equipamento.
## Senha segura
Suas senhas concedem o acesso ao ambiente e sistemas na Compass e em nossos clientes.
- Evite nomes, sobrenomes, apelidos, datas de aniversário, nº de celular, placa de carro;
- Crie senhas diferentes para cada conta, sistema ou site que precisar;
- Troque suas senhas com frequência;
- Use um aplicativo de "cofre de senhas";
- Sempre que disponível, utilize um segundo fator de autenticação (MFA);
- Reporte ao time InfoSec situações suspeitas que pedem suas informações;
- Sempre que possível use letras maiúsculas e minúsculas, números e caracteres especiais. 
## Uso da internet
O conteúdo acessado na internet e o uso do e-mail corporativo deve respeitar todas as diretrizes e normas de segurança e privacidade, publicadas e divulgadas em nossas políticas.
Com a disseminação de ferramentas de comunicação instantânea o uso destas para tratar assuntos profissionais se tornou cada vez mais comum. Evite-os para tratar assuntos sensíveis e compartilhar arquivos.
## Multi-factor Authenticator (MFA)
É um controle de segurança que demanda dois ou mais elementos de autenticação para identificar um usuário, a fim de dificultar acessos não autorizados.
Existem diversos tipos e os mais utilizados são:
- O que sei: é exigido algo conhecido, como login, senha ou resposta a uma pergunta secreta.
- O que tenho: necessário algo físico como um token, um cartão inteligente ou um aplicativo em dispositivo móvel para obter a informação, geralmente randômica, para autenticação.
- Quem sou: utiliza-se características físicas do ser humano como a impressão digital, reconhecimento de voz ou face, ou leitura de retina. Este talvez seja um dos controles mais populas e é muito usado para a proteção da identidade digital nas redes sociais. 
## MS Authenticator
Na Compass utilizamos o MS Authenticator para autenticação na plataforma Office365, é preciso instalar em um dispositivo móvel para conseguir gerar o token de verificação.
A cada 14 dias, é solicitado um novo código para acessar os aplicativos que possuem o MFA. Com este código, o colaborador consegue entrar na sua conta do Microsoft 365.
Ao trocar de dispositivo móvel (celular/smartphone/tablet antigo), antes de desativar o cadastro do MFA no dispositivo antigo, é necessário ainda utilizá-lo para realizar o cadastro no novo dispositivo móvel.
## Atualização de software
Somos todos do mundo de tecnologia, e queremos sempre o melhor, o mais novo, o último modelo. Por que seria diferente com os softwares e sistemas operacionais que utilizamos? Além das correções e proteção contra as novas vulnerabilidades identificadas pelos vendors, você tem ganhos em desempenho, compatibilidade, estabilidade, evita interrupções, aproveita de novos recursos e funcionalidades.
## Incidentes de segurança
É um evente de segurança ou um conjunto deles, que podem impactar a disponiblidade, integridade, confidencialidade de um ativo de informação, assim como qualquer violação da Política de Segurança da Informação.
- Ferramenta não autorizada instalada;
- Vírus e outros códigos maliciosos;
- Tentativas não autorizadas de acesso;
- Compartilhamento de credenciais.
## Como relatar um incidente?

## Redes Wi-fi
### Em redes públicas:

### Em sua rede doméstica: 