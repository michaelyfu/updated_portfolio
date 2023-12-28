"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="dark:bg-slate-800">
        <ThemeProvider enableSystem={true} attribute="class">
          <main className="bg-white text-black dark:bg-slate-800 dark:text-white">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
