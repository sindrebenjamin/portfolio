import File from "./icons/File";

const DesktopFileButton = ({ name, date, onClick, href }) => {
  if (name === "index.html") {
    return (
      <a
        target="_blank"
        className="py-2 hover:bg-main-50 hover:bg-opacity-20 rounded grid grid-cols-3 w-full"
        href={href}
      >
        <div className="flex items-center gap-2 col-span-2 text-left">
          <File />
          <p>{name}</p>
        </div>
        <p className="col-span-1 text-left">{date}</p>
      </a>
    );
  } else {
    return (
      <button
        className="py-2 hover:bg-main-50 hover:bg-opacity-20 rounded grid grid-cols-3 w-full"
        onClick={onClick}
      >
        <div className="flex items-center gap-2 col-span-2 text-left">
          <File />
          <p>{name}</p>
        </div>
        <p className="col-span-1 text-left">{date}</p>
      </button>
    );
  }
};

export default DesktopFileButton;
