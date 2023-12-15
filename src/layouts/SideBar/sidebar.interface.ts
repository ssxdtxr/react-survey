import { Dispatch, SVGProps, SetStateAction } from "react";

export interface ISideBar {
  title: string;
  path: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

export interface ISideBarFunc {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
