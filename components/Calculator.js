import { useState } from "react";
import { getEstonianIncomePercentile } from "../utils/calculator";
import { defer } from "../utils/utils";
import Header from "./Header";
import IncomeInput from "./IncomeInput";
import Results from "./Results";

export default function Calculator() {
  let [percentile, setPercentile] = useState();

  function showResults(income) {
    setPercentile();
    defer(() => {
      setPercentile(getEstonianIncomePercentile(income));
    });
  }

  return (
    <div className="flex flex-col items-center px-4 py-24 space-y-20 md:px-8 bg-slate-100 text-slate-700">
      <Header />
      <IncomeInput submitAction={showResults} />
      {percentile && <Results percentile={percentile} />}
    </div>
  );
}
