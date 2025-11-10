import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SidebarNav from "../components/SidebarNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Realityware",
  description: "Real problems. Real solutions.",
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="h-screen bg-neutral p-4 flex gap-4">
          <aside className="w-72 bg-neutral p-4 rounded-lg border border-neutral flex flex-col">
            <SidebarNav />
          </aside>
          <main className="flex-1 rounded-xl bg-background flex flex-col overflow-hidden border border-neutral">
            <div className="overflow-y-auto p-8">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
