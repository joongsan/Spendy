import "@/styles/globals.css";

import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";

import { AuthProvider } from "@/features/auth";

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement, pageProps: P) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <NextUIProvider>
      <AuthProvider>
        {getLayout(<Component {...pageProps} />, pageProps)}
      </AuthProvider>
    </NextUIProvider>
  );
}
