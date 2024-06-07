import Folder from "./icons/Folder";

const DesktopItemButton = ({ name, date, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="grid grid-cols-3 py-2 w-full hover:bg-main-50 hover:bg-opacity-20 rounded"
    >
      <div className="flex items-center gap-2 col-span-2 text-left">
        <Folder />
        <p>{name}</p>
      </div>

      <p className="col-span-1 text-left">{date}</p>
    </button>
  );
};

export default DesktopItemButton;
