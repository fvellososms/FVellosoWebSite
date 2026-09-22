// Lista mestra das NRs que a FVelloso oferece serviço comercial direto
export const nrsWithServices = ["05", "06", "08", "10", "11", "12", "16", "18", "23", "33", "35"];

export type TrainingRequirement = {
  nome: string;
  publico?: string;
  funcao?: string;
  cargaInicial?: string;
  cargaPeriodica?: string;
  periodicidade?: string;
  modalidade?: string;
  observacao?: string;
};

export type NRDetails = {
  id: string;
  number: string;
  title: string;
  category: string;
  shortDescription: string;
  detailedContent: string[];
  imageUrl: string;
  servicePitch?: string;
  
  // Antigos, agora opcionais
  cargaHoraria?: string;
  periodicidade?: string;

  // Novos campos
  possuiTreinamentoObrigatorio?: boolean;
  treinamentos?: TrainingRequirement[];
  documentosRelacionados?: string[];
  responsabilidades?: string[];
  riscosRelacionados?: string[];
  ultimaAtualizacao?: string;
  fonteOficial?: string;
};

// Função auxiliar para gerar as imagens padronizadas do Pexels
const getImg = (id: number) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900`;

export const nrsDatabase: NRDetails[] = [
  {
    id: "nr-01",
    number: "01",
    title: "Disposições Gerais e Gerenciamento de Riscos Ocupacionais",
    category: "Gestão",
    shortDescription: "Estabelece as disposições gerais, campo de aplicação, termos e definições comuns a todas as NRs. Introduz o PGR.",
    detailedContent: [
      "A NR 01 é a espinha dorsal de toda a legislação de Segurança e Saúde no Trabalho no Brasil. Ela define os termos, as responsabilidades do empregador e do empregado, e as diretrizes gerais que devem ser aplicadas em conjunto com as demais normas.",
      "O GRO deve abranger os perigos e riscos ocupacionais identificados nos processos de trabalho, incluindo, quando aplicáveis, fatores físicos, químicos, biológicos, ergonômicos, de acidentes e fatores de risco psicossociais relacionados ao trabalho. Todas as empresas, com exceções previstas, devem elaborar o PGR para mapear os riscos e definir planos de ação.",
      "As informações geradas no PGR são a base fundamental para a elaboração do PCMSO (saúde ocupacional) e para o envio correto dos eventos de SST ao eSocial."
    ],
    imageUrl: getImg(8961146),
    cargaHoraria: "Conforme capacitação aplicável",
    periodicidade: "Conforme NR aplicável e situações previstas na NR-01",
    ultimaAtualizacao: "2026",
    fonteOficial: "Ministério do Trabalho e Emprego",
    possuiTreinamentoObrigatorio: true,
  },
  {
    id: "nr-03",
    number: "03",
    title: "Embargo e Interdição",
    category: "Gestão",
    shortDescription: "Estabelece as diretrizes para paralisação de obras ou interdição de setores por risco grave e iminente.",
    detailedContent: [
      "A NR 03 estabelece as regras e procedimentos que os auditores-fiscais do trabalho utilizam para embargar uma obra ou interditar um estabelecimento, setor de serviço, máquina ou equipamento.",
      "A aplicação desta norma ocorre exclusivamente quando é constatada uma situação de risco grave e iminente à saúde e integridade física dos trabalhadores. O embargo paralisa parcial ou totalmente uma obra, enquanto a interdição paralisa uma atividade ou setor específico.",
      "Durante o período de paralisação, os trabalhadores devem continuar recebendo seus salários normalmente, e a liberação do local só ocorre após a regularização completa das não conformidades apontadas pela fiscalização."
    ],
    imageUrl: getImg(8960942),
    cargaHoraria: "Não aplicável",
    periodicidade: "Conforme fiscalização",
  },
  {
    id: "nr-04",
    number: "04",
    title: "Serviços Especializados em Engenharia de Segurança e em Medicina do Trabalho - SESMT",
    category: "Organização",
    shortDescription: "Define o dimensionamento e atuação dos profissionais de saúde e segurança dentro das empresas.",
    detailedContent: [
      "A NR-04 estabelece os critérios para constituição e dimensionamento dos Serviços Especializados em Segurança e em Medicina do Trabalho (SESMT), considerando fatores como o grau de risco da atividade econômica e o número de trabalhadores da organização. com a finalidade de promover a saúde e proteger a integridade do trabalhador no local de trabalho.",
      "O dimensionamento do SESMT depende diretamente do Grau de Risco (GR) da atividade principal da empresa e do número total de empregados. A equipe pode ser composta por Médico do Trabalho, Engenheiro de Segurança do Trabalho, Técnico de Segurança do Trabalho, Enfermeiro e Auxiliar/Técnico de Enfermagem do Trabalho.",
      "O SESMT é responsável por aplicar o conhecimento de engenharia e medicina ao ambiente de trabalho, mitigando os riscos na fonte e garantindo que todas as demais NRs sejam cumpridas rigorosamente."
    ],
    imageUrl: getImg(8961146),
    cargaHoraria: "Não aplicável",
    periodicidade: "Contínua",
  },
  {
    id: "nr-05",
    number: "05",
    title: "CIPA - Comissão Interna de Prevenção de Acidentes e de Assédio",
    category: "Organização",
    shortDescription: "Regulamenta a constituição e o funcionamento da CIPA, visando a prevenção de acidentes e doenças decorrentes do trabalho.",
    detailedContent: [
      "A CIPA é um comitê paritário formado por representantes dos empregados (eleitos por voto secreto) e dos empregadores (indicados). O objetivo é observar as condições de risco nos ambientes de trabalho e solicitar medidas para reduzir ou neutralizar os riscos existentes.",
      "A NR 05 dita todas as regras para o dimensionamento, processo eleitoral, estabilidade no emprego para os eleitos e a obrigatoriedade de treinamentos específicos para os cipeiros antes da posse.",
      "Recentemente, a norma passou a exigir que a CIPA também inclua em suas atividades o combate ao assédio sexual e a outras formas de violência no ambiente de trabalho, estabelecendo procedimentos para recebimento e acompanhamento de denúncias."
    ],
    imageUrl: getImg(35082108),
    possuiTreinamentoObrigatorio: true,
    treinamentos: [
      {
        nome: "Treinamento para Membros da CIPA",
        cargaInicial: "8h, 12h, 16h ou 20h (conforme o grau de risco da organização)",
        cargaPeriodica: "Conforme grau de risco",
        periodicidade: "Anual",
        modalidade: "Pode ser EaD, semipresencial ou presencial, conforme regras específicas",
      }
    ],
    servicePitch: "A FVelloso conduz todo o processo eleitoral da sua CIPA (do edital à posse), elabora a documentação obrigatória e ministra o treinamento exigido por lei para os cipeiros, inclusive com os novos módulos de combate ao assédio."
  },
  {
    id: "nr-06",
    number: "06",
    title: "Equipamentos de Proteção Individual (EPI)",
    category: "Proteção",
    shortDescription: "Estabelece os requisitos para a seleção, fornecimento, uso, guarda e conservação dos EPIs.",
    detailedContent: [
      "A NR 06 define o que é considerado Equipamento de Proteção Individual e estabelece que a empresa é obrigada a fornecer aos empregados, gratuitamente, EPI adequado ao risco, em perfeito estado de conservação e funcionamento.",
      "Para que um equipamento seja considerado EPI no Brasil, ele deve possuir o Certificado de Aprovação (CA) expedido pelo órgão nacional competente em matéria de segurança e saúde no trabalho.",
      "A norma também exige que o empregador oriente e treine o trabalhador sobre o uso, guarda e conservação do EPI, além de registrar o seu fornecimento em fichas (físicas ou eletrônicas) que servem como prova fundamental em auditorias e processos trabalhistas."
    ],
    imageUrl: getImg(30592246),
    cargaHoraria: "Definida conforme os EPIs e riscos da atividade",
    periodicidade: "Na admissão, alteração de EPI/riscos e quando necessário",
    possuiTreinamentoObrigatorio: true,
    servicePitch: "Não basta comprar o EPI. Nossa equipe estrutura a gestão completa: especificação do Certificado de Aprovação (CA) correto para cada risco, implantação de fichas de controle (físicas ou biométricas) e treinamentos práticos de uso e conservação."
  },
  {
    id: "nr-07",
    number: "07",
    title: "Programa de Controle Médico de Saúde Ocupacional - PCMSO",
    category: "Saúde",
    shortDescription: "Estabelece as diretrizes e requisitos para a elaboração e implementação do PCMSO nas empresas.",
    detailedContent: [
      "O PCMSO tem o objetivo de preservar a saúde do conjunto dos trabalhadores. Ele atua rastreando e diagnosticando precocemente os agravos à saúde relacionados ao trabalho, inclusive aqueles de natureza subclínica, além de constatar a existência de casos de doenças ocupacionais.",
      "O programa deve ser elaborado com base nos riscos mapeados pelo PGR (NR 01) ou por outras avaliações ambientais. Ele determina o cronograma e os tipos de exames médicos obrigatórios: admissional, periódico, de retorno ao trabalho, de mudança de riscos ocupacionais e demissional.",
      "O documento resultante dessas avaliações é o Atestado de Saúde Ocupacional (ASO), indispensável para a validação da aptidão do funcionário para exercer suas atividades específicas."
    ],
    imageUrl: getImg(7088834),
    cargaHoraria: "Não aplicável",
    periodicidade: "Anual (Exames/PCMSO)",
  },
  {
    id: "nr-08",
    number: "08",
    title: "Edificações",
    category: "Proteção",
    shortDescription: "Estabelece requisitos técnicos mínimos para as edificações garantirem segurança e conforto aos trabalhadores.",
    detailedContent: [
      "A NR 08 dispõe sobre os requisitos técnicos mínimos que devem ser observados nas edificações, com o intuito de garantir segurança e conforto aos que nelas trabalham.",
      "A norma define padrões de altura (pé-direito), exigências para pisos e paredes (que não devem apresentar imperfeições que causem riscos), além de diretrizes para circulação segura, exigindo que os locais de movimentação não sejam escorregadios.",
      "Também estabelece a necessidade de proteção adequada contra intempéries (chuva, sol excessivo) em locais abertos ou parcialmente abertos que façam parte das instalações da empresa."
    ],
    imageUrl: getImg(8961260),
    cargaHoraria: "Não aplicável",
    periodicidade: "Contínua",
    servicePitch: "Realizamos vistorias técnicas completas nas suas instalações para garantir que pisos, paredes, coberturas e circulações atendam às normas de segurança, elaborando laudos e planos de ação para adequação estrutural.",
  },
  {
    id: "nr-09",
    number: "09",
    title: "Avaliação e Controle das Exposições Ocupacionais a Agentes Físicos, Químicos e Biológicos",
    category: "Higiene",
    shortDescription: "Estabelece os requisitos para a avaliação das exposições ocupacionais a agentes nocivos.",
    detailedContent: [
      "Anteriormente conhecida como PPRA, a NR 09 foi modernizada para atuar como uma norma de metodologia de higiene ocupacional, complementando a NR 01. Ela foca especificamente em como identificar, avaliar e controlar agentes ambientais nocivos no ambiente de trabalho.",
      "Os agentes cobertos por esta norma são os Físicos (ruído, vibrações, temperaturas extremas, radiações), Químicos (poeiras, fumos, gases, vapores) e Biológicos (bactérias, vírus, fungos).",
      "A norma exige que as avaliações quantitativas (medições em campo) sejam realizadas para comprovar o controle da exposição ou dimensionar o nível do risco, sendo os resultados incorporados ao inventário de riscos do PGR."
    ],
    imageUrl: getImg(19544248),
    cargaHoraria: "Não aplicável",
    periodicidade: "Anual (Avaliações)",
  },
  {
    id: "nr-10",
    number: "10",
    title: "Segurança em Instalações e Serviços em Eletricidade",
    category: "Risco Especial",
    shortDescription: "Estabelece os requisitos e condições mínimas para a segurança em instalações e serviços com eletricidade.",
    detailedContent: [
      "A NR 10 tem como objetivo garantir a segurança e a saúde dos trabalhadores que interagem direta ou indiretamente em instalações elétricas e serviços com eletricidade, desde a geração até o consumo.",
      "Uma das principais exigências é a manutenção do Prontuário de Instalações Elétricas (PIE) para estabelecimentos com carga instalada superior a 75 kW, contendo laudos técnicos, esquemas unifilares atualizados e certificações dos equipamentos.",
      "A norma também exige treinamento específico (Básico e Complementar - SEP) para os profissionais do setor, além de ditar procedimentos estritos para o processo de desenergização e a obrigatoriedade do uso de EPIs dielétricos e vestimentas anti-chama."
    ],
    imageUrl: getImg(8961146),
    cargaHoraria: "40h (Básico) / 40h (SEP)",
    periodicidade: "Bienal (2 anos)",
    servicePitch: "Elaboramos e atualizamos o Prontuário de Instalações Elétricas (PIE), emitimos laudos de SPDA (para-raios) e aterramento, além de ministrar os treinamentos obrigatórios de NR 10 Básico e SEP para seus eletricistas.",
  },
  {
    id: "nr-11",
    number: "11",
    title: "Transporte, Movimentação, Armazenagem e Manuseio de Materiais",
    category: "Risco Especial",
    shortDescription: "Normas de segurança para operação de elevadores, guindastes, transportadores industriais e máquinas afins.",
    detailedContent: [
      "A NR 11 visa prevenir acidentes em operações que envolvam o levantamento e o transporte de cargas, seja por meios mecânicos ou manuais, aplicável a guindastes, empilhadeiras, pontes rolantes, talhas e transportadores de correia.",
      "Para os operadores de equipamentos motorizados de movimentação de carga, a norma exige habilitação específica, treinamento comprovado e o porte de um cartão de identificação (crachá) com o prazo de validade do exame médico em dia.",
      "Também estabelece rigorosos critérios para o armazenamento de materiais, ditando a forma de empilhamento, respeitando a capacidade de carga do piso e as distâncias mínimas de segurança em relação às estruturas e paredes da edificação."
    ],
    imageUrl: getImg(8961260),
    cargaHoraria: "Conforme equipamento e atividade",
    periodicidade: "Conforme capacitação, função, equipamento e requisitos aplicáveis",
    possuiTreinamentoObrigatorio: true,
    servicePitch: "Ministramos treinamentos de capacitação e reciclagem para operadores de empilhadeiras, pontes rolantes, talhas e guindastes, além de estruturar os checklists diários de inspeção para o maquinário.",
  },
  {
    id: "nr-12",
    number: "12",
    title: "Segurança no Trabalho em Máquinas e Equipamentos",
    category: "Risco Especial",
    shortDescription: "Define referências técnicas, princípios fundamentais e medidas de proteção para garantir a segurança na utilização de máquinas.",
    detailedContent: [
      "A NR 12 é uma das normas mais complexas e extensas da legislação trabalhista. Ela dita as exigências para o projeto, fabricação, importação, comercialização e utilização de todas as máquinas e equipamentos industriais.",
      "A premissa básica da NR 12 é a falha segura: as máquinas não podem expor o operador a riscos de esmagamento, corte ou amputação, exigindo proteções físicas (carenagens) e sistemas de segurança intertravados, cortinas de luz e botões de emergência acessíveis.",
      "As empresas precisam realizar uma Apreciação de Risco (inventário detalhado) de todas as suas máquinas, adequar os painéis elétricos aos padrões da NR 10, e criar manuais e procedimentos de trabalho seguro para a operação e manutenção de cada equipamento."
    ],
    imageUrl: getImg(19544248),
    cargaHoraria: "8h a 40h",
    periodicidade: "Admissional / Conforme alteração",
    servicePitch: "Executamos a Apreciação de Risco completa do seu parque fabril. Nossos engenheiros elaboram laudos técnicos de adequação, manuais de operação segura e procedimentos de bloqueio e etiquetagem (LOTO)."
  },
  {
    id: "nr-13",
    number: "13",
    title: "Caldeiras, Vasos de Pressão, Tubulações e Tanques Metálicos",
    category: "Risco Especial",
    shortDescription: "Requisitos para operação, manutenção e inspeção de equipamentos pressurizados.",
    detailedContent: [
      "A NR 13 estabelece requisitos técnicos e legais para a gestão da integridade estrutural de caldeiras a vapor, vasos de pressão, suas tubulações de interligação e tanques metálicos de armazenamento de fluidos.",
      "Devido ao altíssimo risco de explosões catastróficas, a norma exige a supervisão direta e inspeções regulares executadas obrigatoriamente por um Profissional Habilitado (PH) — geralmente engenheiros mecânicos ou navais devidamente registrados.",
      "As empresas devem manter um prontuário rigoroso (Livro de Registro de Segurança) para cada equipamento, contendo relatórios de testes hidrostáticos, ultrassom, calibração de válvulas de segurança e o controle dos treinamentos exigidos para os operadores de caldeira."
    ],
    imageUrl: getImg(8960942),
    cargaHoraria: "40h (Operadores)",
    periodicidade: "Anual a Trienal",
  },
  {
    id: "nr-14",
    number: "14",
    title: "Fornos",
    category: "Risco Especial",
    shortDescription: "Requisitos de segurança para a construção e operação de fornos industriais.",
    detailedContent: [
      "A NR 14 é uma norma bastante concisa, voltada para a instalação, construção e manutenção de fornos industriais, buscando minimizar os riscos de explosões, incêndios e intoxicação de trabalhadores por gases.",
      "A norma estipula que os fornos devem ser instalados em locais adequados e com sistemas eficientes de captação e exaustão de gases e fumaças nocivas, garantindo que o ambiente externo de operação mantenha uma atmosfera respirável.",
      "Além da emissão de gases, a NR foca no isolamento térmico adequado das paredes estruturais dos fornos para prevenir queimaduras por contato e para controlar a carga de calor radiante no ambiente de trabalho."
    ],
    imageUrl: getImg(19544248),
    cargaHoraria: "Variável",
    periodicidade: "Periódico",
  },
  {
    id: "nr-15",
    number: "15",
    title: "Atividades e Operações Insalubres",
    category: "Higiene",
    shortDescription: "Define os critérios para a caracterização da insalubridade e os limites de tolerância para agentes nocivos.",
    detailedContent: [
      "A NR 15 regulamenta o direito ao pagamento do adicional de insalubridade. Uma atividade é insalubre quando o trabalhador está exposto a agentes físicos, químicos ou biológicos acima dos limites de tolerância estabelecidos nos anexos da norma.",
      "O adicional é pago com base no salário mínimo da região, variando em três graus: 10% para grau mínimo, 20% para grau médio e 40% para grau máximo de insalubridade. A caracterização ou descaracterização desse direito deve ser feita exclusivamente através de laudo técnico (LTCAT/Laudo de Insalubridade) emitido por Engenheiro de Segurança ou Médico do Trabalho.",
      "O fornecimento e uso correto de EPIs certificados, se comprovarem a neutralização ou redução da exposição do trabalhador para níveis abaixo do limite de tolerância, podem isentar a empresa do pagamento do adicional."
    ],
    imageUrl: getImg(7088834),
    cargaHoraria: "Não aplicável",
    periodicidade: "Conforme laudo (LTCAT)",
  },
  {
    id: "nr-16",
    number: "16",
    title: "Atividades e Operações Perigosas",
    category: "Risco Especial",
    shortDescription: "Regulamenta as atividades que geram direito ao adicional de periculosidade (inflamáveis, explosivos, eletricidade, etc).",
    detailedContent: [
      "Ao contrário da NR 15 (focada na saúde), a NR 16 foca na integridade física imediata e risco de vida. Ela define as atividades consideradas perigosas por lei, conferindo ao trabalhador o direito a um adicional de 30% calculado sobre o salário base, sem os acréscimos resultantes de gratificações, prêmios ou participações nos lucros.",
      "São consideradas perigosas as atividades e operações com explosivos, inflamáveis líquidos e gasosos, energia elétrica, radiações ionizantes (materiais radioativos), segurança pessoal/patrimonial com exposição a roubos ou outras violências, e atividades em motocicletas.",
      "O laudo técnico assinado por profissional legalmente habilitado é o único documento válido para caracterizar as áreas de risco dentro das dependências da empresa e confirmar quais funções têm direito legal ao recebimento do adicional."
    ],
    imageUrl: getImg(8960942),
    cargaHoraria: "Não aplicável",
    periodicidade: "Conforme laudo de periculosidade",
    servicePitch: "Evite passivos trabalhistas. Emitimos o Laudo de Periculosidade assinado por Engenheiro de Segurança, caracterizando ou descaracterizando tecnicamente as áreas de risco (inflamáveis, elétricas, etc) da sua empresa."
  },
  {
    id: "nr-17",
    number: "17",
    title: "Ergonomia",
    category: "Saúde",
    shortDescription: "Visa a estabelecer as adaptações das condições de trabalho às características psicofisiológicas dos trabalhadores.",
    detailedContent: [
      "A NR 17 tem o objetivo de proporcionar conforto, segurança e eficiência no trabalho, combatendo a fadiga física e mental através da adequação do trabalho ao homem (e não o contrário).",
      "A gestão ergonômica inicia-se pela Avaliação Ergonômica Preliminar (AEP), destinada a identificar situações que demandem adaptação às características psicofisiológicas dos trabalhadores. Quando forem identificadas situações que exijam aprofundamento, insuficiência das medidas existentes, indicações provenientes do PCMSO ou relação com acidentes e doenças, pode ser necessária a Análise Ergonômica do Trabalho (AET). Trata-se de um estudo aprofundado dos postos de trabalho para avaliar fatores como levantamento e transporte manual de pesos, mobiliário, equipamentos, condições ambientais (ruído, temperatura e iluminação) e a organização do trabalho (metas e jornadas).",
      "Para atividades de *telemarketing*, operadores de *checkout* (caixas de supermercado) e trabalhos que demandam manutenção prolongada da postura sentada ou em pé, a norma traz anexos com regras específicas e muito restritas sobre as dinâmicas de pausas e design dos móveis."
    ],
    imageUrl: getImg(8961146),
    possuiTreinamentoObrigatorio: true,
    treinamentos: [
      {
        nome: "Treinamento sobre Riscos Ergonômicos",
        cargaInicial: "Variável",
        cargaPeriodica: "Variável",
        periodicidade: "Admissional e periódico",
        observacao: "Os trabalhadores devem ser treinados quanto aos riscos ergonômicos da sua atividade e medidas de prevenção."
      }
    ],
  },
  {
    id: "nr-18",
    number: "18",
    title: "Segurança e Saúde no Trabalho na Indústria da Construção",
    category: "Risco Especial",
    shortDescription: "A norma fundamental para canteiros de obra, estabelecendo diretrizes de segurança específicas para a construção civil.",
    detailedContent: [
      "A NR 18 é o pilar da segurança do trabalho na construção civil. Ela estabelece diretrizes de ordem administrativa, de planejamento e de organização, com o objetivo de implementar medidas de controle e sistemas preventivos de segurança nos processos e no meio ambiente de trabalho.",
      "A espinha dorsal da gestão da obra é a exigência do Programa de Gerenciamento de Riscos (PGR) específico para o canteiro (antigo PCMAT). O PGR da construção deve contemplar o projeto da área de vivência, projeto elétrico temporário, proteções coletivas e o mapeamento das etapas de risco, da fundação ao acabamento.",
      "A norma define padrões de proteção absoluta contra quedas (guarda-corpos, telas, redes), segurança no uso de andaimes (fachadeiros e suspensos), normas para escavações e as regras para o uso de gruas e elevadores de cremalheira."
    ],
    imageUrl: getImg(8961260),
    possuiTreinamentoObrigatorio: true,
    treinamentos: [
      {
        nome: "Básico de Segurança",
        cargaInicial: "4h",
        cargaPeriodica: "4h",
        periodicidade: "2 anos",
      },
      {
        nome: "Operador de Grua",
        cargaInicial: "80h (sendo pelo menos 40h práticas)",
        cargaPeriodica: "Conforme NR-18",
        periodicidade: "Bienal",
      },
      {
        nome: "Operador de Guindaste",
        cargaInicial: "120h (sendo pelo menos 80h práticas)",
      },
      {
        nome: "Sinaleiro / Amarrador de Cargas",
        cargaInicial: "16h",
      },
      {
        nome: "Operador de Elevador",
        cargaInicial: "16h",
        cargaPeriodica: "4h",
        periodicidade: "Anual",
      },
      {
        nome: "Operador de PEMT",
        cargaInicial: "4h",
        cargaPeriodica: "4h",
        periodicidade: "2 anos",
      }
    ],
    servicePitch: "Nossa especialidade. Elaboramos o PGR do canteiro de obras, realizamos os treinamentos admissionais da equipe e alocamos técnicos para a fiscalização SMS diária ou periódica na sua frente de serviço."
  },
  {
    id: "nr-19",
    number: "19",
    title: "Explosivos",
    category: "Risco Especial",
    shortDescription: "Requisitos para fabricação, manuseio, armazenamento e transporte de explosivos.",
    detailedContent: [
      "A NR 19 normatiza todas as etapas envolvendo explosivos, visando prevenir acidentes desastrosos. As empresas fabricantes e importadoras deste tipo de material necessitam de rigorosas autorizações e registros emitidos diretamente pelo Exército Brasileiro.",
      "A norma dita as regras de arquitetura e distanciamento para a construção de depósitos e fábricas de explosivos (inclusive o uso de para-raios e aterramentos especiais), proibindo a estocagem nas proximidades de áreas povoadas, rodovias e ferrovias.",
      "Apenas trabalhadores devidamente qualificados (Blasters), treinados e com a ficha criminal limpa e autorização especial podem manusear e operar a detonação desses artefatos em pedreiras e frentes de desmonte."
    ],
    imageUrl: getImg(19544248),
    cargaHoraria: "40h (Blaster)",
    periodicidade: "Bienal (2 anos)",
  },
  {
    id: "nr-20",
    number: "20",
    title: "Segurança e Saúde no Trabalho com Inflamáveis e Combustíveis",
    category: "Risco Especial",
    shortDescription: "Estabelece requisitos mínimos para a gestão da segurança no armazenamento e manuseio de inflamáveis.",
    detailedContent: [
      "A NR 20 trata diretamente da gestão de riscos contra incêndios e explosões causados pela extração, produção, armazenamento, transferência, manuseio e manipulação de inflamáveis (líquidos e gases) e combustíveis.",
      "A norma divide as instalações em diferentes Classes (I, II e III), dependendo do volume armazenado e das atividades realizadas. Quanto maior a classe, maiores as exigências técnicas e o nível de carga horária para a capacitação obrigatória dos trabalhadores que entram nas áreas de risco.",
      "A documentação exigida é vasta, contemplando o Prontuário da Instalação, projeto físico aprovado, planos de inspeção das tubulações, e a exigência mandatória de um Plano de Respostas a Emergências (PAE) testado por simulados regulares."
    ],
    imageUrl: getImg(19544248),
    cargaHoraria: "8h a 32h",
    periodicidade: "Anual / Trienal",
  },
  {
    id: "nr-21",
    number: "21",
    title: "Trabalhos a Céu Aberto",
    category: "Proteção",
    shortDescription: "Medidas de proteção para trabalhadores expostos a intempéries e insolação.",
    detailedContent: [
      "Uma norma extremamente direta, focada nas atividades executadas ao ar livre, exigindo que as empresas forneçam abrigos (ainda que rústicos) para proteger os trabalhadores durante operações contra intempéries como fortes chuvas ou sol escaldante.",
      "Exige a disponibilização de água potável fresca nas frentes de serviço e condições mínimas de profilaxia (prevenção) contra doenças endêmicas que possam acometer o trabalhador na região de mata ou pantanosa onde a obra ou exploração está ocorrendo.",
      "Por sua brevidade, as exigências da NR 21 geralmente se fundem às documentações e planos de ação da NR 18 e da NR 31."
    ],
    imageUrl: getImg(8961260),
    cargaHoraria: "Não aplicável",
    periodicidade: "Contínua",
  },
  {
    id: "nr-22",
    number: "22",
    title: "Segurança e Saúde Ocupacional na Mineração",
    category: "Risco Especial",
    shortDescription: "Preceitos de segurança e saúde específicos para a atividade mineradora.",
    detailedContent: [
      "A NR 22 atua sobre minerações subterrâneas, a céu aberto, garimpos, extração de minerais industriais, beneficiamento e pesquisa mineral, estipulando preceitos de segurança severos diante dos riscos de soterramentos e intoxicações graves.",
      "Um dos pontos principais da norma é a criação obrigatória do Programa de Gerenciamento de Riscos (PGR) da atividade de mineração, que atua integrado com as normas do Ministério de Minas e Energia. O plano deve prever suporte e estabilidade de maciços rochosos, plano de ventilação mecânica para galerias e controle rigoroso de poeiras (prevenção de silicose).",
      "As minas subterrâneas exigem sistemas de monitoramento contínuo de gases inflamáveis e tóxicos, a presença de uma Brigada de Emergência especializada em resgate em profundidade e um sistema robusto de comunicação e localização dos operários."
    ],
    imageUrl: getImg(8960942),
    possuiTreinamentoObrigatorio: true,
    treinamentos: [
      {
        nome: "Integração para Mineração",
        cargaInicial: "24h",
        periodicidade: "Anual"
      }
    ],
  },
  {
    id: "nr-23",
    number: "23",
    title: "Proteção Contra Incêndios",
    category: "Proteção",
    shortDescription: "Medidas de prevenção e combate a incêndios nos locais de trabalho.",
    detailedContent: [
      "A NR 23 determina que todos os empregadores devem adotar medidas de prevenção de incêndios em conformidade com as legislações estaduais e as normas técnicas nacionais aplicáveis (geralmente emitidas pelo Corpo de Bombeiros).",
      "A norma obriga a sinalização e a manutenção de saídas de emergência adequadas, que devem permanecer livres, desobstruídas e abrir sempre no sentido do fluxo de fuga, sem necessitar de chaves ou ferramentas secretas.",
      "A empresa também é obrigada a providenciar para todos os trabalhadores informações claras sobre a utilização dos equipamentos de combate a incêndio (extintores e hidrantes), procedimentos para evacuação rápida dos locais de trabalho e dispositivos de alarme existentes."
    ],
    imageUrl: getImg(35082108),
    cargaHoraria: "Conforme legislação estadual e normas técnicas aplicáveis",
    periodicidade: "Conforme legislação estadual e normas técnicas aplicáveis",
    possuiTreinamentoObrigatorio: true,
    servicePitch: "Formamos e treinamos a sua Brigada de Incêndio (teoria e prática), elaboramos Planos de Atendimento a Emergências (PAE) e rotas de fuga em conformidade com as exigências do Corpo de Bombeiros."
  },
  {
    id: "nr-24",
    number: "24",
    title: "Condições Sanitárias e de Conforto nos Locais de Trabalho",
    category: "Higiene",
    shortDescription: "Requisitos mínimos para instalações sanitárias, vestiários, refeitórios e alojamentos.",
    detailedContent: [
      "A NR 24 detalha as proporções matemáticas e as exigências estruturais necessárias para garantir o asseio e o conforto dos empregados, estabelecendo quantos chuveiros, mictórios e vasos sanitários devem existir conforme o número de trabalhadores por turno.",
      "Regulamenta os locais destinados a refeições (refeitórios), proibindo que o trabalhador coma nos postos de trabalho. Exige locais arejados, com mesas e cadeiras adequadas, pias próximas e equipamento para aquecimento das marmitas.",
      "Para trabalhadores em trânsito ou obras distantes, a norma estipula regras rígidas para a construção de alojamentos, determinando áreas mínimas de ventilação, o dimensionamento de camas e armários e a rotina de limpeza do local."
    ],
    imageUrl: getImg(8961260),
    cargaHoraria: "Não aplicável",
    periodicidade: "Contínua",
  },
  {
    id: "nr-25",
    number: "25",
    title: "Resíduos Industriais",
    category: "Higiene",
    shortDescription: "Medidas de eliminação e controle de resíduos industriais para proteção do trabalhador e meio ambiente.",
    detailedContent: [
      "A NR 25 atua sobre a forma como a empresa maneja, armazena e descarta resíduos sólidos, líquidos ou gasosos gerados no processo de produção, visando evitar a contaminação química e biológica dos trabalhadores.",
      "Os resíduos gasosos devem ser controlados no próprio local da fonte geradora através de sistemas de exaustão localizados (chaminés e filtros), enquanto os resíduos líquidos perigosos não podem ser despejados nas redes públicas antes de passarem por tratamentos físicos ou químicos.",
      "A gestão exigida pela NR 25 dialoga intimamente com a Política Nacional de Resíduos Sólidos e as certificações de Sistema de Gestão Ambiental (ISO 14001)."
    ],
    imageUrl: getImg(19544248),
    cargaHoraria: "Não aplicável",
    periodicidade: "Conforme descarte",
  },
  {
    id: "nr-26",
    number: "26",
    title: "Sinalização de Segurança",
    category: "Proteção",
    shortDescription: "Padronização de cores e sinais para identificação de riscos nos locais de trabalho.",
    detailedContent: [
      "A NR 26 define a obrigatoriedade da adoção de cores específicas para segurança em estabelecimentos ou locais de trabalho, a fim de indicar e advertir acerca dos perigos (tubulações, portas de emergência, painéis elétricos).",
      "Além da pintura e de placas, a norma é fortemente pautada na classificação e rotulagem preventiva dos produtos químicos segundo o GHS (Sistema Globalmente Harmonizado de Classificação e Rotulagem de Produtos Químicos).",
      "É mandatório que todo produto químico perigoso presente na empresa esteja corretamente rotulado em português e acompanhado da Ficha com Dados de Segurança (FDS, anteriormente conhecida como FISPQ), documento que deve ser de livre acesso para todos os trabalhadores do setor."
    ],
    imageUrl: getImg(8960942),
    possuiTreinamentoObrigatorio: true,
    treinamentos: [
      {
        nome: "Treinamento sobre Riscos Químicos e FDS",
        observacao: "Trabalhadores devem ter acesso às fichas e receber treinamento sobre os perigos e medidas de segurança."
      }
    ],
  },
  {
    id: "nr-28",
    number: "28",
    title: "Fiscalização e Penalidades",
    category: "Gestão",
    shortDescription: "Estabelece os procedimentos de fiscalização, autuação e as multas aplicáveis por descumprimento das NRs.",
    detailedContent: [
      "A NR 28 não fala sobre prevenção de acidentes diretamente; ela é a 'tabela de multas' do Ministério do Trabalho. A norma detalha o rito administrativo e os prazos que um auditor fiscal deve seguir após identificar irregularidades nas empresas.",
      "Ela possui um anexo volumoso com a codificação de todas as infrações possíveis listadas em todas as demais NRs. Cada desrespeito legal (como faltar um guarda-corpo ou não preencher um ASO) possui um código de enquadramento (I1, I2, I3, I4).",
      "O cálculo do valor da multa a ser cobrado da empresa utiliza uma fórmula que cruza a gravidade da infração com a quantidade de empregados registrados sob o CNPJ da empresa infratora."
    ],
    imageUrl: getImg(8961146),
    cargaHoraria: "Não aplicável",
    periodicidade: "Fiscalizatória",
  },
  {
    id: "nr-29",
    number: "29",
    title: "Segurança e Saúde no Trabalho Portuário",
    category: "Risco Especial",
    shortDescription: "Medidas de segurança aplicáveis aos trabalhadores nos portos.",
    detailedContent: [
      "A NR 29 regulamenta as condições de trabalho tanto a bordo das embarcações atracadas quanto nos terminais e instalações em terra que dão apoio à estiva e conferência de cargas no setor portuário.",
      "As administrações portuárias são obrigadas a montar o CPATP (Comissão de Prevenção de Acidentes no Trabalho Portuário) e o SESSTP (Serviço Especializado local), atuando nos mesmos moldes que a CIPA e o SESMT, porém com regras específicas para o dinamismo logístico da estiva.",
      "A norma impõe cuidados operacionais gigantescos com guindastes de cais (portêineres), movimentação de contêineres e a segregação absoluta no manuseio e armazenagem de produtos perigosos dentro do porto."
    ],
    imageUrl: getImg(8960942),
    cargaHoraria: "24h (Treinamento)",
    periodicidade: "Bienal (2 anos)",
  },
  {
    id: "nr-30",
    number: "30",
    title: "Segurança e Saúde no Trabalho Aquaviário",
    category: "Risco Especial",
    shortDescription: "Medidas de proteção para trabalhadores em embarcações comerciais.",
    detailedContent: [
      "Aplicada aos trabalhadores embarcados, a NR 30 protege a tripulação de navios mercantes, embarcações de passageiros e embarcações de apoio marítimo (bandeira nacional ou estrangeira operando em águas brasileiras).",
      "O foco central é a formação do GSSTB (Grupo de Segurança e Saúde no Trabalho a Bordo), comissão interna responsável por inspecionar a praça de máquinas, áreas de convivência (camarotes) e cozinhas, prevenindo acidentes, focos de incêndio e problemas de saúde física e mental decorrentes do isolamento.",
      "A norma dispõe regras sobre o resgate em caso de queda de homens ao mar, limites nutricionais para o abastecimento do navio, e o suporte de telemedicina em embarcações que não possuem enfermaria com médico embarcado."
    ],
    imageUrl: getImg(19544248),
    cargaHoraria: "20h",
    periodicidade: "Bienal (2 anos)",
  },
  {
    id: "nr-31",
    number: "31",
    title: "Segurança e Saúde no Trabalho na Agricultura, Pecuária, Silvicultura, Exploração Florestal e Aquicultura",
    category: "Risco Especial",
    shortDescription: "Diretrizes de SMS para o meio rural, aqüicultura e atividades afins.",
    detailedContent: [
      "A NR 31 é a 'bíblia' da segurança para o trabalho rural, englobando fazendas de cultivo, frigoríficos, criação de animais e atividades de extração madeireira. A norma simplifica e adapta outras NRs para o contexto agropecuário.",
      "O documento principal exigido pelo governo neste setor é o PGRTR (Programa de Gerenciamento de Riscos no Trabalho Rural), que deve mapear a aplicação de agrotóxicos (agentes químicos), a exposição ao sol, ataques de animais peçonhentos e as condições de uso dos maquinários agrícolas, como tratores e colheitadeiras.",
      "Também exige alojamentos descentes para trabalhadores sazonais (como nas épocas de colheita), áreas de vivência seguras contra picadas de cobras e insetos, além de garantir transporte seguro, sendo proibido o uso de caminhões abertos ('paus de arara') e veículos sem cinto de segurança para deslocamento da equipe rural."
    ],
    imageUrl: getImg(8961260),
    cargaHoraria: "8h a 24h",
    periodicidade: "Anual / Bienal",
  },
  {
    id: "nr-32",
    number: "32",
    title: "Segurança e Saúde no Trabalho em Serviços de Saúde",
    category: "Saúde",
    shortDescription: "Medidas para proteger trabalhadores em hospitais, clínicas e laboratórios.",
    detailedContent: [
      "Voltada para hospitais, clínicas, laboratórios, postos de saúde e clínicas odontológicas, a NR 32 foca exaustivamente na contenção do Risco Biológico (vírus, bactérias e perfurocortantes) e do Risco Radiológico (raios-X, ressonâncias).",
      "É estritamente proibido o uso de adornos (brincos, anéis, relógios, crachás de cordão) por quem tem contato com áreas biológicas, bem como consumir alimentos nas estações de trabalho e postos de enfermagem. O fornecimento e controle vacinal rigoroso de toda a equipe também é de responsabilidade da instituição de saúde.",
      "Para evitar perfurações acidentais e contaminação por HIV/Hepatites, a norma determina o uso obrigatório de agulhas com dispositivos de segurança, o descarte apropriado em caixas rígidas para perfurocortantes (Descarpack) e proíbe terminantemente o reencape manual de agulhas."
    ],
    imageUrl: getImg(7088834),
    cargaHoraria: "4h a 16h",
    periodicidade: "Admissional / Anual",
  },
  {
    id: "nr-33",
    number: "33",
    title: "Segurança e Saúde nos Trabalhos em Espaços Confinados",
    category: "Risco Especial",
    shortDescription: "Estabelece os requisitos mínimos para a identificação, avaliação e controle de riscos em espaços confinados.",
    detailedContent: [
      "Espaço confinado é qualquer área não projetada para ocupação humana contínua, com meios limitados de entrada e saída (como silos de grãos, tanques industriais, poços, caixas d'água e tubulações). A NR 33 previne as duas maiores causas de morte nesses locais: asfixia pela falta de oxigênio e explosões pelo acúmulo de gases.",
      "Ninguém pode acessar um espaço confinado sem a Permissão de Entrada e Trabalho (PET) preenchida e assinada. O ar dentro do ambiente precisa ser monitorado continuamente por detectores de múltiplos gases antes e durante toda a operação, sendo acionada a ventilação forçada em caso de riscos atmosféricos.",
      "A operação exige um trabalhador capacitado do lado de fora ininterruptamente (o Vigia), que jamais pode entrar no tanque sob nenhuma hipótese. Caso haja um desmaio, o resgate deve ser executado exclusivamente através de tripés de acesso, guinchos e sistema de polias pela equipe de emergência."
    ],
    imageUrl: getImg(8960942),
    possuiTreinamentoObrigatorio: true,
    treinamentos: [
      {
        funcao: "Trabalhador Autorizado",
        nome: "Trabalhador Autorizado em Espaço Confinado",
        cargaInicial: "16h",
        cargaPeriodica: "8h",
        periodicidade: "Anual"
      },
      {
        funcao: "Vigia",
        nome: "Vigia de Espaço Confinado",
        cargaInicial: "16h",
        cargaPeriodica: "8h",
        periodicidade: "Anual"
      },
      {
        funcao: "Supervisor de Entrada",
        nome: "Supervisor de Entrada em Espaço Confinado",
        cargaInicial: "40h",
        cargaPeriodica: "8h",
        periodicidade: "Anual"
      },
      {
        funcao: "Equipe de Emergência e Salvamento",
        nome: "Equipe de Emergência e Salvamento",
        cargaInicial: "24h ou 32h, conforme nível do resgatista",
        periodicidade: "Conforme plano de emergência e NR-33"
      }
    ],
    servicePitch: "Mapeamos e sinalizamos todos os espaços confinados da empresa, elaboramos os procedimentos de resgate e capacitamos sua equipe (Vigias, Trabalhadores Autorizados e Supervisores de Entrada)."
  },
  {
    id: "nr-34",
    number: "34",
    title: "Condições e Meio Ambiente de Trabalho na Indústria da Construção e Reparação Naval",
    category: "Risco Especial",
    shortDescription: "Requisitos de segurança e saúde para estaleiros e manutenção de embarcações.",
    detailedContent: [
      "A NR 34 é desenhada especificamente para os estaleiros que operam a construção, reparo, manutenção e desmanche de navios, reunindo em uma única norma todas as peculiaridades deste nicho industrial de altíssimo risco e confinamento técnico.",
      "Ela cria exigências cruciais para o 'Trabalho a Quente' (soldagem e corte oxiacetilênico) executado no interior do casco dos navios (o qual também configura espaço confinado), onde a mistura de gases, faíscas de solda e restos de tinta geram risco imediato de incêndios difíceis de conter.",
      "Além da obrigatoriedade do monitoramento atmosférico contínuo e das permissões de trabalho (PT), estaleiros com mais de mil funcionários necessitam de viatura de emergência (ambulância) fixa e dedicada integralmente dentro das instalações."
    ],
    imageUrl: getImg(19544248),
    cargaHoraria: "20h (Trabalho a Quente)",
    periodicidade: "Anual (1 ano)",
  },
  {
    id: "nr-35",
    number: "35",
    title: "Trabalho em Altura",
    category: "Risco Especial",
    shortDescription: "Estabelece os requisitos mínimos e as medidas de proteção para o trabalho em altura.",
    detailedContent: [
      "A NR 35 rege as normas para toda e qualquer atividade executada acima de 2,0 metros do nível inferior (chão, laje ou plataforma) e que apresente risco de queda. Esta norma é central na prevenção do tipo de acidente que mais causa mortes na construção e manutenção predial/industrial.",
      "Todo trabalho em altura deve ser precedido de Análise de Risco. Os trabalhos não rotineiros devem ser previamente autorizados por Permissão de Trabalho, conforme os requisitos da NR-35. O Sistema de Proteção Individual contra Quedas (SPIQ) deve ser selecionado conforme a Análise de Risco, tarefa, fator de queda e sistema de ancoragem, e o equipamento deve sempre estar conectado a pontos de ancoragem (linhas de vida) com capacidade de carga atestada por profissional legalmente habilitado.",
      "A aptidão clínica deve ser avaliada conforme a NR-07, considerando condições de saúde que possam causar mal súbito ou queda e os fatores psicossociais pertinentes, sendo a aptidão consignada no ASO. O trabalhador deve portar o certificado do treinamento teórico e prático (validade bianual)."
    ],
    imageUrl: getImg(8961260),
    possuiTreinamentoObrigatorio: true,
    treinamentos: [
      {
        nome: "Trabalho em Altura",
        publico: "Trabalhador autorizado",
        cargaInicial: "8h",
        cargaPeriodica: "8h",
        periodicidade: "2 anos",
        modalidade: "Presencial (conforme Portaria MTE nº 1.259/2026)",
        observacao: "Treinamento eventual também deve ser realizado nas situações previstas na NR-01 e NR-35."
      }
    ],
    servicePitch: "Elaboramos Análises de Risco específicas para trabalhos em altura, definimos e testamos pontos de ancoragem e ministramos o treinamento obrigatório focado na realidade da sua estrutura."
  },
  {
    id: "nr-36",
    number: "36",
    title: "Segurança e Saúde no Trabalho em Empresas de Abate e Processamento de Carnes e Derivados",
    category: "Risco Especial",
    shortDescription: "Diretrizes ergonômicas e de segurança para frigoríficos e atividades afins.",
    detailedContent: [
      "Criada para frear o altíssimo índice de doenças ocupacionais e lesões na indústria frigorífica brasileira, a NR 36 aborda as condições ambientais extremas que envolvem frio excessivo, umidade, ruído contínuo e, principalmente, a repetitividade (LER/DORT) aliada ao uso de ferramentas cortantes afiadas.",
      "A norma inova exigindo o 'rodízio de atividades' obrigatório entre os funcionários das linhas de desossa e cortes, impedindo que os tendões e articulações dos trabalhadores sejam forçados no mesmo movimento mecânico por 8 horas seguidas.",
      "A legislação também dita de forma rigorosa as pausas de recuperação térmica e muscular: dependendo da função, o trabalhador que atua em ambientes artificialmente frios pode precisar de 20 minutos de pausa a cada 1 hora e 40 minutos de operação contínua."
    ],
    imageUrl: getImg(19544248),
    cargaHoraria: "4h a 16h",
    periodicidade: "Admissional / Anual",
  },
  {
    id: "nr-37",
    number: "37",
    title: "Segurança e Saúde em Plataformas de Petróleo",
    category: "Risco Especial",
    shortDescription: "Normas de proteção para os trabalhadores embarcados em plataformas offshore.",
    detailedContent: [
      "A NR 37 é focada no setor 'offshore', operando no meio do oceano para a extração ou perfuração de hidrocarbonetos. Plataformas possuem riscos concentrados de grandes proporções (blowouts, explosões de gases altamente pressurizados) somados à impossibilidade de evacuação imediata para hospitais de terra.",
      "As instalações são equipadas com alarmes sofisticados, sistemas de dilúvio (combate a incêndio autônomo), detectores de fumaça, gás H2S e módulos de habitabilidade projetados para suportar impactos iniciais e manter o fogo isolado enquanto a tripulação acessa as baleeiras salva-vidas.",
      "Nenhum profissional pode atuar ou sequer embarcar nessas estruturas (geralmente através de operações por helicóptero) sem concluir as capacitações teóricas e práticas de sobrevivência no mar, combate a incêndios (curso CBSP) e as avaliações de aptidão física e psicológica estipuladas pela Agência Nacional do Petróleo e pela Marinha do Brasil."
    ],
    imageUrl: getImg(8961146),
    cargaHoraria: "6h a 40h",
    periodicidade: "Bienal (2 anos)",
  },
  {
    id: "nr-38",
    number: "38",
    title: "Segurança e Saúde no Trabalho nas Atividades de Limpeza Urbana e Manejo de Resíduos Sólidos",
    category: "Risco Especial",
    shortDescription: "Prevenção de riscos para garis, coletores e demais trabalhadores da limpeza urbana.",
    detailedContent: [
      "A norma mais recente do Ministério do Trabalho e Emprego atende à categoria essencial e historicamente precarizada dos trabalhadores de limpeza urbana (garis), coleta de lixo hospitalar/domiciliar, varrição de ruas e operação de aterros sanitários e usinas de reciclagem.",
      "Ela detalha melhorias obrigatórias no design dos estribos (plataformas de apoio onde os coletores viajam no caminhão compactador) garantindo alças antiderrapantes, botões de parada de emergência e regras sobre o momento em que os trabalhadores podem embarcar ou saltar do veículo em movimento.",
      "A NR 38 também é incisiva quanto ao fornecimento de luvas com certificação anticorte para proteger as mãos contra vidros quebrados e agulhas escondidas nos sacos de lixo (uma das maiores fontes de acidentes da categoria), bem como regras sobre pontos de apoio durante as longas rotas das ruas, permitindo aos funcionários o acesso a hidratação, banheiros e locais de pausa abrigados do sol e da chuva."
    ],
    imageUrl: getImg(8960942),
    cargaHoraria: "4h a 8h",
    periodicidade: "Anual (1 ano)",
  }
];