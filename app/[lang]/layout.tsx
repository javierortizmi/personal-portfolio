import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Toaster } from "sonner";

import Header from "@/components/header";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";

import ThemeContextProvider from "@/context/theme-context";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Locale, i18n } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import LocaleSwitch from "@/components/locale-switch";
import DictionaryContextProvider from "@/context/dictionary-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Javier | Personal Portfolio",
  description:
    "Welcome to my personal portfolio! I am a Telecommunications Engineer Student at the University of Carlos III Madrid. I am passionate about technology and I love to learn new things. I am currently learning web development and I am looking for an internship to improve my skills.",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);

  return (
    <html lang={params.lang} className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 sm:transition-colors`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[7rem] sm:w-[68.75rem] dark:bg-[#946263]" />
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]" />

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <DictionaryContextProvider
              dictionary={dictionary}
              lang={params.lang}
            >
              <Header />
              {children}
              <Footer />
              <LocaleSwitch />
              <ThemeSwitch />
              <Toaster position="bottom-left" />
            </DictionaryContextProvider>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
