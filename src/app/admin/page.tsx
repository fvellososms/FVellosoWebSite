import type { Metadata } from "next";
import AdminPanel from "@/components/admin/AdminPanel";
import { getSiteContent } from "@/lib/content";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Painel administrativo",
  description: "Área restrita da equipe FVelloso.",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  const content = await getSiteContent();
  return (
    <div className="min-h-[70vh] bg-surface">
      <AdminPanel initial={content} />
    </div>
  );
}
