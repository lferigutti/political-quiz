import Card from "../shared/Card.js";
import { resultsText } from "../constants/copyText.js";
import NolanGraph from "../components/NolaGraph.jsx";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
import { getIdeology } from "../utils/getIdeology.ts";

const Results = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const quizResults = state?.quizResults;

  useEffect(() => {
    if (!quizResults) {
      navigate("/");
    }
  });

  const resultsQuiz = quizResults || {
    economicFreedom: 0,
    individualFreedom: 0,
  };

  const resultIdeology = getIdeology(resultsQuiz);

  return (
    <Card title={resultsText.resultsTitle}>
      {resultIdeology ? (
        <>
          <h2 className="text-lg">
            {" "}
            Su ideología es:
            <strong> {resultIdeology?.name}</strong>
          </h2>
          <p>{resultIdeology.description}</p>
        </>
      ) : (
        <p>Lo siento pero ha ocurrido un error.</p>
      )}
      <NolanGraph resultsCoordenates={resultsQuiz} />
    </Card>
  );
};

export default Results;
