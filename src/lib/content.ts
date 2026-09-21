import { defaultContent, type SiteContent } from "@/lib/site-content";

export const CONTENT_KEY = "site";

/** Retorna o conteúdo estático do site. */
export async function getSiteContent(): Promise<SiteContent> {
  return defaultContent;
}
