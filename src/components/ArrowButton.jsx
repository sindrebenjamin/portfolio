import ArrowLeft from "./icons/ArrowLeft";
import ArrowRight from "./icons/ArrowRight";

const ArrowButton = ({ direction, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-1 py-0.5 hover:bg-main-550 rounded hover:bg-opacity-20 transition-colors duration-200"
    >
      {direction === "left" ? <ArrowLeft /> : <ArrowRight />}
    </button>
  );
};

export default ArrowButton;
