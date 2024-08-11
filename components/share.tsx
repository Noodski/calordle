"use client";

import { useGuesses } from "@/context/guesses";
import Button from "./button";
import { useState } from "react";
import useProgress from "@/hooks/use-progress";
import SlideDown from "./slide-down";

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
      <div className="absolute left-1/2 top-0 -translate-x-1/2 opacity-100 transition-opacity duration-500 starting:opacity-0">
        <Button onClick={handleShare}>Share</Button>
      </div>
      {txtCopied && (
        <SlideDown>
          <p
            className={`pt-4 text-center text-[18px] font-bold ${progress === "success" ? `text-green` : `text-red`}`}
          >
            Results copied!
          </p>
        </SlideDown>
      )}
    </>
  );
}
