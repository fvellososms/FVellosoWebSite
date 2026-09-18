import { createHash, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const ADMIN_COOKIE = "fv_admin_session";

function adminPassword() {
  return process.env.ADMIN_PASSWORD ?? "fvelloso2026";
}

export function sessionToken() {
  return createHash("sha256")
    .update(`fvelloso::${adminPassword()}`)
    .digest("hex");
}

export function isValidPassword(candidate: string) {
  const expected = Buffer.from(adminPassword());
  const given = Buffer.from(candidate ?? "");
  if (expected.length !== given.length) return false;
  return timingSafeEqual(expected, given);
}

export async function isAuthenticated() {
  const store = await cookies();
  const token = store.get(ADMIN_COOKIE)?.value;
  return Boolean(token) && token === sessionToken();
}
