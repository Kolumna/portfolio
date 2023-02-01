import { Link } from "react-router-dom";
import JGlogo from "../assets/svgs/JGlogo.svg";
import openIcon from "../assets/svgs/openIcon.svg";
import baner2 from "../assets/imgs/baner2.png";
import panorama from "../assets/imgs/okno.png";
import { motion } from "framer-motion";
import { useLang } from "./contexts/LangContext";

const About = () => {
  const polish = useLang() == "pl" ? true : false;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      className="font-input-bold"
    >
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center items-center w-full lg:h-96 bg-slate-200">
          <div className="flex h-2/3 justify-center items-center">
            <span className="font-bold text-zinc-800 text-3xl text-center lg:text-5xl p-8">
              Game Development
            </span>
          </div>
          <a
            target="_blank"
            className="w-full hover:bg-slate-300 transition-all duration-200 flex justify-center items-center gap-4 h-1/3 bg-gray-300 p-8"
            href="https://janiecgames.netlify.app/"
          >
            <img className="w-32 lg:w-64" src={JGlogo}></img>
            <img src={openIcon} />
          </a>
        </div>
        <div className="flex flex-col gap-8 justify-center items-center w-full min-h-96 bg-neutral-800 p-4 text-center">
          <span className="font-bold text-slate-200 text-2xl lg:text-4xl">
            {polish ? "Startujemy!" : "We're starting!"}
          </span>
          <p className="text-sm lg:text-md xl:text-lg">
            {polish
              ? 'Styczność z game devem miałem już jakiś czas temu. Pierwsze gry tworzyłem mając 13 lat. Aktualnie tworzę 2 gry: "SzmejeDungeons" i "The Moon" w silniku Unreal Engine 5, jednak swoje początki miałem w Unity.'
              : 'I had contact with game dev some time ago. I made my first games when I was 13. Currently I am creating 2 games: "SzmejeDungeons" and "The Moon" in Unreal Engine 5, but I had my beginnings in Unity.'}
          </p>
          <div className="flex gap-4">
            <img
              className="w-12 h-12 bg-slate-200 p-2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg"
            />
            <img
              className="w-12 h-12 bg-slate-200 p-2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg"
            />
            <img
              className="w-12 h-12 bg-slate-200 p-2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg"
            />
          </div>
        </div>
        <div className="w-full lg:col-span-2 h-96">
          <img className="h-full w-full object-cover" src={panorama} />
        </div>
        <div className="flex flex-col gap-8 justify-center items-center w-full min-h-96 bg-neutral-800 p-4 text-center">
          <span className="font-bold text-slate-200 text-2xl lg:text-4xl">
            {"<h1>Hello!</h1>"}
          </span>
          <p className="text-sm lg:text-md xl:text-lg">
            {polish
              ? "Moje początki webdevu sięgają 8. klasy szkoły podstawowej, w której tworzyłem podstawowe strony z użyciem HTML'a i CSS'a. Dzisiaj zajmuję się tworzeniem aplikacji webowych, gdzie moim głównym językiem jest JavaScript."
              : "My beginnings of webdev date back to the 8th grade of primary school, where I created basic websites using HTML and CSS. Today I am developing web applications, where my main language is JavaScript."}
          </p>
          <div className="flex gap-4">
            <img
              className="w-12 h-12 bg-slate-200 p-2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            />
            <img
              className="w-12 h-12 bg-slate-200 p-2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
            />
            <img
              className="w-12 h-12 bg-slate-200 p-2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full lg:h-96 bg-slate-200">
          <div className="flex h-2/3 justify-center items-center">
            <span className="font-bold text-zinc-800 text-3xl text-center lg:text-5xl p-8">
              Web Development
            </span>
          </div>
          <a
            className="w-full hover:bg-slate-300 transition-all duration-200 flex justify-center items-center gap-4 h-1/3 bg-gray-300 p-8"
            href="https://www.janiectheme.site/"
            target="_blank"
          >
            <span className="JTlogo text-xl lg:text-3xl">JaniecTheme</span>
            <img className="" src={openIcon} />
          </a>
        </div>
        {/* <div className="w-full flex justify-evenly items-center col-span-2 h-96 bg-black">
        </div> */}
        <div className="flex flex-col justify-center items-center w-full min-h-96 bg-slate-200">
          <div className="flex h-2/3 justify-center items-center">
            <span className="font-bold text-zinc-800 text-3xl lg:text-5xl p-8">Creator</span>
          </div>
        </div>
        <div className="flex flex-col gap-8 justify-center items-center w-full min-h-96 bg-neutral-800 p-4 text-center">
          <span className="font-bold text-slate-200 text-2xl lg:text-4xl">
            3, 2, 1 Akcja!
          </span>
          <p className="text-sm lg:text-md xl:text-lg">
            {polish
              ? "Tworzenie filmów, animacji czy projektów aplikacji pozwala na wizualizacje niemal wszystkiego. Zajmuję się montowaniem filmów i tworzeniem animacji od nie dawna, lecz widzę jak niesamowite efekty oferują dzisiejsze programy komputerowe i wiem, że dalej będę się w tym rozwijać."
              : "Creating movies, animations or application projects allows you to visualize almost anything. I have been editing films and creating animations for a long time, but I see the amazing effects offered by today's computer programs and I know that I will continue to develop in this field."}
          </p>
          <div className="flex gap-4">
            <img
              className="w-12 h-12 bg-slate-200 p-2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
            />
            <img
              className="w-12 h-12 bg-slate-200 p-2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-plain.svg"
            />
            <img
              className="w-12 h-12 bg-slate-200 p-2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg"
            />
          </div>
        </div>
        {/* <div className="flex col-span-2 flex-col gap-8 justify-center items-center w-full h-96 bg-neutral-800 text-center">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/xgeaB8HP5Ss"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div> */}
        {/* <div className="flex flex-col gap-8 justify-center items-center w-full h-96 bg-neutral-800 text-center">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/badVRBtCPrA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div> */}
      </section>
    </motion.section>
  );
};

export default About;
