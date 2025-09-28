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
      ?.selectedOption ?? "Error";

  return (
    <div className="flex h-full w-full items-center justify-center p-4">
      <div className="w-[90vw] max-w-4xl p-8 md:p-12 rounded-3xl bg-white/90 backdrop-blur-sm shadow-2xl border border-white/30 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral mb-4 leading-relaxed">
            {questionObject?.question || "No Question Selected"}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>
        <Options
          key={questionObject?.id}
          questionObject={questionObject}
          onSelectedAnswer={handleSelectedAnswer}
          optionSelected={option}
        />
      </div>
    </div>
  );
};

export default QuestionBoard;
