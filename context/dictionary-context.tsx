"use client";

import { Dictionary } from "@/lib/types";
import React, { createContext, useContext } from "react";
import { Locale } from "@/i18n-config";

type DictionaryContextType = {
  dictionary: Dictionary;
  lang: Locale;
};

const DictionaryContext = createContext<DictionaryContextType | null>(null);

export default function DictionaryContextProvider({
  children,
  dictionary,
  lang,
}: {
  children: React.ReactNode;
  dictionary: Dictionary;
  lang: Locale;
}) {
  return (
    <DictionaryContext.Provider value={{ dictionary, lang }}>
      {children}
    </DictionaryContext.Provider>
  );
}

export function useDictionary() {
  const context = useContext(DictionaryContext);

  if (context === null) {
    throw new Error(
      "useDictionary must be used within a DictionaryContextProvider"
    );
  }

  return context;
}