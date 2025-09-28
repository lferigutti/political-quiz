import { Dropdown } from "antd";
import { allQuestions } from "../data.ts";
import { DownOutlined } from "@ant-design/icons";

const DropDownQuestions = ({
  onSelectedQuestion,
  questionSelectedID,
  questionAnsweredIds,
}: {
  onSelectedQuestion: (questionId: number) => void;
  questionSelectedID: number;
  questionAnsweredIds: number[];
}) => {
  const items = allQuestions.map((question) => ({
    key: question.id,
    label: (
      <div className="flex items-center gap-2 p-2 rounded-lg transition-all duration-200 hover:bg-primary/10">
        <span className="text-lg">
          {questionAnsweredIds.includes(question.id) ? "✅" : "⭕"}
        </span>
        <span
          className={`${
            questionSelectedID === question.id
              ? "font-bold text-primary"
              : "font-medium text-neutral/80"
          } ${
            questionAnsweredIds.includes(question.id) ? "text-secondary" : ""
          }`}
        >
          {question.subCategory}
        </span>
      </div>
    ),
    onClick: () => handleOnSelectQuestion(question.id),
  }));

  const actualQuestion = allQuestions.find((q) => q.id === questionSelectedID);

  const handleOnSelectQuestion = (questionId: number) => {
    onSelectedQuestion(Number(questionId));
  };

  return (
    <Dropdown
      placement="bottomLeft"
      menu={{
        items,
        style: {
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(169, 242, 125, 0.3)",
          borderRadius: "16px",
          padding: "8px",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
          minWidth: "280px",
        },
      }}
    >
      <div className="flex items-center gap-2 px-4 py-2 bg-white/80 hover:bg-white/90 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md">
        <span className="font-semibold text-neutral text-sm md:text-base">
          {actualQuestion?.subCategory || "Preguntas"}
        </span>
        <DownOutlined className="text-primary" />
      </div>
    </Dropdown>
  );
};

export default DropDownQuestions;
