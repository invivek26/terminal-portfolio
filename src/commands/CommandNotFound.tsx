import levenshtein from "js-levenshtein";
import Text from "../components/Text";
import descriptions from "./data";

function CommandNotFound({ command }: { command: string }) {
  const closestMatch = () => {
    let min = 1000;
    let closest = "";
    for (let i = 0; i < descriptions.length; i += 1) {
      const distance = levenshtein(command, descriptions[i].command);
      if (distance < min) {
        min = distance;
        closest = descriptions[i].command;
      }
    }

    if (min > 3) {
      return "";
    }

    return closest;
  };

  const closestMatchCommand = closestMatch();

  if (closestMatchCommand === "") {
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
        command not found: {command}, did you mean {closestMatch()}?
      </Text>
      <br />
    </>
  );
}

export default CommandNotFound;
