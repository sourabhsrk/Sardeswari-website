import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Best Restaurant in Badrinath | Sardeswari Restaurant",
  description: "We are serving the best food in Badrinath. Enjoy the finest South Indian, North Indian, Indo-Chinese, Marwari, Gujarati and Punjabi dishes.",
  keywords: ["Best vegetarian restaurant in Badrinath", "Gujrati, Punjabi Food in Badrinath", "Best Dosa", "Best Aloo Paratha", "Best Chole Bhature", "Best Coffee"],
  icons: {
    icon: "/favicon.png",
  },
  robots: {
    index: true, // Allow indexing
    follow: true, // Allow following links on the page
  },
  openGraph: {
    title: "Best Restaurant in Badrinath | Sardeswari Restaurant",
  description: "We are serving the best food in Badrinath. Enjoy the finest South Indian, North Indian, Indo-Chinese, Marwari, Gujarati and Punjabi dishes.",
    url: "https://www.sardeswari.in",
    siteName: "Sardeswari Restaurant",
    images: [
      {
        url: "https://www.sardeswari.in/SocialMediaImages/media12.jpg",
        alt: "Restaurant Image",
      },
    ],
    type: "website"
  }
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
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
