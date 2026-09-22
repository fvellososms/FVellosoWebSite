import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRightIcon, ShieldIcon, ClockIcon, HourglassIcon } from "@/components/icons";
import { nrsDatabase, nrsWithServices } from "@/lib/nrs";
import Reveal from "@/components/Reveal";

// Tipagem para os parâmetros da URL no Next.js
type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function NRDetailPage({ params }: Props) {
  const { id } = await params;
  // 1. Busca a NR no banco de dados local
  const nr = nrsDatabase.find((item) => item.id === id);

  // 2. Se a NR não existir na base, joga o usuário para a página 404
  if (!nr) {
    notFound();
  }

  // 3. Verifica se esta NR específica tem apelo comercial
  const isServiceOffered = nrsWithServices.includes(nr.number);

  return (
    <main className="bg-surface min-h-screen">
      {/* HERO SECTION - Imagem de fundo com título */}
      <section className="relative flex min-h-[50vh] items-center w-full overflow-hidden bg-navy-deep py-12 sm:py-16 text-white">
        <Image
          src={nr.imageUrl}
          alt={`Ilustração para ${nr.title}`}
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep to-transparent" />
        
        <div className="container-fv relative z-10">
          <Reveal>
            <div className="inline-block px-3 py-1 mb-3 rounded-md bg-brand-600 text-white text-xs sm:text-sm font-bold uppercase tracking-widest">
              {nr.category}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight max-w-4xl">
              NR {nr.number} — {nr.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 mt-5">

              {nr.ultimaAtualizacao && (
                <div className="inline-flex items-center gap-2 rounded-lg bg-white/10 backdrop-blur-md px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-white border border-white/20">
                  <span>Atualizada em {nr.ultimaAtualizacao}</span>
                </div>
              )}
              {nr.cargaHoraria && (
                <div className="inline-flex items-center gap-2 rounded-lg bg-white/10 backdrop-blur-md px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-white border border-white/20">
                  <ClockIcon className="h-4 w-4 text-brand-300" />
                  <span>Carga Horária: {nr.cargaHoraria}</span>
                </div>
              )}
              {nr.periodicidade && (
                <div className="inline-flex items-center gap-2 rounded-lg bg-white/10 backdrop-blur-md px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-white border border-white/20">
                  <HourglassIcon className="h-4 w-4 text-brand-300" />
                  <span>Periodicidade: {nr.periodicidade}</span>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTEÚDO TÉCNICO E DESTAQUE COMERCIAL */}
      <section className="pt-8 pb-16 lg:pt-12 lg:pb-24">
        <div className="container-fv">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Coluna da Esquerda: Textos da NR (Ocupa 7 ou 8 colunas) */}
            <div className={isServiceOffered ? "lg:col-span-7" : "lg:col-span-10 lg:col-start-2"}>
              <Reveal>
                <h2 className="text-2xl font-bold text-navy mb-6">Resumo da Norma</h2>
                <p className="text-lg text-ink font-semibold mb-8 border-l-4 border-brand-500 pl-4">
                  {nr.shortDescription}
                </p>
                
                <div className="space-y-6 text-ink-strong leading-relaxed">
                  {nr.detailedContent.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                {nr.treinamentos && nr.treinamentos.length > 0 && (
                  <div className="mt-12">
                    <h3 className="text-xl font-bold text-navy mb-5">Capacitações Relacionadas</h3>
                    <div className="grid gap-4">
                      {nr.treinamentos.map((treinamento, idx) => (
                        <div key={idx} className="bg-white border border-brand-100 rounded-xl p-5 shadow-sm">
                          <h4 className="font-bold text-brand-600 mb-2">{treinamento.nome}</h4>
                          <div className="grid sm:grid-cols-2 gap-y-2 text-sm text-ink-strong">
                            {treinamento.publico && <p><strong>Público:</strong> {treinamento.publico}</p>}
                            {treinamento.funcao && <p><strong>Função:</strong> {treinamento.funcao}</p>}
                            {treinamento.cargaInicial && <p><strong>Carga Inicial:</strong> {treinamento.cargaInicial}</p>}
                            {treinamento.cargaPeriodica && <p><strong>Carga Periódica:</strong> {treinamento.cargaPeriodica}</p>}
                            {treinamento.periodicidade && <p><strong>Periodicidade:</strong> {treinamento.periodicidade}</p>}
                            {treinamento.modalidade && <p><strong>Modalidade:</strong> {treinamento.modalidade}</p>}
                          </div>
                          {treinamento.observacao && (
                            <p className="mt-3 text-xs text-ink bg-brand-50 p-2 rounded-md border border-brand-100/50">
                              <em>Observação:</em> {treinamento.observacao}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-12 pt-8 border-t border-brand-100 hidden lg:block">
                  <Link href="/nrs" className="btn btn-outline text-sm">
                    Voltar para lista de NRs
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Coluna da Direita: Destaque Comercial (Ocupa 5 colunas). Só renderiza se for serviço da casa */}
            {isServiceOffered && (
              <div className="lg:col-span-5">
                <Reveal delay={150}>
                  <div className="sticky top-28 bg-white border border-brand-100 rounded-2xl p-8 shadow-card">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center">
                        <ShieldIcon className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-bold text-navy">
                        Precisa adequar sua empresa à NR {nr.number}?
                      </h3>
                    </div>
                    
                    <p className="text-ink mb-6 text-sm leading-relaxed">
                      {nr.servicePitch || "A FVelloso possui engenheiros e técnicos especialistas na aplicação prática desta norma. Evite autuações e garanta a segurança da sua equipe com nossa consultoria direta no canteiro ou fábrica."}
                    </p>
                    
                    <div className="space-y-4">
                      {/* O ideal aqui é puxar o link do Whatsapp do seu arquivo defaultContent, mas deixei direto para exemplificar */}
                      <a 
                        href={`https://wa.me/5521998765432?text=Olá! Estava lendo sobre a NR ${nr.number} no site da FVelloso e preciso de consultoria.`}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-primary w-full justify-center"
                      >
                        Falar com Consultor agora
                      </a>
                      <Link href="/orcamento" className="btn btn-ghost w-full justify-center">
                        Solicitar Orçamento formal
                      </Link>
                    </div>
                  </div>
                </Reveal>
              </div>
            )}
            
            <div className="lg:hidden w-full border-t border-brand-100 pt-8 mt-2">
              <Link href="/nrs" className="btn btn-outline w-full justify-center text-sm">
                Voltar para lista de NRs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}