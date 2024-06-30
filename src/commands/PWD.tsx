import Text from "../components/Text";

function PWD({ args }: { args: string[] }) {
  if (args.length !== 0) {
    return (
      <>
        <Text>pwd: error: too many arguments</Text>
        <br />
      </>
    );
  }

  return (
    <>
      <Text>/home/vivek</Text>
      <br />
    </>
  );
}

export default PWD;
