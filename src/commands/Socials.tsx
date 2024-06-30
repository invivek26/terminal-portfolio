import Text from "../components/Text";
import config from "../../config.json";

interface EchoProps {
  args: string[];
}

function Socials({ args }: EchoProps) {
  if (args.length !== 0) {
    return (
      <>
        <Text>socials: error: too many arguments</Text>
        <br />
      </>
    );
  }

  return (
    <>
      <Text hoverEffect={true}>
        <a
          href={config.socials.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </Text>

      <Text hoverEffect={true}>
        <a
          href={config.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </Text>

      <br />
    </>
  );
}
export default Socials;
