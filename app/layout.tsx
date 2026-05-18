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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
