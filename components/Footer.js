import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

export default function Footer() {
  return (
    <div className="flex flex-col items-center space-y-6 w-full text-center md:space-y-12">
      <div>
        Kasutame{" "}
        <a
          href="https://howrichami.givingwhatwecan.org/"
          className="font-bold text-primary-700 hover:opacity-70"
          target="_blank"
          rel="noopener noreferrer"
        >
          Giving What We Can'i
          <ArrowTopRightOnSquareIcon className="inline mb-1 ml-1 w-4 h-4" />
        </a>{" "}
        andmeid.
      </div>
    </div>
  );
}
