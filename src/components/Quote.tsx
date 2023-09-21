"use client";
import { Quote } from "@/types";
import { useRouter } from "next/navigation";

export default async function Quote(randomQuote: Quote) {
  const router = useRouter();

  return (
    <>
      <section className="flex flex-col p-4 gap-12 w-[650px] h-[350px] shadow-2xl bg-gradient-to-tr from-slate-900 to-slate-800 rounded-lg justify-center items-center transition-opacity ease-in-out duration-1000">
        <p className="text-4xl font-extrabold text-center max-w-3xl leading-normal">
          {randomQuote.quote}
        </p>
        <p className="text-xl text-center">-- {randomQuote.author}</p>
      </section>
      <button
        type="submit"
        className="px-4 py-2 rounded-lg text-black max-w-xs bg-slate-200 hover:cursor-pointer hover:bg-white "
        onClick={() => {
          router.refresh();
        }}
      >
        Refresh
      </button>
    </>
  );
}
