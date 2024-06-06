const links = [
  {
    title: "About me",
    id: "about-me",
  },
  {
    title: "Portfolio",
    id: "portfolio",
  },
  {
    title: "Awards",
    id: "awards",
  },
  {
    title: "Contact",
    id: "contact",
  },
];

const Navigation = ({ isOpen, setIsOpen }) => {
  const navClasses = isOpen
    ? "translate-x-0"
    : "translate-x-full md:translate-x-0";

  return (
    <nav
      className={`${navClasses} text-main-100 flex flex-col md:flex-row justify-center md:justify-end h-screen md:h-fit w-[80%] md:w-full top-0 right-0 absolute md:static gap-6 items-center bg-primary-color md:bg-transparent z-10 duration-200 transition-transform transform whitespace-nowrap bg-main-900`}
    >
      {links.map((link) => {
        return (
          <a
            className="transition-colors duration-200 p-3 md:text-sm hover:bg-main-950 rounded"
            key={link.id}
            onClick={() => setIsOpen(false)}
            href={"#" + link.id}
          >
            {link.title}
          </a>
        );
      })}
    </nav>
  );
};

export default Navigation;
