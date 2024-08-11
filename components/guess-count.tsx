"use client";

import useGuessCount from "@/hooks/use-guess-count";
import Result from "./result";
import useAnswer from "@/hooks/use-answer";

export default function GuessCount() {
  const guessCount = useGuessCount();
  const answer = useAnswer();

  return (
    <div className="mb-2 flex flex-col items-center justify-center text-center text-[18px] font-bold">
      <p className="rounded-md bg-gray px-4 py-2">Guess: {guessCount} / 6</p>
      <Result progress="success">
        You guessed correctly! 🎉 The correct answer is {answer}.
      </Result>
      <Result progress="fail">
        Sorry, you didn&apos;t guess correctly. 😢
      </Result>
    </div>
  );
}
