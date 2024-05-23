// src/pages/_app.js

import "@/styles/globals.css";
import { Epilogue } from "next/font/google";

const epilogue = Epilogue({
  subsets: ["latin"],
  weights: ["400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${epilogue.className} tracking-tightest`}>
      <Component {...pageProps} />
    </main>
  );
}
