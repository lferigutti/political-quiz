import QUESTIONS from "./db-data-mock/questions.json";
import IDEOLOGIES from "./db-data-mock/ideologies.json";
import POLITICIANS from "./db-data-mock/politicians.json";

import type { Question, Category, Politicians } from "./models";



export const allQuestions: Question[] = QUESTIONS.questions.map((item) => ({
  id: item.id,
  category: item.category as Category,
  subCategory: item.subCategory,
  question: item.question,
  options: item.options,
}));;

export const allIdeologies = IDEOLOGIES.ideologies;

export const politiciansIdeologies: Politicians[] = POLITICIANS.politicians

export const ideologies = [
  {
    nombre: "Centro",
    x: { x1: 25, x2: 75 },
    y: { y1: 25, y2: 75 },
    color: "black"
  },
  {
    nombre: "Totalitario",
    x: { x1: 0, x2: 50 },
    y: { y1: 0, y2: 50 },
    color: "gray"
  },
  {
    nombre: "Liberal",
    x: { x1: 50, x2: 100 },
    y: { y1: 50, y2: 100 },
    color: "yellow"
  },
  {
    nombre: "Conservador",
    x: { x1: 50, x2: 100 },
    y: { y1: 0, y2: 50 },
    color: "blue"
  },
  {
    nombre: "Progresista",
    x: { x1: 0, x2: 50 },
    y: { y1: 50, y2: 100 },
    color: 'green'
  },
];
