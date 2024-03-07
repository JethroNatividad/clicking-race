import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GameProvider } from "@/store/game";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clicking Race",
  description: "Clicking Race Game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GameProvider>
        <body className={inter.className}>{children}</body>
      </GameProvider>
    </html>
  );
}
