import { useGuesses } from "@/context/guesses";

export default function useGuessCount() {
  return useGuesses().length;
}
