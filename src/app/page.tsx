import Image from "next/image";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";
import InstagramEmbed from "@/components/InstagramEmbed";
import InstagramCarousel from "@/components/InstagramCarousel";
import Reveal from "@/components/Reveal";
import StatsBand from "@/components/StatsBand";
import {
  ArrowRightIcon,
  CheckIcon,
  
  ShieldIcon,
  serviceIcons,
} from "@/components/icons";
import { getSiteContent } from "@/lib/content";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const content = await getSiteContent();
  const { hero, about, services, stats, contact, instagramPosts } =
    content;

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-navy-deep text-white">
        <Image
          src={hero.image}
          alt={hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.28]"
        />
        <div className="absolute inset-0 bg-navy-deep/88" />
        <div className="grid-pattern absolute inset-0 opacity-50" />

        <div className="container-fv relative grid items-center gap-12 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:py-28">
          <div>
            <Reveal delay={80}>
              <h1 className="font-[family-name:var(--font-display)] text-4xl font-extrabold leading-[1.08] text-white text-balance sm:text-5xl lg:text-[3.4rem]">
                {hero.title}{" "}
                <span className="bg-gradient-to-r from-brand-200 to-brand-400 bg-clip-text text-transparent">
                  {hero.highlight}
                </span>
              </h1>
            </Reveal>

            <Reveal delay={150}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
                {hero.subtitle}
              </p>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/orcamento" className="btn btn-primary">
                  Solicitar Orçamento
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <ul className="mt-10 flex flex-wrap gap-2.5">
                {hero.badges.map((badge) => (
                  <li
                    key={badge}
                    className="rounded-full border border-white/15 bg-white/[0.07] px-3.5 py-1.5 text-xs font-semibold text-white/85"
                  >
                    {badge}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="relative rounded-3xl border border-white/15 bg-white/[0.08] p-7 backdrop-blur-md sm:p-8">
              <h2 className="text-xl font-bold text-white">
                Por que escolher a FVelloso?
              </h2>
              <ul className="mt-6 space-y-4">
                {[
                  "Equipe técnica com vivência real de canteiro e indústria",
                  "Documentação legal pronta para auditorias e eSocial",
                  "Treinamentos práticos com certificação e controle de validade",
                  "Relatórios de fiscalização com evidências fotográficas",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-white/85">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-400/25 text-brand-200">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-7 rounded-2xl bg-white/10 p-4 text-sm">
                <p className="font-semibold text-white">
                  Diagnóstico inicial sem custo
                </p>
                <p className="mt-1 text-white/70">
                  Avaliamos o cenário atual da sua empresa e indicamos as
                  prioridades de adequação.
                </p>
                <Link
                  href="/orcamento"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-200 transition hover:text-white"
                >
                  Quero meu diagnóstico
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SEÇÃO 2 — SOBRE A EMPRESA + PERFIL & PUBLICAÇÃO DO INSTAGRAM */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="container-fv grid items-start gap-10 lg:grid-cols-12">
          {/* Apresentação + Card de Perfil do Instagram */}
          <Reveal className="flex flex-col gap-6 lg:col-span-6">
            <div>
              <span className="eyebrow">Acompanhe nosso trabalho</span>
              <h2 className="mt-3 text-3xl font-bold text-balance sm:text-4xl">
                {about.title}
              </h2>
              <p className="mt-5 text-base font-medium leading-relaxed text-ink-strong">
                {about.lead}
              </p>
              <p className="mt-4 text-base leading-relaxed">
                {about.paragraphs[0]}
              </p>
            </div>

            {/* Card oficial do Perfil do Instagram */}
            <div className="card overflow-hidden border border-brand-100 bg-white p-6 shadow-soft">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] p-0.5">
                    <span className="flex h-full w-full items-center justify-center rounded-full bg-white font-[family-name:var(--font-display)] text-lg font-extrabold text-navy">
                      FV
                    </span>
                  </div>
                  <div>
                    <a
                      href="https://www.instagram.com/fvelloso.sms/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-bold text-navy hover:text-brand-600"
                    >
                      @fvelloso.sms
                      <span className="inline-block rounded-full bg-brand-50 px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-brand-600">
                        Perfil Oficial
                      </span>
                    </a>
                    <p className="text-xs text-ink/80">
                      FVelloso · Consultoria em SMS
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.instagram.com/fvelloso.sms/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center h-10 gap-1.5 rounded-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] px-4 text-xs font-bold text-white shadow-sm transition hover:opacity-95"
                >
                  Seguir no Instagram
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </a>
              </div>

              <p className="mt-4 text-xs leading-relaxed text-ink">
                Consultoria em Segurança, Meio Ambiente e Saúde · Treinamentos NR
                06, NR 12 e NR 18 · PGR &amp; PCMSO · Fiscalização em obras e
                indústrias.
              </p>
            </div>
          </Reveal>

          {/* Caixa de Publicação do Instagram Embedada em Carrossel */}
          <Reveal delay={120} className="lg:col-span-6">
            <InstagramCarousel posts={instagramPosts || []} />
          </Reveal>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="solucoes" className="scroll-mt-28 bg-white py-20 lg:py-28">
        <div className="container-fv">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Nossas soluções</span>
            <h2 className="mt-3 text-3xl font-bold text-balance sm:text-4xl">
              Serviços completos de Segurança, Meio Ambiente e Saúde
            </h2>
            <p className="mt-4 text-base leading-relaxed">
              Do diagnóstico à execução em campo, cuidamos de toda a jornada de
              conformidade da sua empresa.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {services.map((service, index) => {
              const Icon = serviceIcons[service.slug] ?? ShieldIcon;
              return (
                <Reveal
                  key={service.slug}
                  delay={index * 90}
                  as="article"
                  className="group"
                >
                  <div
                    id={service.slug}
                    className="card flex h-full scroll-mt-28 flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card"
                  >
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        width={900}
                        height={700}
                        sizes="(max-width: 768px) 100vw, 45vw"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/75 to-transparent" />
                      <span className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 text-brand-600 shadow-lg">
                        <Icon className="h-6 w-6" />
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="text-xl font-bold">{service.title}</h3>
                      <p className="mt-2.5 text-sm leading-relaxed">
                        {service.short}
                      </p>
                      <ul className="mt-4 space-y-2">
                        {service.bullets.slice(0, 3).map((bullet) => (
                          <li
                            key={bullet}
                            className="flex gap-2.5 text-sm text-ink"
                          >
                            <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={`/orcamento?servico=${encodeURIComponent(
                          service.title,
                        )}`}
                        className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-brand-600 transition hover:gap-2.5 hover:text-brand-700"
                      >
                        Solicitar proposta
                        <ArrowRightIcon className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* NÚMEROS */}
      <section className="relative overflow-hidden bg-navy py-16 lg:py-20">
        <div className="grid-pattern absolute inset-0 opacity-60" />
        <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-brand-500/25 blur-3xl" />
        <div className="container-fv relative">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-300">
              Credibilidade
            </span>
            <h2 className="mt-3 text-3xl font-bold text-white text-balance sm:text-4xl">
              Números que traduzem 25 anos de estrada
            </h2>
          </Reveal>
          <StatsBand stats={stats} />
        </div>
      </section>



      {/* CONTATO */}
      <ContactSection contact={contact} />
    </>
  );
}
