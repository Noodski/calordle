"use client";

import { useGuesses, useGuessesDispatch } from "@/context/guesses";
import { useProgress, useProgressDispatch } from "@/context/progress";
import { useState, ChangeEvent, MouseEvent } from "react";
import Button from "./button";

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
    <form className="flex w-full flex-col gap-4 sm:flex-row">
      <input
        type="number"
        className="w-full rounded-md bg-gray px-4 py-2 text-[18px] font-bold"
        placeholder="Calorie guess"
        value={value}
        onChange={handleInputChange}
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </form>
  );
}
