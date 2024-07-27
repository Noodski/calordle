"use client";

import { useGuesses } from "@/context/guesses";
import { useProgress } from "@/context/progress";
import Button from "./button";
import { useState } from "react";
import { text } from "stream/consumers";

export default function Share({ currentDate }: { currentDate: string }) {
  const progress = useProgress();
  const guesses = useGuesses();
  const [txtCopied, setTxtCopied] = useState(false);

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

    setTxtCopied(true);
  };

  return (
    <>
      <Button onClick={handleShare}>Share</Button>
      {txtCopied && (
        <p
          className={`text-center text-[18px] font-bold ${progress === "success" ? `text-green` : `text-red`}`}
        >
          Results copied!
        </p>
      )}
    </>
  );
}
