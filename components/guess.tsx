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

  return (
    <form
      className={`flex w-full flex-row gap-4 transition-[opacity,visibility] duration-500 [transition-behavior:allow-discrete] ${(progress === "success" || progress === "fail") && "pointer-events-none invisible opacity-0"}`}
      action={submitGuessAction}
    >
      <input
        name="guess"
        type="number"
        className="w-full rounded-md bg-gray px-4 py-2 text-[18px] font-bold outline-0 transition-shadow focus:ring-2 focus:ring-blue"
        placeholder="Calories"
        min="1"
        max="9999"
        required
      />
      <Button type="submit" disabled={pending}>
        {/* @TODO: I don't think I've actually seen it say "Checking Answer"? */}
        {pending ? "Checking Answer" : "Submit"}
      </Button>
    </form>
  );
}
