import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import I18nProvider from "@/components/I18nProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "伊理教育 Yvo EdTech",
  description: "Yvo Wagian - Learning Experience Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body className={`${inter.className} bg-gray-50 text-gray-900 font-sans antialiased`}>
        <I18nProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
              {children}
            </main>
            <Footer />
          </div>
        </I18nProvider>
      </body>
    </html>
  );
}
