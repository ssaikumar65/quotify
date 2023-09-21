import getRandomQuote from "@/lib/getRandomQuotes";
import Quote from "@/components/Quote";
import { Suspense } from "react";

export default async function Home() {
  const randomQuote = await getRandomQuote();

  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Quote {...randomQuote} />
    </Suspense>
  );
}
