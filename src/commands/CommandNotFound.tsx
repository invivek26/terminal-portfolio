import Text from "../components/Text";

function CommandNotFound({ command }: { command: string }) {
  return (
    <>
      <Text>command not found: {command}</Text>
      <br />
    </>
  );
}

export default CommandNotFound;
