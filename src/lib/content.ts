import { eq } from "drizzle-orm";
import { db } from "@/db";
import { siteContent } from "@/db/schema";
import {
  defaultContent,
  mergeContent,
  type SiteContent,
} from "@/lib/site-content";

export const CONTENT_KEY = "site";

/** Lê o conteúdo publicado. Se o banco não estiver disponível, usa os defaults. */
export async function getSiteContent(): Promise<SiteContent> {
  try {
    const rows = await db
      .select()
      .from(siteContent)
      .where(eq(siteContent.key, CONTENT_KEY))
      .limit(1);
    return mergeContent(rows[0]?.value ?? {});
  } catch {
    return defaultContent;
  }
}

/** Lê apenas os overrides salvos (usado pelo painel administrativo). */
export async function getOverrides(): Promise<Record<string, unknown>> {
  try {
    const rows = await db
      .select()
      .from(siteContent)
      .where(eq(siteContent.key, CONTENT_KEY))
      .limit(1);
    return (rows[0]?.value as Record<string, unknown>) ?? {};
  } catch {
    return {};
  }
}

export async function saveOverrides(patch: Record<string, unknown>) {
  const current = await getOverrides();
  // Persistimos o patch mesclado sobre o override anterior (não sobre o default),
  // para manter o documento enxuto.
  const merged = plainMerge(current, patch);
  await db
    .insert(siteContent)
    .values({ key: CONTENT_KEY, value: merged, updatedAt: new Date() })
    .onConflictDoUpdate({
      target: siteContent.key,
      set: { value: merged, updatedAt: new Date() },
    });
  return mergeContent(merged);
}

function plainMerge(
  base: Record<string, unknown>,
  patch: Record<string, unknown>,
): Record<string, unknown> {
  const out: Record<string, unknown> = { ...base };
  for (const [key, value] of Object.entries(patch)) {
    const prev = out[key];
    if (
      value &&
      typeof value === "object" &&
      !Array.isArray(value) &&
      prev &&
      typeof prev === "object" &&
      !Array.isArray(prev)
    ) {
      out[key] = plainMerge(
        prev as Record<string, unknown>,
        value as Record<string, unknown>,
      );
    } else {
      out[key] = value;
    }
  }
  return out;
}
