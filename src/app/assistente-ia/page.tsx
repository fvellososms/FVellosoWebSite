import Reveal from "@/components/Reveal";
import { ArrowRightIcon } from "@/components/icons";
import Link from "next/link";

export const metadata = {
  title: "Assistente de IA | FVelloso",
  description: "Tire suas dúvidas sobre NRs e segurança do trabalho com nossa inteligência artificial.",
};

export default function AssistenteIAPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-deep py-8 lg:py-10 text-white max-h-[450px]">
        <div className="grid-pattern absolute inset-0 opacity-30" />
        <div className="container-fv relative w-full">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow text-brand-300">Inteligência Artificial</span>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Assistente de IA
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-white/80">
              Tire suas dúvidas sobre Normas Regulamentadoras, eSocial e processos de segurança do trabalho de forma rápida e inteligente.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface pt-10 pb-20 lg:pt-14 lg:pb-28">
        <div className="container-fv">
          <Reveal className="mx-auto max-w-4xl text-center">
            <div className="card p-12 bg-white shadow-xl flex flex-col items-center border border-brand-100">
              <div className="w-20 h-20 bg-brand-50 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🤖</span>
              </div>
              <h2 className="text-2xl font-bold text-navy mb-4">Em Desenvolvimento</h2>
              <p className="text-ink mb-8 max-w-xl mx-auto">
                Nosso Assistente Especializado em Segurança do Trabalho está sendo treinado com as diretrizes e legislações mais atualizadas. Em breve você poderá interagir e tirar suas dúvidas em tempo real!
              </p>
              <Link href="/" className="btn btn-primary">
                Voltar ao Início
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

