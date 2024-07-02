import Text from "../components/Text";
import config from "../../config.json";

function About({ args }: { args: string[] }) {
  if (args.length !== 0) {
    return (
      <>
        <Text>about: error: too many arguments</Text>
        <br />
      </>
    );
  }

  const { about } = config;

  return (
    <div className="w-[90%] md:w-1/2">
      {about.map((line) => (
        <Text key={line} className="mb-2">
          {line}
        </Text>
      ))}
      <br />
    </div>
  );
}

export default About;
