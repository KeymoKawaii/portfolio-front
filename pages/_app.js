import '../styles/style.min.css'
import Head from "next/head";
import { createContext } from "react";
import { getStrapiMedia } from "../lib/media";
import { fetchAPI } from "../lib/api";

export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps;

  return (
    <>
      <Head>
        <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} />
      </Head>
      <GlobalContext.Provider value={global}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  );
};

MyApp.getInitialProps = async () => {
  const global = await fetchAPI("/global");
  // Pass the data to our page via props
  return { pageProps: { global } };
};

export default MyApp
