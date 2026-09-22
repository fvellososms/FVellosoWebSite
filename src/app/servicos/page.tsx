import { getSiteContent } from "@/lib/content";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { CheckIcon, ShieldIcon, serviceIcons } from "@/components/icons";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

export const metadata = {
  title: "Serviços | FVelloso",
  description: "Conheça nossas soluções completas em Segurança, Meio Ambiente e Saúde.",
};

export default async function ServicosPage() {
  const { services } = await getSiteContent();

  // Serviços adicionados manualmente conforme solicitado, mantendo a exata estrutura do CMS
  const extraServices = [
    {
      slug: "guia-seguranca",
      title: "Guia Completo de Segurança",
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
    "pgr-pcmso": "Elaboração de PGR",
    "fiscalizacao-sms": "Fiscalização SMS em obra",
    "guia-seguranca": "Guia Completo de Segurança",
    "solucoes-tecnologicas": "Soluções Tecnológicas",
  };

  // Unindo os serviços do CMS com os novos serviços fixos
  const allServices = [...services, ...extraServices];

  return (
    <>
      <section className="relative flex min-h-[50vh] items-center overflow-hidden bg-navy-deep py-12 lg:py-16 text-white">
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
          <div className="grid gap-10 md:grid-cols-2">
            {allServices.map((service, index) => {
              // Se não encontrar um ícone específico no objeto serviceIcons, usa o ShieldIcon como fallback (ideal para os novos)
              const Icon = serviceIcons[service.slug as keyof typeof serviceIcons] ?? ShieldIcon;
              const targetOption = serviceOptionMap[service.slug] ?? service.title;
              
              return (
                <Reveal
                  key={service.slug}
                  delay={index * 50}
                  as="article"
                  className="group"
                >
                  <div
                    id={service.slug}
                    className="card flex h-full scroll-mt-32 flex-col overflow-hidden border border-brand-100 bg-white transition duration-300 hover:shadow-xl"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 to-transparent" />
                      <div className="absolute bottom-6 left-6 flex items-center gap-4">
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-brand-600 shadow-lg">
                          <Icon className="h-6 w-6" />
                        </span>
                        <h2 className="text-2xl font-bold text-white shadow-sm">{service.title}</h2>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-8">
                      <p className="text-base font-semibold leading-relaxed text-navy mb-6">
                        {service.description}
                      </p>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-brand-600 mb-4">Principais Entregas</h4>
                      <ul className="mb-8 space-y-3">
                        {service.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3 text-sm text-ink">
                            <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-auto pt-6 border-t border-brand-50">
                        <Link 
                          href={`/orcamento?servico=${encodeURIComponent(targetOption)}`} 
                          className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 hover:text-brand-700 transition"
                        >
                          Solicitar orçamento para este serviço
                          <ArrowRightIcon className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}