import React from "react";

const Loader = () => {
  return (
    <div className="fixed left-0 top-0 w-full h-full flex items-center justify-center z-10 bg-[#eef1f6] bg-opacity-60">
      <svg
        xmlns="http://www.w3.org/2000/sv"
        width="800"
        height="800"
        fill="none"
        viewBox="0 0 16 16"
        className="w-20 h-20 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
      >
        <g fill="#000" fillRule="evenodd" clipRule="evenodd">
          <path
            d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
            opacity=".2"
          />
          <path d="M7.25.75A.75.75 0 0 1 8 0a8 8 0 0 1 8 8 .75.75 0 0 1-1.5 0A6.5 6.5 0 0 0 8 1.5a.75.75 0 0 1-.75-.75z" />
        </g>
      </svg>

      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loader;
