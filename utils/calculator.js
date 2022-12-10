import INCOME_CENTILES from "../data/income_centiles.json";
import { range } from "./utils";

// LCU per international $
// https://data.worldbank.org/indicator/PA.NUS.PPP?view=chart
const ESTONIA_PPP = 0.54337;

export const monthlyToYearly = (monthlyIncome) => monthlyIncome * 12;

export const internationalizeIncome = (incomeEUR) => incomeEUR / ESTONIA_PPP;

export const getPercentile = (incomeIUSD) => {
  const highest = INCOME_CENTILES[INCOME_CENTILES.length - 1];
  return (
    INCOME_CENTILES.find(
      (centile) => centile.international_dollars >= incomeIUSD
    ) || highest
  ).percentage;
};

export const getIncome = (percentile) => {
  const highest = INCOME_CENTILES[INCOME_CENTILES.length - 1];
  return (
    INCOME_CENTILES.find((centile) => centile.percentage >= percentile) ||
    highest
  ).international_dollars;
};

// https://github.com/centre-for-effective-altruism/how-rich-am-i/blob/master/src/lib/calculate/index.js
export const getEstonianIncomePercentile = (yearlyIncomeEUR) => {
  const internationalizedIncomeIUSD = internationalizeIncome(yearlyIncomeEUR);
  const percentile = getPercentile(internationalizedIncomeIUSD);
  return percentile;
};

export const getHistogramData = () => {
  return range(1, 100).map((percentage) => ({
    percentage,
    international_dollars: getIncome(percentage),
  }));
  // return INCOME_CENTILES;
};

const equivalizationFactor = (adults, children) => {
  const equivalizedAdults = !adults ? 0 : 0.3 + adults * 0.7;
  const equivalizedChildren = children * 0.5;
  return equivalizedAdults + equivalizedChildren;
};

export const equivalizeIncome = (income, adults = 0, children = 0) => {
  return income / equivalizationFactor(adults, children);
};
