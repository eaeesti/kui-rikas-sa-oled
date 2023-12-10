import { usePlausible } from "next-plausible";

export default function SliderInput({ percentage, setPercentage, min, max }) {
  const plausible = usePlausible();

  return (
    <div className="flex flex-row space-x-4 w-full">
      <div>{min}%</div>
      <div className="flex relative flex-col justify-center w-full">
        <div className="absolute my-auto w-full h-3 rounded-full bg-slate-200"></div>
        <div
          className="absolute my-auto w-1/2 h-3 rounded-full bg-primary-200"
          style={{ width: `${100 * (percentage / max)}%` }}
        ></div>
        <input
          className="z-10 form-range"
          type="range"
          min={min}
          max={max}
          onInput={(event) => setPercentage(event.target.value)}
          onMouseUp={() => plausible("slider-change")}
          onTouchEnd={() => plausible("slider-change")}
          value={percentage}
        />
      </div>
      <div>{max}%</div>
    </div>
  );
}
