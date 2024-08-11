"use client";

import {
  type Distance,
  type Direction,
  type Guess,
  useGuesses,
} from "@/context/guesses";
import useGuessCount from "@/hooks/use-guess-count";

export default function Guesses() {
  const guesses = useGuesses();
  const guessCount = useGuessCount();

  if (!guessCount) return null;

  const getBgColor = (distance: Distance): string => {
    switch (distance) {
      case "close":
        return "bg-orange";
      case "far":
        return "bg-red";
      case "correct":
        return "bg-green";
    }
  };

  const getTextColor = (distance: Distance): string => {
    switch (distance) {
      case "close":
        return "text-orange";
      case "far":
        return "text-red";
      case "correct":
        return "text-green";
    }
  };

  const getIcon = (direction: Direction): string => {
    switch (direction) {
      case "higher":
        return "↑";
      case "lower":
        return "↓";
      case "correct":
        return "✓";
    }
  };

  return (
    <div className="flex flex-col gap-y-2">
      {guesses.map((guess: Guess) => (
        <div
          key={guess.index}
          className={`flex items-center justify-between gap-2 rounded-md px-4 py-2 text-center text-[18px] font-bold text-white ${getBgColor(guess.distance)}`}
        >
          <span>{guess.guess}</span>
          <div
            className={`flex h-6 w-6 items-center justify-center rounded-full bg-white text-center ${getTextColor(guess.distance)}`}
          >
            {getIcon(guess.direction)}
          </div>
        </div>
      ))}
    </div>
  );
}
