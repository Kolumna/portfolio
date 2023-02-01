import sun from "../assets/svgs/sun.svg";
import moon from "../assets/svgs/moon.svg";
import language from "../assets/svgs/language.svg";
import github from "../assets/svgs/github.svg";
import inkledin from "../assets/svgs/inkledin.svg";
import { Link } from "react-router-dom";
import { useLang, useLangUpdate } from "./contexts/LangContext";
import { useTheme, useThemeUpdate } from "./contexts/ThemeContext";
import { useState } from "react";

const Header = () => {
  //język
  const lang = useLang();
  const toggleLang = useLangUpdate();

  //motyw
  const dark = useTheme();
  const darkToggle = useThemeUpdate();

  return (
    <header className="flex lg:mb-24 flex-col lg:flex-row justify-between w-full">
      <Link
        className="flex w-full lg:w-auto flex-col border-2 border-zinc-800 hover:border-slate-200  lg:flex-row justify-start select-none items-start lg:items-center"
        to="/"
      >
        <div className="p-4 pr-16 lg:pr-36 bg-neutral-800 w-full lg:w-auto flex justify-between items-center">
          <span className="font-bold text-lg lg:text-2xl font-input-bold ">
            Michał Janiec<span className="animate-pulse">_</span>
          </span>
        </div>
        <div className="bg-slate-200 h-full flex justify-center items-center pl-4 pr-4 cursor-pointer">
          <ul className="text-[0.4rem] p-1 lg:text-[0.7rem] font-input-black text-neutral-800">
            <li>FullStack Developer</li>
            <li>Game Developer</li>
            <li>Creator</li>
          </ul>
        </div>
      </Link>
      {/* <button onClick={() => setBurgerMenu((prev) => !prev)} className="absolute lg:hidden right-8 top-6 z-50">
        <div className="w-14 h-12 flex flex-col justify-between p-2 z-10">
          <div className="h-1 bg-white w-full"></div>
          <div className="h-1 bg-white w-full"></div>
          <div className="h-1 bg-white w-full"></div>
        </div>
      </button> */}
      <div className="hidden lg:flex">
        <div className="flex items-center p-4 pr-8 pl-8 bg-slate-200">
          <div className="flex gap-8">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/micha%C5%82-janiec-074640234/"
            >
              <img src={inkledin} />
            </a>
            <a target="_blank" href="https://github.com/Kolumna">
              <img src={github} />
            </a>
          </div>
        </div>
        <div className="flex items-center p-4 pr-8 pl-8 bg-neutral-800">
          <div className="flex gap-8">
            <img
              className="cursor-pointer"
              onClick={darkToggle}
              src={dark ? moon : sun}
            />
            <img
              className="cursor-pointer"
              onClick={toggleLang}
              src={language}
            />
          </div>
        </div>
      </div>
      <div className="lg:hidden pl-12 pr-12 p-8 flex justify-center">
        <div className="flex justify-center gap-4 w-full h-12">
          <div className="flex justify-center items-center p-2 gap-4 bg-slate-200">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/micha%C5%82-janiec-074640234/"
            >
              <img src={inkledin} />
            </a>
            <a target="_blank" href="https://github.com/Kolumna">
              <img src={github} />
            </a>
          </div>
          <div className="flex gap-4 p-2 bg-zinc-900">
            <img
              className="cursor-pointer"
              onClick={darkToggle}
              src={dark ? moon : sun}
            />
            <img
              className="cursor-pointer"
              onClick={toggleLang}
              src={language}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
