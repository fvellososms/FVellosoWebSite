import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

export const ShieldIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3 20 6v6c0 4.5-3.4 8.2-8 9-4.6-.8-8-4.5-8-9V6l8-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const HelmetIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 16a9 9 0 0 1 18 0" />
    <path d="M2 16h20v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-2Z" />
    <path d="M9 7.2V4.6A1.6 1.6 0 0 1 10.6 3h2.8A1.6 1.6 0 0 1 15 4.6v2.6" />
    <path d="M12 7v9" />
  </svg>
);

export const HeartPulseIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M19.5 5.6a4.9 4.9 0 0 0-7.5.6 4.9 4.9 0 0 0-7.5-.6c-2 1.9-2 5.1 0 7.1L12 20l7.5-7.3c2-2 2-5.2 0-7.1Z" />
    <path d="M4.5 12.5h3l1.5-2.5 2 4.5 1.7-3.2 1.3 1.2h4" />
  </svg>
);

export const SearchCheckIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="10.5" cy="10.5" r="6.5" />
    <path d="m8 10.6 1.9 1.9 3.4-3.6" />
    <path d="m20 20-4.6-4.6" />
  </svg>
);

export const PhoneIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6.3 3h3l1.5 4-2 1.4a12.6 12.6 0 0 0 6 6l1.4-2 4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.3 5.2 2 2 0 0 1 6.3 3Z" />
  </svg>
);

export const MailIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 7 8.5 6 8.5-6" />
  </svg>
);

export const PinIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);

export const ClockIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7.5V12l3 1.8" />
  </svg>
);

export const CheckIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m5 12.5 4.5 4.5L19 7" />
  </svg>
);

export const ArrowRightIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 12h15" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

export const MenuIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const CloseIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 6 18 18M18 6 6 18" />
  </svg>
);

export const QuoteIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M9.2 6.5C6.3 8 4.8 10.4 4.8 13.7c0 2.4 1.4 3.8 3.3 3.8 1.7 0 3-1.2 3-2.9 0-1.6-1.1-2.8-2.7-2.8-.3 0-.6 0-.8.1.4-1.4 1.6-2.6 3.3-3.5l-1.7-1.9Zm8.2 0c-2.9 1.5-4.4 3.9-4.4 7.2 0 2.4 1.4 3.8 3.3 3.8 1.7 0 3-1.2 3-2.9 0-1.6-1.1-2.8-2.7-2.8-.3 0-.6 0-.8.1.4-1.4 1.6-2.6 3.3-3.5l-1.7-1.9Z" />
  </svg>
);

export const WhatsAppIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.86.5 3.6 1.36 5.1L2 22l5.2-1.52a9.8 9.8 0 0 0 4.84 1.26h.01c5.43 0 9.84-4.4 9.84-9.84 0-2.63-1.02-5.1-2.88-6.96A9.77 9.77 0 0 0 12.04 2Zm0 1.8c2.15 0 4.17.84 5.69 2.36a7.98 7.98 0 0 1 2.36 5.68c0 4.44-3.61 8.04-8.05 8.04a8.06 8.06 0 0 1-4.1-1.12l-.3-.18-3.05.9.81-2.98-.19-.3a7.98 7.98 0 0 1-1.22-4.26c0-4.44 3.61-8.14 8.05-8.14Zm-3.6 4.03c-.17 0-.44.06-.68.31-.23.25-.9.87-.9 2.13 0 1.26.92 2.47 1.05 2.64.13.17 1.79 2.85 4.43 3.88 2.2.86 2.65.69 3.13.65.48-.05 1.54-.63 1.76-1.24.22-.6.22-1.13.15-1.24-.06-.1-.23-.17-.48-.29-.25-.13-1.54-.76-1.78-.85-.24-.09-.41-.13-.59.13-.17.25-.67.85-.82 1.02-.15.18-.3.2-.55.07-.25-.13-1.09-.4-2.07-1.28-.76-.68-1.28-1.52-1.43-1.77-.15-.25-.02-.39.11-.51.11-.11.25-.3.38-.44.12-.15.16-.25.25-.42.08-.17.04-.32-.02-.45-.06-.12-.55-1.4-.78-1.9-.19-.42-.38-.42-.55-.43h-.47Z" />
  </svg>
);

export const InstagramIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="3.8" />
    <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const LinkedinIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9.5h4v11H3v-11Zm6.5 0h3.8v1.5h.06c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.77 2.5 4.77 5.76v5.69h-4v-5.05c0-1.2-.02-2.75-1.75-2.75s-2.02 1.31-2.02 2.66v5.14h-4v-11Z" />
  </svg>
);

export const FacebookIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.87.24-1.46 1.5-1.46h1.6V4.45c-.28-.04-1.23-.12-2.34-.12-2.32 0-3.9 1.4-3.9 3.98V10.5H7.7v3h2.66V21h3.14Z" />
  </svg>
);

export const CertificateIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 3h12a1 1 0 0 1 1 1v10.5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
    <path d="M8.5 7h7M8.5 10.5h4.5" />
    <path d="M9 15.5V21l3-1.6L15 21v-5.5" />
  </svg>
);

export const UsersIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3.5 19.5a5.5 5.5 0 0 1 11 0" />
    <path d="M16 5.4a3.2 3.2 0 0 1 0 6.2" />
    <path d="M17.6 14.6a5.5 5.5 0 0 1 3 4.9" />
  </svg>
);

export const TargetIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="8.5" />
    <circle cx="12" cy="12" r="4.5" />
    <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const EyeIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M2.5 12s3.6-6 9.5-6 9.5 6 9.5 6-3.6 6-9.5 6-9.5-6-9.5-6Z" />
    <circle cx="12" cy="12" r="2.8" />
  </svg>
);

export const CompassIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="m15.2 8.8-1.9 4.5-4.5 1.9 1.9-4.5 4.5-1.9Z" />
  </svg>
);

export const BookOpenIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

export const FileTextIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <line x1="10" y1="9" x2="8" y2="9" />
  </svg>
);

export const PlayCircleIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="10" />
    <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none" />
  </svg>
);

export const BookIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
  </svg>
);

export const FileIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
);

export const CommentIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

export const FilterIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
  </svg>
);

export const serviceIcons: Record<
  string,
  (props: IconProps) => React.JSX.Element
> = {
  "consultoria-sms": ShieldIcon,
  "treinamentos-nr": HelmetIcon,
  "pgr-pcmso": HeartPulseIcon,
  "fiscalizacao-sms": SearchCheckIcon,
  "guia-seguranca": BookIcon,
};
