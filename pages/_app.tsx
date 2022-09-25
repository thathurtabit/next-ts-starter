import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { NextTSAppProvider } from "../context/context/context";
import themeJSON from "../styled/theme.styled.json";
import { GlobalStyle } from "../styled/global";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <NextTSAppProvider>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, maximum-scale=5, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <ThemeProvider theme={themeJSON} key="theme-provider">
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </NextTSAppProvider>
  );
};

export default App;
