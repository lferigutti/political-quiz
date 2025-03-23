import { Question } from "../models";

const Options = ({
  questionObject,
  onSelectedAnswer,
  optionSelected,
}: {
  questionObject: Question | undefined;
  onSelectedAnswer:(option: string) => void ;
  optionSelected:string;
}) => {
  return (
    <ul className="items-start space-y-3 w-full mx-auto">
      {questionObject?.options.map((option) => {
        const isSelected = option === optionSelected;
        return (
          <li key={option} className="w-full">
            <button
              className={`w-full p-2 sm:p-3 md:text-lg break-words text-center sm:text-left 
                          rounded-lg border transition-all duration-200 
                          hover:border-blue-600 hover:bg-blue-50 focus:border-sky-300 focus:bg-blue-100 
                          outline-none 
                          ${
                            isSelected
                              ? "bg-blue-100 border-blue-600 shadow-md"
                              : "border-gray-300"
                          }`}
              onClick={() => onSelectedAnswer(option)}
              tabIndex={0}
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
