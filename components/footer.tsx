import { Dictionary } from '@/lib/types';
import React from 'react'

export default function Footer({
  dictionary,
}: {
  dictionary: Dictionary;
}) {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} Javier Ortiz Millan. {dictionary.footerData.rights}
      </small>
      <p className="text-xs mb-2">
        <span className="font-semibold">{dictionary.footerData.aboutWebsite1}</span>
        {dictionary.footerData.aboutWebsite2} React & Next.js (App Router & Server Actions), Typescript,
        Tailwind CSS, Framer Motion, React Email, Resend, Vercel hosting.
      </p>
      <a
        href="https://github.com/javierortizmi/PersonalPortfolio"
        className="hover:underline"
        target="_blank"
      >
        <p className="text-xs font-semibold">
          {dictionary.footerData.code} <span className="font-normal">(GitHub)</span>
        </p>
      </a>
    </footer>
  );
}
