function TerminalHeader() {
  return (
    <>
      <pre className="hidden text-base md:flex">vivek@portfolio:~$</pre>
      <pre className="flex appearance-none text-sm md:hidden">$</pre>
    </>
  );
}

export default TerminalHeader;
