export default function Results({ percentile }) {
  const topPercentile = (100 - percentile).toFixed(3);

  return (
    <div className="flex flex-col items-center space-y-12 max-w-xl">
      <div className="text-4xl">
        Kuulud{" "}
        <span className="font-bold tracking-tight text-primary-700">
          {topPercentile}%
        </span>{" "}
        rikkaimate hulka!
      </div>
      <div className="text-3xl">
        Oled rikkam kui{" "}
        <span className="font-bold tracking-tight text-primary-700">
          {percentile}%
        </span>{" "}
        inimkonnast.
      </div>
    </div>
  );
}
