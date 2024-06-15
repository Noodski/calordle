"use client";

import { useGuesses, useGuessesDispatch } from "@/context/guesses";

export default function Guesses() {
  const guesses = useGuesses();
  const dispatch = useGuessesDispatch();

  if (!guesses?.length) return null;

  return (
    <div className="flex flex-col gap-y-2">
      {guesses.map((guess) => (
        <div
          key={guess.index}
          className={`bg-white py-2 px-4 rounded-md text-center border-black ${
            guess.status === "higher" ? `bg-red-500` : ``
          } ${guess.status === "lower" ? `bg-yellow-500` : ``} ${
            guess.status === "correct" ? `bg-green-500` : ``
          }`}
        >
          {guess.value} {guess.status === "higher" && <>⬆️</>}
          {guess.status === "lower" && <>⬇️</>}
          {guess.status === "correct" && <>✔️</>}
        </div>
      ))}
    </div>
  );
}
