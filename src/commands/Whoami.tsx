import Text from "../components/Text";

function Whoami({ args }: { args: string[] }) {
  if (args.length !== 0) {
    return (
      <>
        <Text>whoami: error: too many arguments</Text>
        <br />
      </>
    );
  }

  return (
    <>
      <Text>user</Text>
      <br />
    </>
  );
}

export default Whoami;
