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
        <div className="flex flex-row items-center">
          <TerminalHeader />
          <Text className="ml-2 overflow-scroll whitespace-nowrap md:overflow-auto md:whitespace-normal">
            {text}
          </Text>
        </div>
      ) : null}
    </div>
  );
}

export default TerminalOutput;
