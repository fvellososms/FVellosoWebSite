import Link from "next/link";
import Logo from "@/components/Logo";
import {
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  WhatsAppIcon,
} from "@/components/icons";
import type { SiteContent } from "@/lib/site-content";
import { whatsappLink } from "@/lib/site-content";

export default function Footer({ content }: { content: SiteContent }) {
  const { contact, services } = content;
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy-deep text-white/75">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />

      <div className="container-fv relative py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              {content.company.description}
            </p>
            <div className="mt-5 flex gap-2.5">
              {[
                { href: contact.instagram, Icon: InstagramIcon, label: "Instagram" },
                { href: contact.linkedin, Icon: LinkedinIcon, label: "LinkedIn" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`FVelloso no ${label}`}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-white/80 transition hover:border-brand-300 hover:bg-white/10 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Links do rodapé">
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">
              Navegação
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "Sobre Nós", href: "/sobre" },
                { label: "Serviços", href: "/servicos" },
                { label: "Centro Educacional", href: "/centro-educacional" },
                { label: "Normas Regulamentadoras", href: "/nrs" },
                { label: "Assistente IA", href: "/assistente-ia" },
                { label: "Contato", href: "/#contato" },
                { label: "Solicitar Orçamento", href: "/orcamento" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition hover:text-brand-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">
              Soluções
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/servicos#${service.slug}`}
                    className="transition hover:text-brand-200"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">
              Contato
            </h3>
            <ul className="mt-5 space-y-3.5 text-sm">
              <li className="flex gap-3">
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                <a href={`tel:${contact.phoneHref}`} className="hover:text-white">
                  {contact.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <WhatsAppIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                <a
                  href={whatsappLink(contact)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  {contact.whatsapp}
                </a>
              </li>
              <li className="flex gap-3">
                <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                <a href={`mailto:${contact.email}`} className="hover:text-white">
                  {contact.email}
                </a>
              </li>
              <li className="flex gap-3">
                <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                <span>
                  {contact.addressLine1}
                  <br />
                  {contact.addressLine2}
                </span>
              </li>
              <li className="flex gap-3">
                <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                <span>{contact.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} FVelloso Consultoria em SMS. Todos os direitos reservados.
          </p>
          <p>
            Segurança, Meio Ambiente e Saúde · +25 anos de mercado
          </p>
        </div>
      </div>
    </footer>
  );
}
