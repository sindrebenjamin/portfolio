const MenuButton = ({ isOpen, setIsOpen }) => {
  function handleClick() {
    setIsOpen(!isOpen);
  }

  const baseBackground = "bg-main-100";

  const topClasses = isOpen
    ? "rotate-[-45deg] bg-main-100"
    : "translate-y-[-8px]";

  const middleClasses = isOpen ? "bg-main-100 opacity-0" : "";

  const bottomClasses = isOpen ? "rotate-45 bg-main-100" : "translate-y-[8px] ";

  return (
    <button
      onClick={handleClick}
      className="flex flex-col z-30 w-[24px] relative md:hidden"
    >
      {/* Top */}
      <div
        className={`${baseBackground} ${topClasses} h-[3px] w-full rounded-sm transition-transform duration-100 absolute`}
      ></div>

      {/* Middle */}
      <div
        className={`${baseBackground} ${middleClasses} h-[3px] w-full rounded-sm absolute transition-transform duration-100`}
      ></div>

      {/* Bottom */}
      <div
        className={`${baseBackground} ${bottomClasses} h-[3px] w-full rounded-sm transition-transform duration-100 absolute`}
      ></div>
    </button>
  );
};

export default MenuButton;
