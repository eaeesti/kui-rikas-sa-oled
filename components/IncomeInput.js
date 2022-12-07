import { useState } from "react";
import { equivalizeIncome } from "../utils/calculator";
import { preventingDefault } from "../utils/utils";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

export default function IncomeInput({ submitIncome }) {
  let [income, setIncome] = useState("");
  let [adults, setAdults] = useState(1);
  let [children, setChildren] = useState(0);
  let [changingHousehold, setChangingHousehold] = useState(false);

  function onIncomeInputKeypress(event) {
    const incomeInput = document.getElementById("incomeInput");

    let newIncome = incomeInput.value.replace(",", ".");

    // Must start with digit other than 0 and continue with any digit
    // Can have a . with 0 to 2 digits at the end
    // If it doesn't match, undo the input
    if (/(^[1-9]\d{0,7}$)|(^[1-9]\d{0,7}\.\d{0,2}$)|^$/.test(newIncome)) {
      setIncome(newIncome);
    }
  }

  function submit() {
    const equivalizedIncome = equivalizeIncome(income, adults, children);
    submitIncome(equivalizedIncome);
  }

  return (
    <form
      onSubmit={preventingDefault(submit)}
      className="space-y-4 w-full max-w-xs md:max-w-md"
    >
      <div>
        <label htmlFor="incomeInput" className="block mb-1">
          Igakuine netosissetulek:
        </label>
        <div className="relative text-2xl md:text-3xl">
          <input
            id="incomeInput"
            type="text"
            inputMode="numeric"
            className="block px-4 py-3 w-full rounded-lg border border-slate-300 text-primary-800"
            value={income}
            onInput={onIncomeInputKeypress}
          />
          <div className="flex absolute top-0 right-4 justify-center items-center h-full pointer-events-none select-none text-slate-400">
            €
          </div>
        </div>
      </div>
      {changingHousehold ? (
        <div className="flex flex-col space-y-4">
          <div>Leibkonnakoosseis:</div>
          <div className="flex flex-row space-x-4">
            <div className="flex flex-col w-full">
              <label htmlFor="adultsInput" className="block mb-1">
                Täiskasvanuid:
              </label>
              <input
                id="adultsInput"
                type="number"
                className="block px-4 py-3 w-full text-2xl rounded-lg border border-slate-300 text-primary-800 md:text-3xl"
                min={1}
                max={10}
                value={adults}
                onInput={(event) => setAdults(event.target.value)}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="childrenInput" className="block mb-1">
                Lapsi:
              </label>
              <input
                id="childrenInput"
                type="number"
                className="block px-4 py-3 w-full text-2xl rounded-lg border border-slate-300 text-primary-800 md:text-3xl"
                min={0}
                max={100}
                value={children}
                onInput={(event) => setChildren(event.target.value)}
              />
            </div>
          </div>
          <div>
            Kasutame{" "}
            <a
              href="https://en.wikipedia.org/wiki/Equivalisation"
              className="font-bold text-primary-700 hover:opacity-70"
              target="_blank"
              rel="noopener noreferrer"
            >
              OECD ekvivaliseerimist
              <ArrowTopRightOnSquareIcon className="inline mb-1 ml-1 w-5 h-5" />
            </a>
            .
          </div>
        </div>
      ) : (
        <div className="flex flex-row space-x-1">
          <div>Leibkonnakoosseis: 1 täiskasvanu</div>
          <a
            className="font-bold cursor-pointer text-primary-700 hover:opacity-70"
            onClick={() => setChangingHousehold(true)}
          >
            Muuda
          </a>
        </div>
      )}
      <div>
        <button className="block px-4 py-3 w-full font-bold tracking-tight text-white rounded-lg transition-colors md:text-lg bg-primary-700 hover:bg-primary-800">
          Arvuta!
        </button>
      </div>
    </form>
  );
}
