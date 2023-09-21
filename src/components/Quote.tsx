"use client";
import { useState, useEffect } from "react";
import quotes from "@/utils/data";
import Image from "next/image";

type QuoteProps = {
  id: number;
  quote: string;
  author: string;
};
const Quote = () => {
  const [randomQuote, setRandomQuote] = useState<QuoteProps>();

  useEffect(() => {
    getRandomQuote();
  }, []);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
  };

  return (
    <>
      <section className="flex flex-col relative p-4 w-[400px] md:w-[650px] h-[350px] shadow-2xl bg-gradient-to-tr from-slate-900 to-slate-800 rounded-lg justify-center items-center transition-opacity ease-in-out duration-1000">
        <div className=" absolute -top-10 -left-10">
          <Image width="70" height="70" src="/quotel.png" alt="quote-left" />
        </div>
        <div className=" absolute -bottom-10 -right-10">
          <Image width="70" height="70" src="/quoter.png" alt="quote-left" />
        </div>
        <div className=" text-2xl md:text-3xl h-5/6 px-8 font-extrabold flex items-center justify-center max-w-3xl">
          {randomQuote?.quote}
        </div>
        <div className="text-xl px-4 italic h-1/6 flex items-center justify-end w-full text-slate-400">
          {randomQuote?.author}
        </div>
      </section>
      <button
        type="submit"
        className="px-4 py-2 rounded-lg font-bold max-w-xs border border-slate-300 hover:cursor-pointer hover:text-black hover:bg-slate-300 "
        onClick={getRandomQuote}
      >
        Generate
      </button>
    </>
  );
};
export default Quote;
