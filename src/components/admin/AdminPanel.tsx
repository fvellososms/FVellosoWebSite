"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { CheckIcon, ShieldIcon } from "@/components/icons";
import type { SiteContent } from "@/lib/site-content";

type Lead = {
  id: number;
  name: string;
  company: string | null;
  email: string;
  phone: string;
  service: string | null;
  message: string;
  source: string;
  status: string;
  notified: string;
  createdAt: string;
};

const statusLabels: Record<string, string> = {
  novo: "Novo",
  em_contato: "Em contato",
  ganho: "Fechado",
  arquivado: "Arquivado",
};

const statusStyles: Record<string, string> = {
  novo: "bg-brand-50 text-brand-700 border-brand-200",
  em_contato: "bg-amber-50 text-amber-700 border-amber-200",
  ganho: "bg-green-50 text-green-700 border-green-200",
  arquivado: "bg-slate-100 text-slate-600 border-slate-200",
};

export default function AdminPanel({ initial }: { initial: SiteContent }) {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [tab, setTab] = useState<"leads" | "conteudo">("leads");

  useEffect(() => {
    fetch("/api/admin/session")
      .then((res) => res.json())
      .then((data: { authenticated: boolean }) =>
        setAuthenticated(Boolean(data.authenticated)),
      )
      .catch(() => setAuthenticated(false));
  }, []);

  async function handleLogin(event: React.FormEvent) {
    event.preventDefault();
    setLoginError("");
    const res = await fetch("/api/admin/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      setAuthenticated(true);
      setPassword("");
    } else {
      setLoginError("Senha incorreta. Tente novamente.");
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/session", { method: "DELETE" });
    setAuthenticated(false);
  }

  if (authenticated === null) {
    return (
      <div className="container-fv py-24 text-center text-sm">
        Carregando painel...
      </div>
    );
  }

  if (!authenticated) {
    return (
      <div className="container-fv flex justify-center py-20 lg:py-28">
        <form
          onSubmit={handleLogin}
          className="card w-full max-w-md p-8"
          noValidate
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
            <ShieldIcon className="h-6 w-6" />
          </span>
          <h1 className="mt-5 text-2xl font-bold">Área do administrador</h1>
          <p className="mt-2 text-sm leading-relaxed">
            Acesse para consultar as solicitações recebidas e atualizar os
            conteúdos do site.
          </p>

          <label className="field-label mt-6" htmlFor="password">
            Senha de acesso
          </label>
          <input
            id="password"
            type="password"
            className={`field ${loginError ? "field-error" : ""}`}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="••••••••"
            autoComplete="current-password"
          />
          {loginError ? (
            <p className="mt-2 text-xs font-medium text-red-600">{loginError}</p>
          ) : null}

          <button type="submit" className="btn btn-primary mt-6 w-full">
            Entrar
          </button>
          <p className="mt-4 text-xs text-ink/70">
            Senha padrão de demonstração:{" "}
            <code className="rounded bg-brand-50 px-1.5 py-0.5 font-semibold text-brand-700">
              fvelloso2026
            </code>{" "}
            (defina <code>ADMIN_PASSWORD</code> no ambiente).
          </p>
        </form>
      </div>
    );
  }

  return (
    <div className="container-fv py-12 lg:py-16">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="eyebrow">Painel FVelloso</span>
          <h1 className="mt-2 text-3xl font-bold">Gerenciamento do site</h1>
        </div>
        <button type="button" onClick={handleLogout} className="btn btn-outline">
          Sair
        </button>
      </div>

      <div className="mt-8 flex gap-2 border-b border-brand-100">
        {(
          [
            ["leads", "Solicitações"],
            ["conteudo", "Conteúdo do site"],
          ] as const
        ).map(([key, label]) => (
          <button
            key={key}
            type="button"
            onClick={() => setTab(key)}
            className={`-mb-px border-b-2 px-4 py-3 text-sm font-semibold transition ${
              tab === key
                ? "border-brand-600 text-brand-700"
                : "border-transparent text-ink hover:text-brand-600"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="mt-8">
        {tab === "leads" ? <LeadsTab /> : <ContentTab initial={initial} />}
      </div>
    </div>
  );
}

function LeadsTab() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("todos");

  const load = useCallback(async () => {
    setLoading(true);
    const res = await fetch("/api/leads");
    if (res.ok) {
      const data = (await res.json()) as { leads: Lead[] };
      setLeads(data.leads ?? []);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const filtered = useMemo(
    () => (filter === "todos" ? leads : leads.filter((l) => l.status === filter)),
    [leads, filter],
  );

  async function updateStatus(id: number, status: string) {
    setLeads((prev) =>
      prev.map((lead) => (lead.id === id ? { ...lead, status } : lead)),
    );
    await fetch(`/api/leads/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
  }

  async function remove(id: number) {
    setLeads((prev) => prev.filter((lead) => lead.id !== id));
    await fetch(`/api/leads/${id}`, { method: "DELETE" });
  }

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        {["todos", "novo", "em_contato", "ganho", "arquivado"].map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => setFilter(key)}
            className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition ${
              filter === key
                ? "border-brand-600 bg-brand-600 text-white"
                : "border-brand-100 bg-white text-ink hover:border-brand-300"
            }`}
          >
            {key === "todos" ? "Todos" : statusLabels[key]}
            {key === "todos" ? ` (${leads.length})` : ""}
          </button>
        ))}
        <button
          type="button"
          onClick={() => void load()}
          className="ml-auto text-xs font-semibold text-brand-600 hover:underline"
        >
          Atualizar lista
        </button>
      </div>

      {loading ? (
        <p className="mt-8 text-sm">Carregando solicitações...</p>
      ) : filtered.length === 0 ? (
        <div className="card mt-6 p-10 text-center text-sm">
          Nenhuma solicitação encontrada por aqui ainda.
        </div>
      ) : (
        <ul className="mt-6 grid gap-4">
          {filtered.map((lead) => (
            <li key={lead.id} className="card p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-base font-bold text-navy">
                    {lead.name}
                    {lead.company ? (
                      <span className="font-medium text-ink"> · {lead.company}</span>
                    ) : null}
                  </p>
                  <p className="mt-1 text-xs text-ink">
                    {new Date(lead.createdAt).toLocaleString("pt-BR")} ·{" "}
                    origem: {lead.source} · e-mail:{" "}
                    {lead.notified === "enviado" ? "notificado" : "pendente"}
                  </p>
                </div>
                <span
                  className={`rounded-full border px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wide ${
                    statusStyles[lead.status] ?? statusStyles.novo
                  }`}
                >
                  {statusLabels[lead.status] ?? lead.status}
                </span>
              </div>

              <div className="mt-3 grid gap-1.5 text-sm sm:grid-cols-2">
                <p>
                  <span className="font-semibold text-navy">E-mail:</span>{" "}
                  <a
                    className="text-brand-600 hover:underline"
                    href={`mailto:${lead.email}`}
                  >
                    {lead.email}
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-navy">Telefone:</span>{" "}
                  <a
                    className="text-brand-600 hover:underline"
                    href={`tel:${lead.phone.replace(/\D/g, "")}`}
                  >
                    {lead.phone}
                  </a>
                </p>
                {lead.service ? (
                  <p className="sm:col-span-2">
                    <span className="font-semibold text-navy">Serviço:</span>{" "}
                    {lead.service}
                  </p>
                ) : null}
              </div>

              <p className="mt-3 whitespace-pre-line rounded-xl bg-surface p-4 text-sm leading-relaxed">
                {lead.message}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                {Object.entries(statusLabels).map(([key, label]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => void updateStatus(lead.id, key)}
                    className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition ${
                      lead.status === key
                        ? "border-brand-600 bg-brand-50 text-brand-700"
                        : "border-brand-100 text-ink hover:border-brand-300"
                    }`}
                  >
                    {label}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => void remove(lead.id)}
                  className="ml-auto text-xs font-semibold text-red-600 hover:underline"
                >
                  Excluir
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function ContentTab({ initial }: { initial: SiteContent }) {
  const [draft, setDraft] = useState(initial);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  async function save() {
    setSaving(true);
    setMessage("");
    const res = await fetch("/api/content", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        hero: draft.hero,
        about: { title: draft.about.title, lead: draft.about.lead },
        company: draft.company,
        contact: draft.contact,
        stats: draft.stats,
      }),
    });
    const data = (await res.json()) as { ok: boolean; message?: string };
    setSaving(false);
    setMessage(
      data.ok
        ? "Conteúdo salvo! Recarregue o site para conferir as alterações."
        : (data.message ?? "Não foi possível salvar."),
    );
  }

  const setHero = (key: keyof SiteContent["hero"], value: string) =>
    setDraft((prev) => ({ ...prev, hero: { ...prev.hero, [key]: value } }));

  const setContact = (key: keyof SiteContent["contact"], value: string) =>
    setDraft((prev) => ({ ...prev, contact: { ...prev.contact, [key]: value } }));

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <section className="card p-6">
        <h2 className="text-lg font-bold">Destaque da Home</h2>
        <div className="mt-4 grid gap-4">
          <TextField
            label="Selo superior"
            value={draft.hero.eyebrow}
            onChange={(v) => setHero("eyebrow", v)}
          />
          <TextField
            label="Título"
            value={draft.hero.title}
            onChange={(v) => setHero("title", v)}
          />
          <TextField
            label="Título em destaque (azul)"
            value={draft.hero.highlight}
            onChange={(v) => setHero("highlight", v)}
          />
          <TextArea
            label="Subtítulo"
            value={draft.hero.subtitle}
            onChange={(v) => setHero("subtitle", v)}
          />
        </div>
      </section>

      <section className="card p-6">
        <h2 className="text-lg font-bold">Bloco “Sobre” da Home</h2>
        <div className="mt-4 grid gap-4">
          <TextField
            label="Título"
            value={draft.about.title}
            onChange={(v) =>
              setDraft((prev) => ({
                ...prev,
                about: { ...prev.about, title: v },
              }))
            }
          />
          <TextArea
            label="Texto de abertura"
            value={draft.about.lead}
            onChange={(v) =>
              setDraft((prev) => ({
                ...prev,
                about: { ...prev.about, lead: v },
              }))
            }
          />
          <TextArea
            label="Descrição da empresa (rodapé)"
            value={draft.company.description}
            onChange={(v) =>
              setDraft((prev) => ({
                ...prev,
                company: { ...prev.company, description: v },
              }))
            }
          />
        </div>
      </section>

      <section className="card p-6">
        <h2 className="text-lg font-bold">Dados de contato</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <TextField
            label="Telefone exibido"
            value={draft.contact.phone}
            onChange={(v) => setContact("phone", v)}
          />
          <TextField
            label="Telefone (link tel:)"
            value={draft.contact.phoneHref}
            onChange={(v) => setContact("phoneHref", v)}
          />
          <TextField
            label="WhatsApp exibido"
            value={draft.contact.whatsapp}
            onChange={(v) => setContact("whatsapp", v)}
          />
          <TextField
            label="WhatsApp (somente números)"
            value={draft.contact.whatsappNumber}
            onChange={(v) => setContact("whatsappNumber", v)}
          />
          <TextField
            label="E-mail comercial"
            value={draft.contact.email}
            onChange={(v) => setContact("email", v)}
          />
          <TextField
            label="Horário de atendimento"
            value={draft.contact.hours}
            onChange={(v) => setContact("hours", v)}
          />
          <TextField
            label="Endereço (linha 1)"
            value={draft.contact.addressLine1}
            onChange={(v) => setContact("addressLine1", v)}
          />
          <TextField
            label="Endereço (linha 2)"
            value={draft.contact.addressLine2}
            onChange={(v) => setContact("addressLine2", v)}
          />
          <TextField
            label="Busca do mapa"
            value={draft.contact.mapQuery}
            onChange={(v) => setContact("mapQuery", v)}
          />
          <TextField
            label="Instagram (URL)"
            value={draft.contact.instagram}
            onChange={(v) => setContact("instagram", v)}
          />
          <TextField
            label="LinkedIn (URL)"
            value={draft.contact.linkedin}
            onChange={(v) => setContact("linkedin", v)}
          />
        </div>
      </section>

      <section className="card p-6">
        <h2 className="text-lg font-bold">Publicações do Instagram (Tela Inicial)</h2>
        <div className="mt-4 grid gap-4">
          {(draft.instagramPosts || []).map((post, index) => (
            <div key={index} className="flex gap-2 items-end">
              <div className="flex-1">
                <TextField
                  label={`Publicação ${index + 1} (URL)`}
                  value={post}
                  onChange={(v) =>
                    setDraft((prev) => {
                      const posts = [...(prev.instagramPosts || [])];
                      posts[index] = v;
                      return { ...prev, instagramPosts: posts };
                    })
                  }
                />
              </div>
              <button
                type="button"
                onClick={() =>
                  setDraft((prev) => {
                    const posts = [...(prev.instagramPosts || [])];
                    posts.splice(index, 1);
                    return { ...prev, instagramPosts: posts };
                  })
                }
                className="btn h-11 border border-red-200 text-red-600 hover:bg-red-50"
              >
                Remover
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              setDraft((prev) => ({
                ...prev,
                instagramPosts: [...(prev.instagramPosts || []), ""],
              }))
            }
            className="btn justify-center border border-brand-200 text-brand-600 hover:bg-brand-50"
          >
            + Adicionar publicação
          </button>
        </div>
      </section>


      <section className="card p-6">
        <h2 className="text-lg font-bold">Números de credibilidade</h2>
        <div className="mt-4 grid gap-4">
          {draft.stats.map((stat, index) => (
            <div key={index} className="grid grid-cols-[90px_70px_1fr] gap-3">
              <TextField
                label="Valor"
                value={String(stat.value)}
                onChange={(v) =>
                  setDraft((prev) => {
                    const stats = [...prev.stats];
                    stats[index] = { ...stats[index], value: Number(v) || 0 };
                    return { ...prev, stats };
                  })
                }
              />
              <TextField
                label="Sufixo"
                value={stat.suffix}
                onChange={(v) =>
                  setDraft((prev) => {
                    const stats = [...prev.stats];
                    stats[index] = { ...stats[index], suffix: v };
                    return { ...prev, stats };
                  })
                }
              />
              <TextField
                label="Legenda"
                value={stat.label}
                onChange={(v) =>
                  setDraft((prev) => {
                    const stats = [...prev.stats];
                    stats[index] = { ...stats[index], label: v };
                    return { ...prev, stats };
                  })
                }
              />
            </div>
          ))}
        </div>
      </section>

      <div className="lg:col-span-2 flex flex-wrap items-center gap-4">
        <button
          type="button"
          onClick={() => void save()}
          disabled={saving}
          className="btn btn-primary"
        >
          {saving ? "Salvando..." : "Salvar alterações"}
          {saving ? null : <CheckIcon className="h-4 w-4" />}
        </button>
        {message ? (
          <p className="text-sm font-medium text-brand-700">{message}</p>
        ) : null}
      </div>
    </div>
  );
}

function TextField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="field-label">{label}</span>
      <input
        className="field"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

function TextArea({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="field-label">{label}</span>
      <textarea
        rows={4}
        className="field resize-y"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}
