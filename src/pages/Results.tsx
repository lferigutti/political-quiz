import Card from "../shared/Card.js";
import { resultsText } from "../constants/copyText.js";
import NolanGraph from "../components/nola-chart/NolaGraph.js";
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
    <>
      <Card title={resultsText.resultsTitle}>
        {resultIdeology ? (
          <>
            <h2 className="md:text-lg">
              {" "}
              Su ideología es:
              <strong> {resultIdeology?.name}</strong>
            </h2>
            <p className="md:text-lg">{resultIdeology.description}</p>
          </>
        ) : (
          <p>Lo siento pero ha ocurrido un error.</p>
        )}
        <NolanGraph resultsCoordenates={resultsQuiz} />
        <p className="text-sm text-muted">
          Disclaimer: Las posiciones de los políticos en el gráfico son
          aproximadas y han sido asignadas por nuestro equipo con base en
          análisis y referencias públicas. No representan respuestas directas de
          los políticos a este test ni deben interpretarse como una afiliación
          oficial.
        </p>
      </Card>
    </>
  );
};

export default Results;
