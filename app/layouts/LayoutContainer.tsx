"use client"
import React, { useContext } from 'react';
import MyThemeContext from '../store/MyThemeContext';
import NavBar from '../components/NavBar/NavBar';
import PageLayout from '../components/Page/PageLayout';
import { Inter } from 'next/font/google';
import Head from 'next/head';

interface LayoutProps {
  children: React.ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

const LayoutContainer: React.FC<LayoutProps> = ({ children }) => {
  const themeCtx: { isDarkMode?: boolean; toggleThemeHandler: () => void } =
    useContext(MyThemeContext);
  return (
    <html data-theme={themeCtx} lang="en">
      <Head>
        <title>Artistic Monk</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={inter.className}>
        <NavBar />
        <div className="grid grid-rows-2 grid-flow-col gap-4">
          <div className="col-span-8">
            <PageLayout>
              {children}
            </PageLayout>
          </div>
        </div>
      </body>
    </html>
  );
};

export default LayoutContainer;
