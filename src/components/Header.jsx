import sun from "../assets/svgs/sun.svg";
import moon from "../assets/svgs/moon.svg";
import language from "../assets/svgs/language.svg";
import github from "../assets/svgs/github.svg";
import inkledin from "../assets/svgs/inkledin.svg";
import { Link } from "react-router-dom";
import { useLang, useLangUpdate } from "./contexts/LangContext";
import { useTheme, useThemeUpdate } from "./contexts/ThemeContext";

const Header = () => {
  //język
  const lang = useLang();
  const toggleLang = useLangUpdate();

  //motyw
  const dark = useTheme();
  const darkToggle = useThemeUpdate();

  return (
    <header className="flex justify-between w-full mb-24">
      <Link
        className="flex w-full lg:w-auto flex-col border-2 border-zinc-800 hover:border-slate-200  lg:flex-row justify-start select-none items-start lg:items-center"
        to="/"
      >
        <div className="p-4 pl-8 lg:pr-36 bg-neutral-800 w-full lg:w-auto">
          <span className="font-bold text-lg lg:text-2xl font-input-bold ">
            Michał Janiec<span className="animate-pulse">_</span>
          </span>
        </div>
        <div className="bg-slate-200 h-full flex justify-center items-center pl-4 pr-4">
          <ul className="text-[0.4rem] p-1 lg:text-[0.7rem] font-input-black text-neutral-800">
            <li>FullStack Developer</li>
            <li>Game Developer</li>
            <li>Creator</li>
          </ul>
        </div>
      </Link>
      <div className="hidden xl:flex">
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
    </header>
  );
};

export default Header;
