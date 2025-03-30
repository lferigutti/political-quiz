import { allQuestions } from "../data.ts"
import { Answer, Category, Points } from "../models.ts";

export const calculateAnswerPoints = (answer: Answer) => {
    const points: Points = {
        economicFreedom: undefined,
        individualFreedom: undefined
    }

    const question = allQuestions.find(
        (q) => String(q.id) === String(answer.questionId)
    )

    const answerIndex = question?.options.findIndex((option) => option === answer.selectedOption) || 0;
    const point = answerIndex * 5

    if (question?.category === Category.Personal) {
        points.individualFreedom = point
    }
    else if (question?.category === Category.Economic) {
        points.economicFreedom = point;
    }

    return { ...answer, points};   
}