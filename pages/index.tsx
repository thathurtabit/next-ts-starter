import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {
  NextTSAppStateContext,
  NextTSAppDispatchContext,
} from "../context/context/context";
import { useContext } from "react";
import * as Actions from "../context/actions/page/page.actions";

const Home: NextPage = () => {
  const { dispatch } = useContext(NextTSAppDispatchContext);
  const { state } = useContext(NextTSAppStateContext);
  const { hello } = state.page;

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p>Current context state: {hello}</p>

        <button onClick={() => dispatch(Actions.setHello("test"))}>
          Click me
        </button>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
