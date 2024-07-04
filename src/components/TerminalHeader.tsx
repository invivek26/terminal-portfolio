function TerminalHeader() {
  return (
    <>
      <pre className="hidden appearance-none text-base md:flex">
        user@vivek&apos;s-portfolio:~$
      </pre>
      <pre className="flex appearance-none text-sm md:hidden">$</pre>
    </>
  );
}

export default TerminalHeader;
