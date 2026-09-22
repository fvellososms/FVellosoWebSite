"use client";

import { useState } from "react";
import Image from "next/image";
import imagePubliEpi from "@/assets/images/imagepubliepi.png";

type Props = {
  permalink: string;
};

/**
 * Extrai o shortcode de uma URL do Instagram (post ou reel).
 * Ex: https://www.instagram.com/p/Dc13UUKke1h/ → Dc13UUKke1h
 */
function getShortcode(url: string): string | null {
  const match = url.match(/(?:p|reel|tv)\/([A-Za-z0-9_-]+)/);
  return match ? match[1] : null;
}

/**
 * Constrói a URL pública de thumbnail do Instagram.
 * O endpoint /media/?size=l funciona para perfis públicos sem autenticação.
 */
function getThumbnailUrl(permalink: string): string | null {
  const shortcode = getShortcode(permalink);
  if (!shortcode) return null;
  const type = permalink.includes("/reel/") ? "reel" : "p";
  return `https://www.instagram.com/${type}/${shortcode}/media/?size=l`;
}

export default function InstagramEmbed({ permalink }: Props) {
  const thumbnailUrl = getThumbnailUrl(permalink);
  const [imgSrc, setImgSrc] = useState<string | null>(thumbnailUrl);

  const handleError = () => {
    // Fallback: usa a imagem local quando o CDN do Instagram não carrega
    setImgSrc(null);
  };

  return (
    <div className="relative flex w-full flex-col items-center justify-center bg-white p-4">
      <div className="relative w-full max-w-[540px] overflow-hidden rounded-xl border border-brand-100 shadow-sm bg-white">
        <a
          href={permalink}
          target="_blank"
          rel="noopener noreferrer"
          className="group block relative"
          title="Ver publicação original no Instagram"
        >
          {imgSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={imgSrc}
              alt="Publicação no Instagram - fvelloso.sms"
              className="w-full h-auto object-cover aspect-square transition-opacity duration-200 group-hover:opacity-90"
              onError={handleError}
            />
          ) : (
            <Image
              src={imagePubliEpi}
              alt="Publicação no Instagram sobre EPIs"
              className="w-full h-auto object-cover transition-opacity duration-200 group-hover:opacity-90"
              priority
            />
          )}

          {/* Overlay com CTA ao hover */}
          <div className="absolute inset-0 bg-navy-deep/0 transition-colors duration-200 group-hover:bg-navy-deep/30 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white text-brand-600 font-bold text-sm px-5 py-2.5 rounded-full shadow-lg flex items-center gap-2">
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              Abrir no Instagram ↗
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}
