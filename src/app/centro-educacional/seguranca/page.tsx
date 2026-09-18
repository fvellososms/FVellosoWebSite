import Link from "next/link";
import {
  ArrowRightIcon,
  ShieldIcon,
  HelmetIcon,
  SearchCheckIcon,
  BookOpenIcon,
  FileTextIcon,
  PlayCircleIcon,
} from "@/components/icons";
import Reveal from "@/components/Reveal";

// Tópicos cobertos pelo guia — reaproveita o mesmo padrão de "bullet com ícone"
// já usado em outras seções do site (ícone colorido + texto curto).
const topicos = [
  {
    title: "Prevenção de riscos",
    description: "Identificação, análise e controle de riscos no ambiente de trabalho.",
    icon: SearchCheckIcon,
  },
  {
    title: "Normas Regulamentadoras",
    description: "Aplicação prática das NRs que regem a segurança do trabalhador.",
    icon: ShieldIcon,
  },
  {
    title: "Equipamentos de Proteção",
    description: "Uso correto de EPIs e EPCs conforme a NR 06.",
    icon: HelmetIcon,
  },
];

// Produtos informativos disponíveis para compra.
// format define o rótulo e a cor do selo (reaproveita o mesmo esquema
// bg-*-50 text-*-600 já usado nos ícones da página do Centro de Informações).
const produtos = [
  {
    formato: "E-book",
    formatoColor: "bg-blue-50 text-blue-600",
    icon: BookOpenIcon,
    title: "Segurança do Trabalho na Prática",
    description:
      "Guia digital com fundamentos, exemplos reais e checklists para aplicar no dia a dia da operação.",
    price: "R$ 49,90",
    href: "/loja/ebook-seguranca-na-pratica",
  },
  {
    formato: "Apostila",
    formatoColor: "bg-orange-50 text-orange-600",
    icon: FileTextIcon,
    title: "NR 12 — Máquinas e Equipamentos",
    description:
      "Material completo sobre segurança em máquinas, com estudos de caso e modelos de laudo.",
    price: "R$ 39,90",
    href: "/loja/apostila-nr12",
  },
  {
    formato: "Apostila",
    formatoColor: "bg-orange-50 text-orange-600",
    icon: FileTextIcon,
    title: "EPIs e EPCs: Seleção e Gestão",
    description:
      "Passo a passo para escolher, treinar e controlar o uso correto de equipamentos de proteção.",
    price: "R$ 34,90",
    href: "/loja/apostila-epis-epcs",
  },
  {
    formato: "PDF",
    formatoColor: "bg-slate-50 text-slate-600",
    icon: FileTextIcon,
    title: "Checklist de Inspeção de Segurança",
    description:
      "Modelo pronto para inspeções periódicas, com campos de não conformidade e plano de ação.",
    price: "R$ 19,90",
    href: "/loja/pdf-checklist-inspecao",
  },
  {
    formato: "Vídeo-aula",
    formatoColor: "bg-purple-50 text-purple-600",
    icon: PlayCircleIcon,
    title: "Curso Completo de Segurança do Trabalho",
    description:
      "Formação em vídeo com módulos sobre prevenção, legislação e gestão de riscos, com certificado.",
    price: "R$ 149,90",
    href: "/loja/curso-seguranca-do-trabalho",
  },
  {
    formato: "Vídeo-aula",
    formatoColor: "bg-purple-50 text-purple-600",
    icon: PlayCircleIcon,
    title: "Prevenção de Acidentes — Módulo Prático",
    description:
      "Aulas focadas em situações reais de campo, com análise de incidentes e ações corretivas.",
    price: "R$ 89,90",
    href: "/loja/curso-prevencao-acidentes",
  },
];

export default function SegurancaDoTrabalhoPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-deep py-8 lg:py-10 text-white max-h-[450px]">
        <div className="grid-pattern absolute inset-0 opacity-30" />
        <div className="container-fv relative">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Link
              href="/centro-educacional"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition-colors"
            >
              ← Voltar ao Centro Educacional
            </Link>
            <span className="eyebrow text-brand-300 mt-4 block">Segurança do Trabalho</span>
            <h1 className="mt-2 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Guia Completo de Segurança do Trabalho
            </h1>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-white/80">
              Práticas de prevenção e gestão de riscos no ambiente laboral, em materiais
              digitais que você consulta quando e onde precisar.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white pt-10 pb-20 lg:pt-14 lg:pb-24">
        <div className="container-fv">
          <Reveal className="mb-14 text-center max-w-2xl mx-auto">
            <span className="eyebrow">O que o guia cobre</span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Conteúdo técnico, direto ao ponto
            </h2>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-3">
            {topicos.map((topico, idx) => (
              <Reveal key={topico.title} delay={idx * 80} as="article">
                <div className="card h-full p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 mb-6">
                    <topico.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{topico.title}</h3>
                  <p className="text-sm leading-relaxed text-ink">{topico.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 lg:py-28">
        <div className="container-fv">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="eyebrow">Materiais para você</span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              E-books, apostilas, PDFs e vídeo-aulas
            </h2>
            <p className="mt-4 text-ink leading-relaxed">
              Conteúdo produzido pela equipe técnica da FVelloso, pronto para aplicar na sua
              empresa ou usar em seus estudos.
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {produtos.map((produto, idx) => (
              <Reveal key={produto.title} delay={idx * 80} as="article">
                <div className="card group h-full p-8 transition-all hover:-translate-y-2 hover:shadow-card flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${produto.formatoColor} transition-transform group-hover:scale-110`}>
                      <produto.icon className="h-7 w-7" />
                    </div>
                    <span className={`rounded-full px-3 py-1 text-xs font-bold ${produto.formatoColor}`}>
                      {produto.formato}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-brand-600 transition-colors">
                    {produto.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink mb-8 flex-grow">
                    {produto.description}
                  </p>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-lg font-extrabold text-navy">{produto.price}</span>
                    <Link href={produto.href} className="btn btn-primary h-11 px-5 text-sm">
                      Comprar
                      <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
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
                  A teoria é fundamental, mas a prática exige rigor técnico. A FVelloso
                  transforma a complexidade das NRs em processos simples e seguros para a
                  sua operação.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link href="/orcamento" className="btn btn-primary bg-white !text-brand-700 !bg-none">
                    Solicitar Consultoria Técnica
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                  <Link href="/#contato" className="btn btn-ghost-light">
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