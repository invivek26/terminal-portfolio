import levenshtein from "js-levenshtein";

const descriptions = [
  { command: "about", description: "about Vivek" },
  { command: "base64", description: "encode and decode files using base64" },
  { command: "cat", description: "display file content" },
  { command: "clear", description: "clear the terminal" },
  { command: "echo", description: "print arguments to the screen" },
  { command: "education", description: "show education details" },
  { command: "exit", description: "exit the terminal" },
  { command: "experience", description: "show professional experience" },
  { command: "help", description: "show this help message" },
  { command: "history", description: "show command history" },
  { command: "ls", description: "list directory contents" },
  { command: "projects", description: "list projects" },
  { command: "pwd", description: "print working directory" },
  { command: "socials", description: "show social links" },
  { command: "whoami", description: "display current user" },
];

export function findClosestCommand(command: string) {
  let closest = "";
  let distance = Number.POSITIVE_INFINITY;

  for (const description of descriptions) {
    const nextDistance = levenshtein(command, description.command);
    if (nextDistance < distance) {
      closest = description.command;
      distance = nextDistance;
    }
  }

  return distance <= 3 ? closest : "";
}

export default descriptions;
