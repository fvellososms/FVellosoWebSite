"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { CloseIcon } from "@/components/icons";
import type { GalleryItem } from "@/lib/site-content";

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight")
        setActive((i) => (i === null ? i : (i + 1) % items.length));
      if (event.key === "ArrowLeft")
        setActive((i) =>
          i === null ? i : (i - 1 + items.length) % items.length,
        );
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, items.length]);

  return (
    <>
      <div className="grid auto-rows-[190px] grid-cols-2 gap-3 sm:auto-rows-[240px] sm:gap-4 lg:grid-cols-4">
        {items.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setActive(index)}
            className={`group relative overflow-hidden rounded-2xl border border-brand-100/70 bg-white shadow-soft focus-visible:ring-2 focus-visible:ring-brand-500 ${
              index === 0 || index === 3 ? "lg:col-span-2" : ""
            }`}
            aria-label={`Ampliar foto: ${item.caption}`}
          >
            <span className="absolute inset-0 block overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 45vw, 30vw"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </span>
            <span className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/10 to-transparent opacity-90" />
            <span className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-1 p-3 text-left sm:p-4">
              <span className="rounded-full bg-brand-500/90 px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-widest text-white">
                {item.tag}
              </span>
              <span className="text-sm font-semibold text-white drop-shadow">
                {item.caption}
              </span>
            </span>
          </button>
        ))}
      </div>

      {active !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={items[active].caption}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-deep/92 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Fechar galeria"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition hover:bg-white/10"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
          <figure
            className="max-h-full w-full max-w-4xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={items[active].src.replace("w=900&h=700", "w=1400&h=1000")}
              alt={items[active].alt}
              width={1400}
              height={1000}
              className="max-h-[76vh] w-full rounded-2xl object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-white/85">
              <strong className="font-semibold text-white">
                {items[active].caption}
              </strong>{" "}
              — {items[active].alt}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </>
  );
}
