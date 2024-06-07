import AddressButton from "./AddressButton";
import ArrowButton from "./ArrowButton";
import DesktopItemButton from "./DesktopItemButton";
import Folder from "./icons/Folder";

const DesktopPortfolio = () => {
  return (
    <div className="hidden md:block border-2 border-main-100 rounded-lg">
      {/* Topbar */}
      <div className="flex items-center gap-2 w-full p-4 bg-main-100">
        <Folder color="#562e76" />
        <p className="text-main-600 font-bold">My Projects</p>
      </div>
      {/* Addressfield */}
      <div className="bg-main-50 flex items-center justify-between pt-4 pr-4 pb-4 pl-[10px] gap-[10px]">
        {/* Buttons */}
        <div className="flex gap-3">
          <ArrowButton direction="left" />
          <ArrowButton direction="right" />
        </div>
        {/* Location */}
        <div className="flex items-center text-main-600 border border-main-600 w-full">
          <AddressButton>My Projects</AddressButton>
          <p className="select-none">{">"}</p>
          <AddressButton>My Projects</AddressButton>
        </div>
      </div>
      {/* Browser */}
      <div className="p-4">
        <div className="grid grid-cols-3 mb-4">
          <p className="col-span-2">Name</p>
          <p className="col-span-1">Date</p>
        </div>
        <DesktopItemButton name="test" date="02/02/2024" />
      </div>
    </div>
  );
};

export default DesktopPortfolio;
