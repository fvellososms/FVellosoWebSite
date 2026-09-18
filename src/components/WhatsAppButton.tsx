"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon } from "@/components/icons";
import type { ContactInfo } from "@/lib/site-content";
import { whatsappLink } from "@/lib/site-content";

export default function WhatsAppButton({ contact }: { contact: ContactInfo }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setMounted(true), 600);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <a
      href={whatsappLink(contact)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Falar com a FVelloso no WhatsApp: ${contact.whatsapp}`}
      className={`group fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full bg-[#25D366] py-3 pl-3 pr-4 text-white shadow-[0_18px_34px_-14px_rgba(37,211,102,0.9)] transition-all duration-500 hover:bg-[#1eb457] sm:bottom-7 sm:right-7 ${
        mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <span className="relative flex h-8 w-8 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40 opacity-60" />
        <WhatsAppIcon className="relative h-7 w-7" />
      </span>
      <span className="hidden text-sm font-semibold sm:inline">
        Fale no WhatsApp
      </span>
    </a>
  );
}
