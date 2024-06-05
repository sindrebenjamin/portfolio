const Figma = ({ color }) => {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.50024 7.06275C6.24584 7.06275 5.99393 7.11286 5.75889 7.21021C5.52385 7.30757 5.31029 7.45027 5.1304 7.63016C4.95051 7.81005 4.80781 8.02361 4.71046 8.25865C4.6131 8.49368 4.56299 8.7456 4.56299 9C4.56299 9.2544 4.6131 9.50632 4.71046 9.74135C4.80781 9.97639 4.95051 10.19 5.1304 10.3698C5.31029 10.5497 5.52385 10.6924 5.75889 10.7898C5.99393 10.8871 6.24584 10.9373 6.50024 10.9373H8.43749V9.039C8.43719 9.013 8.43719 8.987 8.43749 8.961V7.06275H6.50024ZM8.43749 5.93775H6.50024C5.98635 5.93775 5.49351 5.73361 5.13014 5.37023C4.76676 5.00686 4.56262 4.51402 4.56262 4.00012C4.56262 3.48623 4.76676 2.99339 5.13014 2.63002C5.49351 2.26664 5.98635 2.0625 6.50024 2.0625H8.43749V5.93775ZM9.56249 2.0625V5.93775H11.4997C12.007 5.92777 12.4902 5.71924 12.8454 5.35695C13.2006 4.99466 13.3996 4.50751 13.3996 4.00012C13.3996 3.49274 13.2006 3.00559 12.8454 2.6433C12.4902 2.28101 12.007 2.07248 11.4997 2.0625H9.56249ZM11.4997 7.062C10.9912 7.06194 10.5031 7.26181 10.1407 7.61849C9.77823 7.97517 9.57057 8.46006 9.56249 8.9685V9.03075C9.5687 9.4125 9.68757 9.7839 9.90418 10.0983C10.1208 10.4127 10.4255 10.6561 10.78 10.7979C11.1344 10.9397 11.5229 10.9736 11.8966 10.8954C12.2703 10.8171 12.6125 10.6301 12.8803 10.358C13.1481 10.0859 13.3295 9.74066 13.4018 9.36575C13.474 8.99085 13.4338 8.60296 13.2863 8.2508C13.1388 7.89865 12.8905 7.59793 12.5727 7.38643C12.2548 7.17492 11.8815 7.06205 11.4997 7.062ZM6.50024 12.0623C6.11691 12.0621 5.74215 12.1756 5.42334 12.3885C5.10454 12.6014 4.85603 12.904 4.70923 13.2581C4.56243 13.6122 4.52395 14.0019 4.59864 14.3779C4.67333 14.7539 4.85785 15.0992 5.12886 15.3704C5.39986 15.6415 5.74518 15.8261 6.12113 15.901C6.49709 15.9758 6.88679 15.9375 7.24096 15.7908C7.59513 15.6441 7.89785 15.3957 8.11083 15.077C8.32381 14.7583 8.43749 14.3836 8.43749 14.0002V12.0623H6.50024Z"
        fill={color ? color : "#E8CBFF"}
      />
    </svg>
  );
};

export default Figma;
