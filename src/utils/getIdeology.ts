import { allIdeologies, ideologies } from "../data.ts";
import { Points } from "../models.ts";

export const getIdeology = (quizResults: Points) => {
  const ideology = ideologies.find((i) => {
    return (
      quizResults.economicFreedom >= i.x.x1 &&
      quizResults.economicFreedom <= i.x.x2 &&
      quizResults.individualFreedom >= i.y.y1 &&
      quizResults.individualFreedom <= i.y.y2
    );
  });

  if (!ideology) {
    return undefined;
  } else {
    return allIdeologies.find((i) => i.name === ideology.nombre);
  }
};
