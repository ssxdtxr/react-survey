import { IAnswer } from "../../../types/servey.interface";

export type AnswerType = {
  isOpen: boolean;
  answer: string;
  isTrue?: boolean;
  answerId?: IAnswer["answerId"] | null;
};
