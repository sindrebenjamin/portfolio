import ArrowLeft from "./icons/ArrowLeft";

const MobilePage = ({ title, children, onClick, translate }) => {
  return (
    <div
      style={{ transform: `translateX(${translate}%)` }}
      className="text-main-100 fixed top-0 left-0 bg-main-950 w-full h-screen z-[1000] ease-in duration-200 transition-transform overflow-auto"
    >
      <div className="flex gap-6 bg-main-900 p-4">
        <button onClick={onClick}>
          <ArrowLeft color="#CEB4E2" />
        </button>
        {title}
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
};

export default MobilePage;
