export default function Header() {
  return (
    <div className="flex flex-col space-y-16 max-w-xl">
      <div className="text-center">
        <p className="mb-8 text-red-600 md:text-lg">
          Ära jaga veel kellelegi! Anna Andrile tagasisidet!
        </p>
        <h1 className="mb-4 text-2xl font-bold tracking-tight md:text-4xl text-primary-700">
          Kui rikas sa oled?
        </h1>
        <p className="md:text-lg">
          Saa teada, kui suur on sinu sissetulek võrreldes maailma elanikega.
        </p>
        <p className="md:text-lg">Kas kuulud rikkaimate hulka?</p>
      </div>
    </div>
  );
}
