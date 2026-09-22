"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import imagePubliEpi from "@/assets/images/imagepubliepi.png";

type Props = {
  permalink: string;
};

function getCleanEmbedUrl(url: string): string {
  // Se a URL contiver o nome de usuário (ex: /fvelloso.sms/p/Dc13UUKke1h/), 
  // o Instagram redireciona a chamada, o que dispara o bloqueio de X-Frame-Options: DENY pelo navegador.
  // Limpamos a URL para o formato padrão oficial sem redirecionamento: https://www.instagram.com/p/{ID}/embed/
  const match = url.match(/(?:p|reel|tv)\/([A-Za-z0-9_-]+)/);
  if (match) {
    const type = url.includes("/reel/") ? "reel" : "p";
    return `https://www.instagram.com/${type}/${match[1]}/embed/?utm_source=ig_embed`;
  }
  return url.endsWith("/")
    ? `${url}embed/?utm_source=ig_embed`
    : `${url}/embed/?utm_source=ig_embed`;
}

export default function InstagramEmbed({ permalink }: Props) {
  const [hasError, setHasError] = useState(false);

  const embedUrl = getCleanEmbedUrl(permalink);

  useEffect(() => {
    // Reseta o estado de erro ao trocar de publicação
    setHasError(false);

    // Timeout de fallback para exibir a imagem padrão caso o navegador ou adblocker bloqueie
    const timer = setTimeout(() => {
      setHasError(true);
    }, 2500);

    const handleMessage = (event: MessageEvent) => {
      try {
        if (typeof event.data === "string") {
          const data = JSON.parse(event.data);
          if (data && (data.type === "MEASURE" || data.type === "embedLoaded")) {
            clearTimeout(timer);
          }
        }
      } catch (e) {
        // Ignora mensagens que não são JSON
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("message", handleMessage);
    };
  }, [permalink]);

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
        allow="autoplay; clipboard-write; picture-in-picture; web-share"
        onError={() => setHasError(true)}
      />
    </div>
  );
}
