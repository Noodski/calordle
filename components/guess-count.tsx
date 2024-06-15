"use client";

import { useGuesses } from "@/context/guesses";
import { useProgress } from "@/context/progress";

export default function GuessCount() {
  const guesses = useGuesses();
  const progress = useProgress();

  return (
    <>
      <p>Guess: {guesses?.length ?? 0} / 6</p>
      {progress === "success" && <p>You guessed correctly! 🎉</p>}
      {progress === "fail" && <p>Sorry, you didn&apos;t guess correctly. 😢</p>}
    </>
  );
}
