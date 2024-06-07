const Section = ({ children, className }) => {
  return (
    <section className={`${className} px-4 py-[60px] md:py-[120px]`}>
      <div className="m-auto max-w-[1200px]">{children}</div>
    </section>
  );
};

export default Section;
