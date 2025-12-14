"use client";

import { ReactNode } from "react";
import { ThemeProvider, LanguageProvider } from "@/context";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
}
