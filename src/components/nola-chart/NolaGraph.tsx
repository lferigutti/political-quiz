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
  ReferenceLine,
  Text
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
    <div style={{ width: "100%", overflowX: "auto" }}>
      <ResponsiveContainer width="100%" height={sizes.chartHeigh}>
        <ScatterChart margin={{ top: 20, bottom: 50, left: 20, right: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <ReferenceLine
            x={50}
            stroke="black"
            label={
              <Text angle={-90} dx={13} dy={300}>
                Libertad Personal →
              </Text>
            }
          />
          <ReferenceLine
            y={50}
            stroke="black"
            label={
              <Text dx={20} dy={15}>
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
          <ReferenceArea
            x1={0}
            x2={50}
            y1={50}
            y2={100}
            fill="red"
            fillOpacity={0.2}
            label="Progresista"
          />
          <ReferenceArea
            x1={50}
            x2={100}
            y1={50}
            y2={100}
            fill="yellow"
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
            fill="DeepSkyBlue"
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
          {politicians && politicians.map((politician) => (
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
            fill="Brown"
            shape="star"
            legendType="star"
          />
          <Tooltip content={<CustomTooltip />} cursor={false} />
          <Legend verticalAlign="bottom" align="right" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default NolanGraph;
