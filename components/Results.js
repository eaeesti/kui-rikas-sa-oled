import { useState } from "react";
import {
  getEstonianIncomePercentile,
  getIncome,
  internationalizeIncome,
  monthlyToYearly,
} from "../utils/calculator";
import CallToAction from "./CallToAction";
import HorizontalRule from "./HorizontalRule";
import ResultBarChart from "./ResultBarChart";
import ResultPieChart from "./ResultPieChart";

function calculate(income) {
  const yearlyIncome = monthlyToYearly(income);
  const percentile = getEstonianIncomePercentile(yearlyIncome);
  const topPercentile = (100 - percentile).toFixed(3);
  const medianIncome = getIncome(50);
  const internationalizedIncome = internationalizeIncome(yearlyIncome);
  const timesRicherThanMedian = internationalizedIncome / medianIncome;
  return {
    percentile,
    topPercentile,
    medianIncome,
    internationalizedIncome,
    timesRicherThanMedian,
  };
}

export default function Results({ income }) {
  let [donationPercentage, setDonationPercentage] = useState(10);

  const {
    percentile,
    topPercentile,
    medianIncome,
    internationalizedIncome,
    timesRicherThanMedian,
  } = calculate(income);

  const incomeAfterDonating = income * (1 - donationPercentage / 100);
  const afterDonating = calculate(incomeAfterDonating);
  console.log(afterDonating);

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
      {timesRicherThanMedian >= 2 && (
        <>
          <HorizontalRule />
          <div className="text-xl text-center md:text-3xl">
            Sinu sissetulek on{" "}
            <span className="font-bold tracking-tight text-primary-700">
              {timesRicherThanMedian.toFixed(1)} korda suurem
            </span>{" "}
            kui maailma mediaan.
          </div>
          <div className="flex flex-col space-y-8">
            <div className="w-80 h-64 sm:w-96 sm:h-80 md:h-96 md:w-144">
              <ResultBarChart
                medianIncome={medianIncome}
                internationalizedIncome={internationalizedIncome}
              />
            </div>
            <div className="text-xs text-center md:text-sm">
              Sissetulekud on teisendatud{" "}
              <a
                className="font-bold text-primary-700 hover:opacity-70"
                href="https://en.wikipedia.org/wiki/International_dollar"
                target="_blank"
                rel="noopener noreferrer"
              >
                rahvusvahelisteks dollariteks
              </a>
              .
            </div>
          </div>
        </>
      )}
      <HorizontalRule />
      <div className="text-xl text-center md:text-3xl">
        Kui annetaksid{" "}
        <span className="font-bold tracking-tight text-primary-700">
          {donationPercentage}%
        </span>{" "}
        oma sissetulekust ...
      </div>
      <HorizontalRule />
      <div className="text-2xl text-center md:text-3xl">
        ... kuuluksid ikka{" "}
        <span className="font-bold tracking-tight text-primary-700">
          {afterDonating.topPercentile}%
        </span>{" "}
        rikkaimate hulka ...
      </div>
      <div className="w-64 h-64 md:h-96 md:w-96">
        <ResultPieChart
          percentile={afterDonating.percentile}
          topPercentile={afterDonating.topPercentile}
        />
      </div>
      {afterDonating.timesRicherThanMedian >= 2 && (
        <>
          <div className="text-xl text-center md:text-3xl">
            ... ning sinu sissetulek oleks ikka{" "}
            <span className="font-bold tracking-tight text-primary-700">
              {afterDonating.timesRicherThanMedian.toFixed(1)} korda suurem
            </span>{" "}
            kui maailma mediaan.
          </div>
          <div className="flex flex-col space-y-8">
            <div className="w-80 h-64 sm:w-96 sm:h-80 md:h-96 md:w-144">
              <ResultBarChart
                medianIncome={afterDonating.medianIncome}
                internationalizedIncome={afterDonating.internationalizedIncome}
              />
            </div>
          </div>
        </>
      )}
      <HorizontalRule />
      <CallToAction />
    </div>
  );
}
