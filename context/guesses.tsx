import { createContext, useContext, useReducer, ReactNode } from "react";

// @TODO: Should status actually be called distance?
export type Status = "close" | "far" | "correct";
export type Direction = "higher" | "lower" | "correct";

interface GuessShared {
  value: number;
  status: Status;
  direction: Direction;
}

interface Guess extends GuessShared {
  index: number;
}

interface Action extends GuessShared {
  type: string;
}

const GuessesContext = createContext<Guess[] | null>(null);

const GuessesDispatchContext = createContext<((action: Action) => void) | null>(
  null,
);

interface GuessesProviderProps {
  children: ReactNode;
}

export function GuessesProvider({ children }: GuessesProviderProps) {
  const [guesses, dispatch] = useReducer(guessesReducer, initialGuesses);

  return (
    <GuessesContext.Provider value={guesses}>
      <GuessesDispatchContext.Provider value={dispatch}>
        {children}
      </GuessesDispatchContext.Provider>
    </GuessesContext.Provider>
  );
}

export function useGuesses() {
  return useContext(GuessesContext);
}

export function useGuessesDispatch() {
  return useContext(GuessesDispatchContext);
}

function guessesReducer(guesses: Guess[], action: Action): Guess[] {
  switch (action.type) {
    case "added": {
      return [
        ...guesses,
        {
          index: guesses.length + 1,
          value: action.value,
          status: action.status,
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
