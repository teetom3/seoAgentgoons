import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { Theme } from "@radix-ui/themes";
import Link from "next/link";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import ArticleGenerator from "@/components/ArticleGenerator";
import ProcessSection from "@/components/ProcessSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <Theme>
      <div className="min-h-screen">
        <Header />
        <HeroSection />
        <ProcessSection />

        <PricingSection />
        <Footer />
      </div>
    </Theme>
  );
}
