"use client";

import { Moon, Sun } from "@phosphor-icons/react/dist/ssr";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, [theme]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center pl-8 md:relative md:top-0 md:right-0 absolute top-6 right-3">
      <div className="flex">
        <Moon size={20} className="text-white mr-1" />
        {theme === "dark" ? (
          <input
            type="checkbox"
            className="hidden"
            id="dark-toggle"
            checked
            onClick={() =>
              theme === "dark" ? setTheme("light") : setTheme("dark")
            }
          />
        ) : (
          <input
            type="checkbox"
            className="hidden"
            id="dark-toggle"
            onClick={() =>
              theme === "dark" ? setTheme("light") : setTheme("dark")
            }
          />
        )}

        <label htmlFor="dark-toggle">
          <div className="flex h-5 w-9 cursor-pointer items-center rounded-full bg-white p-1">
            <div className="toggle-circle h-4 w-4 rounded-full bg-dark"></div>
          </div>
        </label>
        <Sun size={20} className="text-white ml-1" />
      </div>
    </div>
  );
};

export default ThemeSwitcher;
