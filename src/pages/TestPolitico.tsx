import QuestionBoard from "../components/QuestionBoard.js";
import { Button } from "antd";
import { useState } from "react";
import { allQuestions } from "../data.ts";
import HeaderBoard from "../components/HeaderBoard.jsx";
import DropDownQuestions from "../components/DropDownQuestions.jsx";
import { calculateAnswerPoints } from "../utils/calculateAnswerPoints.ts";
import { calculateQuizResults } from "../utils/calculateQuizResult.ts";
import { useNavigate } from "react-router";
import type { Answer, UserAnswer } from "../models.ts";

const TestPolitico = () => {
  const [selectedQuestionID, setSelectedQuestionID] = useState(1);
  const navigate = useNavigate();
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);

  const questionSelected = allQuestions.find(
    (question) => question.id === selectedQuestionID
  );

  const numberOfQuestions = allQuestions?.length || 999;

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
      <div className="w-full max-w-3xl">
        <DropDownQuestions
          onSelectedQuestion={setSelectedQuestionID}
          questionSelectedID={selectedQuestionID}
        />
        <HeaderBoard
          questionId={selectedQuestionID}
          totalQuestions={numberOfQuestions}
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
          className="text-lg"
          onClick={handlePrevQuestion}
          disabled={selectedQuestionID === 1}
        >
          Anterior
        </Button>
        {selectedQuestionID !== numberOfQuestions ? (
          <Button
            className="text-lg"
            type="primary"
            onClick={handleNextQuestion}
            disabled={selectedQuestionID === numberOfQuestions}
          >
            Próxima
          </Button>
        ) : (
          <Button className="text-lg" onClick={submitAnswers}>
            Ver los Resultados
          </Button>
        )}
      </div>
    </div>
  );
};

export default TestPolitico;
