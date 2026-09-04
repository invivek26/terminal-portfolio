import config from "../../config.json";
import Text from "../components/Text";

function Projects({ args }: { args: string[] }) {
  if (args.length !== 0) {
    return (
      <>
        <Text>projects: error: too many arguments</Text>
        <br />
      </>
    );
  }

  const { projects } = config;

  return (
    <div>
      {projects.map((project, index) => (
        <div key={project.name}>
          <div>
            <Text>{(index + 1).toString()}. </Text>
            <Text className="underline decoration-wavy" hoverEffect>
              <a href={project.link} target="_blank" rel="noreferrer">
                {project.name}
              </a>
            </Text>
            <Text>{project.description}</Text>
          </div>
          <br />
        </div>
      ))}

      <Text>etc...</Text>
      <br />
    </div>
  );
}

export default Projects;
