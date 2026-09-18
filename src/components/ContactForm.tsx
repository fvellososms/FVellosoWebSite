"use client";

import { useState, type FormEvent } from "react";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";
import { formatPhone, validateLead, type LeadErrors } from "@/lib/leads";

type Props = {
  variant?: "compact" | "full";
  source: "home" | "orcamento";
  serviceOptions: string[];
  defaultService?: string;
};

const emptyForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  message: "",
  website: "",
};

export default function ContactForm({
  variant = "compact",
  source,
  serviceOptions,
  defaultService = "",
}: Props) {
  const full = variant === "full";
  const [values, setValues] = useState({
    ...emptyForm,
    service: defaultService,
  });
  const [errors, setErrors] = useState<LeadErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">(
    "idle",
  );
  const [feedback, setFeedback] = useState("");

  const update = (field: keyof typeof emptyForm, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // RF09 — validação dos campos obrigatórios antes do envio.
    const localErrors = validateLead(
      { ...values, source },
      { requireService: full },
    );
    if (Object.keys(localErrors).length > 0) {
      setErrors(localErrors);
      setStatus("error");
      setFeedback("Revise os campos destacados para continuar.");
      return;
    }

    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, source }),
      });
      const data = (await response.json()) as {
        ok: boolean;
        message?: string;
        errors?: LeadErrors;
      };

      if (!response.ok || !data.ok) {
        setErrors(data.errors ?? {});
        setStatus("error");
        setFeedback(data.message ?? "Não foi possível enviar sua mensagem.");
        return;
      }

      setStatus("sent");
      setFeedback(data.message ?? "Solicitação enviada com sucesso!");
      setValues({ ...emptyForm, service: defaultService });
    } catch {
      setStatus("error");
      setFeedback(
        "Falha de conexão. Tente novamente ou fale conosco pelo WhatsApp.",
      );
    }
  }

  if (status === "sent") {
    return (
      <div className="card flex flex-col items-start gap-4 p-8">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
          <CheckIcon className="h-6 w-6" />
        </span>
        <div>
          <h3 className="text-xl font-bold">Solicitação enviada!</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink">{feedback}</p>
        </div>
        <button
          type="button"
          className="btn btn-outline"
          onClick={() => {
            setStatus("idle");
            setFeedback("");
          }}
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="card p-6 sm:p-8">
      <div className={`grid gap-4 ${full ? "sm:grid-cols-2" : ""}`}>
        <Field
          id="name"
          label="Nome completo *"
          placeholder="Como podemos te chamar?"
          value={values.name}
          error={errors.name}
          onChange={(v) => update("name", v)}
          autoComplete="name"
        />

        {full ? (
          <Field
            id="company"
            label="Empresa"
            placeholder="Razão social ou nome fantasia"
            value={values.company}
            onChange={(v) => update("company", v)}
            autoComplete="organization"
          />
        ) : null}

        <Field
          id="email"
          label="E-mail *"
          type="email"
          placeholder="voce@empresa.com.br"
          value={values.email}
          error={errors.email}
          onChange={(v) => update("email", v)}
          autoComplete="email"
        />

        <Field
          id="phone"
          label="Telefone / WhatsApp *"
          type="tel"
          placeholder="(00) 00000-0000"
          value={values.phone}
          error={errors.phone}
          onChange={(v) => update("phone", formatPhone(v))}
          autoComplete="tel"
        />

        <div className={full ? "sm:col-span-2" : ""}>
          <label className="field-label" htmlFor="service">
            Serviço de interesse {full ? "*" : "(opcional)"}
          </label>
          <select
            id="service"
            name="service"
            className={`field ${errors.service ? "field-error" : ""}`}
            value={values.service}
            onChange={(event) => update("service", event.target.value)}
            aria-invalid={Boolean(errors.service)}
          >
            <option value="">Selecione uma opção</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.service ? <ErrorText text={errors.service} /> : null}
        </div>

        <div className={full ? "sm:col-span-2" : ""}>
          <label className="field-label" htmlFor="message">
            Mensagem *
          </label>
          <textarea
            id="message"
            name="message"
            rows={full ? 6 : 4}
            className={`field resize-y ${errors.message ? "field-error" : ""}`}
            placeholder={
              full
                ? "Conte sobre a obra/unidade, número de colaboradores, prazos e o que você precisa."
                : "Como podemos ajudar sua empresa?"
            }
            value={values.message}
            onChange={(event) => update("message", event.target.value)}
            aria-invalid={Boolean(errors.message)}
          />
          {errors.message ? <ErrorText text={errors.message} /> : null}
        </div>
      </div>

      {/* Honeypot anti-spam */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Não preencha este campo</label>
        <input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(event) => update("website", event.target.value)}
        />
      </div>

      {status === "error" && feedback ? (
        <p
          role="alert"
          className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
        >
          {feedback}
        </p>
      ) : null}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-ink/70">
          Seus dados são usados apenas para retorno comercial. Campos com * são
          obrigatórios.
        </p>
        <button
          type="submit"
          className="btn btn-primary w-full shrink-0 sm:w-auto"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Enviando..." : full ? "Enviar solicitação" : "Enviar mensagem"}
          {status === "loading" ? null : <ArrowRightIcon className="h-4 w-4" />}
        </button>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  placeholder,
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label className="field-label" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        className={`field ${error ? "field-error" : ""}`}
        placeholder={placeholder}
        value={value}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        onChange={(event) => onChange(event.target.value)}
      />
      {error ? <ErrorText text={error} /> : null}
    </div>
  );
}

function ErrorText({ text }: { text: string }) {
  return <p className="mt-1.5 text-xs font-medium text-red-600">{text}</p>;
}
