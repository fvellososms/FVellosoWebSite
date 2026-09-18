import { eq } from "drizzle-orm";
import { db } from "@/db";
import { leads } from "@/db/schema";
import { isAuthenticated } from "@/lib/auth";

export const dynamic = "force-dynamic";

const allowedStatus = new Set(["novo", "em_contato", "ganho", "arquivado"]);

export async function PATCH(
  request: Request,
  context: { params: Promise<{ id: string }> },
) {
  if (!(await isAuthenticated())) {
    return Response.json({ ok: false }, { status: 401 });
  }

  const { id } = await context.params;
  const leadId = Number(id);
  if (!Number.isInteger(leadId)) {
    return Response.json({ ok: false }, { status: 400 });
  }

  const body = (await request.json().catch(() => ({}))) as { status?: string };
  if (!body.status || !allowedStatus.has(body.status)) {
    return Response.json(
      { ok: false, message: "Status inválido." },
      { status: 422 },
    );
  }

  await db
    .update(leads)
    .set({ status: body.status })
    .where(eq(leads.id, leadId));

  return Response.json({ ok: true });
}

export async function DELETE(
  _request: Request,
  context: { params: Promise<{ id: string }> },
) {
  if (!(await isAuthenticated())) {
    return Response.json({ ok: false }, { status: 401 });
  }

  const { id } = await context.params;
  const leadId = Number(id);
  if (!Number.isInteger(leadId)) {
    return Response.json({ ok: false }, { status: 400 });
  }

  await db.delete(leads).where(eq(leads.id, leadId));
  return Response.json({ ok: true });
}
