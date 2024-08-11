"use client";

import Button from "./button";
import { submitGuess } from "@/lib/submit-guess";
import { useFormState, useFormStatus } from "react-dom";
import { useGuessesDispatch } from "@/context/guesses";
import { useEffect } from "react";
import useProgress from "@/hooks/use-progress";

export default function Guess() {
  const [guessResult, submitGuessAction] = useFormState(submitGuess, null);
  const { pending } = useFormStatus();
  const dispatchGuess = useGuessesDispatch();
  const progress = useProgress();

  useEffect(() => {
    if (!guessResult?.data) return;

    dispatchGuess?.({
      type: "added",
      guess: guessResult.data.guess,
      distance: guessResult.data.distance,
      direction: guessResult.data.direction,
      answer: guessResult.data.answer,
    });
  }, [guessResult?.data, dispatchGuess]);

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
