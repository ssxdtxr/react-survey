export interface ISurvey {
  _id: number;
  name: string;
  image: string | null;
  survey: SurveyType[];
}

interface SurveyType {
  id: number;
  question: string;
  answers: IAnswer[];
}

export interface IAnswer {
  answerId: number;
  isTrue: boolean;
  variant: string;
}
