import type { Metadata } from "next";
import { Bricolage_Grotesque, Darker_Grotesque } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const darker = Darker_Grotesque({
  variable: "--font-darker",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bentegri Mohamed Yacine",
  description: "Full-stack javascript developer - Medea Algeria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-screen overflow-x-hidden">
      <body
        className={`${bricolage.variable} ${darker.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
