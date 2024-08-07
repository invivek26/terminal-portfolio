import Text from "./Text";
import { version } from "../../config.json";
import { asciiText, tuxAscii } from "../assets/asciiArt";

export function Banner() {
  return (
    <>
      <div className="pl-2">
        <div className="flex animate-pulse items-center">
          <pre className="text-[5px] md:text-base">{asciiText}</pre>
          <pre className="ml-5 text-[0.8px] md:text-[1.5px]">{tuxAscii}</pre>
        </div>
        <br />
        <Text className="text-base">
          Welcome to my terminal portfolio. (v{version})
        </Text>
        <br />
        <span className="text-sm md:text-base">
          For a list of available commands, type{" `"}
          <span className="text-blue-400">help</span>`
        </span>
      </div>
      <br />
    </>
  );
}
