"use client";

import { useGuesses, useGuessesDispatch } from "@/context/guesses";
import { useProgress, useProgressDispatch } from "@/context/progress";
import { useState, ChangeEvent, MouseEvent } from "react";

export default function Guess({ correctGuess }: { correctGuess: number }) {
  const [value, setValue] = useState<string>("");
  const guesses = useGuesses();
  const dispatchGuess = useGuessesDispatch();
  const progress = useProgress();
  const dispatchProgress = useProgressDispatch();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setValue("");

    let guess = Number(value);

    dispatchGuess?.({
      type: "added",
      value: guess,
      status:
        guess > correctGuess
          ? "lower"
          : guess < correctGuess
          ? "higher"
          : "correct",
    });

    if (guess === correctGuess) {
      dispatchProgress?.({
        type: "changed",
        value: "success",
      });
    } else if (guesses?.length === 5) {
      dispatchProgress?.({
        type: "changed",
        value: "fail",
      });
    }
  };

  if (progress === "success" || progress === "fail") return null;

  return (
    <form className="flex gap-x-4">
      <input
        type="number"
        className="bg-white py-2 px-4 shadow-[0_0_4px_rgba(0,0,0,.25)] rounded-md"
        placeholder="Enter calorie guess"
        value={value}
        onChange={handleInputChange}
      />
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </form>
  );
}
