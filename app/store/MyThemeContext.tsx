"use client"
import { createContext, ReactElement, useEffect, useState } from "react";
import React from "react";

const MyThemeContext = createContext({
  isDarkTheme: true,
  toggleThemeHandler: () => {},
});

interface ThemePropsInterface {
  children?: React.ReactNode;
}

export function MyThemeContextProvider(
  props: ThemePropsInterface
): ReactElement {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  useEffect(() => {
    const stored = localStorage.getItem("isDarkTheme");
    if (stored === null) {
      localStorage.setItem("isDarkTheme", "true");
      document?.querySelector("html")?.setAttribute("data-theme", "luxury");
      setIsDarkTheme(true);
    } else {
      const initial: boolean = JSON.parse(stored);
      document
        ?.querySelector("html")
        ?.setAttribute("data-theme", initial ? "luxury" : "light");
      setIsDarkTheme(initial);
    }
  }, []);

  function toggleThemeHandler(): void {
    const stored: boolean = JSON.parse(
      localStorage.getItem("isDarkTheme") ?? "true"
    );
    const next = !stored;
    setIsDarkTheme(next);
    document
      ?.querySelector("html")
      ?.setAttribute("data-theme", next ? "luxury" : "light");
    localStorage.setItem("isDarkTheme", JSON.stringify(next));
  }

  return (
    <MyThemeContext.Provider value={{ isDarkTheme, toggleThemeHandler }}>
      {props.children}
    </MyThemeContext.Provider>
  );
}

export default MyThemeContext;