function TerminalHeader() {
  return (
    <>
      <pre className="hidden text-base md:flex">
        user@vivek&apos;s-portfolio:~$
      </pre>
      <pre className="flex md:hidden">$</pre>
    </>
  );
}

export default TerminalHeader;
