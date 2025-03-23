import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceArea,
  Legend,
  Label,
} from "recharts";
import { Points } from "../../models";
import { politicians } from "../../data";
import CustomTooltip from "./CustomTooltip";
import { useState, useEffect } from "react";

const NolanGraph = ({ resultsCoordenates }: { resultsCoordenates: Points }) => {
  const [sizes, setSizes] = useState({
    chartHeigh: window.innerWidth < 640 ? 450 : 550,
    imageSize: window.innerWidth < 640 ? 35 : 50,
  });

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
    <div style={{ width: "100%", overflowX: "auto" }}>
      <ResponsiveContainer width="100%" height={sizes.chartHeigh}>
        <ScatterChart margin={{ top: 20, bottom: 50, left: 2, right: 2 }}>
          <CartesianGrid strokeDasharray="3 3" />
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
          <ReferenceArea
            x1={0}
            x2={50}
            y1={50}
            y2={100}
            fill="green"
            fillOpacity={0.2}
            label="Progresista"
          />
          <ReferenceArea
            x1={50}
            x2={100}
            y1={50}
            y2={100}
            fill="purple"
            fillOpacity={0.2}
            label="Liberal"
          />
          <ReferenceArea
            x1={0}
            x2={50}
            y1={0}
            y2={50}
            fill="gray"
            fillOpacity={0.2}
            label="Totalitario"
          />
          <ReferenceArea
            x1={50}
            x2={100}
            y1={0}
            y2={50}
            fill="yellow"
            fillOpacity={0.2}
            label="Conservador"
          />
          <ReferenceArea
            x1={25}
            x2={75}
            y1={25}
            y2={75}
            fill="black"
            fillOpacity={0.1}
            label="Centro"
          />
          {politicians.map((politician) => (
            <Scatter
              key={politician.name}
              name={politician.name}
              legendType="none"
              data={[
                {
                  x: politician.position.economicFreedom,
                  y: politician.position.individualFreedom,
                  imgSrc: politician.img,
                  name: politician.name,
                },
              ]}
              shape={
                <image
                  width={sizes.imageSize}
                  height={sizes.imageSize}
                  xlinkHref={politician.img}
                />
              }
            />
          ))}
          <Scatter key="Usted" name="Usted" data={data} fill="brown" />
          <Tooltip content={<CustomTooltip />} cursor={false} />
          <Legend verticalAlign="bottom" align="right" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default NolanGraph;
