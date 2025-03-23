import { Dropdown, Space } from "antd";
import { allQuestions } from "../data.ts";
import { DownOutlined } from "@ant-design/icons";

const DropDownQuestions = ({
  onSelectedQuestion,
  questionSelectedID,
  questionAnsweredIds,
}: {
  onSelectedQuestion: (questionId: number) => void;
  questionSelectedID: number;
  questionAnsweredIds: number[] 
}) => {
  const items = allQuestions.map((question) => ({
    key: question.id,
    label: (
      <span
        style={{
          fontWeight: questionSelectedID === question.id ? "bold" : "normal",
          color: questionSelectedID === question.id ? "#1E063A" : "",
        }}
      >
        {questionAnsweredIds.includes(question.id) ? "✔️ " : ""}
        {question.subCategory}
      </span>
    ),
    onClick: () => handleOnSelectQuestion(question.id),
  }));

  const actualQuestion = allQuestions.find((q) => q.id === questionSelectedID);

  const handleOnSelectQuestion = (questionId: number) => {
    onSelectedQuestion(Number(questionId));
  };

  return (
    <Dropdown
      placement="bottom"
      menu={{
        items,
      }}
    >
      <Space className="font-bold text-lg">
        {actualQuestion?.subCategory || "Preguntas"}
        <DownOutlined />
      </Space>
    </Dropdown>
  );
};


export default DropDownQuestions;
