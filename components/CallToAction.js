export default function CallToAction() {
  return (
    <div className="flex flex-col items-center space-y-6 w-full text-center md:space-y-12">
      <p className="text-lg md:text-2xl">
        Targalt annetades on sul väga suur positiivne mõju inimeste aitamiseks.
      </p>
      <a
        href="https://annetatargalt.ee/"
        className="px-6 py-3 font-bold text-white rounded-md transition-colors md:px-8 md:py-4 md:text-xl bg-primary-700 hover:bg-primary-800"
        target="_blank"
        rel="noopener noreferrer"
      >
        Uuri targalt annetamise kohta
      </a>
    </div>
  );
}
