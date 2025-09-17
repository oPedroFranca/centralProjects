"use client";

import { usePathname } from 'next/navigation';
import LayoutStructure from '@/shared/layout/LayoutStructure';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from 'sonner';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isAuthPage = pathname === '/login' || pathname === '/register';

  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {isAuthPage ? (
          <>{children}</>
        ) : (
          <LayoutStructure>{children}</LayoutStructure>
        )}

        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
