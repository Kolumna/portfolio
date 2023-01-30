import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      className="flex gap-36 items-center"
    >
      <section className="flex flex-col gap-8 text-zinc-800 dark:text-slate-200">
        <h1 className="text-6xl font-input-bold">Cześć!</h1>
        <p className="text-2xl font-input">
          Jestem pasjonatem IT od dziecka. Moja przygoda z programowaniem
          zaczęła się od tworzenia prostych gier jako 13 latek, po zaawansowane
          aplikacje webowe. Nie traktuję tego jako pracę tylko jako hobby,
          kocham po prostu tworzyć! Aktualnie pracuję nad swoimi dwoma
          “odziałami”, JaniecTheme i JaniecGames. Jak chcesz się dowiedzieć
          więcej zapraszam{" "}
          <Link
            className="font-input-bold text-green-400 underline hover:text-zinc-500 dark:hover:text-slate-200 transition-colors duration-200"
            to="/about"
          >
            tutaj
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
