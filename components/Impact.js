import { outputsPerDonation } from "../utils/impact";
import { formatEstonianNumber, round } from "../utils/numbers";
import { ChildrenIcon, MedicineIcon, MosquitoNetIcon } from "./icons";

const charities = [
  {
    name: "AMF",
    beforeText: "viia",
    afterText:
      "putukamürkidega töödeldud voodivõrku malaariapiirkondades elavatele peredele",
    icon: MosquitoNetIcon,
  },
  {
    name: "HKI",
    beforeText: "anda",
    afterText: "alatoituvusega lapsele A-vitamiini toidulisandeid",
    icon: MedicineIcon,
  },
  {
    name: "NI",
    beforeText: "vaktsineerida",
    afterText: "last paljude haiguste vastu",
    icon: ChildrenIcon,
  },
];

export default function Impact({ evaluations, donation }) {
  return (
    <div className="flex flex-col space-y-8 w-full md:space-y-12">
      {charities.map(({ name, beforeText, afterText, icon: Icon }, i) => (
        <div
          className={
            "flex flex-row items-center space-x-8 w-full text-lg md:text-2xl"
          }
          key={`impact${i}`}
        >
          <div>
            <Icon className="w-24 h-24 text-primary-700" />
          </div>
          <div>
            {beforeText}{" "}
            <span className="font-bold tracking-tight text-primary-700">
              {formatEstonianNumber(
                round(outputsPerDonation(evaluations, name, donation))
              )}
            </span>{" "}
            {afterText}
          </div>
        </div>
      ))}
    </div>
  );
}
