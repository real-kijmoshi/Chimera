import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";



export const metadata: Metadata = {
  title: "Chimera - your way to talk to the world",
  description: "Chimera is a platform that allows you to talk to the world in a way that is more personal and engaging than ever before.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <body>
        {children}
      </body>
    </html>
  );
}
