import { useContext, useEffect } from "react";
import { HistoryContext } from "../components/Context";
import Text from "../components/Text";

function Clear({ args }: { args: string[] }) {
  const { clearHistory } = useContext(HistoryContext);

  useEffect(() => {
    if (args.length === 0) clearHistory();
  }, [args.length, clearHistory]);

  if (args.length !== 0) {
    return (
      <>
        <Text>clear: error: too many arguments</Text>
        <br />
      </>
    );
  }

  return null;
}

export default Clear;
