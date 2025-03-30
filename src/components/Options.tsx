import { useMemo } from "react";
import { Question } from "../models";


const shuffleWithSeed = (array: string[], seed: number) => {
  const shuffled = [...array];
  let randomSeed = seed;

  for (let i = shuffled.length - 1; i > 0; i--) {
    randomSeed = (randomSeed * 9301 + 49297) % 233280; // Simple LCG
    const j = randomSeed % (i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};


const Options = ({
  questionObject,
  onSelectedAnswer,
  optionSelected,
}: {
  questionObject: Question | undefined;
  onSelectedAnswer: (option: string) => void;
  optionSelected: string;
  }) => {
  
    const shuffledOptions = useMemo(() => {
      if (!questionObject) return [];
      return shuffleWithSeed(questionObject.options, questionObject.id);
    }, [questionObject]);
  
  return (
    <ul className="items-start space-y-3 w-full mx-auto">
      {shuffledOptions.map((option) => {
        const isSelected = option === optionSelected;
        return (
          <li key={option} className="w-full">
            <button
              className={`w-full p-2 sm:p-3 md:text-lg break-words text-center sm:text-left 
                      rounded-lg border transition-all duration-200 
                      md:hover:border-primary md:hover:bg-tertiary 
                      outline-none 
                      ${
                        isSelected
                          ? "bg-tertiary border-primary shadow-md"
                          : "border-gray-300"
                      }`}
              onClick={() => onSelectedAnswer(option)}
              aria-pressed={isSelected}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Options;
