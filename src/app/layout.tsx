// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { ModeProvider } from "@/context/ModeContext";
import Navbar from "@/components/Navbar";
import ContactBar from "@/components/ContactBar";
import Footer from "@/components/Footer";
import AppShell from "@/components/AppShell";

export const metadata: Metadata = {
  title: "Nicholas Ho | Portfolio",
  description: "Software Developer & IT Specialist Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        <ModeProvider>
          <AppShell>
            <Navbar />
            <main className="pt-20 pb-36 sm:pb-28 min-h-screen">
              {children}
            </main>
            <ContactBar />
            <Footer />
          </AppShell>
        </ModeProvider>
      </body>
    </html>
  );
}
