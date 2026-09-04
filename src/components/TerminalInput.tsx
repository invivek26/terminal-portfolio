import type {
  Dispatch,
  FormEvent,
  KeyboardEvent,
  RefObject,
  SetStateAction,
} from "react";
import { useEffect } from "react";
import TerminalHeader from "./TerminalHeader";

interface TerminalInputProps {
  onCommand: (command: string) => void;
  handleKeyDown: (e: KeyboardEvent) => void;
  inputCommand: string;
  setInputCommand: Dispatch<SetStateAction<string>>;
  inputRef: RefObject<HTMLInputElement | null>;
}

function TerminalInput({
  onCommand,
  handleKeyDown,
  inputCommand,
  setInputCommand,
  inputRef,
}: TerminalInputProps) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (inputCommand) {
      onCommand(inputCommand);
      setInputCommand("");
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [inputRef]);

  return (
    <form onSubmit={handleSubmit} className="flex items-center py-0.5 pl-2">
      <TerminalHeader />
      <input
        aria-label="Terminal command"
        autoCapitalize="none"
        autoComplete="off"
        className="ml-2 flex-1 appearance-none overflow-hidden bg-black text-sm text-green-400 caret-green-400 focus:outline-none md:text-base"
        spellCheck={false}
        type="text"
        value={inputCommand}
        onChange={(e) => setInputCommand(e.target.value)}
        ref={inputRef}
        onKeyDown={handleKeyDown}
      />
    </form>
  );
}

export default TerminalInput;
