import config from "../../config.json";
import Text from "../components/Text";

function Education({ args }: { args: string[] }) {
  if (args.length !== 0) {
    return (
      <>
        <Text>education: error: too many arguments</Text>
        <br />
      </>
    );
  }

  return (
    <div className="space-y-4">
      {config.education.map((education) => (
        <section key={education.degree}>
          <Text className="font-semibold text-blue-400">
            {education.degree}
          </Text>
          <Text>{education.institution}</Text>
          <Text className="text-zinc-400">
            {education.period} · GPA: {education.grade}
          </Text>
        </section>
      ))}
      <br />
    </div>
  );
}

export default Education;
