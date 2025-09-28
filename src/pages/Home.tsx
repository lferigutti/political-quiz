import { Link } from "react-router";
import { homeText } from "../constants/copyText.js";
import Button from "../shared/Button.js";

const Home = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-8">
      {/* Hero Section */}
      <div className="text-center mb-12 pt-8">
        <h1 className="text-4xl md:text-6xl font-bold text-neutral mb-6 bg-gradient-to-r from-neutral via-secondary to-primary bg-clip-text text-transparent">
          {homeText.homeTitle}
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
      </div>

      {/* Main Content Card */}
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 border border-white/30 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 mb-12">
        <div className="space-y-6">
          {homeText.homeDescription.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg md:text-xl text-neutral/80 leading-relaxed font-light text-center"
            >
              {paragraph}
            </p>
          ))}

          {/* Call to Action */}
          <div className="pt-8 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <Button
                type="primary"
                className="relative bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-bold py-4 px-8 rounded-xl text-xl shadow-lg transform transition-all duration-300 hover:scale-105"
              >
                <Link to="/test-politico" className="flex items-center gap-3">
                  <span>Comenzar el Test</span>
                  <svg
                    className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    ></path>
                  </svg>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-white to-backgroundSecondary rounded-2xl p-8 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
          <div className="flex items-start mb-6">
            <div className="w-14 h-14 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center mr-6 shadow-lg">
              <svg
                className="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                ></path>
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-neutral mb-3">
                Análisis Completo
              </h3>
              <p className="text-neutral/70 text-lg leading-relaxed">
                Descubre tu posición en el espectro político mediante un
                análisis integral de tus preferencias económicas y sociales.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-white to-backgroundSecondary rounded-2xl p-8 border border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
          <div className="flex items-start mb-6">
            <div className="w-14 h-14 bg-gradient-to-r from-secondary to-tertiary rounded-2xl flex items-center justify-center mr-6 shadow-lg">
              <svg
                className="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-neutral mb-3">
                Resultados Rápidos
              </h3>
              <p className="text-neutral/70 text-lg leading-relaxed">
                Obtén tu perfil político al instante con visualizaciones claras
                y comparaciones con figuras políticas conocidas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
