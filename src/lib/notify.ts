import type { LeadInput } from "@/lib/leads";

/**
 * Envia a notificação do lead para a equipe comercial.
 * Usa a API da Resend quando RESEND_API_KEY estiver configurada;
 * caso contrário registra no log do servidor (o lead sempre fica salvo no banco).
 */
export async function notifyNewLead(
  lead: LeadInput,
  destination: string,
): Promise<"enviado" | "pendente"> {
  const apiKey = process.env.RESEND_API_KEY;
  const subject = `Novo contato pelo site — ${lead.name}${
    lead.company ? ` (${lead.company})` : ""
  }`;

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#2f2f2f">
      <h2 style="color:#0b3c6b;margin-bottom:4px">Nova solicitação pelo site FVelloso</h2>
      <p style="color:#4a4a4a;margin-top:0">Origem: <strong>${escapeHtml(lead.source)}</strong></p>
      <table cellpadding="6" style="border-collapse:collapse;font-size:14px">
        <tr><td><strong>Nome</strong></td><td>${escapeHtml(lead.name)}</td></tr>
        <tr><td><strong>Empresa</strong></td><td>${escapeHtml(lead.company || "-")}</td></tr>
        <tr><td><strong>E-mail</strong></td><td>${escapeHtml(lead.email)}</td></tr>
        <tr><td><strong>Telefone</strong></td><td>${escapeHtml(lead.phone)}</td></tr>
        <tr><td><strong>Serviço</strong></td><td>${escapeHtml(lead.service || "-")}</td></tr>
        <tr><td valign="top"><strong>Mensagem</strong></td><td>${escapeHtml(lead.message).replace(/\n/g, "<br/>")}</td></tr>
      </table>
    </div>`;

  if (!apiKey) {
    console.info(
      `[FVelloso] Lead recebido (e-mail não configurado). Destino: ${destination} | ${subject}`,
    );
    return "pendente";
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.LEAD_FROM_EMAIL ?? "FVelloso <onboarding@resend.dev>",
        to: [destination],
        reply_to: lead.email,
        subject,
        html,
      }),
    });
    if (!response.ok) {
      console.error("[FVelloso] Falha ao enviar e-mail:", await response.text());
      return "pendente";
    }
    return "enviado";
  } catch (error) {
    console.error("[FVelloso] Erro ao enviar e-mail:", error);
    return "pendente";
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
