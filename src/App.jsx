import { useState } from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useTheme } from "./components/contexts/ThemeContext";

const App = () => {
  const dark = useTheme();

  return (
    <main className={`w-full h-full transition-colors duration-200 ${!dark ? 'dark bg-neutral-900' : 'bg-slate-200'}`}>
      <main className="min-h-screen p-12 text-slate-200 mx-auto max-w-[1920px]">
        <AnimatePresence>
          <Router>
            <Header />
            <Routes>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
            </Routes>
          </Router>
        </AnimatePresence>
      </main>
    </main>
  );
}

export default App;
