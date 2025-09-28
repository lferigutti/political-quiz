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
      <div className="bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-primary/30 shadow-2xl transform transition-all duration-300 hover:scale-105">
        {imgSrc && (
          <div className="flex justify-center mb-3">
            <img
              src={imgSrc}
              alt={name}
              className="w-16 h-16 rounded-full object-cover border-3 border-primary/50 shadow-lg"
            />
          </div>
        )}
        <div className="text-center space-y-2">
          <p className="font-bold text-lg text-neutral bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {name}
          </p>
          <div className="space-y-1">
            <p className="text-sm text-neutral/80">
              <span className="font-semibold text-neutral">
                Libertad Económica:
              </span>{" "}
              <span className="font-bold text-secondary">{x}%</span>
            </p>
            <p className="text-sm text-neutral/80">
              <span className="font-semibold text-neutral">
                Libertad Personal:
              </span>{" "}
              <span className="font-bold text-secondary">{y}%</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
