import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { ISurvey } from "types/servey.interface";

interface IFavorites {
  likes: ISurvey[];
  setLikes: (like: ISurvey) => void;
}

export const useFavorites = create<IFavorites>()(
  immer((set, get) => ({
    likes: [],
    setLikes: (like) =>
      set(({ likes }) => {
        const isExist = likes.some((item) => item._id === like._id);

        if (isExist) {
          const index = likes.findIndex((item) => item._id === like._id);
          if (index !== -1) {
            likes.splice(index, 1);
          }
        } else likes.push(like);
      }),
  }))
);
