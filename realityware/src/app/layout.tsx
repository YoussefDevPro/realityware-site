import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
          <aside className="w-72 bg-neutral p-4 rounded-lg border border-neutral">
            <nav className="h-full flex flex-col text-foreground text-center space-y-4">
              <div className="text-3xl py-4">Realityware</div>
              <ul className="text-xl">
                <li className="my-8"><a href="/hub">Hub</a></li>
                <li className="my-8"><a href="/gallery">Gallery</a></li>
                <li className="my-8"><a href="/projects">Projects</a></li>
                <li className="my-8"><a href="/voting">Voting</a></li>
                <li className="my-8"><a href="/store">Store</a></li>
                <li className="my-8"><a href="/world">World</a></li>
              </ul>
              <div className="pt-8"><a href="/profile">Profile</a></div>
            </nav>
          </aside>
          <main className="flex-1 rounded-lg bg-background flex flex-col overflow-hidden border border-neutral">
            <div className="overflow-y-auto p-8">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}