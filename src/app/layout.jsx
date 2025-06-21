import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/custom/navigation/Navigation";
import Footer from "@/components/custom/navigation/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rod Power - Brampton City Councillor | Your Voice for Change",
  description: "Rod Power is a proud Bramptonian dedicated to public safety, youth programs, and community engagement. Working for a stronger, safer, and more connected Brampton.",
  keywords: "Rod Power, Brampton, City Councillor, Politics, Public Safety, Youth Programs, Community Engagement, Brampton Politics",
  author: "Rod Power",
  openGraph: {
    title: "Rod Power - Brampton City Councillor",
    description: "Working for a stronger, safer, and more connected Brampton.",
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
