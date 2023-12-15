import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { surveyItems } from "./survey.data";

import { Button } from "antd/es/radio";
import Answer from "./Answer/index";

import { AnswerType } from "./types/answer.type";
import { toast } from "react-hot-toast";

const Survey = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState<AnswerType>({
    isOpen: false,
    answer: "",
    isTrue: false,
  });
  const [step, setStep] = useState<number>(1);
  const [isRight, setIsRight] = useState<number>(0);

  const survey = surveyItems.filter((item) => item._id === parseInt(id || "1"));

  useEffect(() => {
    toast(
      "Внимание! Если вы покинете тест в процессе его прохождения - данные будут утеряны.",
      {
        style: {
          backgroundColor: "#FEDD00",
          color: "#000",
          padding: "12px",
          fontSize: "17px",
        },
        duration: 5000,
      }
    );
  }, []);

  const onClickQuestion = (isEnd: boolean) => {
    if (isEnd) {
      toast.success("Вы успешно завершили тестирование. Поздравляю!");
    }
    setStep((prev) => prev + 1);
    setIsActive(() => ({
      isOpen: false,
      answer: "",
    }));
  };

  const onConfirmQuestion = (): void => {
    toast.success("Ответ успешно записан");

    if (isActive.isTrue) {
      setIsRight((prev) => prev + 1);
    }
    setIsActive((prev) => ({
      ...prev,
      isOpen: true,
    }));
  };

  return (
    <div className="relative w-full h-full bg-white rounded-2xl">
      <div>
        {survey.map(({ name, survey: Survey, image, _id }) => (
          <section
            className="flex flex-col items-center justify-center p-4 "
            key={_id}
          >
            <h2 className="text-[30px] absolute left-5 top-5">{name}</h2>
            <section>
              {Survey.map(
                ({ question, answers, id }) =>
                  step === id && (
                    <div key={id} className="flex flex-col items-center mt-20">
                      <h3 className="font-bold text-[35px]">{question}</h3>
                      <ul className="grid h-[500px] grid-cols-2 px-20 py-12 mt-6 rounded-md gap-x-20  bg-slate-200">
                        {answers.map(({ answerId, variant, isTrue }) => (
                          <Answer
                            key={answerId}
                            selected={isActive}
                            setSelected={setIsActive}
                            variant={variant}
                            id={answerId}
                            isTrue={isTrue}
                          />
                        ))}
                      </ul>

                      {isActive.answer && (
                        <div className="mt-5">
                          {isActive.isOpen ? (
                            <Button
                              onClick={() =>
                                onClickQuestion(step === Survey.length)
                              }
                            >
                              {step === Survey.length
                                ? "Результаты тестирования"
                                : "Следующий вопрос"}
                            </Button>
                          ) : (
                            <Button onClick={onConfirmQuestion}>
                              Подвердить свой выбор
                            </Button>
                          )}

                          <Button
                            disabled={isActive.isOpen}
                            onClick={() => {
                              setIsActive(() => ({
                                isOpen: false,
                                answer: "",
                              }));
                            }}
                          >
                            Отменить выбор
                          </Button>
                        </div>
                      )}
                      {isActive.isOpen && (
                        <div>Вы дали ответ: {isActive.answer}</div>
                      )}
                    </div>
                  )
              )}

              {step > Survey.length && (
                <>
                  <div className="flex items-center justify-center mt-[500px]">
                    Вы дали {isRight} правильных и {Survey.length - isRight}{" "}
                    неправильных ответов
                  </div>
                  <Button onClick={() => navigate("/")}>Завершить тест</Button>
                </>
              )}
            </section>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Survey;
