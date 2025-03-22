
export interface UserAnswer extends Answer {
  points: Points;
}

export interface Points {
  economicFreedom: number;
  individualFreedom: number;
}

export interface Answer {
  questionId: number;
  selectedOption: string;
}

export interface Question {
  id: number;
  category: Category;
  subCategory: string;
  question: string;
  options: string[];
} 


//export type Category = "Personal" | "Económica";
export enum Category {
  Personal = "Personal",
  Economic = "Económica",
}