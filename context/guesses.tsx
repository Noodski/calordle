import { createContext, useContext, useReducer, ReactNode } from "react";

export type Distance = "close" | "far" | "correct";
export type Direction = "higher" | "lower" | "correct";

interface GuessShared {
  guess: number;
  distance: Distance;
  direction: Direction;
}
export interface Guess extends GuessShared {
  index: number;
}
interface Action extends GuessShared {
  type: string;
}

function guessesReducer(guesses: Guess[], action: Action): Guess[] {
  switch (action.type) {
    case "added": {
      return [
        ...guesses,
        {
          index: guesses.length + 1,
          guess: action.guess,
          distance: action.distance,
          direction: action.direction,
        },
      ];
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

const initialGuesses: Guess[] = [];

const GuessesContext = createContext<Guess[]>(initialGuesses);
const GuessesDispatchContext = createContext<((action: Action) => void) | null>(
  null,
);

export function useGuesses() {
  return useContext(GuessesContext);
}
export function useGuessesDispatch() {
  return useContext(GuessesDispatchContext);
}

export function GuessesProvider({ children }: { children: ReactNode }) {
  const [guesses, dispatch] = useReducer(guessesReducer, initialGuesses);

  return (
    <GuessesContext.Provider value={guesses}>
      <GuessesDispatchContext.Provider value={dispatch}>
        {children}
      </GuessesDispatchContext.Provider>
    </GuessesContext.Provider>
  );
}
