import type { Metadata } from "next";
import "./globals.css";
import MyThemeContext, { MyThemeContextProvider } from "./store/MyThemeContext";
import Layout from "./layouts/Layout";

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
      <Layout>
        {children}
      </Layout>
    </MyThemeContextProvider>
  );
}
