import { useGuesses } from "@/context/guesses";

export default function useProgress(): "success" | "fail" | "pending" {
  const guesses = useGuesses();

  if (
    guesses[guesses.length - 1]?.direction === "correct" &&
    guesses[guesses.length - 1]?.distance === "correct"
  )
    return "success";
  else if (guesses.length === 6) return "fail";
  else return "pending";
}
