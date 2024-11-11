import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luiz Almeida - lhas.io",
  description: "Senior Software Engineer Passionate About Building Scalable Applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
        style={{ background: 'black'}}
      >
        {children}
      </body>
    </html>
  );
}
