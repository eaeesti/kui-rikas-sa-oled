import { useState } from "react";
import { preventingDefault } from "../utils/utils";

export default function IncomeInput({ submitAction }) {
  let [income, setIncome] = useState(1500);

  function onIncomeInputKeypress() {
    const incomeInput = document.getElementById("incomeInput");

    let newIncome = incomeInput.value.replace(",", ".");

    // Must start with digit other than 0 and continue with any digit
    // Can have a . with 0 to 2 digits at the end
    // If it doesn't match, undo the input
    if (!/(^[1-9]\d{0,7}$)|(^[1-9]\d{0,7}\.\d{0,2}$)|^$/.test(newIncome)) {
      newIncome = incomeInput.dataset.value;
    } else {
      incomeInput.dataset.value = newIncome;
      setIncome(newIncome);
    }
  }

  return (
    <form
      onSubmit={preventingDefault(() => submitAction(income))}
      className="space-y-2 w-full max-w-xs md:max-w-md md:space-y-4"
    >
      <div>
        <label htmlFor="incomeInput" className="block mb-1">
          Igakuine netosissetulek:
        </label>
        <div className="relative text-2xl md:text-3xl">
          <input
            id="incomeInput"
            type="text"
            className="block px-4 py-3 w-full rounded-md border border-slate-300 text-primary-800"
            data-value=""
            value={income}
            onInput={onIncomeInputKeypress}
          />
          <div className="flex absolute top-0 right-4 justify-center items-center h-full pointer-events-none select-none text-slate-400">
            €
          </div>
        </div>
      </div>
      <div>
        <button className="block px-4 py-3 w-full font-bold tracking-tight text-white rounded-md transition-colors md:text-lg bg-primary-700 hover:bg-primary-800">
          Arvuta!
        </button>
      </div>
    </form>
  );
}
