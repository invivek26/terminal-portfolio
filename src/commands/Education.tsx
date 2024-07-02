import Text from "../components/Text";
import config from "../../config.json";

function Education({ args }: { args: string[] }) {
  if (args.length !== 0) {
    return (
      <>
        <Text>education: error: too many arguments</Text>
        <br />
      </>
    );
  }

  const { education } = config;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <tbody>
          {education.map((edu) => (
            <tr key={edu.key}>
              <td className="whitespace-nowrap py-1 pr-2 text-sm md:text-base">
                {edu.key}.
              </td>
              <td className="whitespace-nowrap py-1 pr-2 text-sm md:text-base">
                {edu.institution}
              </td>
              <td className="whitespace-nowrap py-1 pr-2 text-sm md:text-base">
                {edu.degree}
              </td>
              <td className="whitespace-nowrap py-1 pr-2 text-sm md:text-base">
                {edu.period}
              </td>
              <td className="whitespace-nowrap py-1 pr-2 text-sm md:text-base">
                {edu.grade}
              </td>
              <td className="whitespace-nowrap py-1 pr-2 text-sm md:text-base">
                {edu.keyPoints}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />
    </div>
  );
}
export default Education;
