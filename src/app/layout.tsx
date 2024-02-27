import { Footer } from "@/app/Footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import icon from "./favicon.ico";
const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {

  return {
    title: "Yoki Origins",
    description: "Sign up for the Astar zkEVM Event!",
    icons: [icon.src]
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang} className={inter.className}>
      <body>
        <main className="flex flex-col h-screen">
          <div className="flex-grow">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
