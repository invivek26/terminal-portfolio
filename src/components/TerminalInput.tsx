import React, { useEffect } from "react";
import TerminalHeader from "./TerminalHeader";

interface TerminalInputProps {
  onCommand: (command: string) => void;
  handleKeyDown: (e: React.KeyboardEvent) => void;
  inputCommand: string;
  setInputCommand: React.Dispatch<React.SetStateAction<string>>;
  inputRef: React.RefObject<HTMLInputElement>;
}

function TerminalInput({
  onCommand,
  handleKeyDown,
  inputCommand,
  setInputCommand,
  inputRef,
}: TerminalInputProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputCommand) {
      onCommand(inputCommand);
      setInputCommand("");
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit} className="flex items-center py-0.5 pl-2">
      <TerminalHeader />
      <input
        className="ml-2 flex-1 appearance-none overflow-hidden bg-primary-100 text-sm text-green-400 focus:outline-none md:text-base"
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
