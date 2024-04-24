import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar/NavBar";
import PageLayout from "./components/Page/PageLayout";
import MyThemeContext, { MyThemeContextProvider } from "./store/MyThemeContext";
import { useContext } from "react";

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
      <html data-theme={themeCtx} lang="en">
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
    </MyThemeContextProvider>
  );
}
