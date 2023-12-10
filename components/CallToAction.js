import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import { usePlausible } from "next-plausible";

export default function CallToAction() {
  const plausible = usePlausible();

  return (
    <div className="flex flex-col items-center space-y-6 w-full text-center md:space-y-12">
      <h2 className="text-xl md:text-2xl [text-wrap:balance]">
        Targalt annetades on sul väga suur positiivne mõju inimeste aitamiseks.
      </h2>
      <a
        href="https://annetatargalt.ee/"
        className="px-6 py-3 font-semibold tracking-tight text-white rounded-md select-none sm:px-8 sm:py-4 sm:text-xl bg-primary-700 hover:bg-primary-600"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => plausible("cta-click")}
      >
        Uurin targalt annetamise kohta
        <ArrowTopRightOnSquareIcon className="inline mb-0.5 ml-2 w-5 h-5" />
      </a>
    </div>
  );
}
