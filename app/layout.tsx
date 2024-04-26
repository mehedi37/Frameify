import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Headers from "@/components/header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Assignment",
  description: "Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} pt-16`}>
        <Headers />
        <div className="">{children}</div>
      </body>
    </html>
  );
}
