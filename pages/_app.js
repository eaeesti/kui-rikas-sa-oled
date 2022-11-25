import "../styles/globals.css";
import { NextSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextSeo title="Kui rikas ma olen?" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
