import "../styles/globals.css";
import { NextSeo } from "next-seo";
import PlausibleProvider from "next-plausible";

function MyApp({ Component, pageProps }) {
  return (
    <PlausibleProvider domain="kuirikassaoled.annetatargalt.ee">
      <NextSeo title="Kui rikas sa oled?" />
      <Component {...pageProps} />
    </PlausibleProvider>
  );
}

export default MyApp;
