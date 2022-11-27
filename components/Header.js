export default function Header() {
  return (
    <div className="flex flex-col space-y-16 max-w-xl">
      <div className="text-center">
        <h1 className="mb-4 text-2xl font-bold tracking-tight md:text-4xl text-primary-700">
          Kui rikas ma olen?
        </h1>
        <p className="md:text-lg">
          Saa teada, kuidas sinu sissetulek võrdleb kogu maailmaga.
        </p>
        <p className="md:text-lg">Kas kuulud rikkaimate hulka?</p>
      </div>
    </div>
  );
}
