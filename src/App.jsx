import { useState } from "react";
import sun from "./assets/svgs/sun.svg";
import language from "./assets/svgs/language.svg";
import github from "./assets/svgs/github.svg";
import inkledin from "./assets/svgs/inkledin.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="h-screen p-2 md:p-8 text-slate-200 mx-auto max-w-[1920px]">
      <header className="flex justify-between w-full">
        <div className="flex flex-col lg:flex-row justify-start items-end lg:items-center">
          <div className="p-4 pl-8 pr-36 bg-neutral-800">
            <span className="font-bold text-4xl font-input-bold ">
              Michał Janiec_
            </span>
          </div>
          <div className="bg-slate-200 h-full flex justify-center items-center pl-4 pr-4">
            <ul className="text-sm font-input-bold text-neutral-800">
              <li>FullStack Developer</li>
              <li>Game Developer</li>
              <li>Designer</li>
            </ul>
          </div>
        </div>
        <div className="hidden xl:flex">
          <div className="flex items-center p-4 pr-8 pl-8 bg-slate-200">
            <div className="flex gap-4">
              <img src={inkledin} />
              <img src={github} />
            </div>
          </div>
          <div className="flex items-center p-4 pr-8 pl-8 bg-neutral-800">
            <div className="flex gap-4">
              <img src={sun} />
              <img src={language} />
            </div>
          </div>
        </div>
      </header>
      <section className="mt-16 max-w-[600px] flex flex-col gap-8">
        <h1 className="text-6xl font-input-bold">Cześć!</h1>
        <p className="text-2xl font-input">
          Jestem pasjonatem IT od dziecka. Moja przygoda z programowaniem
          zaczęła się od tworzenia prostych gier jako 13 latek, po zaawansowane
          aplikacje webowe. Nie traktuję tego jako pracę tylko jako hobby,
          kocham po prostu tworzyć! Aktualnie pracuję nad swoimi dwoma
          “odziałami”, JaniecTheme i JaniecGames. Jak chcesz się dowiedzieć
          więcej zapraszam{" "}
          <a
            className="font-input-bold text-green-400 underline hover:text-slate-200 transition-colors duration-200"
            href="/"
          >
            tutaj
          </a>
          .
        </p>
      </section>
    </main>
  );
}

export default App;
