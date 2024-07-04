import About from "./About";
import Base64 from "./Base64";
import Cat from "./Cat";
import Clear from "./Clear";
import CommandNotFound from "./CommandNotFound";
import Echo from "./Echo";
import Education from "./Education";
import Exit from "./Exit";
import Help from "./Help";
import History from "./History";
import Ls from "./Ls";
import PWD from "./PWD";
import Socials from "./Socials";
import Whoami from "./Whoami";

function CommandHandler({
  command,
  index,
}: {
  command: string;
  index: number;
}) {
  const [cmd, ...args] = command.trim().split(/\s+/);

  switch (cmd) {
    case "whoami":
      return <Whoami args={args} />;
    case "echo":
      return <Echo args={args} />;
    case "cat":
      return <Cat args={args} />;
    case "about":
      return <About args={args} />;
    case "projects":
      return null;
    case "education":
      return <Education args={args} />;
    case "base64":
      return <Base64 args={args} />;
    case "ls":
      return <Ls args={args} />;
    case "socials":
      return <Socials args={args} />;
    case "help":
      return <Help args={args} />;
    case "clear":
      return <Clear args={args} />;
    case "history":
      return <History index={index} />;
    case "pwd":
      return <PWD args={args} />;
    case "sudo":
      return <CommandNotFound command={cmd} />;
    case "exit":
      return <Exit />;
    default:
      return <CommandNotFound command={cmd} />;
  }
}

export default CommandHandler;
