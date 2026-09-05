import config from "../../config.json";
import Text from "../components/Text";

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
      {Object.entries(config.socials).map(([label, href]) => (
        <Text hoverEffect key={label}>
          <a
            href={href}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
          >
            {label === "npm"
              ? "npm"
              : label.charAt(0).toUpperCase() + label.slice(1)}
          </a>
        </Text>
      ))}

      <br />
    </>
  );
}
export default Socials;
