import React, { FC, Dispatch, SetStateAction } from "react";

import { AnswerType } from "../types/answer.type";

import { AiOutlineCheck } from "react-icons/ai";

import cn from "clsx";

interface IAnswer {
  id: number;
  setSelected: Dispatch<SetStateAction<AnswerType>>;
  selected: AnswerType;
  variant: string;
  isTrue?: boolean;
}

const Answer: FC<IAnswer> = ({
  id,
  setSelected,
  selected,
  variant,
  isTrue,
}) => {
  return (
    <li
      key={id}
      className={cn(
        "hover:border-[#20e8e8]  w-[300px] self-center h-[70px] relative border-l-4 text-[22px] transition-colors flex items-center justify-start gap-3 px-6 py-2 bg-white rounded-lg cursor-pointer",
        {
          "pointer-events-none text-[#AAA] bg-[#F5F5F5]":
            selected.answerId !== id && selected.isOpen,
          "border-[#20e8e8]": selected.answerId === id,
        }
      )}
      onClick={() =>
        setSelected((prev) => ({
          ...prev,
          answer: variant,
          isTrue: isTrue,
          answerId: id,
        }))
      }
    >
      <span>{id}.</span>
      {variant}
      {selected.answerId === id && (
        <AiOutlineCheck className="absolute right-5" />
      )}
    </li>
  );
};

export default Answer;
