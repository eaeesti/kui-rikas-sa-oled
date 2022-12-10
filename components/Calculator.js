import { useState } from "react";
import { getEstonianIncomePercentile } from "../utils/calculator";
import { defer } from "../utils/utils";
import Header from "./Header";
import IncomeInput from "./IncomeInput";
import Results from "./Results";

export default function Calculator({ evaluations }) {
  let [income, setIncome] = useState();

  function showResults(income) {
    setIncome();
    defer(() => setIncome(income));
  }

  return (
    <div className="flex flex-col items-center px-4 py-24 space-y-20 md:px-8 bg-slate-100 text-slate-700">
      <Header />
      <IncomeInput submitIncome={showResults} />
      {!!income && <Results income={income} evaluations={evaluations} />}
    </div>
  );
}
