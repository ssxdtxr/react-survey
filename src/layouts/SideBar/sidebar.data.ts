import { ISideBar } from "./sidebar.interface";

import { FaUser } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { MdFavorite } from "react-icons/md";
import { RiSurveyFill } from "react-icons/ri";
import { GrInProgress } from "react-icons/gr";

export const routes: ISideBar[] = [
  {
    title: "Профиль",
    icon: FaUser,
    path: "/profile",
  },
  {
    title: "Анкеты",
    icon: RiSurveyFill,
    path: "/surveys",
  },
  {
    title: "Избранное",
    icon: MdFavorite,
    path: "/favorites",
  },
  {
    title: "Достижения",
    icon: GrInProgress,
    path: "/progress",
  },
  {
    title: "Настройки",
    icon: IoMdSettings,
    path: "/settings",
  },
];
