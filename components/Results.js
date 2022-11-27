import CallToAction from "./CallToAction";
import HorizontalRule from "./HorizontalRule";
import ResultPieChart from "./ResultPieChart";

export default function Results({ percentile }) {
  const topPercentile = (100 - percentile).toFixed(3);

  return (
    <div className="flex flex-col items-center space-y-12 max-w-xl md:space-y-16 animate-fade-in">
      <HorizontalRule />
      <div className="text-2xl text-center md:text-4xl">
        Kuulud{" "}
        <span className="font-bold tracking-tight text-primary-700">
          {topPercentile}%
        </span>{" "}
        rikkaimate hulka!
      </div>
      <div className="w-64 h-64 md:h-96 md:w-96">
        <ResultPieChart percentile={percentile} topPercentile={topPercentile} />
      </div>
      <div className="text-xl text-center md:text-3xl">
        Oled rikkam kui{" "}
        <span className="font-bold tracking-tight text-primary-700">
          {percentile}%
        </span>{" "}
        inimkonnast.
      </div>
      <HorizontalRule />
      <CallToAction />
    </div>
  );
}
