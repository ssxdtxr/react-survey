import { NavLink } from "react-router-dom";
import { FC } from "react";

import { routes } from "./sidebar.data";
import { ISideBarFunc } from "./sidebar.interface";

import { FaRegUserCircle } from "react-icons/fa";

const SideBar: FC<ISideBarFunc> = ({ isOpen, setIsOpen }) => {
  return (
    <div className="flex  flex-col items-center h-[100vh] shadow-md blur-bg">
      <div
        className={`flex h-20 items-center w-full gap-2 p-4 border-b-2 ${
          !isOpen && "justify-center"
        }`}
      >
        <FaRegUserCircle
          className="cursor-pointer"
          size={30}
          onClick={() => setIsOpen((prev) => !prev)}
        />
        {isOpen && <span>DaoName</span>}
      </div>
      <div className="flex flex-col items-center gap-3 py-12">
        <span>APPS</span>
        <ul className="flex flex-col justify-center gap-4">
          {routes.map(({ title, path, icon: Icon }) => (
            <li className={`flex px-3`} key={path}>
              <NavLink to={path}>
                {({ isActive }) => (
                  <div
                    className={`border-l-4  ${
                      !isOpen ? "w-full pl-1" : "w-[170px]"
                    } items-center hover:border-[#000] transition-colors pl-2 ${
                      isOpen && "flex gap-2"
                    } ${isActive && "border-l-4 border-[#20e8e8]"}`}
                    title={title}
                  >
                    <Icon
                      className={`w-7 h-7 transition-all  ${
                        isActive ? "text-[#000]" : "text-[#a1afb3]"
                      }`}
                    />
                    {isOpen && (
                      <span className={`${isActive && "font-bold"}`}>
                        {title}
                      </span>
                    )}
                  </div>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
