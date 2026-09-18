import {
  index,
  jsonb,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * Leads gerados pelos formulários de contato (Home) e orçamento.
 */
export const leads = pgTable(
  "leads",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 160 }).notNull(),
    company: varchar("company", { length: 160 }),
    email: varchar("email", { length: 180 }).notNull(),
    phone: varchar("phone", { length: 40 }).notNull(),
    service: varchar("service", { length: 120 }),
    message: text("message").notNull(),
    source: varchar("source", { length: 40 }).notNull().default("home"),
    status: varchar("status", { length: 30 }).notNull().default("novo"),
    notified: varchar("notified", { length: 30 }).notNull().default("pendente"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => [index("leads_created_at_idx").on(table.createdAt)],
);

/**
 * Conteúdo editável do site (UC06 — administrador atualiza conteúdo).
 * Guardamos um documento JSON por chave, mesclado com os defaults do código.
 */
export const siteContent = pgTable("site_content", {
  key: varchar("key", { length: 60 }).primaryKey(),
  value: jsonb("value").notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export type Lead = typeof leads.$inferSelect;
export type NewLead = typeof leads.$inferInsert;
