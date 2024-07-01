import CommandHandler from "../commands/CommandHander";
import TerminalHeader from "./TerminalHeader";
import Text from "./Text";

interface TerminalOutputProps {
  type: string;
  text: string;
  index: number;
}

function TerminalOutput({ type, text, index }: TerminalOutputProps) {
  return (
    <div className="py-0.5 pl-2">
      {type === "command" ? (
        <CommandHandler command={text} index={index} />
      ) : type === "input" ? (
        <div className="flex items-center">
          <TerminalHeader />
          <span className="ml-2">
            <Text>{text}</Text>
          </span>
        </div>
      ) : null}
    </div>
  );
}

export default TerminalOutput;
