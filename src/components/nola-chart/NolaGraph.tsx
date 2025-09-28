import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceArea,
  Label,
  ReferenceLine,
  Text,
} from "recharts";
import { Points } from "../../models";

import CustomTooltip from "./CustomTooltip";
import { useState, useEffect } from "react";
import CircularImage from "./CircularImage";
// import { useQuery } from "@tanstack/react-query";
// import { request } from "../../utils/request";

import { politicians } from "../../data";

const NolanGraph = ({ resultsCoordenates }: { resultsCoordenates: Points }) => {
  const [sizes, setSizes] = useState({
    chartHeigh: window.innerWidth < 640 ? 450 : 550,
    imageSize: window.innerWidth < 640 ? 25 : 50,
  });

  // const { data: politicians } = useQuery({
  //   queryKey: ["politicians"],
  //   queryFn: () => request<Politician[]>('api/v1/politicians'),
  // })

  useEffect(() => {
    const handleResize = () => {
      setSizes({
        chartHeigh: window.innerWidth < 640 ? 450 : 600,
        imageSize: window.innerWidth < 640 ? 35 : 50,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const data = [
    {
      x: resultsCoordenates.economicFreedom,
      y: resultsCoordenates.individualFreedom,
      imgSrc: undefined,
      name: "Usted",
    },
  ];

  return (
    <div
      className="w-full bg-gradient-to-br from-backgroundSecondary/20 to-white/40 rounded-2xl p-4 md:p-6"
      style={{ overflowX: "auto" }}
    >
      <ResponsiveContainer width="100%" height={sizes.chartHeigh}>
        <ScatterChart margin={{ top: 20, bottom: 50, left: 20, right: 20 }}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgba(169, 242, 125, 0.3)"
            strokeWidth={1}
          />
          <ReferenceLine
            x={50}
            stroke="rgba(30, 6, 58, 0.8)"
            strokeWidth={2}
            label={
              <Text
                angle={-90}
                dx={13}
                dy={300}
                style={{ fill: "#1E063A", fontWeight: "bold" }}
              >
                Libertad Personal →
              </Text>
            }
          />
          <ReferenceLine
            y={50}
            stroke="rgba(30, 6, 58, 0.8)"
            strokeWidth={2}
            label={
              <Text
                dx={20}
                dy={15}
                style={{ fill: "#1E063A", fontWeight: "bold" }}
              >
                Libertad Economica →
              </Text>
            }
          />
          {/* Axis Labels (Custom) */}
          <XAxis
            type="number"
            name="Libertad Economica"
            dataKey="x"
            domain={[0, 100]}
            hide
            label={{
              value: "Libertad Economica",
              position: "insideBottom",
              offset: -5,
            }}
          />
          <YAxis
            type="number"
            name="Libertad Personal"
            dataKey="y"
            domain={[0, 100]}
            hide
          >
            <Label
              value="Libertad Personal"
              angle={-90}
              position="insideLeft"
            />
          </YAxis>
          {/* Modern Reference Areas with gradient-like colors */}
          <ReferenceArea
            x1={0}
            x2={50}
            y1={50}
            y2={100}
            fill="rgba(239, 68, 68, 0.15)"
            stroke="rgba(239, 68, 68, 0.3)"
            strokeWidth={1}
            label="Progresista"
          />
          <ReferenceArea
            x1={50}
            x2={100}
            y1={50}
            y2={100}
            fill="rgba(251, 191, 36, 0.15)"
            stroke="rgba(251, 191, 36, 0.3)"
            strokeWidth={1}
            label="Liberal"
          />
          <ReferenceArea
            x1={0}
            x2={50}
            y1={0}
            y2={50}
            fill="rgba(107, 114, 128, 0.15)"
            stroke="rgba(107, 114, 128, 0.3)"
            strokeWidth={1}
            label="Totalitario"
          />
          <ReferenceArea
            x1={50}
            x2={100}
            y1={0}
            y2={50}
            fill="rgba(59, 130, 246, 0.15)"
            stroke="rgba(59, 130, 246, 0.3)"
            strokeWidth={1}
            label="Conservador"
          />
          <ReferenceArea
            x1={25}
            x2={75}
            y1={25}
            y2={75}
            fill="rgba(30, 6, 58, 0.08)"
            stroke="rgba(30, 6, 58, 0.2)"
            strokeWidth={1}
            label="Centro"
          />
          {politicians &&
            politicians.map((politician) => (
              <Scatter
                key={politician.name}
                name={politician.name}
                legendType="none" // Keep as none, the image is the representation
                data={[
                  // Data must include the image source property (e.g., 'imgSrc')
                  {
                    x: politician.position.economicFreedom,
                    y: politician.position.individualFreedom,
                    imgSrc: politician.img, // Make sure politician.img holds the URL/path
                    name: politician.name,
                  },
                ]}
                // Pass the custom shape component instance, providing the imageSize prop
                shape={<CircularImage imageSize={sizes.imageSize} />}
              />
            ))}
          <Scatter
            key="Usted"
            name="Usted"
            data={data}
            fill="url(#userGradient)"
            shape="star"
            legendType="none"
          />
          {/* Add gradient definition for user point */}
          <defs>
            <linearGradient
              id="userGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#a9f27d" />
              <stop offset="100%" stopColor="#51CFA2" />
            </linearGradient>
          </defs>
          <Tooltip content={<CustomTooltip />} cursor={false} />
        </ScatterChart>
      </ResponsiveContainer>
      
      {/* Simple user legend outside the chart */}
      <div className="flex justify-center mt-4">
        <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-xl px-4 py-2 border border-primary/20 shadow-sm">
          <div className="w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
          <span className="text-sm font-semibold text-neutral">Su Posición</span>
        </div>
      </div>
    </div>
  );
};

export default NolanGraph;
