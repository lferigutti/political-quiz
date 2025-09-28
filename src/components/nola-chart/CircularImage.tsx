interface PoliticianDataPoint {
  x: number;
  y: number;
  imgSrc: string; // Expecting politician images to always have a src
  name: string;
}

const CircularImage = (props: {
  cx?: number;
  cy?: number;
  payload?: PoliticianDataPoint;
  imageSize?: number;
}) => {
  const { cx, cy, payload, imageSize } = props;

  if (!cx || !cy || !imageSize || !payload || !payload.imgSrc) {
    return null;
  }

  const radius = imageSize / 2;
  // Generate a unique ID for the clipPath based on name or random
  const uniqueClipId = `clip-${
    payload.name?.replace(/\s+/g, "-") ||
    Math.random().toString(36).substring(7)
  }`;

  // Calculate top-left corner for the image based on center (cx, cy) and size
  const imgX = cx - radius;
  const imgY = cy - radius;

  return (
    // Use <g> to group elements if needed, especially clipPath + image
    <g>
      <defs>
        <clipPath id={uniqueClipId}>
          <circle cx={cx} cy={cy} r={radius} />
        </clipPath>
      </defs>
      <image
        x={imgX}
        y={imgY}
        width={imageSize}
        height={imageSize}
        xlinkHref={payload.imgSrc}
        clipPath={`url(#${uniqueClipId})`}
        preserveAspectRatio="xMidYMid slice"
      />
      {/* Modern border with gradient effect */}
      <circle
        cx={cx}
        cy={cy}
        r={radius + 1}
        fill="none"
        stroke="rgba(169, 242, 125, 0.6)"
        strokeWidth="2"
        style={{
          filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
        }}
      />
      <circle
        cx={cx}
        cy={cy}
        r={radius + 3}
        fill="none"
        stroke="rgba(169, 242, 125, 0.3)"
        strokeWidth="1"
      />
    </g>
  );
};

export default CircularImage;
