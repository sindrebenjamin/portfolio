import { useState } from "react";

import Logo from "./Logo";
import Navigation from "./Navigation";
import MenuButton from "./MenuButton";
import { useScrollLock } from "../../hooks/useScrollLock";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  useScrollLock(isOpen);

  const overlayClasses = isOpen
    ? "visible opacity-100 z-[9]"
    : "invisible opacity-0";

  function handleCloseNav() {
    isOpen ? setIsOpen(!isOpen) : null;
  }

  return (
    <header
      className={`w-full z-[12] p-4 sm:p-6 transition-all duration-100 relative overflow-hidden`}
    >
      <div className="flex justify-between items-center max-w-[1200px] m-auto">
        <Logo />
        <div className="items-center gap-8 md:gap-6">
          <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />

          <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        {/* Overlay */}
        <div
          onClick={handleCloseNav}
          className={`${overlayClasses} bg-black bg-opacity-60 h-screen w-full left-0 top-0 fixed transition-all duration-200`}
        ></div>
      </div>
    </header>
  );
};

export default Header;
