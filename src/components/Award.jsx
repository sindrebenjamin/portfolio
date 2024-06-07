import AwardIcon from "./icons/AwardIcon";

const Award = ({ title, subtitle }) => {
  return (
    <div className="flex items-center gap-4">
      <AwardIcon />
      <div>
        <p className="leading-tight	">{title}</p>
        <p className="italic mt-[-2px]">{subtitle}</p>
      </div>
    </div>
  );
};

export default Award;
