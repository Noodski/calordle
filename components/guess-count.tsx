"use client";

import { useGuesses } from "@/context/guesses";
import { useProgress } from "@/context/progress";

export default function GuessCount() {
  const guesses = useGuesses();
  const progress = useProgress();

  return (
    <div className="flex flex-col items-center justify-center gap-y-4 text-center text-[18px] font-bold">
      <p className="rounded-md bg-gray px-4 py-2">
        Guess: {guesses?.length ?? 0} / 6
      </p>
      {progress === "success" && (
        <p className="rounded-md bg-green px-4 py-2 text-white">
          You guessed correctly! 🎉
        </p>
      )}
      {progress === "fail" && (
        <p className="rounded-md bg-red px-4 py-2 text-white">
          Sorry, you didn&apos;t guess correctly. 😢
        </p>
      )}
    </div>
  );
}
