// src/pages/_app.js

import "@/styles/globals.css";
import { Epilogue } from "next/font/google";
import Head from "next/head"; // Import the Head component

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"], // Use 'weight' instead of 'weights'
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css"
        />
        <script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js" />
      </Head>
      <main className={`${epilogue.className} tracking-tightest`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
