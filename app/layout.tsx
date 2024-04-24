import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MyThemeContext, { MyThemeContextProvider } from "./store/MyThemeContext";
import { useContext } from "react";
import LayoutContainer from "./layouts/LayoutContainer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Artistic Monk",
  description: "About me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeCtx: { isDarkMode?: boolean; toggleThemeHandler: () => void } =
    useContext(MyThemeContext);
  return (
    <MyThemeContextProvider>
      <LayoutContainer>
        {children}
      </LayoutContainer>
    </MyThemeContextProvider>
  );
}
