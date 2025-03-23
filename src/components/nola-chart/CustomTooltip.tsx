import React from "react";

interface TooltipPayload {
  name: string;
  x: number;
  y: number;
  imgSrc?: string; // Optional image source
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ payload: TooltipPayload }>;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length > 0) {
    const { name, x, y, imgSrc } = payload[0].payload; // Destructure payload

    return (
      <div
        style={{
          backgroundColor: "#ffffff", // Softer version of secondary
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #51CFA2", // Your secondary color
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.15)",
        }}
      >
        {imgSrc && (
          <img
            src={imgSrc}
            alt={name}
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "30px",
              marginBottom: "8px",
              objectFit: "cover",
            }}
          />
        )}
        <p
          style={{
            fontWeight: "600",
            fontSize: "1.1em",
            color: "#51CFA2", // Your text color
            marginBottom: "5px",
          }}
        >
          {name}
        </p>
        <p style={{ fontSize: "0.9em", color: "#1E063A", marginBottom: "3px" }}>
          <span style={{ color: "#1E063A" }}>Libertad Economica:</span>{" "}
          {`${x} %`}
        </p>
        <p style={{ fontSize: "0.9em", color: "#1E063A", marginBottom: "3px" }}>
          <span style={{ color: "#1E063A" }}>Libertad Personal:</span>{" "}
          {`${y} %`}
        </p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
