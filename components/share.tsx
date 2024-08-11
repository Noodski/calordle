"use client";

import { useGuesses } from "@/context/guesses";
import Button from "./button";
import { useState } from "react";
import useProgress from "@/hooks/use-progress";

export default function Share({ currentDate }: { currentDate: string }) {
  const guesses = useGuesses();
  const [txtCopied, setTxtCopied] = useState(false);
  const progress = useProgress();

  if (progress !== "success" && progress !== "fail") return null;

  const handleShare = () => {
    let guessResults: string = guesses!
      .map((guess) => {
        let guessTxt: string = "";

        switch (guess.distance) {
          case "close":
            guessTxt += "🟨";
            break;
          case "far":
            guessTxt += "🟥";
            break;
          case "correct":
            guessTxt += "🟩";
            break;
        }

        switch (guess.direction) {
          case "higher":
            guessTxt += "⬆️";
            break;
          case "lower":
            guessTxt += "⬇️";
            break;
          case "correct":
            guessTxt += "✅";
            break;
        }

        return guessTxt;
      })
      .join("\n");

    navigator.clipboard.writeText(
      `Calordle ${currentDate} https://calordle.site/\n${guessResults}`,
    );

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
