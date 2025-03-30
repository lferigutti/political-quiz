import { UserAnswer } from "../models";

export const calculateQuizResults = (userAnswers: UserAnswer[]) => {
  function calculateTotalFreedom(questions: UserAnswer[]) {
    return questions.reduce(
      (accumulator, currentQuestion) => {
        accumulator.economicFreedom +=
          currentQuestion.points.economicFreedom || 0;
        accumulator.individualFreedom +=
          currentQuestion.points.individualFreedom || 0;
        return accumulator;
      },
      { economicFreedom: 0, individualFreedom: 0 }
    );
  }
  const totalFreedom = calculateTotalFreedom(userAnswers);

  const economicQuestions = userAnswers.filter(
    (q) => q.points?.economicFreedom !== undefined
  ).length;
  const individualQuestions = userAnswers.filter(
    (q) => q.points?.individualFreedom !== undefined
  ).length;


  const maxEconomicScore = Math.max(economicQuestions * 10, 1);
  const maxIndividualScore = Math.max(individualQuestions * 10, 1);
  return {
    economicFreedom: Math.round(
      (totalFreedom.economicFreedom / maxEconomicScore) * 100
    ),
    individualFreedom: Math.round(
      (totalFreedom.individualFreedom / maxIndividualScore) * 100
    ),
  };
};
