import type { Metadata } from "next";
import "./globals.css";
import { MyThemeContextProvider } from "./store/MyThemeContext";
import LayoutContainer from "./layouts/LayoutContainer";
import React from "react";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Artistic Monk",
  description: "About me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Head>
            <meta name="google-adsense-account" content="ca-pub-2126294825019391" />
        </Head>
        <MyThemeContextProvider>
        <LayoutContainer>
            {children}
        </LayoutContainer>
        </MyThemeContextProvider>
    </>
  );
}
