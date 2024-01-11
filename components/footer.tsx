import React from 'react'

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} Javier Ortiz Millan. All Rights Reserved.
      </small>
      <p className="text-xs mb-2">
        <span className="font-semibold">About this website: </span>
        built with React & Next.js (App Router & Server Actions), Typescript,
        Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.
      </p>
      <a
        href="https://github.com/javierortizmi/PersonalPortfolio"
        className="hover:underline"
        target="_blank"
      >
        <p className="text-xs font-semibold">
          Source Code <span className="font-normal">(GitHub)</span>
        </p>
      </a>
    </footer>
  );
}
