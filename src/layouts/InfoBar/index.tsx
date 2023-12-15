import { useLocation, useNavigate } from "react-router-dom";

import { IoIosArrowForward } from "react-icons/io";

import { setTitle } from "./utils/setTitle";

const InfoBar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="w-full h-20 p-4 border-b-2 " onClick={() => navigate(-1)}>
      <div className="relative flex items-center px-3 transition-colors cursor-pointer rounded-xl hover:bg-black hover:text-white w-fit">
        <IoIosArrowForward
          color="#20e8e8"
          size={30}
          className="absolute left-0 transition-transform"
        />
        <div className="p-4">{setTitle(pathname)}</div>
      </div>
    </div>
  );
};

export default InfoBar;
