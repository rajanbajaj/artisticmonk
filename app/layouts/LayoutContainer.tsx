"use client"
import React, { useContext } from "react";
import MyThemeContext from "../store/MyThemeContext";
import NavBar from "../components/NavBar/NavBar";
import PageLayout from "../components/Page/PageLayout";
import { Inter } from "next/font/google";
import Head from "next/head";
import { usePathname } from "next/navigation"; // Import useNavigation for client-side navigation

interface LayoutProps {
  children: React.ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

const LayoutContainer: React.FC<LayoutProps> = ({ children }) => {
  const themeCtx: { isDarkMode?: boolean; toggleThemeHandler: () => void } =
    useContext(MyThemeContext);
  
  const pathName = usePathname();
  return (
    <html data-theme={themeCtx} lang="en">
      <Head>
        <title>Artistic Monk</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-adsense-account" content="ca-pub-2126294825019391" />
        <style>
          {`
            body {
              scroll-behavior: smooth; /* Add smooth scrolling behavior */
            }
          `}
        </style>
      </Head>
      <body className={inter.className}>
        {pathName !== "/" && <NavBar />}
        <PageLayout>
          {children}
        </PageLayout>
      </body>
    </html>
  );
};

export default LayoutContainer;
