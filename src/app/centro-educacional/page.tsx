import Link from "next/link";
import { ArrowRightIcon, ShieldIcon, HeartPulseIcon, HelmetIcon, SearchCheckIcon } from "@/components/icons";
import Reveal from "@/components/Reveal";

const categories = [
  {
    title: "Normas Regulamentadoras",
    description: "Acesse a lista completa de NRs e entenda a aplicação de cada norma.",
    href: "/nrs",
    icon: ShieldIcon,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Segurança do Trabalho",
    description: "Guia completo sobre práticas de prevenção e gestão de riscos no ambiente laboral.",
    href: "/centro-educacional/seguranca",
    icon: HelmetIcon,
    color: "bg-orange-50 text-orange-600",
  },
  {
    title: "Saúde Ocupacional",
    description: "Informações sobre PCMSO, exames médicos e promoção da saúde do trabalhador.",
    href: "/centro-educacional/saude",
    icon: HeartPulseIcon,
    color: "bg-red-50 text-red-600",
  },
  {
    title: "Prevenção de Acidentes",
    description: "Métodos e ferramentas para a eliminação e controle de riscos críticos.",
    href: "/centro-educacional/prevencao",
    icon: SearchCheckIcon,
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Riscos Ocupacionais",
    description: "Entenda a classificação de riscos físicos, químicos, biológicos, ergonômicos e de acidentes.",
    href: "/centro-educacional/riscos",
    icon: ShieldIcon,
    color: "bg-yellow-50 text-yellow-600",
  },
  {
    title: "Equipamentos de Proteção",
    description: "Tudo sobre a seleção, uso e gestão de EPIs e EPCs conforme a NR 06.",
    href: "/centro-educacional/epis",
    icon: HelmetIcon,
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    title: "Gestão de Segurança",
    description: "Sistemas de gestão, auditorias e indicadores de performance em SMS.",
    href: "/centro-educacional/gestao",
    icon: SearchCheckIcon,
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "Legislação e Normas",
    description: "Acompanhe as atualizações legislativas e normas técnicas da ABNT e Ministério do Trabalho.",
    href: "/centro-educacional/legislacao",
    icon: ShieldIcon,
    color: "bg-slate-50 text-slate-600",
  },
];

export default function CentroInformacoesPage() {
  return (
    <>
      <section className="relative flex min-h-[50vh] items-center overflow-hidden bg-navy-deep py-12 lg:py-16 text-white">
        <div className="grid-pattern absolute inset-0 opacity-30" />
        <div className="container-fv relative w-full">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow text-brand-300">Conhecimento Técnico</span>
            <h1 className="mt-2 text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
              Centro de Informações em Segurança do Trabalho
            </h1>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-white/80 line-clamp-2 sm:line-clamp-none">
              Consulte informações, normas e conteúdos relacionados à Segurança e Saúde no Trabalho em um só lugar.
            </p>
            
            <div className="mt-5 relative max-w-2xl mx-auto">
              <div className="relative flex items-center">
                <input 
                  type="text" 
                  placeholder="Pesquise por uma NR, tema ou assunto..." 
                  className="field w-full py-3 pl-5 pr-28 text-sm text-navy shadow-xl focus:ring-brand-500"
                />
                <button className="absolute right-1.5 btn btn-primary h-9 px-4 text-xs sm:text-sm">
                  Pesquisar
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </button>
              </div>
              <p className="mt-2 text-xs text-white/60 text-center">
                Dica: tente pesquisar por &quot;NR 18&quot;, &quot;PGR&quot; ou &quot;EPIs&quot;
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface pt-10 pb-20 lg:pt-14 lg:pb-28">
        <div className="container-fv">
          <Reveal className="mb-8 sm:mb-12 text-center max-w-2xl mx-auto">
            <span className="eyebrow">Áreas de Conhecimento</span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              O que você deseja consultar?
            </h2>
            <p className="mt-4 text-ink leading-relaxed">
              Navegue pelas nossas categorias especializadas e encontre a informação técnica de que precisa para a sua empresa ou estudo.
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat, idx) => (
              <Reveal key={cat.title} delay={idx * 80} as="article">
                <Link href={cat.href} className="card group h-full p-8 transition-all hover:-translate-y-2 hover:shadow-card flex flex-col">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${cat.color} mb-6 transition-transform group-hover:scale-110`}>
                    <cat.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-brand-600 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink mb-8 flex-grow">
                    {cat.description}
                  </p>
                  <Link href={cat.href} className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 group-hover:gap-3 transition-all">
                    Acessar conteúdo
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28 border-t border-brand-100">
        <div className="container-fv">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-navy p-8 sm:p-16 text-center text-white">
              <div className="grid-pattern absolute inset-0 opacity-20" />
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold sm:text-4xl mb-6">
                  Precisa de ajuda para implementar essas normas na sua empresa?
                </h2>
                <p className="text-lg text-white/80 mb-10 leading-relaxed">
                  A teoria é fundamental, mas a prática exige rigor técnico. A FVelloso transforma a complexidade das NRs em processos simples e seguros para a sua operação.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link href="/orcamento" className="btn btn-primary bg-white !text-brand-700 !bg-none">
                    Solicitar Consultoria Técnica
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                  <Link href="/contato" className="btn btn-ghost-light">
                    Falar com Especialista
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
