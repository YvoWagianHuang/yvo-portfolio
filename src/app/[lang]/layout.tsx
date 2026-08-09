import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDictionary } from "@/dictionaries";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "伊理教育 YiliEdTech",
  description: "Yvo Wagian - Learning Experience Designer",
};

export async function generateStaticParams() {
  return [{ lang: 'zh' }, { lang: 'en' }, { lang: 'fi' }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'zh' | 'en' | 'fi');

  return (
    <html lang={lang}>
      <body className={`${inter.className} bg-gray-50 text-gray-900 font-sans antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Navbar lang={lang as 'zh' | 'en' | 'fi'} dict={dict} />
          <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
          <Footer lang={lang as 'zh' | 'en' | 'fi'} dict={dict} />
        </div>
      </body>
    </html>
  );
}
