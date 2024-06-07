const StyledH2 = ({ children, className, id }) => {
  return (
    <h2
      id={id}
      className={`${className} text-3xl md:text-4xl text-main-500 font-heading font-bold mb-6 md:mb-8`}
    >
      {children}
    </h2>
  );
};

export default StyledH2;
