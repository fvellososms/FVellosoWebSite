import { getSiteContent } from "@/lib/content";
import Reveal from "@/components/Reveal";
import ServicesExplorer from "@/components/ServicesExplorer";

export const metadata = {
  title: "Serviços | FVelloso",
  description: "Conheça nossas soluções completas em Segurança, Meio Ambiente e Saúde.",
};

export default async function ServicosPage() {
  const { services } = await getSiteContent();

  // Serviços adicionados manualmente conforme solicitado, mantendo a exata estrutura do CMS
  const extraServices = [
    {
      slug: "rotas-de-fuga",
      title: "Elaboração de Rotas de Fuga e Sinalização (NR 23)",
      short: "Projeto de saídas de emergência, rotas de fuga e sinalização conforme NR 23 e Corpo de Bombeiros.",
      image: "https://images.pexels.com/photos/8961334/pexels-photo-8961334.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=700",
      imageAlt: "Planta de rota de fuga e sinalização de emergência em edificação",
      description: "Planejamento e dimensionamento técnico de rotas de fuga, saídas de emergência e sinalização de segurança contra incêndio e pânico, conforme a NR 23 e instruções técnicas do Corpo de Bombeiros.",
      bullets: [
        "Mapeamento e cálculo de fluxo para saídas de emergência",
        "Elaboração de plantas de rota de fuga e sinalização de abandono",
        "Especificação de placas fotoluminescentes e iluminação de emergência",
        "Adequação às normas do Corpo de Bombeiros (AVCB / CLCB)",
      ],
    },
    {
      slug: "pae",
      title: "Plano de Atendimento a Emergências (PAE)",
      short: "Procedimentos para resposta rápida a incêndios, vazamentos, sinistros e acidentes.",
      image: "https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=700",
      imageAlt: "Equipamentos de combate a incêndio e prontidão para atendimento a emergências",
      description: "Estruturação de procedimentos técnicos e operacionais para resposta rápida e eficaz a situações de emergência, sinistros, vazamentos ou acidentes em canteiros de obras e indústrias.",
      bullets: [
        "Mapeamento de cenários acidentais e hipóteses críticas",
        "Fluxogramas de acionamento, alarme e comunicação de emergência",
        "Procedimentos para evacuação de área e primeiros socorros",
        "Cronograma e diretrizes para simulados práticos de brigada de emergência",
      ],
    },
    {
      slug: "guia-seguranca",
      title: "Guia Completo de Segurança",
      short: "Documento único com as regras, procedimentos e boas práticas de segurança da sua operação.",
      image: "https://images.pexels.com/photos/30592246/pexels-photo-30592246.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=700",
      imageAlt: "Guia Completo de Segurança do Trabalho",
      description: "Consultoria e estruturação do Guia Completo de Segurança do Trabalho para a sua empresa, assegurando as melhores práticas operacionais e normativas.",
      bullets: [
        "Estruturação de documentação",
        "Aplicação prática das NRs",
        "Boas práticas de mercado",
      ],
    },
    {
      slug: "solucoes-tecnologicas",
      title: "Soluções Tecnológicas",
      short: "Checklists digitais, RDO e painéis para acompanhar a segurança em tempo real.",
      image: "https://images.pexels.com/photos/19544248/pexels-photo-19544248.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=700",
      imageAlt: "Soluções Tecnológicas em SMS",
      description: "Digitalize e otimize a gestão de Segurança do Trabalho da sua empresa com ferramentas modernas para controle em tempo real.",
      bullets: [
        "Sistemas de checklist digitais",
        "Relatório Diário de Obra (RDO)",
        "Dashboard de monitoramento de tarefas",
      ],
    },
  ];

  // Mapeamento dos slugs para as opções de serviço correspondentes no formulário de orçamento
  const serviceOptionMap: Record<string, string> = {
    "consultoria-sms": "Consultoria em SMS",
    "treinamentos-nr": "Treinamentos NR 06 / 08 / 18",
    "pgr-pcmso": "PGR, PCMSO & LTCAT",
    "fiscalizacao-sms": "Fiscalização SMS em obra",
    "rotas-de-fuga": "Elaboração de Rotas de Fuga e Sinalização (NR 23)",
    "pae": "Plano de Atendimento a Emergências (PAE)",
    "guia-seguranca": "Guia Completo de Segurança",
    "solucoes-tecnologicas": "Soluções Tecnológicas",
  };

  // Explicação detalhada exibida no popup "Saiba mais" de cada serviço
  const serviceDetails: Record<string, { about: string; audience: string }> = {
    "consultoria-sms": {
      about:
        "É o apoio técnico para estruturar o sistema de gestão de Segurança, Meio Ambiente e Saúde da empresa. Levantamos quais NRs e exigências legais se aplicam à sua atividade, comparamos com o que já existe e entregamos um plano de ação priorizado, acompanhando a implantação até a empresa estar pronta para auditorias de clientes e da fiscalização.",
      audience:
        "Empresas que precisam organizar ou revisar a gestão de SMS e prestadoras de serviço que precisam atender às exigências de contratantes.",
    },
    "fiscalizacao-sms": {
      about:
        "É a presença de técnicos em campo verificando se as regras de segurança estão sendo cumpridas na prática: uso de EPIs, andaimes, máquinas, trabalhos em altura e documentação das equipes. Cada inspeção gera um relatório fotográfico com os desvios encontrados e os prazos de correção.",
      audience:
        "Obras e frentes de serviço com empreiteiras e subcontratadas, e contratantes que precisam fiscalizar seus terceiros.",
    },
    "pgr-pcmso": {
      about:
        "O PGR (NR 01) identifica os perigos e avalia os riscos de cada função, com um plano de ação para controlá-los. O PCMSO (NR 07) define os exames médicos de cada trabalhador conforme esses riscos e emite os ASOs. O LTCAT comprova a exposição a agentes nocivos para fins previdenciários, e os laudos de insalubridade e periculosidade (NR 15 e 16) definem o direito aos adicionais.",
      audience:
        "Praticamente toda empresa com empregados registrados, já que PGR e PCMSO são obrigatórios (há dispensas específicas para ME e EPP de baixo risco).",
    },
    "treinamentos-nr": {
      about:
        "São as capacitações exigidas pelas Normas Regulamentadoras para que o trabalhador execute sua atividade com segurança. Os treinamentos têm carga horária e conteúdo definidos pela norma, geram certificado e precisam de reciclagem periódica para continuar válidos.",
      audience:
        "Empresas que precisam capacitar novos colaboradores, renovar certificados vencidos ou comprovar treinamentos em auditorias.",
    },
    "rotas-de-fuga": {
      about:
        "É o projeto que define os caminhos seguros para abandonar a edificação em caso de incêndio ou emergência: dimensionamento das saídas, plantas de rota de fuga, placas fotoluminescentes e iluminação de emergência, conforme a NR 23 e as instruções técnicas do Corpo de Bombeiros.",
      audience:
        "Edificações comerciais e industriais, inclusive as que estão em processo de obtenção ou renovação de AVCB / CLCB.",
    },
    pae: {
      about:
        "É o documento que define o que fazer, quem aciona quem e como agir em emergências como incêndios, vazamentos ou acidentes graves. Reúne os cenários possíveis, os fluxos de comunicação, as rotas de evacuação e o cronograma de simulados com a brigada.",
      audience:
        "Indústrias, canteiros de obra e empresas com atividades de risco ou com exigência de PAE por clientes e órgãos ambientais.",
    },
    "guia-seguranca": {
      about:
        "É um material de referência personalizado que reúne, em um só documento, as regras de segurança, os procedimentos e as boas práticas aplicáveis à operação da sua empresa, para orientar gestores e equipes no dia a dia.",
      audience:
        "Empresas que querem padronizar as orientações de segurança e facilitar a integração de novos colaboradores.",
    },
    "solucoes-tecnologicas": {
      about:
        "São ferramentas digitais para registrar e acompanhar a segurança do trabalho em tempo real: checklists de inspeção no celular, Relatório Diário de Obra (RDO) e painéis com indicadores e pendências.",
      audience:
        "Gestores que querem substituir papel e planilhas e acompanhar várias frentes de serviço ao mesmo tempo.",
    },
  };

  // Unindo os serviços e ordenando em ordem alfabética pelos títulos dos cards
  const allServices = [...services, ...extraServices]
    .sort((a, b) => a.title.localeCompare(b.title, "pt-BR"))
    .map((service) => ({
    slug: service.slug,
    title: service.title,
    short: service.short,
    description: service.description,
    bullets: service.bullets,
    image: service.image,
    imageAlt: service.imageAlt,
    about: serviceDetails[service.slug]?.about ?? service.description,
    audience: serviceDetails[service.slug]?.audience ?? "",
    quoteOption: serviceOptionMap[service.slug] ?? service.title,
  }));

  return (
    <>
      <section className="relative overflow-hidden bg-navy-deep py-14 text-white lg:py-20">
        <div className="grid-pattern absolute inset-0 opacity-30" />
        <div className="container-fv relative w-full">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow text-brand-300">Nossas Soluções</span>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Serviços Completos em SMS
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-white/80">
              Do diagnóstico à execução em campo, cuidamos de toda a jornada de conformidade da sua empresa. Explore abaixo tudo o que podemos fazer por você.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface pt-10 pb-20 lg:pt-14 lg:pb-28">
        <div className="container-fv">
          <ServicesExplorer services={allServices} />
        </div>
      </section>
    </>
  );
}
