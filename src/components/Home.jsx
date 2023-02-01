import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLang } from "./contexts/LangContext";
import profile from "../assets/imgs/profile.png"

const Home = () => {
  const polish = useLang() == "pl" ? true : false;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      className="flex flex-col lg:flex-row gap-36 items-center"
    >
      <section className="flex flex-col gap-8 text-zinc-800 dark:text-slate-200">
        <h1 className="text-4xl lg:text-6xl font-input-bold">{polish ? "Cześć!" : "Hi!"}</h1>
        <p className="text-lg lg:text-2xl font-input">
          {polish
            ? "Jestem pasjonatem technologii informatycznych od montowania filmów po tworzenie aplikacji. Bardzo lubię coś tworzyć, więc stąd się wzięło moje zamiłowanie do IT, ponieważ tu możliwości są nieskończone. Nie traktuję tego jako pracę tylko jako hobby, kocham po prostu to robić! Aktualnie pracuję nad swoimi dwoma projektami, JaniecTheme i JaniecGames. Jak chcesz się dowiedzieć więcej zapraszam "
            : "I am passionate about information technology, from editing videos to creating applications. I really like to create something, so that's where my passion for IT came from, because the possibilities here are endless. I don't treat it as a job but as a hobby, I just love doing it! I am currently working on my two projects, JaniecTheme and JaniecGames. If you want to know more please contact me "}
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
        <div className=" bg-zinc-800 dark:bg-slate-200 p-2 lg:p-0">
          <img className=" lg:translate-x-8 lg:translate-y-8" src={profile}/>
        </div>
      </section>
    </motion.section>
  );
};

export default Home;
