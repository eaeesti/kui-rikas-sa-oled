import INCOME_CENTILES from "../data/income_centiles.json";

// LCU per international $
// https://data.worldbank.org/indicator/PA.NUS.PPP?view=chart
const ESTONIA_PPP = 0.54337;

const monthlyToYearly = (monthlyIncome) => monthlyIncome * 12;

const internationalizeIncome = (incomeEUR) => incomeEUR / ESTONIA_PPP;

const getPercentile = (incomeIUSD) => {
  const highest = INCOME_CENTILES[INCOME_CENTILES.length - 1];
  return (
    INCOME_CENTILES.find(
      (centile) => centile.international_dollars >= incomeIUSD
    ) || highest
  ).percentage;
};

// https://github.com/centre-for-effective-altruism/how-rich-am-i/blob/master/src/lib/calculate/index.js
export const getEstonianIncomePercentile = (monthlyIncomeEUR) => {
  const yearlyIncomeEUR = monthlyToYearly(monthlyIncomeEUR);
  const internationalizedIncomeIUSD = internationalizeIncome(yearlyIncomeEUR);
  const percentile = getPercentile(internationalizedIncomeIUSD);
  return percentile;
};
