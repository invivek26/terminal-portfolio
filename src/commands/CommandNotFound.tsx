import Text from "../components/Text";
import { findClosestCommand } from "./commands";

function CommandNotFound({ command }: { command: string }) {
  const closestMatch = findClosestCommand(command);

  if (closestMatch === "") {
    return (
      <>
        <Text>command not found: {command}</Text>
        <br />
      </>
    );
  }

  return (
    <>
      <Text>
        command not found: {command}, did you mean {closestMatch}?
      </Text>
      <br />
    </>
  );
}

export default CommandNotFound;
