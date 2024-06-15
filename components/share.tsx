"use client";

import { useGuesses } from "@/context/guesses";
import { useProgress } from "@/context/progress";
import Button from "./button";

export default function Share() {
  const progress = useProgress();
  const guesses = useGuesses();

  if (progress !== "success" && progress !== "fail") return null;

  const handleShare = () => {
    let copyTxt = guesses!
      .map((guess) => {
        switch (guess.status) {
          case "higher":
            return `🟥⬆️`;
          case "lower":
            return `🟨⬇️`;
          case "correct":
            return `🟩✅`;
        }
      })
      .join("\n");

    navigator.clipboard.writeText(copyTxt);
  };

  return <Button onClick={handleShare}>Share</Button>;
}
