import React from "react";
import SidebarNav from "../components/SidebarNav";
import { NotificationProvider } from "../components/NotificationManager";

// Optional: if you still want to use fonts, import via CSS or Google Fonts in index.html
import "../index.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen bg-neutral p-4 flex gap-4 font-sans">
      <NotificationProvider>
        {/* Sidebar */}
        <aside className="w-72 bg-neutral p-4 rounded-lg border border-neutral flex flex-col">
          <SidebarNav />
        </aside>

        {/* Main content */}
        <main className="flex-1 rounded-xl bg-background flex flex-col overflow-hidden border border-neutral">
          <div className="overflow-y-auto p-8">{children}</div>
        </main>
      </NotificationProvider>
    </div>
  );
}

