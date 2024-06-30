import Text from "../components/Text";

function Cat({ args }: { args: string[] }) {
  if (args.length === 0) {
    return (
      <>
        <Text>Usage: cat [file]</Text>
        <br />
      </>
    );
  }

  if (args[0] === "secret.txt") {
    return (
      <>
        <Text>cat: secret.txt: Permission denied</Text>
        <br />
      </>
    );
  }

  return (
    <>
      <Text>cat: {args[0]}: No such file or directory</Text>
      <br />
    </>
  );
}
export default Cat;
