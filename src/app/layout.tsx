import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "চুলের বৃদ্ধির জন্য Hair Surge Shampoo",
  description: "md shafikul islam <mdshafikuli421@gmail.com>",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={""}>{children}</body>
    </html>
  );
}
