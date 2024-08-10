"use client";

import { useProgress, useProgressDispatch } from "@/context/progress";
import Button from "./button";
import { submitGuess } from "@/lib/submit-guess";
import { useFormState, useFormStatus } from "react-dom";
import { useGuesses, useGuessesDispatch } from "@/context/guesses";
import { useEffect } from "react";

export default function Guess() {
  const [guessResult, submitGuessAction] = useFormState(submitGuess, null);
  const { pending } = useFormStatus();
  const progress = useProgress();
  const dispatchProgress = useProgressDispatch();
  const dispatchGuess = useGuessesDispatch();
  const guesses = useGuesses();

  useEffect(() => {
    if (!guessResult?.data) return;

    dispatchGuess?.({
      type: "added",
      value: guessResult.data.guess,
      status: guessResult.data.result,
      direction: guessResult.data.direction,
    });

    if (guessResult.data.result === "correct") {
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
    /* @TODO: Looks like eslint complains about missing dependencies, 
      but this is how we need it to be to function correctly */
  }, [guessResult?.data]);

  if (progress === "success" || progress === "fail") return null;

  return (
    <form
      className="flex w-full flex-col gap-4 sm:flex-row"
      action={submitGuessAction}
    >
      <input
        name="guess"
        type="number"
        className="w-full rounded-md bg-gray px-4 py-2 text-[18px] font-bold"
        placeholder="Calorie guess"
      />
      <Button type="submit" disabled={pending}>
        {/* @TODO: I don't think I've actually seen it say "Checking Answer"? */}
        {pending ? "Checking Answer" : "Submit"}
      </Button>
    </form>
  );
}
