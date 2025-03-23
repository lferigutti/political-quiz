import type { Answer, Question } from "../models.js";
import Options from "./Options.js";

const QuestionBoard = ({
  questionObject,
  handleNewAnswer,
  userAnswers,
}: {
  questionObject: Question | undefined;
  handleNewAnswer: (answer: Answer) => void;
  userAnswers: Answer[];
  }) => {
  
  const handleSelectedAnswer = (answer: string) => {
    if (questionObject && questionObject.id !== undefined) {
      const option: Answer = {
        questionId: questionObject.id,
        selectedOption: answer,
      };
      handleNewAnswer(option);
    } else {
      console.error("questionObject or questionId is undefined.");
    }
  };

  const option =
    userAnswers.find((a) => a.questionId === questionObject?.id)
      ?.selectedOption ?? "nada";

  return (
    <div className="flex h-full w-full items-center justify-center ">
      <div className="w-[80vw]  max-w-5xl p-12 rounded-2xl border-lg shadow-lg bg-white ">
        <div className="font-semibold mb-4 md:text-xl text-center">
          {questionObject?.question || "No Question Selected"}
        </div>
        <Options
          questionObject={questionObject}
          onSelectedAnswer={handleSelectedAnswer}
          optionSelected={option}
        />
      </div>
    </div>
  );
};

export default QuestionBoard;
