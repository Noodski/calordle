import { useGuesses } from "@/context/guesses";

export default function useAnswer() {
  const guesses = useGuesses();

  return guesses[guesses.length - 1]?.answer;
}
