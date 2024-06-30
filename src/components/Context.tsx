import { createContext } from "react";

export const HistoryContext = createContext<{
  commandHistory: string[];
  clearHistory: () => void;
}>({
  commandHistory: [],
  clearHistory: () => {},
});
