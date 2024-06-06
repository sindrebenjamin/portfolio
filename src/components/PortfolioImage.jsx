const PortfolioImage = ({ children }) => {
  return (
    <div className="relative group rounded overflow-hidden">
      {/* Color overlay */}
      <div className="absolute top-0 left-0 z-10 bg-main-500 h-full w-full opacity-10"></div>
      <div className="grayscale group-hover:grayscale-0 transition-all duration-200">
        {children}
      </div>
    </div>
  );
};

export default PortfolioImage;
