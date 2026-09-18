import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRightIcon, ShieldIcon } from "@/components/icons"; // Ajuste os ícones conforme seu projeto
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
      <section className="relative max-h-[450px] w-full overflow-hidden bg-navy-deep py-12 sm:py-16">
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

                <div className="mt-12 pt-8 border-t border-brand-100">
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
            
          </div>
        </div>
      </section>
    </main>
  );
}