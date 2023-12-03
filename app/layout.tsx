import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import { Header, Footer } from "@/components";
import { ThemeProvider } from "../components/ThemeProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bekzod Isakov",
  description: "Personal portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <div className='min-h-screen max-w-[900px] m-auto flex flex-col py-6 px-2 overflow-x-hidden'>
          <Header />
          <main className='flex flex-col gap-20 grow px-1 sm:px-12 mb-20'>
            <ThemeProvider attribute='class'>{children}</ThemeProvider>
          </main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
