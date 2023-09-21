import {
  pgTable,
  unique,
  pgEnum,
  bigint,
  varchar,
  foreignKey,
  integer,
} from "drizzle-orm/pg-core";

import { sql } from "drizzle-orm";
export const keyStatus = pgEnum("key_status", [
  "default",
  "valid",
  "invalid",
  "expired",
]);
export const keyType = pgEnum("key_type", [
  "aead-ietf",
  "aead-det",
  "hmacsha512",
  "hmacsha256",
  "auth",
  "shorthash",
  "generichash",
  "kdf",
  "secretbox",
  "secretstream",
  "stream_xchacha20",
]);
export const factorType = pgEnum("factor_type", ["totp", "webauthn"]);
export const factorStatus = pgEnum("factor_status", ["unverified", "verified"]);
export const aalLevel = pgEnum("aal_level", ["aal1", "aal2", "aal3"]);
export const codeChallengeMethod = pgEnum("code_challenge_method", [
  "s256",
  "plain",
]);

export const authors = pgTable(
  "authors",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: bigint("id", { mode: "number" }).primaryKey().notNull(),
    author: varchar("author", { length: 255 }).notNull(),
  },
  (table) => {
    return {
      authorsIdKey: unique("authors_id_key").on(table.id),
      authorsAuthorKey: unique("authors_author_key").on(table.author),
    };
  }
);

export const quotes = pgTable(
  "quotes",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: bigint("id", { mode: "number" }).primaryKey().notNull(),
    quote: varchar("quote", { length: 255 }).notNull(),
    authorId: integer("author_id")
      .notNull()
      .references(() => authors.id),
  },
  (table) => {
    return {
      quotesQuoteKey: unique("quotes_quote_key").on(table.quote),
    };
  }
);
