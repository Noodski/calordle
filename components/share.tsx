"use client";

import { useGuesses } from "@/context/guesses";
import { useProgress } from "@/context/progress";
import Button from "./button";

export default function Share({ currentDate }: { currentDate: string }) {
  const progress = useProgress();
  const guesses = useGuesses();

  if (progress !== "success" && progress !== "fail") return null;

  const handleShare = () => {
    let guessResults: string = guesses!
      .map((guess) => {
        switch (guess.status) {
          case "higher":
            return `🟨⬆️`;
          case "lower":
            return `🟥⬇️`;
          case "correct":
            return `🟩✅`;
        }
      })
      .join("\n");

    navigator.clipboard.writeText(`Calordle ${currentDate}\n${guessResults}`);
  };

  return <Button onClick={handleShare}>Share</Button>;
}
