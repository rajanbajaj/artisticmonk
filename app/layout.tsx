import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "./components/Menu/Menu";
import NavBar from "./components/NavBar/NavBar";

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
  return (
    <html data-theme="luxury" lang="en">
      <body className={inter.className}>
        <NavBar />
        <div className="grid grid-rows-2 grid-flow-col gap-4">
          <div className="row-span-10">
            <Menu />
          </div>
          <div className="col-span-8">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
