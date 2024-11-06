import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KidFit",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-zinc-900">
        {children}
      </body>
    </html>
  );
}
