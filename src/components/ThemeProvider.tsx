"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Theme = "light" | "dark";
type ColorTheme = "amber" | "blue" | "green" | "purple";

type ThemeContextType = {
  theme: Theme;
  colorTheme: ColorTheme;
  setTheme: (theme: Theme) => void;
  setColorTheme: (theme: ColorTheme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [colorTheme, setColorTheme] = useState<ColorTheme>("amber");

  // Initialize theme from localStorage on client
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    const savedColorTheme = localStorage.getItem("colorTheme") as ColorTheme | null;
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }
    
    if (savedColorTheme) {
      setColorTheme(savedColorTheme);
    }
  }, []);

  // Update localStorage and document classes when theme changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
    
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
  }, [theme]);

  // Update color theme
  useEffect(() => {
    localStorage.setItem("colorTheme", colorTheme);
    
    const root = document.documentElement;
    root.classList.remove("theme-amber", "theme-blue", "theme-green", "theme-purple");
    
    if (colorTheme !== "amber") {
      root.classList.add(`theme-${colorTheme}`);
    }
  }, [colorTheme]);

  const value = {
    theme,
    colorTheme,
    setTheme,
    setColorTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};