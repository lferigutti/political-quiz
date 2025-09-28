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
  const [isLastQuestionAnswered, setIsLastQuestionAnswered] = useState(false);

  const questionSelected = allQuestions.find(
    (question) => question.id === selectedQuestionID
  );

  const numberOfQuestions = allQuestions?.length || 999;
  const percentageAnswered = Math.round(
    (userAnswers.length * 100) / numberOfQuestions
  );
  const questionRepliedIds = userAnswers.map((a) => a.questionId);

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
    if (answerWithPoints.questionId === allQuestions.length) {
      setIsLastQuestionAnswered(true);
    }
    // Removed automatic navigation - users now control when to move forward
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
    <div className="w-full max-w-6xl mx-auto p-4 md:p-8 space-y-8">
      {/* Progress Header */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/30">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-bold text-neutral mb-2 bg-gradient-to-r from-neutral via-secondary to-primary bg-clip-text text-transparent">
              Test Político
            </h1>
            <p className="text-neutral/70">
              Pregunta {selectedQuestionID} de {numberOfQuestions}
            </p>
          </div>

          <div className="flex items-center gap-6">
            <DropDownQuestions
              onSelectedQuestion={setSelectedQuestionID}
              questionSelectedID={selectedQuestionID}
              questionAnsweredIds={questionRepliedIds}
            />
            <div className="relative">
              <Progress
                type="circle"
                percent={percentageAnswered}
                size={80}
                strokeColor={{
                  "0%": "#a9f27d",
                  "100%": "#51CFA2",
                }}
                trailColor="#f0f0f0"
                strokeWidth={8}
                format={(percent) => (
                  <span className="text-sm font-semibold text-neutral">
                    {percent}%
                  </span>
                )}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Question Board Section */}
      <QuestionBoard
        questionObject={questionSelected}
        handleNewAnswer={handleAddAnswer}
        userAnswers={userAnswers}
      />

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/30">
        <Button
          type="background-secondary"
          onClick={handlePrevQuestion}
          disabled={selectedQuestionID === 1}
          className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          Anterior
        </Button>

        {selectedQuestionID !== numberOfQuestions ? (
          <Button
            type="secondary"
            onClick={handleNextQuestion}
            disabled={selectedQuestionID === numberOfQuestions}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
          >
            Próxima
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </Button>
        ) : (
          <Button
            type={isLastQuestionAnswered ? "primary" : "outline"}
            onClick={submitAnswers}
            className="flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <span>Finalizar Test</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </Button>
        )}
      </div>
    </div>
  );
};

export default TestPolitico;
