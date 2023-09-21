import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";

export const nunito = Nunito({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Quotify",
  description: "A Quotes Generator created with NextJs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <main className="flex flex-col gap-8 items-center justify-center mx-auto p-12 bg-slate-900 min-h-screen text-slate-300">
          <span className=" text-5xl text-white font-bold">Quotify</span>
          {children}
        </main>
      </body>
    </html>
  );
}
