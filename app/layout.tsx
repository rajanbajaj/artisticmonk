import type { Metadata } from "next";
import "./globals.css";
import { MyThemeContextProvider } from "./store/MyThemeContext";
import LayoutContainer from "./layouts/LayoutContainer";
import React from "react";

export const metadata: Metadata = {
  title: "Artistic Monk",
  description: "About me",
  other: {
    "google-adsense-account": "ca-pub-2126294825019391"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MyThemeContextProvider>
      <LayoutContainer>
        {children}
      </LayoutContainer>
    </MyThemeContextProvider>
  );
}
