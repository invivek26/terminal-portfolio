import Text from "../components/Text";
import { projects } from "../../config.json";

function Projects({ args }: { args: string[] }) {
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
      {projects.map((project, index) => (
        <>
          <div key={project.name}>
            <Text>{(index + 1).toString()}. </Text>
            <Text className="underline decoration-wavy" hoverEffect>
              <a href={project.link} target="_blank" rel="noreferrer">
                {project.name}
              </a>
            </Text>
            <Text>{project.description}</Text>
          </div>
          <br />
        </>
      ))}

      <Text>etc...</Text>
      <br />
    </div>
  );
}

export default Projects;
