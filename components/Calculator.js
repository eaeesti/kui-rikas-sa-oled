import { useState } from "react";

export default function Calculator() {
  let [income, setIncome] = useState(1500);

  function onIncomeInputKeypress() {
    const incomeInput = document.getElementById("incomeInput");

    let newIncome = incomeInput.value.replace(",", ".");

    // Must start with digit other than 0 and continue with any digit
    // Can have a . with 0 to 2 digits at the end
    // If it doesn't match, undo the input
    if (!/(^[1-9]\d{0,10}$)|(^[1-9]\d{0,10}\.\d{0,2}$)|^$/.test(newIncome)) {
      newIncome = incomeInput.dataset.value;
    } else {
      incomeInput.dataset.value = newIncome;
      setIncome(newIncome);
    }
  }

  return (
    <div className="flex flex-row justify-center px-8 py-24 bg-slate-100 text-slate-700">
      <div className="flex flex-col space-y-16 max-w-xl">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-primary-700">
            Kui rikas ma olen?
          </h1>
          <p className="text-lg">
            Saa teada, kuidas sinu sissetulek võrdleb kogu maailmaga. Kas kuulud
            rikkaimate hulka?
          </p>
        </div>
        <div className="space-y-4">
          <div>
            <label htmlFor="incomeInput" className="block mb-1">
              Igakuine netosissetulek:
            </label>
            <div className="relative text-3xl">
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
            <button className="block px-4 py-3 w-full text-lg font-bold tracking-tight text-white rounded-md transition-colors bg-primary-700 hover:bg-primary-800">
              Arvuta!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
