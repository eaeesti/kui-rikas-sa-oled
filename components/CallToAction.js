import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

export default function CallToAction() {
  return (
    <div className="flex flex-col items-center space-y-6 w-full text-center md:space-y-12">
      <h2 className="text-xl md:text-2xl">
        Targalt annetades on sul väga suur positiivne mõju inimeste aitamiseks.
      </h2>
      <a
        href="https://annetatargalt.ee/"
        className="px-6 py-3 font-bold tracking-tight text-white rounded-md transition-colors select-none sm:px-8 sm:py-4 sm:text-xl bg-primary-700 hover:bg-primary-800"
        target="_blank"
        rel="noopener noreferrer"
      >
        Uurin targalt annetamise kohta
        <ArrowTopRightOnSquareIcon className="inline mb-0.5 ml-1.5 w-5 h-5" />
      </a>
    </div>
  );
}
