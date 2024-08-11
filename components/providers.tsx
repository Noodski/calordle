"use client";

import { GuessesProvider } from "@/context/guesses";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GuessesProvider>{children}</GuessesProvider>
    </>
  );
}
