const Logo = () => {
  return (
    <a
      className="h-[36px] w-[36px] flex items-center justify-center rounded-lg border-2 border-main-100 rotate-45 hover:bg-main-100 transition-colors duration-200 group"
      href="/"
    >
      <p className="group-hover:text-main-950 font-heading font-bold text-main-100 rotate-[-45deg] duration-200 transition-colors">
        S
      </p>
    </a>
  );
};

export default Logo;
