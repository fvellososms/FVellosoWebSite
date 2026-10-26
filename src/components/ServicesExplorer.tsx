"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import Reveal from "@/components/Reveal";
import {
  ArrowRightIcon,
  CheckIcon,
  CloseIcon,
  ShieldIcon,
  serviceIcons,
} from "@/components/icons";

export type ExplorerService = {
  slug: string;
  title: string;
  short: string;
  description: string;
  about: string;
  audience: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  quoteOption: string;
};

const quoteHref = (service: ExplorerService) =>
  `/orcamento?servico=${encodeURIComponent(service.quoteOption)}`;

export default function ServicesExplorer({ services }: { services: ExplorerService[] }) {
  const [active, setActive] = useState<ExplorerService | null>(null);

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (!active) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close]);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => {
          const Icon = serviceIcons[service.slug] ?? ShieldIcon;
          return (
            <Reveal key={service.slug} delay={index * 50} as="article">
              <div
                id={service.slug}
                className="card flex h-full scroll-mt-32 flex-col border-brand-200 p-6 shadow-[0_10px_28px_-14px_rgba(29,111,214,0.45)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_-14px_rgba(29,111,214,0.6)]"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h2 className="text-lg font-bold leading-tight">
                    {service.title}
                  </h2>
                </div>
                <p className="mt-3 text-sm leading-relaxed">{service.short}</p>
                <ul className="mt-4 flex-1 space-y-2">
                  {service.bullets.slice(0, 3).map((bullet) => (
                    <li key={bullet} className="flex gap-2.5 text-sm text-ink">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex gap-3 border-t border-brand-50 pt-5">
                  <Link
                    href={quoteHref(service)}
                    className="btn btn-primary flex-1 whitespace-nowrap px-3 py-3 text-sm"
                  >
                    Solicitar orçamento
                  </Link>
                  <button
                    type="button"
                    onClick={() => setActive(service)}
                    className="btn btn-outline whitespace-nowrap px-4 py-3 text-sm"
                  >
                    Saiba mais
                  </button>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-deep/80 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-44 sm:h-52">
              <Image
                src={active.image}
                alt={active.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 672px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 to-navy-deep/10" />
              <h2 className="absolute bottom-5 left-6 right-16 text-xl font-bold text-white sm:text-2xl">
                {active.title}
              </h2>
              <button
                type="button"
                onClick={close}
                aria-label="Fechar"
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-navy-deep/50 text-white transition hover:bg-navy-deep/80"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-6 p-6 sm:p-8">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-brand-600">
                  O que é
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy">
                  {active.about}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-brand-600">
                  Como atuamos
                </h3>
                <p className="mt-2 text-sm leading-relaxed">{active.description}</p>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-brand-600">
                  Principais entregas
                </h3>
                <ul className="mt-3 space-y-2">
                  {active.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2.5 text-sm text-ink">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl bg-brand-50/70 p-4">
                <h3 className="text-sm font-bold text-navy">Indicado para</h3>
                <p className="mt-1 text-sm leading-relaxed">{active.audience}</p>
              </div>
              <div className="flex flex-col gap-3 border-t border-brand-50 pt-6 sm:flex-row">
                <Link href={quoteHref(active)} className="btn btn-primary">
                  Solicitar orçamento
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
                <button type="button" onClick={close} className="btn btn-outline">
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
