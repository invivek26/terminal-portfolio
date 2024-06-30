import { useContext } from "react";
import { HistoryContext } from "../components/Context";
import Text from "../components/Text";

function History({ index }: { index: number }) {
  const { commandHistory } = useContext(HistoryContext);

  const currentHistory = [];

  for (let i = 0; i < index / 2; i += 1) {
    currentHistory.push(commandHistory[i]);
  }

  return (
    <>
      <table>
        <tbody>
          {currentHistory.map((command, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <tr key={i}>
              <td className="pl-2 text-right">
                <Text>{(i + 1).toString()}</Text>
              </td>
              <td className="pl-4">
                <Text>{command}</Text>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
    </>
  );
}

export default History;
