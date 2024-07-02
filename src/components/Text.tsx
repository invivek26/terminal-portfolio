interface TextProps {
  children: string | string[] | JSX.Element | JSX.Element[];
  className?: string;
  hoverEffect?: boolean;
}

function Text({ children, className, hoverEffect }: TextProps) {
  const classes = [
    "w-fit text-sm md:text-base",
    className ?? "text-green-400",
    hoverEffect ? "hover:text-blue-400" : "",
  ];

  return <p className={classes.join(" ")}>{children}</p>;
}

export default Text;
