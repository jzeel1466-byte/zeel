import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zeel Jain | Cinematic Storyteller",
  description:
    "Portfolio for Zeel Jain, a video editor, graphic designer, and cinematographer."
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
