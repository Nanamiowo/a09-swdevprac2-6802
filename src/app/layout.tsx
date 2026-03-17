"use client";

import "./globals.css";
import TopMenu from "@/components/TopMenu";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <TopMenu />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}