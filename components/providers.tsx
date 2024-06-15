"use client";

import { GuessesProvider } from "@/context/guesses";
import { ProgressProvider } from "@/context/progress";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProgressProvider>
        <GuessesProvider>{children}</GuessesProvider>
      </ProgressProvider>
    </>
  );
}
