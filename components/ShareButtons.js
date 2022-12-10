const fbShareLink =
  "https://www.facebook.com/sharer/sharer.php?u=https://kuirikassaoled.annetatargalt.ee/&p=Facebook%20share%20popup";
const twitterShareLink =
  "https://twitter.com/intent/tweet?hashtags=annetatargalt,kuirikassaoled&url=https://kuirikassaoled.annetatargalt.ee&text=Kuidas sinu sissetulek võrdleb maailma elanikega?";

function fbShare(event) {
  event.preventDefault();
  window.open(
    fbShareLink,
    "Share on Facebook",
    "toolbar=0,status=0,width=720,height=500"
  );
}

function twitterShare(event) {
  event.preventDefault();
  window.open(
    twitterShareLink,
    "Share on Twitter",
    "toolbar=0,status=0,width=720,height=500"
  );
}

function FacebookIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-7 h-7"
    >
      <path
        fill="currentColor"
        d="M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,15.608,1.998,14.693,2 C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z"
      ></path>
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="w-6 h-6"
    >
      <path
        fill="currentColor"
        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
      />
    </svg>
  );
}

export default function ShareButtons() {
  return (
    <div className="flex flex-col items-center space-y-8 w-full text-center">
      <p className="text-xl md:text-2xl">Jaga teistega!</p>
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
        <a
          href={fbShareLink}
          target="_blank"
          onClick={fbShare}
          rel="noreferrer"
          className="flex flex-row py-4 pl-4 pr-6 space-x-3 text-xl bg-[#4267B2] text-white items-center justify-center hover:opacity-90 transition-opacity select-none font-bold rounded-md tracking-tight"
        >
          <FacebookIcon />
          <div>Jagan Facebookis</div>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={twitterShareLink}
          onClick={twitterShare}
          className="flex flex-row py-4 px-6 space-x-3 text-xl bg-[#1DA1F2] text-white items-center justify-center hover:opacity-90 transition-opacity select-none font-bold rounded-md tracking-tight"
        >
          <TwitterIcon />
          <div>Jagan Twitteris</div>
        </a>
      </div>
    </div>
  );
}
