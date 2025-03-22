import { Dropdown, Space } from "antd";
import { allQuestions } from "../data.ts";
import { DownOutlined } from "@ant-design/icons";

const DropDownQuestions = ({
  onSelectedQuestion,
  questionSelectedID,
}: {
  onSelectedQuestion:(questionId: number)=> void;
  questionSelectedID: number;
}) => {
  const items = allQuestions.map((question) => ({
    key: question.id,
    label: (
      <span
        style={{
          fontWeight: questionSelectedID === question.id ? "bold" : "normal",
        }}
      >
        {/*{questionSelectedID === question.id ? "✔️ " : ""}*/}
        {question.subCategory}
      </span>
    ),
    onClick: () => handleOnSelectQuestion(question.id),
  }));

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
      <Space>
        Preguntas
        <DownOutlined />
      </Space>
    </Dropdown>
  );
};


export default DropDownQuestions;
