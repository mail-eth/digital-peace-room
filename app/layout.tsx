import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Digital Peace Room - A quiet place for loud minds",
  description: "A calm emotional digital sanctuary for overwhelmed people. Late night rain, quiet jazz cafe, emotional minimalism.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased font-linear">
        {children}
      </body>
    </html>
  );
}
