import { useState } from "react";
import { Outlet } from "react-router-dom";
import React from "react";

import cn from "clsx";

import Loader from "components/Loader";

import SideBar from "./SideBar";
import InfoBar from "./InfoBar";

const Layout = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div
      className={cn("grid grid-cols-[1fr_10fr]", {
        "grid-cols-[1fr_20fr]": !isOpen,
      })}
    >
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex flex-col">
        <InfoBar />
        <React.Suspense fallback={<Loader />}>
          <div className="h-full px-20 py-8 bg-slate-100">
            <Outlet />
          </div>
        </React.Suspense>
      </div>
    </div>
  );
};

export default Layout;
