"use client";
import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";

// thats the notification provider, err, yeah thats it lol 

export type NotificationType = "error" | "success";
export type Notification = { type: NotificationType; message: string } | null;

const NotificationContext = createContext<{
  showNotification: (type: NotificationType, message: string) => void;
} | undefined>(undefined);

export function useNotification() {
  const ctx = useContext(NotificationContext);
  if (!ctx) throw new Error("useNotification must be used within NotificationProvider");
  return ctx;
}

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [notification, setNotification] = useState<Notification>(null);
  const [bloopOut, setBloopOut] = useState(false);

  const showNotification = useCallback((type: NotificationType, message: string) => {
    setNotification({ type, message });
    setBloopOut(false);
    setTimeout(() => {
      setBloopOut(true);
      setTimeout(() => setNotification(null), 350); 
    }, 3000);
  }, []);

  return (
    <NotificationContext.Provider value={{ showNotification }}>
       {notification && (
        <div className={`fixed top-6 right-6 px-6 py-3 rounded-xl shadow-lg z-[100] font-semibold flex items-center gap-3
          bg-background text-blue-800 border border-neutral
          ${bloopOut ? 'animate-bloopOut' : 'animate-bloopIn'}
        `}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {notification.type === 'error' ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            )}
          </svg>
          {notification.message}
           <style jsx>{`
            @keyframes bloopIn {
              0% {
                opacity: 0;
                transform: scale(0.7, 0.7);
              }
              60% {
                opacity: 1;
                transform: scale(1.05, 1.12);
              }
              100% {
                opacity: 1;
                transform: scale(1, 1);
              }
            }
            @keyframes bloopOut {
              0% {
                opacity: 1;
                transform: scale(1, 1);
              }
              100% {
                opacity: 0;
                transform: scale(0.7, 0.7);
              }
            }
            .animate-bloopIn {
              animation: bloopIn 350ms cubic-bezier(.4,0,.2,1);
            }
            .animate-bloopOut {
              animation: bloopOut 350ms cubic-bezier(.4,0,.2,1);
            }
          `}</style>        </div>
      )}      {children}
    </NotificationContext.Provider>
  );
}
