import { isAuthenticated } from "@/lib/auth";
import { getSiteContent, saveOverrides } from "@/lib/content";

export const dynamic = "force-dynamic";

export async function GET() {
  const content = await getSiteContent();
  return Response.json({ ok: true, content });
}

export async function PUT(request: Request) {
  if (!(await isAuthenticated())) {
    return Response.json({ ok: false }, { status: 401 });
  }

  const patch = (await request.json().catch(() => null)) as Record<
    string,
    unknown
  > | null;

  if (!patch || typeof patch !== "object" || Array.isArray(patch)) {
    return Response.json(
      { ok: false, message: "Conteúdo inválido." },
      { status: 422 },
    );
  }

  try {
    const content = await saveOverrides(patch);
    return Response.json({
      ok: true,
      content,
      message: "Conteúdo atualizado com sucesso.",
    });
  } catch (error) {
    console.error("[FVelloso] Erro ao salvar conteúdo:", error);
    return Response.json(
      { ok: false, message: "Não foi possível salvar as alterações." },
      { status: 500 },
    );
  }
}
