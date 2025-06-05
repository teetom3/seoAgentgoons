import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { TokenProvider } from "./context/TokenContext";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <TokenProvider>
        <Component {...pageProps} />
        <Toaster position="top-right" reverseOrder={false} />
      </TokenProvider>
    </SessionProvider>
  );
}
