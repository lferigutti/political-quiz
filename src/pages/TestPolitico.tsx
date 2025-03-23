import QuestionBoard from "../components/QuestionBoard.js";
import { useState } from "react";
import { allQuestions } from "../data.ts";
import DropDownQuestions from "../components/DropDownQuestions.jsx";
import { calculateAnswerPoints } from "../utils/calculateAnswerPoints.ts";
import { calculateQuizResults } from "../utils/calculateQuizResult.ts";
import { useNavigate } from "react-router";
import type { Answer, UserAnswer } from "../models.ts";
import Button from "../shared/Button.tsx";
import { Progress } from "antd";

const TestPolitico = () => {
  const [selectedQuestionID, setSelectedQuestionID] = useState(1);
  const navigate = useNavigate();
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);

  const questionSelected = allQuestions.find(
    (question) => question.id === selectedQuestionID
  );

  
  const numberOfQuestions = allQuestions?.length || 999;
  const percentageAnswered = userAnswers.length * 100 / numberOfQuestions;
  const questionRepliedIds = userAnswers.map((a)=> a.questionId)

  const handleAddAnswer = (answer: Answer) => {
    const answerWithPoints = calculateAnswerPoints(answer);

    const userAnswersCopy = [...userAnswers];
    const existingAnswer = userAnswersCopy.find(
      (a) => a.questionId === answerWithPoints.questionId
    );
    let newUserAnswers;
    if (existingAnswer) {
      newUserAnswers = userAnswersCopy.map((a) =>
        a.questionId === answerWithPoints.questionId ? answerWithPoints : a
      );
    } else {
      newUserAnswers = [...userAnswersCopy, answerWithPoints];
    }
    setUserAnswers(newUserAnswers);
  };

  const submitAnswers = () => {
    const quizResults = calculateQuizResults(userAnswers);
    navigate("/resultado", { state: { quizResults } });
  };

  const handleNextQuestion = () => {
    setSelectedQuestionID((prevState) => prevState + 1);
  };

  const handlePrevQuestion = () => {
    setSelectedQuestionID((prevState) => prevState - 1);
  };

  return (
    <div className="flex flex-col bg-gray-100 space-y-5 items-center mt-4 px-4 sm:px-8">
      {/* Dropdown and Header */}
      <div className="w-full max-w-3xl flex justify-between">
        <DropDownQuestions
          onSelectedQuestion={setSelectedQuestionID}
          questionSelectedID={selectedQuestionID}
          questionAnsweredIds={questionRepliedIds}
        />
        <Progress
          type="circle"
          percent={percentageAnswered}
          size="small"
          strokeColor="#a9f27d"
        />
      </div>

      {/* Question Board Section */}
      <div className="w-full max-w-3xl">
        <QuestionBoard
          questionObject={questionSelected}
          handleNewAnswer={handleAddAnswer}
          userAnswers={userAnswers}
        />
      </div>

      {/* Navigation Buttons */}
      <div className="w-full max-w-3xl flex justify-between px-4 sm:px-8">
        <Button
          type="background-secondary"
          onClick={handlePrevQuestion}
          disabled={selectedQuestionID === 1}
        >
          Anterior
        </Button>
        {selectedQuestionID !== numberOfQuestions ? (
          <Button
            type="secondary"
            onClick={handleNextQuestion}
            disabled={selectedQuestionID === numberOfQuestions}
          >
            Próxima
          </Button>
        ) : (
          <Button type="primary" onClick={submitAnswers}>
            Ver los Resultados
          </Button>
        )}
      </div>
    </div>
  );
};

export default TestPolitico;
