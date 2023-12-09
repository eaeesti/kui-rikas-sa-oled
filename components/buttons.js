import {
  fixedEncodeURIComponent,
  openPopup,
  preventingDefault,
} from "../utils/utils";
import { FacebookIcon, LinkedInIcon, TwitterIcon } from "./icons";

function ShareButton({ text, color, Icon, url }) {
  return (
    <a
      href={url}
      target="_blank"
      onClick={preventingDefault(() => openPopup(url, text))}
      rel="noreferrer"
      className={`flex flex-row justify-center items-center px-4 py-3 space-x-4 font-semibold tracking-tight text-white whitespace-nowrap rounded-md transition-opacity select-none sm:text-xl sm:space-x-5 hover:opacity-90`}
      style={{ backgroundColor: color }}
    >
      <Icon className="w-5 h-5 sm:w-7 sm:h-7" />
      <div>{text}</div>
    </a>
  );
}

export function FacebookShareButton({ buttonText, url }) {
  const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${fixedEncodeURIComponent(
    url
  )}&p=Facebook%20share%20popup`;
  return (
    <ShareButton
      text={buttonText}
      color="#4267B2"
      Icon={FacebookIcon}
      url={shareUrl}
    />
  );
}

export function TwitterShareButton({ buttonText, url, tweet, hashtags }) {
  const shareUrl = `https://twitter.com/intent/tweet?hashtags=${hashtags.join(
    ","
  )}&url=${fixedEncodeURIComponent(url)}&text=${fixedEncodeURIComponent(
    tweet
  )}`;
  return (
    <ShareButton
      text={buttonText}
      color="#1DA1F2"
      Icon={TwitterIcon}
      url={shareUrl}
    />
  );
}

export function LinkedInShareButton({ buttonText, url }) {
  const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${fixedEncodeURIComponent(
    url
  )}`;
  return (
    <ShareButton
      text={buttonText}
      color="#0077B5"
      Icon={LinkedInIcon}
      url={shareUrl}
    />
  );
}
