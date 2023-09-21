import { NextResponse } from "next/server";
import { drizzle } from "drizzle-orm/postgres-js";
import { quotes, authors } from "@/db/schema";
import { eq } from "drizzle-orm";
import { Quote } from "@/types";
import postgres from "postgres";
const prevQuoteObj = {
  prev: 1,
  setPrev: function (num: number) {
    this.prev = num;
  },
};
export async function GET(request: Request) {
  const client = postgres(process.env.NEXT_PUBLIC_DATABASE_URL!);
  const db = drizzle(client);

  const results: Quote[] = await db
    .select({
      quote: quotes.quote,
      author: authors.author,
    })
    .from(quotes)
    .innerJoin(authors, eq(quotes.authorId, authors.id));
  let randomIndex = prevQuoteObj.prev;

  while (randomIndex === prevQuoteObj.prev) {
    randomIndex = Math.floor(Math.random() * results.length);
  }

  prevQuoteObj.setPrev(randomIndex);

  return NextResponse.json(results[randomIndex]);
}
