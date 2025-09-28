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
    <div className="w-full max-w-6xl mx-auto p-4 md:p-8 space-y-8">
      {/* Results Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-neutral mb-4 bg-gradient-to-r from-neutral via-secondary to-primary bg-clip-text text-transparent">
          {resultsText.resultsTitle}
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
      </div>

      {/* Ideology Result Card */}
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 border border-white/30 hover:shadow-2xl transition-all duration-500">
        {resultIdeology ? (
          <div className="text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral">
              Su ideología es:{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {resultIdeology?.name}
              </span>
            </h2>
            <p className="text-lg md:text-xl text-neutral/80 leading-relaxed max-w-4xl mx-auto">
              {resultIdeology.description}
            </p>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-lg text-red-500">
              Lo siento pero ha ocurrido un error.
            </p>
          </div>
        )}
      </div>

      {/* Chart Card */}
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-6 md:p-8 border border-white/30 hover:shadow-2xl transition-all duration-500">
        <div className="mb-6 text-center">
          <h3 className="text-2xl font-bold text-neutral mb-2">
            Mapa Político
          </h3>
          <p className="text-neutral/70">Su posición en el espectro político</p>
        </div>
        <NolanGraph resultsCoordenates={resultsQuiz} />
      </div>

      {/* Disclaimer */}
      <div className="bg-gradient-to-r from-backgroundSecondary/80 to-white/80 backdrop-blur-sm rounded-2xl p-6 border border-primary/20">
        <p className="text-sm text-neutral/70 text-center leading-relaxed">
          <strong className="text-neutral/80">Disclaimer:</strong> Las
          posiciones de los políticos en el gráfico son aproximadas y han sido
          asignadas por nuestro equipo con base en análisis y referencias
          públicas. No representan respuestas directas de los políticos a este
          test ni deben interpretarse como una afiliación oficial.
        </p>
      </div>
    </div>
  );
};

export default Results;
