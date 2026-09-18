"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRightIcon, ShieldIcon, SearchCheckIcon } from "@/components/icons";
import Reveal from "@/components/Reveal";

import { nrsDatabase as NRs } from "@/lib/nrs";

const categories = ["Todas", "Gestão", "Organização", "Proteção", "Saúde", "Higiene", "Risco Especial"];

const normalizeText = (text: string) => 
  text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

export default function NrsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas");

  const filteredNRs = useMemo(() => {
    const normalizedQuery = normalizeText(searchQuery);
    return NRs.filter((nr) => {
      const matchesSearch =
        normalizeText(nr.number).includes(normalizedQuery) ||
        normalizeText(nr.title).includes(normalizedQuery) ||
        normalizeText(nr.shortDescription).includes(normalizedQuery);
      
      const matchesCategory = selectedCategory === "Todas" || nr.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <>
      <section className="relative overflow-hidden bg-navy-deep py-8 lg:py-10 text-white max-h-[450px]">
        <div className="grid-pattern absolute inset-0 opacity-30" />
        <div className="container-fv relative w-full">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow text-brand-300">Legislação Técnica</span>
            <h1 className="mt-2 text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
              Normas Regulamentadoras
            </h1>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-white/80 line-clamp-2 sm:line-clamp-none">
              Consulte as Normas Regulamentadoras relacionadas à Segurança e Saúde no Trabalho. 
              Essenciais para a conformidade legal e proteção do trabalhador.
            </p>
            
            <div className="mt-5 relative max-w-xl mx-auto">
              <div className="relative flex items-center">
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Pesquisar nas NRs... (ex: NR 18)" 
                  className="field w-full py-3 pl-5 pr-28 text-sm text-navy shadow-xl focus:ring-brand-500"
                />
                <button className="absolute right-1.5 btn btn-primary h-9 px-4 text-xs sm:text-sm">
                  Buscar
                  <SearchCheckIcon className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface pt-10 pb-20 lg:pt-14 lg:pb-28">
        <div className="container-fv">
          <Reveal className="mb-8 flex flex-col sm:flex-row justify-between items-center gap-6">
            <div>
              <h2 className="text-3xl font-bold">Listagem de Normas</h2>
              <p className="text-ink mt-2">Encontre a norma específica para a sua atividade.</p>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 w-full sm:w-auto">
              {categories.map((cat) => (
                <button 
                  key={cat} 
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition whitespace-nowrap ${
                    cat === selectedCategory ? "bg-brand-600 text-white" : "bg-white text-navy hover:bg-brand-100 border border-brand-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredNRs.length > 0 ? (
              filteredNRs.map((nr, idx) => (
              <Reveal key={nr.id} delay={idx * 50} as="article">
                <Link href={`/nrs/${nr.id}`} className="card group p-6 h-full transition-all hover:-translate-y-2 hover:shadow-card flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-2xl font-extrabold text-brand-600">NR {nr.number}</span>
                    <span className="px-2 py-1 rounded-md bg-brand-50 text-brand-700 text-[0.65rem] font-bold uppercase tracking-widest">
                      {nr.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold leading-tight mb-3 group-hover:text-brand-600 transition-colors">
                    {nr.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink mb-6 flex-grow">
                    {nr.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 group-hover:gap-3 transition-all">
                    Ver Detalhes da Norma
                    <ArrowRightIcon className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            ))
            ) : (
              <div className="col-span-full py-12 text-center">
                <p className="text-lg text-ink font-semibold">Nenhuma norma encontrada para os filtros aplicados.</p>
                <button 
                  onClick={() => { setSearchQuery(""); setSelectedCategory("Todas"); }}
                  className="mt-4 btn btn-primary"
                >
                  Limpar filtros
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28 border-t border-brand-100">
        <div className="container-fv">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-navy p-8 sm:p-16 text-center text-white">
              <div className="grid-pattern absolute inset-0 opacity-20" />
              <div className="relative max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold sm:text-4xl mb-6">
                  Dúvidas sobre a aplicação de alguma dessas normas?
                </h2>
                <p className="text-lg text-white/80 mb-10 leading-relaxed">
                  Interpretar a lei é fácil, aplicar no canteiro ou na fábrica é o desafio. A FVelloso oferece suporte técnico especializado para a implementação correta de todas as NRs.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link href="/orcamento" className="btn btn-primary bg-white !text-brand-700 !bg-none">
                    Consultoria para NRs
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                  <Link href="/assistente-ia" className="btn btn-ghost-light">
                    Perguntar ao Assistente
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