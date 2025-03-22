import { UserAnswer } from "../models";

export const calculateQuizResults = (userAnswers: UserAnswer[]) => {
  function calculateTotalFreedom(questions: UserAnswer[]) {
    return questions.reduce(
      (accumulator, currentQuestion) => {
        accumulator.economicFreedom += currentQuestion.points.economicFreedom;
        accumulator.individualFreedom +=
          currentQuestion.points.individualFreedom;
        return accumulator;
      },
      { economicFreedom: 0, individualFreedom: 0 }
    );
  }

  const totalFreedom = calculateTotalFreedom(userAnswers);
  return totalFreedom;
};
