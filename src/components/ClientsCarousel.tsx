import { useMemo } from "react";
import Image from "next/image";

import imgNorr from "@/assets/images/NorrEnergia.jpeg";
import imgRioSul from "@/assets/images/riosul.jpeg";
import imgTD from "@/assets/images/TD-SUSTENTAVEL-ASSINATURA-HORIZONTAL-COLORIDA-E-BRANCA-min-300x100.webp";
import imgMultiplan from "@/assets/images/multiplan-logo.png";
import imgIvi from "@/assets/images/ivienergia.png";
import imgEnergea from "@/assets/images/energea.png";
import imgEspectro from "@/assets/images/images.png";
import imgSum from "@/assets/images/Design-sem-nome-2024-10-30T155930.358.webp";

const CLIENTES = [
  { nome: "NORR Energia", sigla: "NE", imagem: imgNorr },
  { nome: "Rio Sul Shopping Carioca", sigla: "RS", imagem: imgRioSul },
  { nome: "T&D Sustentável", sigla: "T&D", imagem: imgTD },
  { nome: "Espectro Engenharia", sigla: "EE", imagem: imgEspectro },
  { nome: "SUM Engenharia", sigla: "SE", imagem: imgSum },
  { nome: "Multiplan", sigla: "MP", imagem: imgMultiplan },
  { nome: "IVI Energia", sigla: "IVI", imagem: imgIvi },
  { nome: "Energea", sigla: "EA", imagem: imgEnergea },
];

export default function ClientesCarousel() {
  // duplicamos a lista para o loop infinito ficar contínuo
  const trilha = useMemo(() => [...CLIENTES, ...CLIENTES], []);

  return (
    <section className="relative overflow-hidden bg-navy-deep pt-12 pb-16 sm:pt-14 sm:pb-20">
      <style>{`
        .clientes-glow {
          background: radial-gradient(
            60% 90% at 50% 0%,
            rgba(86, 149, 247, 0.18),
            transparent 60%
          );
        }

        .clientes-trilha-wrap {
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            #000 8%,
            #000 92%,
            transparent 100%
          );
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            #000 8%,
            #000 92%,
            transparent 100%
          );
        }

        .clientes-trilha {
          animation: clientes-rolar 36s linear infinite;
        }

        .clientes-trilha-wrap:hover .clientes-trilha {
          animation-play-state: paused;
        }

        @keyframes clientes-rolar {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @media (prefers-reduced-motion: reduce) {
          .clientes-trilha {
            animation: none;
          }
        }
      `}</style>

      {/* Brilho sutil de fundo */}
      <div className="clientes-glow pointer-events-none absolute inset-0" />

      {/* Título centralizado e preso no topo */}
      <div className="container-fv relative text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
          Principais Clientes
        </h2>
      </div>

      {/* Trilha do Carrossel com Efeito de Bordas Borradas (Progressive Blur) */}
      <div className="relative mt-8 sm:mt-10 overflow-hidden">
        {/* Desfoque progressivo na borda esquerda */}
        <div 
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-36 sm:w-64 z-20"
          style={{
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            maskImage: "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0) 100%)",
          }}
        />
        {/* Gradiente de transição esquerda */}
        <div 
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-28 sm:w-48 z-10"
          style={{
            background: "linear-gradient(to right, rgba(7, 40, 68, 0.95) 0%, rgba(7, 40, 68, 0.4) 60%, transparent 100%)",
          }}
        />

        {/* Desfoque progressivo na borda direita */}
        <div 
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-36 sm:w-64 z-20"
          style={{
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            maskImage: "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0) 100%)",
          }}
        />
        {/* Gradiente de transição direita */}
        <div 
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-28 sm:w-48 z-10"
          style={{
            background: "linear-gradient(to left, rgba(7, 40, 68, 0.95) 0%, rgba(7, 40, 68, 0.4) 60%, transparent 100%)",
          }}
        />

        {/* Trilha de cards aumentados */}
        <div className="clientes-trilha-wrap">
          <div className="clientes-trilha flex w-max gap-6 py-4">
            {trilha.map((cliente, i) => (
              <div
                key={`${cliente.nome}-${i}`}
                className="flex-none w-72 sm:w-80 h-36 sm:h-40 flex flex-col items-center justify-center p-4
                           rounded-2xl bg-navy/70 border border-brand-800/70
                           backdrop-blur-sm transition-all duration-200
                           hover:border-brand-500/80 hover:bg-navy/90 hover:scale-[1.02] shadow-lg relative group overflow-hidden"
              >
                {cliente.imagem ? (
                  <Image 
                    src={cliente.imagem}
                    alt={cliente.nome}
                    className="object-contain w-full h-full opacity-90 group-hover:opacity-100 transition-opacity rounded-xl"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center gap-3">
                    <span className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-brand-900 text-brand-100 font-display font-bold text-base sm:text-lg shadow-inner">
                      {cliente.sigla}
                    </span>
                    <span className="text-white/90 text-sm sm:text-base font-medium text-center leading-snug">
                      {cliente.nome}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}