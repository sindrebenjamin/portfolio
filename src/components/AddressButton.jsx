const AddressButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-3 py-2 hover:bg-main-550 rounded hover:bg-opacity-20 transition-colors duration-200"
    >
      {children}
    </button>
  );
};

export default AddressButton;
