import { getDictionary } from "@/get-dictionary";
import data_en from "@/locales/en.json";

export type SectionName = (typeof data_en.links)[number]["name"];

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;