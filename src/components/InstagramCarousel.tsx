"use client";

import { useState } from "react";
import InstagramEmbed from "./InstagramEmbed";

type Props = {
  posts: string[];
};

export default function InstagramCarousel({ posts }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPost = () => {
    setCurrentIndex((prev) => (prev < posts.length - 1 ? prev + 1 : prev));
  };

  const prevPost = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div className="card overflow-hidden border border-brand-100/90 bg-white shadow-card relative group">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-brand-100/70 bg-surface px-5 py-3.5 gap-4 sm:gap-0">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] p-[2px]">
            <span className="flex h-full w-full items-center justify-center rounded-full bg-white text-xs font-extrabold text-navy">
              FV
            </span>
          </span>
          <div>
            <a
              href="https://www.instagram.com/fvelloso.sms/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-navy hover:underline"
            >
              fvelloso.sms
            </a>
            <span className="block text-[0.68rem] text-ink/75">
              Publicações Oficiais no Instagram
            </span>
          </div>
        </div>

        <a
          href={posts[currentIndex]}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-brand-200 bg-white px-3 py-2 text-xs font-semibold text-brand-700 transition hover:bg-brand-50"
        >
          Ver publicação ↗
        </a>
      </div>

      <div className="relative flex justify-center">
        {/* Renderiza apenas UM embed por vez. O React atualiza o iframe quando a URL muda. */}
        <InstagramEmbed permalink={posts[currentIndex]} />

        {/* Setas Laterais */}
        <button 
          onClick={prevPost}
          className="absolute left-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-navy shadow-md transition-opacity opacity-0 group-hover:opacity-100 disabled:opacity-0 disabled:cursor-not-allowed"
          disabled={currentIndex === 0}
          aria-label="Publicação anterior"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>

        <button 
          onClick={nextPost}
          className="absolute right-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-navy shadow-md transition-opacity opacity-0 group-hover:opacity-100 disabled:opacity-0 disabled:cursor-not-allowed"
          disabled={currentIndex === posts.length - 1}
          aria-label="Próxima publicação"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>

      <div className="bg-white py-3 flex justify-center gap-2 border-t border-brand-50">
        {posts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex ? "w-6 bg-brand-600" : "w-2 bg-brand-200 hover:bg-brand-400"
            }`}
            aria-label={`Ir para a publicação ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}