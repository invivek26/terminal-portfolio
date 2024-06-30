import { useContext, useEffect } from "react";
import Text from "../components/Text";
import { HistoryContext } from "../components/Context";

function Clear({ args }: { args: string[] }) {
  const { clearHistory } = useContext(HistoryContext);

  if (args.length !== 0) {
    return (
      <>
        <Text>clear: error: too many arguments</Text>
        <br />
      </>
    );
  }

  useEffect(() => {
    clearHistory();
  }, [clearHistory]);

  return null;
}

export default Clear;
