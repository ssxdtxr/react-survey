import { ISurvey } from "../../types/servey.interface";

export const surveyItems: ISurvey[] = [
  {
    _id: 1,
    name: "Тест по русскому",
    image: null,
    survey: [
      {
        id: 1,
        question: "'А Судьи кто?' - воскликнул",
        answers: [
          {
            answerId: 1,
            variant: "Чацкий",
            isTrue: false,
          },
          {
            answerId: 2,
            variant: "Чичиков",
            isTrue: true,
          },
          {
            answerId: 3,
            variant: "Скотинин",
            isTrue: false,
          },
          {
            answerId: 4,
            variant: "Хлестаков",
            isTrue: false,
          },
        ],
      },
      {
        id: 2,
        question: "Бла бла бла",
        answers: [
          {
            answerId: 1,
            variant: "вфы",
            isTrue: false,
          },
          {
            answerId: 2,
            variant: "Чичивфывков",
            isTrue: false,
          },
          {
            answerId: 3,
            isTrue: true,
            variant: "вфыв",
          },
          {
            answerId: 4,
            isTrue: false,
            variant: "Хлеставфывфыков",
          },
        ],
      },
    ],
  },
  {
    _id: 2,
    name: "Тест по русскому",
    image: null,
    survey: [
      {
        id: 1,
        question: "dsadasdasdasdasdasd",
        answers: [
          {
            answerId: 1,
            isTrue: false,
            variant: "dasdasda",
          },
          {
            answerId: 2,
            isTrue: false,
            variant: "Чичsdasdasdasdиков",
          },
          {
            answerId: 3,
            isTrue: false,
            variant: "Скотиasdasdasнин",
          },
          {
            answerId: 4,
            isTrue: true,
            variant: "Хлестакdasasdasов",
          },
        ],
      },
    ],
  },
];
