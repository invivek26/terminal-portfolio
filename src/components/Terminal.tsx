import { useEffect, useMemo, useRef, useState } from "react";
import autoAnimate from "@formkit/auto-animate";
import TerminalInput from "./TerminalInput";
import TerminalOutput from "./TerminalOutput";
import { HistoryContext } from "./Context";
import descriptions from "../commands/data";
import { Banner } from "./Banner";

interface Command {
  type: string;
  text: string;
}

function Terminal() {
  const [history, setHistory] = useState<Command[]>([
    { type: "banner", text: "banner" },
  ]);
  const endOfTerminal = useRef<HTMLDivElement>(null);

  const [historyMarker, setHistoryMarker] = useState<number>(-1);

  const [inputCommand, setInputCommand] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

  const terminalContainerRef = useRef<HTMLDivElement>(null);

  const commandHistory = useMemo(() => {
    const commandHist = [];
    for (let i = 0; i < history.length; i += 2) {
      if (history[i].type === "input") {
        commandHist.push(history[i].text);
      }
    }
    return commandHist;
  }, [history]);

  // Add a new command to the terminal history
  const handleCommand = (command: string) => {
    setHistory([
      ...history,
      { type: "input", text: command },
      { type: "command", text: command },
    ]);
    setHistoryMarker(-1);
    setInputCommand("");
  };

  // Clear the terminal history
  const clearHistory = () => {
    setHistory([]);
  };

  // Scroll to the end of the terminal when new output is added
  useEffect(() => {
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
    if (inputRef.current) {
      inputRef.current.blur();
      setTimeout(() => {
        inputRef.current?.focus();
      }, 5);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const clearScreen = e.ctrlKey && e.key.toLowerCase() === "l";

    if (e.key === "ArrowUp") {
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

  useEffect(() => {
    if (terminalContainerRef.current) {
      terminalContainerRef.current.addEventListener("click", moveCursorToEnd);
    }
    return () => {
      if (terminalContainerRef.current) {
        terminalContainerRef.current.removeEventListener(
          "click",
          moveCursorToEnd,
        );
      }
    };
  }, [terminalContainerRef]);

  const ioAnimationRef = useRef(null);

  useEffect(() => {
    if (ioAnimationRef.current) {
      autoAnimate(ioAnimationRef.current);
    }
  }, [ioAnimationRef]);

  const historyContext = useMemo(
    () => ({ commandHistory, clearHistory }),
    [commandHistory, clearHistory],
  );

  return (
    <HistoryContext.Provider value={historyContext}>
      <div
        className="h-screen appearance-none overflow-auto bg-primary-100 p-2 font-mono text-green-400"
        ref={terminalContainerRef}
      >
        {history[0]?.type === "banner" && <Banner />}
        <div ref={ioAnimationRef}>
          {history.map((command, index) => (
            <TerminalOutput
              // eslint-disable-next-line react/no-array-index-key
              key={index}
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
