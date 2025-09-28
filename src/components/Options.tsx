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
    <ul className="items-start space-y-4 w-full mx-auto">
      {shuffledOptions.map((option) => {
        const isSelected = option === optionSelected;
        return (
          <li key={option} className="w-full">
            <button
              className={`w-full p-4 md:p-5 text-lg break-words text-left 
                      rounded-2xl border-2 transition-all duration-300 
                      transform hover:scale-[1.02] hover:-translate-y-1
                      focus:outline-none focus:ring-4 focus:ring-primary/20
                      shadow-lg hover:shadow-xl
                      ${
                        isSelected
                          ? "bg-gradient-to-r from-primary/20 to-secondary/20 border-primary shadow-xl scale-[1.02] -translate-y-1 text-neutral font-semibold"
                          : "bg-white/80 border-neutral/20 hover:border-primary/50 hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 text-neutral/80 hover:text-neutral"
                      }`}
              onClick={() => onSelectedAnswer(option)}
              aria-pressed={isSelected}
            >
              <div className="flex items-center">
                <div
                  className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center transition-all duration-300 ${
                    isSelected
                      ? "border-primary bg-primary"
                      : "border-neutral/30"
                  }`}
                >
                  {isSelected && (
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  )}
                </div>
                <span className="flex-1">{option}</span>
              </div>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Options;
