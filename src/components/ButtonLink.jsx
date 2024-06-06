const ButtonLink = ({ href, children, style }) => {
  const classes =
    style === "filled"
      ? "bg-main-600 "
      : "border border-main-100 hover:border-main-550";
  return (
    <a
      target="_blank"
      className={`${classes} hover:bg-main-550 font-bold text-main-100 transition-colors duration-200 p-3 w-full flex items-center justify-center rounded gap-2`}
      href={href}
    >
      {children}
    </a>
  );
};

export default ButtonLink;
