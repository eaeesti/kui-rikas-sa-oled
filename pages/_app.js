import "../styles/globals.css";
import { NextSeo } from "next-seo";
import PlausibleProvider from "next-plausible";

function MyApp({ Component, pageProps }) {
  return (
    <PlausibleProvider domain="kuirikassaoled.annetatargalt.ee">
      <NextSeo
        title="Kui rikas sa oled?"
        description="Saa teada, kui suur on sinu sissetulek võrreldes maailma elanikega. Kas kuulud rikkaimate hulka?"
        openGraph={{
          url: "https://kuirikassaoled.annetatargalt.ee",
          title: "Kui rikas sa oled?",
          description:
            "Saa teada, kui suur on sinu sissetulek võrreldes maailma elanikega. Kas kuulud rikkaimate hulka?",
          images: [
            {
              url: "https://kuirikassaoled.annetatargalt.ee/kui-rikas-sa-oled.png",
              width: 1200,
              height: 630,
              alt: "Kui rikas sa oled?",
            },
          ],
          type: "website",
          locale: "et_EE",
        }}
      />
      <Component {...pageProps} />
    </PlausibleProvider>
  );
}

export default MyApp;
