import Folder from "./icons/Folder";

const MolbileItemButton = ({ title, onClick, className }) => {
  return (
    <button
      className={`${className} p-4 rounded bg-main-900 flex items-center gap-4 text-main-100 hover:bg-[#242430] transition-colors duration-200`}
      onClick={onClick}
    >
      <Folder color="#817290" />
      {title}
    </button>
  );
};

export default MolbileItemButton;
