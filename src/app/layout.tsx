import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sardeswari Restaurant",
  description: "We are serving the best food in Badrinath.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Playwrite+DE+Grund:wght@100..400&display=swap" rel="stylesheet"/>
      </head>
      <body className="open-sans-font">
        {children}
      </body>
    </html>
  );
}
