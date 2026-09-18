"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import imagePubliEpi from "@/assets/images/imagepubliepi.png";

type Props = {
  permalink: string;
};

export default function InstagramEmbed({ permalink }: Props) {
  const [hasError, setHasError] = useState(false);

  // Ensure the permalink has a trailing slash before appending "embed"
  const embedUrl = permalink.endsWith("/")
    ? `${permalink}embed/?utm_source=ig_embed`
    : `${permalink}/embed/?utm_source=ig_embed`;

  useEffect(() => {
    // Reseta o estado de erro ao trocar de publicação
    setHasError(false);

    // O Instagram restringe o carregamento de iframes em domínios não autorizados.
    // Como navegadores bloqueiam o acesso ao DOM de iframes com erro (Cross-Origin),
    // usamos um timeout heurístico. O SDK do Instagram manda postMessage quando
    // carrega com sucesso. Se não recebermos resposta em 2.5s, assumimos que o
    // navegador bloqueou (ou seja, gerou a página interna de neterror) e exibimos o fallback.
    const timer = setTimeout(() => {
      setHasError(true);
    }, 2500);

    const handleMessage = (event: MessageEvent) => {
      try {
        if (typeof event.data === "string") {
          const data = JSON.parse(event.data);
          // Se o Instagram carregou e está medindo o tamanho, está funcionando.
          if (data && (data.type === "MEASURE" || data.type === "embedLoaded")) {
            clearTimeout(timer);
          }
        }
      } catch (e) {
        // Ignora mensagens que não são JSON (outras extensões do navegador)
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("message", handleMessage);
    };
  }, [permalink]);

  // Se houver erro de carregamento (X-Frame-Options DENY),
  // exibe a div com a class="neterror" e a imagem solicitada.
  if (hasError) {
    return (
      <div className="neterror relative flex w-full flex-col items-center justify-center bg-white p-4">
        <div className="relative w-full max-w-[540px] overflow-hidden rounded-xl border border-brand-100 shadow-sm bg-white">
          <a
            href={permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative"
            title="Ver publicação original no Instagram"
          >
            <Image
              src={imagePubliEpi}
              alt="Publicação no Instagram sobre EPIs"
              className="w-full h-auto object-cover transition-opacity duration-200 group-hover:opacity-90"
              priority
            />
            {/* Overlay com botão de ver no Instagram */}
            <div className="absolute inset-0 bg-navy-deep/0 transition-colors duration-200 group-hover:bg-navy-deep/20 flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white text-brand-600 font-bold text-sm px-5 py-2.5 rounded-full shadow-lg">
                Abrir no Instagram ↗
              </span>
            </div>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex w-full flex-col items-center justify-center bg-white p-4">
      <iframe
        src={embedUrl}
        className="w-full max-w-[540px] min-w-[280px] rounded-xl border border-brand-100 shadow-sm transition-opacity"
        style={{ minHeight: "560px" }}
        frameBorder="0"
        scrolling="no"
        allowTransparency={true}
        allow="encrypted-media"
        onError={() => setHasError(true)}
      />
    </div>
  );
}
