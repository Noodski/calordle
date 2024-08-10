import { createContext, useContext, useReducer, ReactNode } from "react";

// @TODO: Should we be more specific on the typing? What is the default?
type Progress = string;

interface Action {
  type: string;
  value: Progress;
}

const ProgressContext = createContext<Progress | null>(null);

const ProgressDispatchContext = createContext<
  ((action: Action) => void) | null
>(null);

interface ProgressProviderProps {
  children: ReactNode;
}

export function ProgressProvider({ children }: ProgressProviderProps) {
  const [progress, dispatch] = useReducer(progressReducer, initialProgress);

  return (
    <ProgressContext.Provider value={progress}>
      <ProgressDispatchContext.Provider value={dispatch}>
        {children}
      </ProgressDispatchContext.Provider>
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  return useContext(ProgressContext);
}

export function useProgressDispatch() {
  return useContext(ProgressDispatchContext);
}

function progressReducer(progress: Progress, action: Action): Progress {
  switch (action.type) {
    case "changed": {
      return action.value;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

const initialProgress: Progress = "started";
