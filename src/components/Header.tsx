"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import Logo from "@/components/Logo";
import {
  CloseIcon,
  MailIcon,
  MenuIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/components/icons";
import type { ContactInfo } from "@/lib/site-content";
import { whatsappLink } from "@/lib/site-content";

type NavItem = { 
  label: string; 
  href: string; 
  anchor?: boolean; 
  dropdown?: { label: string; href: string }[];
};

const navItems: NavItem[] = [
  { label: "Início", href: "/" },
  { 
    label: "Serviços", 
    href: "/servicos",
    dropdown: [
      { label: "Consultoria em SMS", href: "/servicos#consultoria-sms" },
      { label: "Treinamentos NR", href: "/servicos#treinamentos-nr" },
      { label: "PGR & PCMSO", href: "/servicos#pgr-pcmso" },
      { label: "Fiscalização SMS", href: "/servicos#fiscalizacao-sms" }
    ]
  },
  { label: "Centro Educacional", href: "/centro-educacional" },
  { label: "NRs", href: "/nrs" },
  { label: "Assistente de IA", href: "/assistente-ia" },
  { label: "Sobre Nós", href: "/sobre" },
  { label: "Contato", href: "/#contato", anchor: true },
];

export default function Header({ contact }: { contact: ContactInfo }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      setHidden(y > 220 && y > lastY + 4);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenSubmenu(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleContact = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      if (pathname !== "/") return;
      const target = document.getElementById("contato");
      if (!target) return;
      event.preventDefault();
      const topOffset = 135;
      const targetY =
        target.getBoundingClientRect().top + window.scrollY - topOffset;
      window.scrollTo({ top: targetY, behavior: "smooth" });
      window.history.replaceState(null, "", "/#contato");
      setOpen(false);
    },
    [pathname],
  );

  const isActive = (item: NavItem) =>
    item.anchor ? false : pathname === item.href;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="hidden bg-navy text-white/80 lg:block">
        <div className="container-fv flex h-9 items-center justify-between text-xs">
          <p className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-300" />
            Consultoria, treinamentos e fiscalização em Segurança, Meio Ambiente
            e Saúde
          </p>
          <div className="flex items-center gap-5">
            <a
              className="flex items-center gap-1.5 transition hover:text-white"
              href={`tel:${contact.phoneHref}`}
            >
              <PhoneIcon className="h-3.5 w-3.5" />
              {contact.phone}
            </a>
            <a
              className="flex items-center gap-1.5 transition hover:text-white"
              href={`mailto:${contact.email}`}
            >
              <MailIcon className="h-3.5 w-3.5" />
              {contact.email}
            </a>
          </div>
        </div>
      </div>

      <div
        className={`border-b transition-all duration-300 ${
          scrolled
            ? "border-brand-100 bg-white/95 shadow-[0_10px_30px_-22px_rgba(11,60,107,0.55)] backdrop-blur"
            : "border-transparent bg-white/85 backdrop-blur"
        }`}
      >
        <div className="container-fv flex h-[72px] items-center justify-between gap-4">
          <Link href="/" aria-label="FVelloso — página inicial">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Menu principal">
            {navItems.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  onClick={item.anchor ? handleContact : undefined}
                  className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition ${
                    isActive(item) || (item.dropdown && pathname.startsWith(item.href))
                      ? "bg-brand-50 text-brand-700"
                      : "text-ink hover:bg-brand-50/70 hover:text-brand-700"
                  }`}
                >
                  {item.label}
                  {item.dropdown && (
                    <svg className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                {item.dropdown && (
                  <div className="absolute left-0 top-full mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                    <div className="py-2 bg-white rounded-xl shadow-[0_10px_40px_-15px_rgba(11,60,107,0.4)] border border-brand-100 flex flex-col">
                      {item.dropdown.map((drop) => (
                        <Link
                          key={drop.href}
                          href={drop.href}
                          className="px-4 py-2.5 text-sm text-ink hover:bg-brand-50 hover:text-brand-700 transition"
                        >
                          {drop.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand-100 text-navy transition hover:bg-brand-50 md:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            {open ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={`overflow-hidden border-b border-brand-100 bg-white transition-[max-height,opacity] duration-300 md:hidden ${
          open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container-fv flex flex-col gap-1 py-4" aria-label="Menu mobile">
          {navItems.map((item) => {
            const isSubmenuOpen = openSubmenu === item.label;
            return (
            <div key={item.href} className="flex flex-col">
              <Link
                href={item.href}
                onClick={(e) => {
                  if (item.dropdown) {
                    e.preventDefault();
                    setOpenSubmenu(isSubmenuOpen ? null : item.label);
                  } else if (item.anchor) {
                    handleContact(e as any);
                  } else {
                    setOpen(false);
                  }
                }}
                className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold transition ${
                  isActive(item) || (item.dropdown && pathname.startsWith(item.href))
                    ? "bg-brand-50 text-brand-700"
                    : "text-navy hover:bg-brand-50"
                }`}
              >
                {item.label}
                {item.dropdown && (
                  <svg
                    className={`h-4 w-4 transition-transform ${isSubmenuOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>
              {item.dropdown && (
                <div
                  className={`flex flex-col overflow-hidden transition-[max-height,opacity] duration-300 ${
                    isSubmenuOpen ? "max-h-[300px] opacity-100 mt-1 mb-2 ml-4 border-l-2 border-brand-100 pl-2" : "max-h-0 opacity-0"
                  }`}
                >
                  {item.dropdown.map((drop) => (
                    <Link
                      key={drop.href}
                      href={drop.href}
                      onClick={() => setOpen(false)}
                      className="rounded-xl px-4 py-2 text-sm text-ink hover:bg-brand-50 hover:text-brand-700 transition"
                    >
                      {drop.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            );
          })}
          <a
            href={whatsappLink(contact)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline mt-2 w-full"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp {contact.whatsapp}
          </a>
        </nav>
      </div>
    </header>
  );
}
