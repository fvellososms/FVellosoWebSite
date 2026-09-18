import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import {
  ArrowRightIcon,
  CertificateIcon,
  CheckIcon,
  CompassIcon,
  EyeIcon,
  TargetIcon,
} from "@/components/icons";
import ClientsCarousel from "@/components/ClientsCarousel";
import { getSiteContent } from "@/lib/content";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Sobre Nós — 25+ anos em Segurança do Trabalho",
  description:
    "Conheça a história da FVelloso: mais de 25 anos de consultoria em SMS, treinamentos normativos, PGR/PCMSO e fiscalização em obras e indústrias.",
  alternates: { canonical: "/sobre" },
};

const timeline = [
  {
    year: "Início",
    title: "Nasce a FVelloso",
    text: "A FVelloso inicia sua trajetória oferecendo soluções especializadas em Saúde, Segurança e Meio Ambiente, construindo uma base técnica voltada à prevenção, à gestão de riscos e à segurança das operações.",
  },

  {
    year: "2012 — 2013",
    title: "Um novo patamar",
    text: "Com a participação nas obras da Rolls-Royce no Rio de Janeiro, ampliamos nossa atuação em grandes empreendimentos industriais e fortalecemos nossa experiência em ambientes de alta complexidade.",
  },

  {
    year: "2012 — 2014",
    title: "Consolidação",
    text: "A atuação na implantação da fábrica da Nissan, em Resende, marcou a consolidação da FVelloso em projetos industriais de grande porte, ampliando nossa responsabilidade na gestão e fiscalização de SMS.",
  },

  {
    year: "2021",
    title: "Experiência além da indústria",
    text: "Nossa expertise avançou para grandes empreendimentos comerciais com a construção do ParkShopping Jacarepaguá, levando nossa experiência em Saúde e Segurança do Trabalho para novos tipos de projeto.",
  },

  {
    year: "2022 — 2024",
    title: "Atuação cada vez mais diversificada",
    text: "Com projetos como a restauração da Torre Empresarial RIOSUL e a expansão da fábrica da Essilor, ampliamos nossa presença em obras de diferentes perfis, unindo experiência industrial, comercial e corporativa.",
  },

  {
    year: "2025 — Hoje",
    title: "Uma nova geração",
    text: "Hoje, seguimos avançando com empreendimentos como a nova fábrica da PETMAX e o ATTO by Pininfarina, aplicando décadas de experiência em projetos industriais e imobiliários de alta relevância.",
  },
];

const values = [
  {
    Icon: TargetIcon,
    title: "Missão",
    text: "Proteger a vida de quem trabalha, oferecendo soluções técnicas de SMS que tornam empresas mais seguras, produtivas e legalmente conformes.",
    highlight: true,
  },
  {
    Icon: EyeIcon,
    title: "Visão",
    text: "Ser reconhecida como a consultoria de referência em Segurança, Meio Ambiente e Saúde para construção civil e indústria no Brasil.",
    highlight: true,
  },
  {
    Icon: CompassIcon,
    title: "Valores",
    text: "Ética e transparência · Rigor técnico · Respeito às pessoas · Presença em campo · Compromisso com prazos · Melhoria contínua.",
    highlight: true,
  },
];

const credentials = [
  "Engenheiros de Segurança do Trabalho registrados no CREA",
  "Técnicos de Segurança do Trabalho com registro no MTE",
  "Médicos do Trabalho responsáveis pelo PCMSO",
  "Instrutores capacitados para NR 06, NR 08, NR 18, NR 33 e NR 35",
  "Metodologia alinhada à NR 01 (PGR) e ao eSocial (SST)",
  "Relatórios técnicos com ART quando aplicável",
];

export default async function SobrePage() {
  const content = await getSiteContent();
  const { about, contact } = content;

  return (
    <>
    {/* Hero Institucional Sobre a FVelloso */}
      <section className="relative flex h-[450px] items-center overflow-hidden bg-navy-deep text-white">
        <div className="grid-pattern absolute inset-0 opacity-30" />
        <div className="container-fv relative w-full">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow text-brand-300">Sobre a FVelloso</span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Mais de 25 anos cuidando de quem constrói e produz
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              {about.lead}
            </p>
          </Reveal>
            </div>
      </section>

      {/* História */}
      <section className="bg-surface pt-6 pb-20 lg:pt-8 lg:pb-28">
        <div className="container-fv grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <span className="eyebrow">Nossa história</span>
            <h2 className="mt-3 text-3xl font-bold text-balance sm:text-4xl">
              {about.title}
            </h2>
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-base leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="mt-8 overflow-hidden rounded-3xl shadow-card">
              <Image
                src={about.image}
                alt={about.imageAlt}
                width={1200}
                height={900}
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ol className="relative space-y-7 border-l-2 border-brand-100 pl-7">
              {timeline.map((item) => (
                <li key={item.year} className="relative">
                  <span className="absolute -left-[2.32rem] top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-brand-200 bg-white">
                    <span className="h-2 w-2 rounded-full bg-brand-500" />
                  </span>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-600">
                    {item.year}
                  </p>
                  <h3 className="mt-1.5 text-lg font-bold">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed">{item.text}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* Carrossel de Clientes */}
      <ClientsCarousel />

      {/* Missão, visão e valores */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-fv">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Nosso norte</span>
            <h2 className="mt-3 text-3xl font-bold text-balance sm:text-4xl">
              Missão, Visão e Valores
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 100} as="article">
                <div className="card h-full p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                    <value.Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed">{value.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe e certificações */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="container-fv grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <span className="eyebrow">Equipe & certificações</span>
            <h2 className="mt-3 text-3xl font-bold text-balance sm:text-4xl">
              Time multidisciplinar, responsabilidade técnica garantida
            </h2>
            <p className="mt-5 text-base leading-relaxed">
              Cada projeto é conduzido por profissionais habilitados e com
              responsabilidade técnica registrada. Isso garante que documentos,
              treinamentos e laudos tenham plena validade legal perante
              auditorias, contratantes e órgãos fiscalizadores.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <ul className="card grid gap-3 p-7">
              {credentials.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-ink">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
              <li className="mt-3 flex items-center gap-3 rounded-2xl bg-brand-50 p-4">
                <CertificateIcon className="h-6 w-6 shrink-0 text-brand-600" />
                <p className="text-xs leading-relaxed text-navy">
                  Emitimos certificados individuais de treinamento com conteúdo
                  programático, carga horária e controle de reciclagem.
                </p>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-white pb-20 lg:pb-28">
        <div className="container-fv">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-navy px-7 py-12 text-center text-white sm:px-12">
              <div className="grid-pattern absolute inset-0 opacity-40" />
              <div className="relative mx-auto max-w-2xl">
                <h2 className="text-3xl font-bold text-white text-balance sm:text-4xl">
                  Pronto para elevar o padrão de segurança da sua operação?
                </h2>
                <p className="mt-4 text-base leading-relaxed text-white/85">
                  Solicite um orçamento e receba uma proposta técnica adequada à
                  realidade da sua obra ou unidade industrial.
                </p>
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link href="/orcamento" className="btn btn-primary bg-white !bg-none !text-brand-700">
                    Solicitar Orçamento
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                  <Link href="/#contato" className="btn btn-ghost-light">
                    Ver dados de contato
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
