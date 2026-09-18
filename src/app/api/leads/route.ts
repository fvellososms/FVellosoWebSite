import { desc } from "drizzle-orm";
import { db } from "@/db";
import { leads } from "@/db/schema";
import { isAuthenticated } from "@/lib/auth";
import { getSiteContent } from "@/lib/content";
import { normalizeLead, validateLead } from "@/lib/leads";
import { notifyNewLead } from "@/lib/notify";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return Response.json(
      { ok: false, message: "Requisição inválida." },
      { status: 400 },
    );
  }

  const input = normalizeLead(payload);

  // Honeypot anti-spam: campo invisível preenchido = bot.
  if (input.website) {
    return Response.json({ ok: true, id: null });
  }

  const requireService = input.source === "orcamento";
  const errors = validateLead(input, { requireService });

  if (Object.keys(errors).length > 0) {
    return Response.json(
      {
        ok: false,
        errors,
        message: "Verifique os campos destacados e tente novamente.",
      },
      { status: 422 },
    );
  }

  try {
    const content = await getSiteContent();
    const notified = await notifyNewLead(input, content.contact.email);

    const [created] = await db
      .insert(leads)
      .values({
        name: input.name,
        company: input.company || null,
        email: input.email,
        phone: input.phone,
        service: input.service || null,
        message: input.message,
        source: input.source,
        notified,
      })
      .returning({ id: leads.id });

    return Response.json({
      ok: true,
      id: created?.id ?? null,
      message:
        "Recebemos sua solicitação! Nossa equipe comercial entrará em contato em até 1 dia útil.",
    });
  } catch (error) {
    console.error("[FVelloso] Erro ao salvar lead:", error);
    return Response.json(
      {
        ok: false,
        message:
          "Não foi possível registrar sua solicitação agora. Tente novamente ou fale conosco pelo WhatsApp.",
      },
      { status: 500 },
    );
  }
}

export async function GET() {
  if (!(await isAuthenticated())) {
    return Response.json({ ok: false }, { status: 401 });
  }

  const rows = await db
    .select()
    .from(leads)
    .orderBy(desc(leads.createdAt))
    .limit(300);

  return Response.json({ ok: true, leads: rows });
}
