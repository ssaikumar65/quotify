import getAllQuotes from "@/lib/getAllQuotes";
import { NextResponse } from "next/server";

export const GET = async () => {
  const results = await getAllQuotes();
  return NextResponse.json(results);
};
