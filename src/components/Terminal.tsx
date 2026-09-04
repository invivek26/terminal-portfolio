import autoAnimate from "@formkit/auto-animate";
import type { KeyboardEvent } from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import descriptions from "../commands/commands";
import { Banner } from "./Banner";
import { HistoryContext } from "./Context";
import TerminalInput from "./TerminalInput";
import TerminalOutput from "./TerminalOutput";

interface Command {
  id: number;
  type: "banner" | "command" | "input";
  text: string;
}

function Terminal() {
  const [history, setHistory] = useState<Command[]>([
    { id: 0, type: "banner", text: "banner" },
  ]);
  const endOfTerminal = useRef<HTMLDivElement>(null);

  const [historyMarker, setHistoryMarker] = useState<number>(-1);

  const [inputCommand, setInputCommand] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

  const commandHistory = useMemo(() => {
    const commandHist = [];
    for (let i = 0; i < history.length; i += 1) {
      if (history[i].type === "input") {
        commandHist.push(history[i].text);
      }
    }
    return commandHist;
  }, [history]);

  // Add a new command to the terminal history
  const handleCommand = (command: string) => {
    setHistory((currentHistory) => [
      ...currentHistory,
      { id: currentHistory.length, type: "input", text: command },
      { id: currentHistory.length + 1, type: "command", text: command },
    ]);
    setHistoryMarker(-1);
    setInputCommand("");
  };

  // Clear the terminal history
  const clearHistory = useCallback(() => {
    setHistory([]);
  }, []);

  // Scroll to the end of the terminal when new output is added
  useEffect(() => {
    if (history.length === 0) return;

    if (window.innerWidth < 768) {
      setTimeout(() => {
        if (endOfTerminal.current) {
          endOfTerminal.current.scrollIntoView({
            behavior: "smooth",
            block: "end",
          });
        }
      }, 300);
    } else if (endOfTerminal.current) {
      endOfTerminal.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history]);

  const moveCursorToEnd = () => {
    requestAnimationFrame(() => {
      const input = inputRef.current;
      input?.focus();
      input?.setSelectionRange(input.value.length, input.value.length);
    });
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    const clearScreen = e.ctrlKey && e.key.toLowerCase() === "l";

    if (e.key === "Enter") {
      e.preventDefault();
      if (inputCommand) handleCommand(inputCommand);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyMarker < commandHistory.length - 1) {
        const newMarker = historyMarker + 1;
        setHistoryMarker(newMarker);
        setInputCommand(commandHistory[commandHistory.length - newMarker - 1]);
        moveCursorToEnd();
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyMarker > -1) {
        const newMarker = historyMarker - 1;
        setHistoryMarker(newMarker);
        if (newMarker === -1) {
          setInputCommand("");
          return;
        }
        setInputCommand(commandHistory[commandHistory.length - newMarker - 1]);
        moveCursorToEnd();
      }
    } else if (clearScreen) {
      e.preventDefault();
      clearHistory();
    } else if (e.key === "Tab") {
      e.preventDefault();
      if (inputCommand === "") return;
      if (inputCommand.split(/\s+/).length > 1) return;

      const command = inputCommand.trim();

      const matches = descriptions.filter((desc) =>
        desc.command.startsWith(command),
      );

      if (matches.length === 1) {
        setInputCommand(`${matches[0].command} `);
      }
    }
  };

  const ioAnimationRef = useRef(null);

  useEffect(() => {
    if (ioAnimationRef.current) {
      autoAnimate(ioAnimationRef.current);
    }
  }, []);

  const historyContext = useMemo(
    () => ({ commandHistory, clearHistory }),
    [commandHistory, clearHistory],
  );

  return (
    <HistoryContext.Provider value={historyContext}>
      <div className="h-svh appearance-none overflow-auto bg-black p-2 font-mono text-green-400">
        {history[0]?.type === "banner" && <Banner />}
        <div ref={ioAnimationRef}>
          {history.map((command, index) => (
            <TerminalOutput
              key={command.id}
              text={command.text}
              type={command.type}
              index={index}
            />
          ))}
          <TerminalInput
            onCommand={handleCommand}
            handleKeyDown={handleKeyDown}
            inputCommand={inputCommand}
            setInputCommand={setInputCommand}
            inputRef={inputRef}
          />
        </div>
        <div ref={endOfTerminal} />
      </div>
    </HistoryContext.Provider>
  );
}

export default Terminal;
