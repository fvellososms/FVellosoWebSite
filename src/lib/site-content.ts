export type ContactInfo = {
  phone: string;
  phoneHref: string;
  whatsapp: string;
  whatsappNumber: string;
  whatsappMessage: string;
  email: string;
  addressLine1: string;
  addressLine2: string;
  hours: string;
  mapQuery: string;
  instagram: string;
  linkedin: string;
};

export type ServiceItem = {
  slug: string;
  title: string;
  short: string;
  description: string;
  bullets: string[];
  image: string;
  imageAlt: string;
};

export type StatItem = {
  value: number;
  suffix: string;
  label: string;
};

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  tag: string;
};

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  text: string;
};

export type SiteContent = {
  company: {
    name: string;
    tagline: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    highlight: string;
    subtitle: string;
    image: string;
    imageAlt: string;
    badges: string[];
  };
  about: {
    eyebrow: string;
    title: string;
    lead: string;
    paragraphs: string[];
    image: string;
    imageAlt: string;
    pillars: { title: string; text: string }[];
  };
  services: ServiceItem[];
  stats: StatItem[];
  gallery: GalleryItem[];
  testimonials: Testimonial[];
  contact: ContactInfo;
  instagramPosts: string[];
};

const img = (id: number, w = 1200, h = 800) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;

export const defaultContent: SiteContent = {
  instagramPosts: [
    "https://www.instagram.com/fvelloso.sms/p/Dc13UUKke1h/",
    "https://www.instagram.com/fvelloso.sms/reel/Db3A_78R2hd/",
    "https://www.instagram.com/fvelloso.sms/reel/DbdWvCBRUsW/",
    "https://www.instagram.com/fvelloso.sms/p/DaoRaFAD8_E/",
    "https://www.instagram.com/fvelloso.sms/reel/Da0sIoZx1z5/",
  ],
  company: {
    name: "FVelloso",
    tagline: "Consultoria em SMS",
    description:
      "Consultoria em Segurança, Meio Ambiente e Saúde com mais de 25 anos de atuação em canteiros de obra e ambientes industriais.",
  },
  hero: {
    eyebrow: "+25 anos de experiência em SMS",
    title: "Segurança do trabalho que protege pessoas e",
    highlight: "viabiliza suas obras",
    subtitle:
      "Consultoria, treinamentos normativos, PGR/PCMSO e fiscalização SMS para construtoras e indústrias que não abrem mão de conformidade legal e ambientes seguros.",
    image: img(8961260, 1600, 1100),
    imageAlt:
      "Engenheiros de segurança com EPIs analisando o planejamento em canteiro de obras",
    badges: [
      "NR 05 · CIPA",
      "NR 06 · EPI",
      "NR 10 · Eletricidade",
      "NR 11 · Transporte e Movimentação",
      "NR 12 · Máquinas e Equipamentos",
      "NR 16 · Atividades Perigosas",
      "NR 18 · Construção",
      "NR 23 · Proteção Contra Incêndio",
      "NR 33 · Espaços Confinados",
      "NR 35 · Trabalho em Altura",
      "PGR & PCMSO",
    ],
  },
  about: {
    eyebrow: "Quem somos",
    title: "Tradição técnica com visão moderna de gestão de riscos",
    lead:
      "Com mais de 25 anos de mercado, a FVelloso apoia construtoras, empreiteiras e indústrias na construção de ambientes de trabalho seguros, produtivos e em plena conformidade com as Normas Regulamentadoras.",
    paragraphs: [
      "Nossa equipe é formada por engenheiros de segurança, técnicos de SST e profissionais de saúde ocupacional com vivência real de campo. Atuamos lado a lado com o cliente, do planejamento da obra à entrega, traduzindo exigências legais em rotinas simples e aplicáveis.",
      "Mais do que documentos, entregamos cultura de segurança: procedimentos claros, equipes treinadas, indicadores acompanhados e evidências organizadas para auditorias, contratantes e fiscalizações.",
    ],
    image: img(8961146, 1200, 900),
    imageAlt:
      "Profissionais de segurança do trabalho revisando projeto no canteiro de obras",
    pillars: [
      {
        title: "Atuação em campo",
        text: "Consultores presentes no canteiro, não apenas no papel.",
      },
      {
        title: "Conformidade legal",
        text: "Documentação alinhada às NRs e ao eSocial (SST).",
      },
      {
        title: "Resposta rápida",
        text: "Suporte técnico ágil para demandas emergenciais e auditorias.",
      },
    ],
  },
  services: [
    {
      slug: "consultoria-sms",
      title: "Consultoria em SMS",
      short:
        "Diagnóstico, implantação e acompanhamento do sistema de gestão de Segurança, Meio Ambiente e Saúde.",
      description:
        "Estruturamos ou revitalizamos o sistema de gestão SMS da sua empresa: diagnóstico de conformidade, plano de ação priorizado, procedimentos operacionais, análise de risco de tarefas e acompanhamento de indicadores.",
      bullets: [
        "Diagnóstico de conformidade legal (NRs aplicáveis)",
        "Plano de ação com prazos, responsáveis e evidências",
        "Procedimentos, APR/PT e análise de tarefas críticas",
        "Preparação para auditorias de clientes e órgãos",
      ],
      image: img(8961146, 900, 700),
      imageAlt: "Consultores de SMS analisando documentação técnica em obra",
    },
    {
      slug: "treinamentos-nr",
      title: "Treinamentos NR 06 · 08 · 18",
      short:
        "Capacitação prática e certificada das equipes, com conteúdo aderente à realidade de cada frente de serviço.",
      description:
        "Treinamentos presenciais e in company com foco em aplicação prática: uso e conservação de EPI (NR 06), segurança em edificações (NR 08) e condições de segurança na indústria da construção (NR 18), além de integrações e DDS.",
      bullets: [
        "NR 06 — seleção, uso, guarda e higienização de EPIs",
        "NR 08 — edificações, circulação e proteção contra intempéries",
        "NR 18 — condições e meio ambiente de trabalho na construção",
        "Integração de novos colaboradores, DDS e reciclagens",
      ],
      image: img(35082108, 900, 700),
      imageAlt:
        "Turma de trabalhadores com EPIs durante treinamento de segurança do trabalho",
    },
    {
      slug: "pgr-pcmso",
      title: "PGR & PCMSO",
      short:
        "Elaboração, implantação e gestão dos programas obrigatórios de riscos e saúde ocupacional.",
      description:
        "Elaboramos o Programa de Gerenciamento de Riscos (inventário de riscos + plano de ação, NR 01) e o PCMSO (NR 07) de forma integrada, com controle de exames, ASOs, prazos e envio dos eventos de SST ao eSocial.",
      bullets: [
        "Inventário de riscos e plano de ação (PGR / NR 01)",
        "PCMSO com coordenação de médico do trabalho",
        "Controle de exames, ASOs e vencimentos",
        "Suporte aos eventos de SST no eSocial (S-2210/S-2220/S-2240)",
      ],
      image: img(7088834, 900, 700),
      imageAlt:
        "Profissional de saúde ocupacional preenchendo ficha médica de trabalhador",
    },
    {
      slug: "fiscalizacao-sms",
      title: "Fiscalização SMS",
      short:
        "Inspeções periódicas em canteiros e plantas industriais, com relatórios fotográficos e plano de correção.",
      description:
        "Fiscalização SMS terceirizada para contratantes e gestores de obra: rondas programadas, checklists por NR, registro fotográfico das não conformidades, prazos de correção e acompanhamento até o encerramento das pendências.",
      bullets: [
        "Inspeções programadas e não programadas em campo",
        "Checklists por NR e relatório fotográfico",
        "Acompanhamento de empreiteiras e subcontratadas",
        "Indicadores de SMS e reuniões de resultado",
      ],
      image: img(8960991, 900, 700),
      imageAlt:
        "Fiscal de segurança do trabalho com prancheta inspecionando canteiro de obras",
    },
  ],
  stats: [
    { value: 25, suffix: "+", label: "anos de mercado" },
    { value: 480, suffix: "+", label: "empresas atendidas" },
    { value: 3200, suffix: "+", label: "treinamentos realizados" },
    { value: 98, suffix: "%", label: "de conformidade em auditorias" },
  ],
  gallery: [
    {
      src: img(8961260, 900, 700),
      alt: "Equipe de segurança do trabalho em canteiro de obras com EPIs completos",
      caption: "Acompanhamento técnico em canteiro",
      tag: "Obra",
    },
    {
      src: img(35082108, 900, 700),
      alt: "Trabalhadores de indústria participando de treinamento de segurança",
      caption: "Treinamentos NR in company",
      tag: "Treinamento",
    },
    {
      src: img(30592246, 900, 700),
      alt: "Capacete de segurança amarelo apoiado em canteiro de obras",
      caption: "Gestão e conservação de EPIs",
      tag: "NR 06",
    },
    {
      src: img(19544248, 900, 700),
      alt: "Soldadores utilizando equipamentos de proteção individual em fábrica",
      caption: "Trabalhos críticos com proteção adequada",
      tag: "Indústria",
    },
    {
      src: img(8960942, 900, 700),
      alt: "Profissional com capacete e prancheta realizando inspeção de segurança",
      caption: "Inspeções e checklists de SMS",
      tag: "Fiscalização",
    },
    {
      src: img(7088834, 900, 700),
      alt: "Consulta de saúde ocupacional com preenchimento de prontuário",
      caption: "Saúde ocupacional e PCMSO",
      tag: "Saúde",
    },
  ],
  testimonials: [
    {
      name: "Ricardo Menezes",
      role: "Gerente de Obras",
      company: "Construtora Marlin",
      text: "A FVelloso assumiu a fiscalização SMS de três canteiros simultâneos. Em seis meses zeramos as autuações internas do cliente e ganhamos previsibilidade nas auditorias.",
    },
    {
      name: "Patrícia Lemos",
      role: "Coordenadora de RH",
      company: "Metalúrgica Ipê",
      text: "O PGR e o PCMSO foram entregues integrados e com controle de exames em dia. O suporte no eSocial nos poupou muitas dores de cabeça.",
    },
    {
      name: "Anderson Cruz",
      role: "Engenheiro de Segurança",
      company: "Grupo Vertical Engenharia",
      text: "Os treinamentos de NR 18 são práticos e feitos na linguagem da equipe de campo. A adesão dos colaboradores mudou completamente.",
    },
  ],
  contact: {
    phone: "(21) 2516-4217",
    phoneHref: "+552125164217",
    whatsapp: "+55 21 98764-6175",
    whatsappNumber: "5521987646175",
    whatsappMessage:
      "Olá! Vim pelo site da FVelloso e gostaria de falar sobre consultoria em SMS.",
    email: "fvellososms@gmail.com",
    addressLine1: "Av. Rio Branco, nº25 — 19º andar",
    addressLine2: "Centro, Rio de Janeiro — RJ, 20090-003",
    hours: "Segunda a sexta, das 8h às 17h",
    mapQuery: "Av. Rio Branco 25, Centro, Rio de Janeiro - RJ",
    instagram: "https://instagram.com/fvelloso.sms",
    linkedin: "https://www.linkedin.com/in/fabio-velloso-sms/",
  },
};

export const serviceOptions = [
  "Consultoria em SMS",
  "Treinamentos NR 06 / 08 / 18",
  "Elaboração de PGR",
  "Elaboração de PCMSO",
  "Fiscalização SMS em obra",
  "Outro assunto",
];

export function whatsappLink(contact: ContactInfo, message?: string) {
  const text = encodeURIComponent(message ?? contact.whatsappMessage);
  return `https://wa.me/${contact.whatsappNumber}?text=${text}`;
}

type Primitive = string | number | boolean | null | undefined;
type Json = Primitive | Json[] | { [key: string]: Json };

/** Deep merge dos overrides salvos no banco sobre o conteúdo padrão. */
export function mergeContent(overrides: unknown): SiteContent {
  return deepMerge(defaultContent as unknown as Json, overrides as Json) as unknown as SiteContent;
}

function deepMerge(base: Json, patch: Json): Json {
  if (patch === undefined || patch === null) return base;
  if (Array.isArray(patch)) return patch;
  if (typeof patch !== "object") return patch;
  if (typeof base !== "object" || base === null || Array.isArray(base)) {
    return patch;
  }
  const result: { [key: string]: Json } = { ...(base as { [key: string]: Json }) };
  for (const [key, value] of Object.entries(patch as { [key: string]: Json })) {
    result[key] = deepMerge(result[key], value);
  }
  return result;
}
