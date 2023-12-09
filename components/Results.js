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
import SliderInput from "./SliderInput";
import Impact from "./Impact";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import { formatEstonianNumber, round, roundMoney } from "../utils/numbers";
import ShareButtons from "./ShareButtons";
import Footer from "./Footer";

function calculate(income) {
  const yearlyIncome = monthlyToYearly(income);
  const percentile = Math.min(
    99.9,
    getEstonianIncomePercentile(yearlyIncome)
  ).toFixed(1);
  const topPercentile = (100 - percentile).toFixed(1);
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

export default function Results({ income, evaluations }) {
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

  const yearlyDonation = round(12 * (income - incomeAfterDonating), 2);

  return (
    <div
      id="tulemused"
      className="flex flex-col items-center space-y-12 max-w-xl md:space-y-16 animate-fade-in"
    >
      <HorizontalRule />
      <h2 className="text-2xl text-center">
        Kuulud{" "}
        <span className="font-bold tracking-tight text-primary-700">
          {formatEstonianNumber(topPercentile)}%
        </span>{" "}
        rikkaimate hulka!
      </h2>
      <div className="w-64 h-64 md:h-96 md:w-96">
        <ResultPieChart percentile={percentile} topPercentile={topPercentile} />
      </div>
      <div className="text-xl text-center">
        Oled rikkam kui{" "}
        <span className="font-bold tracking-tight text-primary-700">
          {formatEstonianNumber(percentile)}%
        </span>{" "}
        inimkonnast.
      </div>
      {timesRicherThanMedian >= 2 && (
        <>
          <HorizontalRule />
          <h2 className="text-xl text-center">
            Sinu sissetulek on{" "}
            <span className="font-bold tracking-tight text-primary-700">
              {formatEstonianNumber(round(timesRicherThanMedian, 1))} korda
              suurem
            </span>{" "}
            kui maailma mediaan.
          </h2>
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
                className="font-semibold text-primary-700 hover:opacity-70"
                href="https://en.wikipedia.org/wiki/International_dollar"
                target="_blank"
                rel="noopener noreferrer"
              >
                rahvusvahelisteks dollariteks
                <ArrowTopRightOnSquareIcon className="inline mb-0.5 ml-1 w-4 h-4" />
              </a>
              .
            </div>
          </div>
          <HorizontalRule />
          <h2 className="text-xl text-center">
            Kui annetaksid{" "}
            <span className="font-bold tracking-tight text-primary-700">
              {donationPercentage}%
            </span>{" "}
            oma sissetulekust ...
          </h2>
          <SliderInput
            percentage={donationPercentage}
            setPercentage={setDonationPercentage}
            min={1}
            max={50}
          />
          <HorizontalRule />
          <h2 className="text-xl text-center">
            ... kuuluksid ikka{" "}
            <span className="font-bold tracking-tight text-primary-700">
              {formatEstonianNumber(afterDonating.topPercentile)}%
            </span>{" "}
            rikkaimate hulka ...
          </h2>
          <div className="w-64 h-64 md:h-96 md:w-96">
            <ResultPieChart
              percentile={afterDonating.percentile}
              topPercentile={afterDonating.topPercentile}
              animated={false}
            />
          </div>
          <div className="text-xl text-center">
            ... ning sinu sissetulek oleks ikka{" "}
            <span className="font-bold tracking-tight text-primary-700">
              {formatEstonianNumber(
                round(afterDonating.timesRicherThanMedian, 1)
              )}{" "}
              korda suurem
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
          <HorizontalRule />
          <h2 className="text-xl text-center">
            Igal aastal sinu{" "}
            <span className="font-bold tracking-tight text-primary-700">
              {formatEstonianNumber(roundMoney(yearlyDonation))}€
            </span>{" "}
            annetus saaks aidata ...
          </h2>
          <Impact evaluations={evaluations} donation={yearlyDonation} />
          <div className="text-xl text-center">
            ... kui annetaksid maailma tõhusaimatele heategevusühingutele.
          </div>
        </>
      )}
      <HorizontalRule />
      <CallToAction />
      <HorizontalRule />
      <ShareButtons />
      <HorizontalRule />
      <Footer />
    </div>
  );
}
