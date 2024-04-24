import type { Metadata } from "next";
import "./globals.css";
import { MyThemeContextProvider } from "./store/MyThemeContext";
import LayoutContainer from "./layouts/LayoutContainer";

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
    <MyThemeContextProvider>
      <LayoutContainer>
        {children}
      </LayoutContainer>
    </MyThemeContextProvider>
  );
}
