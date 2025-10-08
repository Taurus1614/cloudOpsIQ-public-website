import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CloudOpsIQ - Intelligent Operations, Automated Excellence",
  description: "CloudOpsIQ empowers enterprise teams to automate workflows, manage operations efficiently, and maintain complete control with enterprise-grade security and compliance.",
  keywords: ["IT Operations", "Workflow Automation", "Team Management", "Enterprise Software", "SaaS"],
  authors: [{ name: "CloudOpsIQ" }],
  openGraph: {
    title: "CloudOpsIQ - Intelligent Operations, Automated Excellence",
    description: "Transform Your IT Operations with Intelligent Automation",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CloudOpsIQ - Intelligent Operations, Automated Excellence",
    description: "Transform Your IT Operations with Intelligent Automation",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
