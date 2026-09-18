export type LeadInput = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  source: string;
  website?: string; // honeypot
};

export type LeadErrors = Partial<Record<keyof LeadInput, string>>;

const emailRe = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

export function normalizeLead(raw: Record<string, unknown>): LeadInput {
  const get = (key: string) =>
    typeof raw[key] === "string" ? (raw[key] as string).trim() : "";
  return {
    name: get("name"),
    company: get("company"),
    email: get("email"),
    phone: get("phone"),
    service: get("service"),
    message: get("message"),
    source: get("source") || "home",
    website: get("website"),
  };
}

export function validateLead(
  input: LeadInput,
  options: { requireService?: boolean } = {},
): LeadErrors {
  const errors: LeadErrors = {};

  if (input.name.length < 3) {
    errors.name = "Informe seu nome completo.";
  }
  if (!emailRe.test(input.email)) {
    errors.email = "Informe um e-mail válido.";
  }
  const digits = input.phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 13) {
    errors.phone = "Informe um telefone com DDD.";
  }
  if (input.message.length < 10) {
    errors.message = "Descreva sua necessidade em ao menos 10 caracteres.";
  }
  if (options.requireService && !input.service) {
    errors.service = "Selecione o serviço de interesse.";
  }

  return errors;
}

export function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}
