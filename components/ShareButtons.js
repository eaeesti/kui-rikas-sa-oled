import {
  FacebookShareButton,
  LinkedInShareButton,
  TwitterShareButton,
} from "./buttons";

export default function ShareButtons() {
  const url = "https://kuirikassaoled.annetatargalt.ee";

  return (
    <div className="flex flex-col items-center space-y-8 w-full text-center">
      <p className="text-xl md:text-2xl">Jaga teistega!</p>
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
        <FacebookShareButton buttonText="Jagan Facebookis" url={url} />
        <TwitterShareButton
          buttonText="Jagan Twitteris"
          tweet="Kuidas sinu sissetulek võrdleb maailma elanikega?"
          hashtags={["annetatargalt", "kuirikassaoled"]}
          url={url}
        />
        <LinkedInShareButton buttonText="Jagan LinkedInis" url={url} />
      </div>
    </div>
  );
}
