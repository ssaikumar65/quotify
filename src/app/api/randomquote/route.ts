import getRandomQuote from "@/lib/getRandomQuotes";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const results = await getRandomQuote();
  return NextResponse.json(results);
}
