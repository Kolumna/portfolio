import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLang } from "./contexts/LangContext";

const Home = () => {
  const polish = useLang() == "pl" ? true : false;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      className="flex gap-36 items-center"
    >
      <section className="flex flex-col gap-8 text-zinc-800 dark:text-slate-200">
        <h1 className="text-6xl font-input-bold">{polish ? "Cześć!" : "Hi!"}</h1>
        <p className="text-2xl font-input">
          {polish
            ? "Jestem pasjonatem IT od dziecka. Moja przygoda z programowaniem zaczęła się od tworzenia prostych gier jako 13 latek, po zaawansowane aplikacje webowe. Nie traktuję tego jako pracę tylko jako hobby, kocham po prostu tworzyć! Aktualnie pracuję nad swoimi dwoma “odziałami”, JaniecTheme i JaniecGames. Jak chcesz się dowiedzieć więcej zapraszam "
            : "I am passionate about IT since childhood. My adventure with programming began with creating a simple game as a 13-year-old, followed by advanced web applications. I don't treat it as a job but as a hobby, I just love interpretation! They are currently working on two 'branches', JaniecTheme and JaniecGames. If you want to know more, please "}
          <Link
            className="font-input-bold text-green-400 underline hover:text-zinc-500 dark:hover:text-slate-200 transition-colors duration-200"
            to="/about"
          >
            {polish ? "tutaj" : "here"}
          </Link>
          .
        </p>
      </section>
      <section>
        <div className="w-[600px] h-[600px] bg-slate-200"></div>
      </section>
    </motion.section>
  );
};

export default Home;
