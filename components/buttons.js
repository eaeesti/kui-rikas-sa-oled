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
      className={`flex flex-row justify-center items-center px-5 py-4 space-x-5 text-xl font-bold tracking-tight text-white whitespace-nowrap rounded-md transition-opacity select-none hover:opacity-90 bg-[${color}]`}
    >
      <Icon className="w-7 h-7" />
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
