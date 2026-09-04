import config from "../../config.json";
import Text from "../components/Text";

function Experience({ args }: { args: string[] }) {
  if (args.length !== 0) {
    return (
      <>
        <Text>experience: error: too many arguments</Text>
        <br />
      </>
    );
  }

  return (
    <div className="max-w-4xl space-y-6">
      {config.experience.map((experience) => (
        <section key={`${experience.company}-${experience.role}`}>
          <Text className="font-semibold text-blue-400">{experience.role}</Text>
          <Text>
            {[experience.company, experience.employment]
              .filter(Boolean)
              .join(" · ")}
          </Text>
          <Text className="text-zinc-400">
            {[experience.period, experience.location]
              .filter(Boolean)
              .join(" · ")}
          </Text>
          <Text className="mt-2 text-zinc-200">{experience.summary}</Text>
          {experience.highlights.length > 0 ? (
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-green-400 md:text-base">
              {experience.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}
      <br />
    </div>
  );
}

export default Experience;
