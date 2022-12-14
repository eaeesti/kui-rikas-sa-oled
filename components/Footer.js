import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

export default function Footer() {
  return (
    <div className="flex flex-col items-center space-y-2 w-full text-center">
      <div>
        Sissetulekujaotuste allikad:{" "}
        <a
          href="https://howrichami.givingwhatwecan.org/"
          className="font-bold whitespace-nowrap text-primary-700 hover:opacity-70"
          target="_blank"
          rel="noopener noreferrer"
        >
          Giving What We Can
          <ArrowTopRightOnSquareIcon className="inline mb-1 ml-1 w-4 h-4" />
        </a>
      </div>
      <div>
        Annetuste mõjude allikad:{" "}
        <a
          href="https://www.givewell.org/impact-estimates"
          className="font-bold whitespace-nowrap text-primary-700 hover:opacity-70"
          target="_blank"
          rel="noopener noreferrer"
        >
          GiveWell
          <ArrowTopRightOnSquareIcon className="inline mb-1 ml-1 w-4 h-4" />
        </a>
      </div>
      <div>
        <a
          href="https://forms.gle/nRqFgpJ67cRPgMEv9"
          className="font-bold whitespace-nowrap text-primary-700 hover:opacity-70"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jäta meile tagasisidet!
          <ArrowTopRightOnSquareIcon className="inline mb-1 ml-1 w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
