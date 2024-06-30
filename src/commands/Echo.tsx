import Text from "../components/Text";

interface EchoProps {
  args: string[];
}

function Echo({ args }: EchoProps) {
  if (args[0] === "--help") {
    return (
      <>
        <Text>Usage: echo [text]</Text>
        <br />
      </>
    );
  }

  return (
    <>
      <Text>{args.join(" ")}</Text>
      <br />
    </>
  );
}
export default Echo;
