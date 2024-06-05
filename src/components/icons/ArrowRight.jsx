const ArrowRight = ({ color }) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 20L20 12L12 4L10.575 5.4L16.175 11H4V13H16.175L10.575 18.6L12 20Z"
        fill={color ? color : "#562E76"}
      />
    </svg>
  );
};

export default ArrowRight;
