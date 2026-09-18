import { cookies } from "next/headers";
import { ADMIN_COOKIE, isAuthenticated, isValidPassword, sessionToken } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json({ ok: true, authenticated: await isAuthenticated() });
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as {
    password?: string;
  };

  if (!body.password || !isValidPassword(body.password)) {
    return Response.json(
      { ok: false, message: "Senha incorreta." },
      { status: 401 },
    );
  }

  const store = await cookies();
  store.set(ADMIN_COOKIE, sessionToken(), {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 8,
  });

  return Response.json({ ok: true });
}

export async function DELETE() {
  const store = await cookies();
  store.delete(ADMIN_COOKIE);
  return Response.json({ ok: true });
}
