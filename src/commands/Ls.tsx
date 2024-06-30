import Text from "../components/Text";

const usage = "usage: ls [-al] <directory>";

const files = ["secret.txt"];

const aFlag = ".          ..         secret.txt";
const lFlag = [
  "total 8",
  "-rw-------  1 vivek  vivek  64 Jun 26 10:05 secret.txt",
];

const laFlag = [
  "total 8",
  "drw-------   3 vivek  vivek   96 Jun 23 11:39 .",
  "drw-------   1 vivek  vivek  448 Jun 20 12:11 ..",
  "-rw-------   1 vivek  vivek   64 Jun 26 10:05  secret.txt",
];

function Ls({ args }: { args: string[] }) {
  if (args.length === 0) {
    return (
      <>
        {files.map((file) => (
          <Text key={file}>{file}</Text>
        ))}
        <br />
      </>
    );
  }

  let argsA = false;
  let argsL = false;
  let file = "";

  const invalidPathPattern = /^(\.\.+\/?)+|^\.\//;

  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i];
    if (arg === "-a") {
      argsA = true;
    } else if (arg === "-l") {
      argsL = true;
    } else if (arg === "-al" || arg === "-la") {
      argsA = true;
      argsL = true;
    } else if (args[i].charAt(0) === "-" && args[i].length > 1) {
      return (
        <>
          <Text>ls: {args[i]}: invalid option</Text>
          <Text>{usage}</Text>
          <br />
        </>
      );
    } else if (invalidPathPattern.test(args[i]) && args[i] !== ".") {
      return (
        <>
          <Text>ls: {args[i]}: Permission denied</Text>
          <br />
        </>
      );
    } else if (!files.includes(args[i]) && args[i] !== ".") {
      return (
        <>
          <Text>ls: {args[i]}: No such file or directory</Text>
          <br />
        </>
      );
    } else if (files.includes(args[i]) || args[i] === ".") {
      file = args[i];
    }
  }

  if (argsA && argsL) {
    if (file) {
      const laflagFile = laFlag.filter((line) => line.includes(file));
      return (
        <>
          {laflagFile.map((line) => (
            <Text key={line}>{line}</Text>
          ))}
          <br />
        </>
      );
    }
    return (
      <>
        {laFlag.map((line) => (
          <Text key={line}>{line}</Text>
        ))}
        <br />
      </>
    );
  }

  if (argsA) {
    if (file) {
      return (
        <>
          {files.map((f) => (
            <Text key={f}>{f}</Text>
          ))}
          <br />
        </>
      );
    }
    return (
      <>
        <Text>{aFlag}</Text>
        <br />
      </>
    );
  }

  if (argsL) {
    if (file) {
      const lflagFile = lFlag.filter((line) => line.includes(file));
      return (
        <>
          {lflagFile.map((line) => (
            <Text key={line}>{line}</Text>
          ))}
          <br />
        </>
      );
    }
    return (
      <>
        {lFlag.map((line) => (
          <Text key={line}>{line}</Text>
        ))}
        <br />
      </>
    );
  }

  return (
    <>
      {files.map((f) => (
        <Text key={f}>{f}</Text>
      ))}
      <br />
    </>
  );
}

export default Ls;
