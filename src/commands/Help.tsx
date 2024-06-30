import Text from "../components/Text";
import descriptions from "./data";

function Help({ args }: { args: string[] }) {
  if (args.length !== 0) {
    return (
      <>
        <Text>help: error: too many arguments</Text>
        <br />
      </>
    );
  }

  return (
    <div>
      <table className="w-full table-fixed text-left text-green-400">
        <tbody>
          {descriptions.map((item) => (
            <tr key={item.command} className="w-full">
              <td className="w-1/4">
                <Text className="text-blue-400">{item.command}</Text>
              </td>
              <td className="w-3/4">
                <Text>{item.description}</Text>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
    </div>
  );
}

export default Help;
