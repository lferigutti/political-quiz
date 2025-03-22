

const HeaderBoard = ({
  questionId,
  totalQuestions,
}: {
  questionId: number;
    totalQuestions: number;
}) => {
  return (
    <>
      <h2 className="text-xl font-bold">
        Pregunta Numero {questionId || 0}/{totalQuestions}
      </h2>
      <div className="w-full flex justify-evenly"></div>
    </>
  );
};


export default HeaderBoard;
