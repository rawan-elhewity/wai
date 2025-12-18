"use client";

import { ReactNode } from "react";
import { ThemeProvider, LanguageProvider } from "@/context";
import { LazyMotion, domAnimation } from "framer-motion";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation}>
      <ThemeProvider>
        <LanguageProvider>{children}</LanguageProvider>
      </ThemeProvider>
    </LazyMotion>
  );
}
