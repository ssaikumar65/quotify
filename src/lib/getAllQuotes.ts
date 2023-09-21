import { drizzle } from "drizzle-orm/postgres-js";
import { quotes, authors } from "@/db/schema";
import { eq } from "drizzle-orm";
import { Quote } from "@/types";
import postgres from "postgres";

export default async function getAllQuotes(): Promise<Quote[]> {
  const client = postgres(
    "postgres://postgres.qqcoxpozypdmxddkpkjg:Pushpalatha%40202@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"
  );
  const db = drizzle(client);

  const results: Quote[] = await db
    .select({
      quote: quotes.quote,
      author: authors.author,
    })
    .from(quotes)
    .innerJoin(authors, eq(quotes.authorId, authors.id));

  return results;
}
