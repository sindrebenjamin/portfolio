import ArrowLeft from "./icons/ArrowLeft";

const MobilePage = ({ title, children, onClick, translate }) => {
  return (
    <div
      style={{ transform: `translateX(${translate}%)` }}
      className="fixed top-0 left-0 bg-main-950 w-full h-screen z-[1000] ease-out duration-100 transition-transform"
    >
      <div className="flex gap-6 bg-main-900">
        <button onClick={onClick}>
          <ArrowLeft />
        </button>
        {title}
      </div>
      {children}
    </div>
  );
};

export default MobilePage;
