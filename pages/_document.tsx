/* eslint-disable @typescript-eslint/no-explicit-any */

import Document, { Html, Head, Main, NextScript } from "next/document";
import { FC } from "react";
import { ServerStyleSheet } from "styled-components";
import { appSettings } from "../settings/app.settings";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: FC) => (props: any) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en-GB">
        <Head>
          <meta name="application-name" content={appSettings.name} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content={appSettings.title} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-TileColor" content={appSettings.themeBG} />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content={appSettings.theme} />

          <link rel="apple-touch-icon" href="/images/icon-512x512.png" />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/images/icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/images/icon-384x384.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="167x167"
            href="/images/icon-384x384.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/images/icon-72x72.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/images/icon-72x72.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="mask-icon"
            href="/images/tab-logo.svg"
            color={appSettings.theme}
          />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=optional"
          />
          <meta
            name="twitter:image"
            content={`${appSettings.url}/images/og.png`}
          />
          <meta name="twitter:creator" content={appSettings.twitter} />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={appSettings.title} />
          <meta
            property="og:image"
            content={`${appSettings.url}/images/og.png`}
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400&family=Oswald:wght@300;400&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
