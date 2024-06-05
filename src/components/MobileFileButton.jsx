import File from "./icons/File";
const MobileFileButton = ({ title, date, href, onClick }) => {
  if (title === "index.html") {
    return (
      <a
        className="flex items-center text-main-100 gap-4 w-full p-3 rounded hover:bg-[#242430] transition-colors duration-200"
        href={href}
        target="_blank"
      >
        <File color="#817290" />
        <div className="flex flex-col items-start">
          <p>index.html</p>
          <p className="text-xs">{date}</p>
        </div>
      </a>
    );
  }
  return (
    <button
      onClick={onClick}
      className="flex items-center text-main-100 gap-4 w-full p-3 rounded hover:bg-[#242430] transition-colors duration-200"
    >
      <File color="#817290" />
      <div className="flex flex-col items-start">
        <p>README.txt</p>
        <p className="text-xs">{date}</p>
      </div>
    </button>
  );
};

export default MobileFileButton;
