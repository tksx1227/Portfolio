import Link from "next/link";
import { useTheme } from "next-themes"
import { SunIcon } from "@heroicons/react/solid";
import { MoonIcon } from "@heroicons/react/solid";

import { useState, useEffect } from "react";

export const Header = () => {
  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const switchThemeMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={
        "font-semibold bg-white absolute w-full py-6 px-3 border-b-2 md:text-lg md:p-10 md:flex md:flex-row md:justify-between dark:bg-dark-bandle"
      }
    >
      <div className={"hidden md:block"}></div>
      <div className={"flex flex-row justify-around md:space-x-3"}>
        <Link href="/#top">
          <a className={"px-0 under-bar md:px-2"}>HOME</a>
        </Link>
        <Link href="/#skills">
          <a className={"px-0 under-bar md:px-2"}>SKILLS</a>
        </Link>
        <Link href="/#products">
          <a className={"px-0 under-bar md:px-2"}>PRODUCTS</a>
        </Link>
        <Link href="/#profile">
          <a className={"px-0 under-bar md:px-2"}>PROFILE</a>
        </Link>
        <button className="block p-1 bg-gray-600 dark:bg-white rounded-full" onClick={switchThemeMode}>
          {theme === "light"
            ? <MoonIcon className="w-5 h-5 text-white" />
            : <SunIcon className="w-5 h-5 text-gray-600" />
          }
        </button>
      </div>
    </header>
  );
};
