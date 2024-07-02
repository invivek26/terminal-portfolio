import Text from "../components/Text";
import config from "../../config.json";

const files = ["secret.txt"];

function Base64({ args }: { args: string[] }) {
  if (args.length === 0) {
    return (
      <>
        <Text>usage: base64 -e [file]</Text>
        <Text>usage: base64 -d [file]</Text>
        <Text>usage: base64 [file]</Text>
        <Text>usage: base64 [file] | base64 -d</Text>
        <br />
      </>
    );
  }

  const { easterEgg } = config;

  const encodeToBase64 = (decoded: string) => btoa(decoded);
  const decodeFromBase64 = (encoded: string) => {
    try {
      return atob(encoded);
    } catch (error) {
      return "base64: error: invalid input";
    }
  };

  const handleBase64 = () => {
    if (args.length === 1) {
      return files.includes(args[0])
        ? encodeToBase64(easterEgg.message)
        : `base64: error: ${args[0]}: No such file or directory`;
    }
    if (args.length === 2) {
      if (args[0] === "-e") {
        return files.includes(args[1])
          ? encodeToBase64(easterEgg.message)
          : `base64: error: ${args[1]}: No such file or directory`;
      }
      if (args[0] === "-d") {
        return files.includes(args[1])
          ? decodeFromBase64(easterEgg.message)
          : `base64: error: ${args[1]}: No such file or directory`;
      }
    } else if (args.length === 4 && args[1] === "|") {
      if (args[3] === "-d") {
        return files.includes(args[0])
          ? easterEgg.message
          : `base64: error: ${args[0]}: No such file or directory`;
      }
    }

    return "base64: error: invalid option";
  };

  const result = handleBase64();

  return (
    <>
      <Text className="w-full break-words">{result}</Text>
      <br />
    </>
  );
}

export default Base64;
