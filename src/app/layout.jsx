import { Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/custom/navigation/Navigation";
import Footer from "@/components/custom/navigation/Footer";
import WarningSupressor from "@/components/WarningSupressor";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
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
        suppressHydrationWarning
        className={`${montserrat.variable} antialiased`}
      >
        <WarningSupressor />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
