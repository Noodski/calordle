"use client";

import { useGuesses } from "@/context/guesses";
import { useProgress } from "@/context/progress";

export default function Share() {
  const progress = useProgress();
  const guesses = useGuesses();

  if (progress !== "success" && progress !== "fail") return null;

  return (
    <button
      className="bg-green-500 text-white py-2 px-4 rounded-md"
      onClick={() => {
        let copyTxt = guesses
          ?.map((guess) => {
            if (guess.status === "higher") return `🟥⬆️`;
            else if (guess.status === "lower") return `🟨⬇️`;
            else if (guess.status === "correct") return `🟩✔️`;
          })
          .join("\n");

        if (!copyTxt) return;

        navigator.clipboard.writeText(copyTxt);
      }}
    >
      Share
    </button>
  );
}
