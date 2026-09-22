import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import {
  CheckIcon,
  ClockIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  ShieldIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { getSiteContent } from "@/lib/content";
import { serviceOptions, whatsappLink } from "@/lib/site-content";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Solicitar Orçamento",
  description:
    "Peça um orçamento de consultoria em SMS, treinamentos NR, PGR, PCMSO ou fiscalização de segurança. Resposta em até 1 dia útil.",
  alternates: { canonical: "/orcamento" },
};

const steps = [
  {
    title: "Você envia o formulário",
    text: "Conte sobre a operação, o porte da equipe e o prazo desejado.",
  },
  {
    title: "Fazemos o diagnóstico",
    text: "Nossa equipe técnica analisa o cenário e tira as dúvidas por telefone ou WhatsApp.",
  },
  {
    title: "Você recebe a proposta",
    text: "Escopo, cronograma e investimento detalhados em até 1 dia útil.",
  },
];

export default async function OrcamentoPage({
  searchParams,
}: {
  searchParams: Promise<{ servico?: string }>;
}) {
  const [content, params] = await Promise.all([
    getSiteContent(),
    searchParams,
  ]);
  const { contact } = content;

  const requested = params.servico ?? "";
  const defaultService = serviceOptions.includes(requested) ? requested : "";

  return (
    <>
      <section className="relative flex min-h-[50vh] items-center overflow-hidden bg-navy-deep py-12 lg:py-16 text-white">
        <div className="grid-pattern absolute inset-0 opacity-50" />
        <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-brand-500/25 blur-3xl" />
        <div className="container-fv relative w-full">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow text-brand-300">Orçamento sem compromisso</span>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Solicite sua proposta técnica
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-white/80">
              Preencha os dados abaixo e receba um orçamento personalizado para
              consultoria, treinamentos NR, PGR/PCMSO ou fiscalização SMS.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface pt-8 pb-16 lg:pt-12 lg:pb-24">
        <div className="container-fv grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <Reveal>
            <ContactForm
              source="orcamento"
              variant="full"
              serviceOptions={serviceOptions}
              defaultService={defaultService}
            />
          </Reveal>

          <Reveal delay={120} className="flex flex-col gap-5">
            <div className="card p-7">
              <h2 className="text-lg font-bold">Contato direto</h2>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex gap-3">
                  <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <span>
                    <span className="block text-[0.7rem] font-bold uppercase tracking-[0.14em] text-brand-600">
                      Telefone
                    </span>
                    <a
                      href={`tel:${contact.phoneHref}`}
                      className="font-semibold text-navy hover:text-brand-600"
                    >
                      {contact.phone}
                    </a>
                  </span>
                </li>
                <li className="flex gap-3">
                  <WhatsAppIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <span>
                    <span className="block text-[0.7rem] font-bold uppercase tracking-[0.14em] text-brand-600">
                      WhatsApp
                    </span>
                    <a
                      href={whatsappLink(
                        contact,
                        "Olá! Gostaria de solicitar um orçamento de SMS com a FVelloso.",
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-navy hover:text-brand-600"
                    >
                      {contact.whatsapp}
                    </a>
                  </span>
                </li>
                <li className="flex gap-3">
                  <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <span>
                    <span className="block text-[0.7rem] font-bold uppercase tracking-[0.14em] text-brand-600">
                      E-mail
                    </span>
                    <a
                      href={`mailto:${contact.email}`}
                      className="font-semibold break-all text-navy hover:text-brand-600"
                    >
                      {contact.email}
                    </a>
                  </span>
                </li>
                <li className="flex gap-3">
                  <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <span>
                    <span className="block text-[0.7rem] font-bold uppercase tracking-[0.14em] text-brand-600">
                      Endereço
                    </span>
                    <span className="font-semibold leading-relaxed text-navy">
                      {contact.addressLine1}
                      <br />
                      {contact.addressLine2}
                    </span>
                  </span>
                </li>
                <li className="flex gap-3">
                  <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <span>
                    <span className="block text-[0.7rem] font-bold uppercase tracking-[0.14em] text-brand-600">
                      Horário
                    </span>
                    <span className="font-semibold text-navy">
                      {contact.hours}
                    </span>
                  </span>
                </li>
              </ul>
            </div>

            <div className="card p-7">
              <h2 className="text-lg font-bold">Como funciona</h2>
              <ol className="mt-5 space-y-5">
                {steps.map((step, index) => (
                  <li key={step.title} className="flex gap-3.5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <span>
                      <span className="block text-sm font-bold text-navy">
                        {step.title}
                      </span>
                      <span className="mt-1 block text-sm leading-relaxed text-ink">
                        {step.text}
                      </span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-2xl bg-navy p-7 text-white">
              <h2 className="text-lg font-bold text-white">
                Atendemos em todo o Brasil
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm text-white/80">
                {[
                  "Construtoras e empreiteiras",
                  "Indústrias e plantas fabris",
                  "Órgãos públicos e gestores de obra",
                  "Condomínios e facilities",
                ].map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
