"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n, type Locale } from "@/i18n-config";
import { GB, ES } from "country-flag-icons/react/3x2";

export default function LocaleSwitch({
  lang,
}: {
  lang: Locale;
}) {
  const pathName = usePathname();
  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <Link
      className="fixed bottom-20 right-5 bg-white w-12 h-12 bg-opacity-80 backdrop-blur borderBlack shadow-2xl rounded-full flex items-center justify-center hover:scale-110 active:scale-105 transition-all dark:bg-gray-950 dark:border dark:border-white dark:border-opacity-40"
      href={lang === i18n.locales[0] ? `/${i18n.locales[1]}` : "/"}
    >
      {lang === i18n.locales[0] ? <GB className="w-6 rounded" /> : <ES className="w-6 rounded" />}
    </Link>
  );
}
