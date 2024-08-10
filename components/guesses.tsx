"use client";

import {
  type Direction,
  Status,
  useGuesses,
  useGuessesDispatch,
} from "@/context/guesses";

export default function Guesses() {
  const guesses = useGuesses();
  const dispatch = useGuessesDispatch();

  if (!guesses?.length) return null;

  const getBgColor = (status: Status): string => {
    switch (status) {
      case "close":
        return "bg-orange";
      case "far":
        return "bg-red";
      case "correct":
        return "bg-green";
    }
  };

  const getTextColor = (status: Status): string => {
    switch (status) {
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
      {guesses.map((guess) => (
        <div
          key={guess.index}
          className={`flex items-center justify-between gap-2 rounded-md px-4 py-2 text-center text-[18px] font-bold text-white ${getBgColor(guess.status)}`}
        >
          <span>{guess.value}</span>
          <div
            className={`flex h-6 w-6 items-center justify-center rounded-full bg-white text-center ${getTextColor(guess.status)}`}
          >
            {getIcon(guess.direction)}
          </div>
        </div>
      ))}
    </div>
  );
}
