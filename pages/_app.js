import React from "react";
import Head from "next/head";
import Script from "next/script";
import "styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>collegeproject</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
