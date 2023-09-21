import getRandomQuote from "@/lib/getRandomQuotes";
import { NextResponse } from "next/server";

export const GET = async () => {
  const results = await getRandomQuote();
  return NextResponse.json(results);
};
