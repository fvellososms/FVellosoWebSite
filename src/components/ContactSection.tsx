import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import {
  ClockIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  WhatsAppIcon,
} from "@/components/icons";
import type { ContactInfo } from "@/lib/site-content";
import { serviceOptions, whatsappLink } from "@/lib/site-content";

export default function ContactSection({ contact }: { contact: ContactInfo }) {
  const cards = [
    {
      Icon: PhoneIcon,
      label: "Telefone",
      value: contact.phone,
      href: `tel:${contact.phoneHref}`,
    },
    {
      Icon: WhatsAppIcon,
      label: "WhatsApp",
      value: contact.whatsapp,
      href: whatsappLink(contact),
      external: true,
    },
    {
      Icon: MailIcon,
      label: "E-mail",
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      Icon: ClockIcon,
      label: "Atendimento",
      value: contact.hours,
    },
  ];

  return (
    <section
      id="contato"
      className="scroll-mt-36 bg-gradient-to-b from-white to-surface py-20 lg:py-28"
    >
      <div className="container-fv">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Fale conosco</span>
          <h2 className="mt-3 text-3xl font-bold text-balance sm:text-4xl">
            Vamos conversar sobre a segurança da sua operação
          </h2>
          <p className="mt-4 text-base leading-relaxed">
            Envie sua mensagem e nossa equipe técnica retorna em até 1 dia útil
            com o direcionamento adequado para a sua demanda.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <ContactForm
              source="home"
              variant="compact"
              serviceOptions={serviceOptions}
            />
          </Reveal>

          <Reveal delay={120} className="flex flex-col gap-5">
            <div className="grid gap-3 sm:grid-cols-2">
              {cards.map(({ Icon, label, value, href, external }) => {
                const inner = (
                  <>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[0.7rem] font-bold uppercase tracking-[0.14em] text-brand-600">
                        {label}
                      </span>
                      <span className="mt-0.5 block truncate text-sm font-semibold text-navy">
                        {value}
                      </span>
                    </span>
                  </>
                );
                return href ? (
                  <a
                    key={label}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="card flex items-center gap-3 p-4 transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={label} className="card flex items-center gap-3 p-4">
                    {inner}
                  </div>
                );
              })}
            </div>

            <div className="card flex items-start gap-3 p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <PinIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-brand-600">
                  Escritório
                </p>
                <p className="mt-1 text-sm font-semibold leading-relaxed text-navy">
                  {contact.addressLine1}
                  <br />
                  {contact.addressLine2}
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-brand-100 shadow-soft">
              <iframe
                title="Mapa da localização da FVelloso Consultoria em SMS"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  contact.mapQuery,
                )}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[260px] w-full border-0 grayscale-[25%]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
