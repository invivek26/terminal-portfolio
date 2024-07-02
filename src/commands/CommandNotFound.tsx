import Text from "../components/Text";

function CommandNotFound({ command }: { command: string }) {
  return (
    <>
      <Text className="w-full break-words">command not found: {command}</Text>
      <br />
    </>
  );
}

export default CommandNotFound;
