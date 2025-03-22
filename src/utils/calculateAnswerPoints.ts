import { allQuestions } from "../data.ts"
import { Answer, Category } from "../models.ts";

export const calculateAnswerPoints = (answer: Answer) => {
    const points = {
        economicFreedom: 0,
        individualFreedom: 0
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