import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layout/Sidebar";
import { TopHeader as Topbar } from "@/components/layout/TopHeader";

import { DateProvider } from "@/context/DateContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI-COO Platform",
  description: "Enterprise Intelligence Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <DateProvider>
          <div className="flex h-screen w-full">
            <Sidebar />
            <main className="flex-1 flex flex-col min-w-0 bg-background overflow-hidden relative">
              <Topbar />
              {children}
            </main>
          </div>
        </DateProvider>
      </body>
    </html>
  );
}
