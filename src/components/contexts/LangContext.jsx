import React, { useContext, useEffect, useState } from "react";

const LangContext = React.createContext();
const LangUpdateContext = React.createContext();

export const useLang = () => {
  return useContext(LangContext);
};

export const useLangUpdate = () => {
  return useContext(LangUpdateContext);
};

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(
    localStorage.getItem("lang") === "gb" ? "gb" : "pl"
  );

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === "pl" ? "gb" : "pl"));
  };

  return (
    <LangContext.Provider value={lang}>
      <LangUpdateContext.Provider value={toggleLang}>
        {children}
      </LangUpdateContext.Provider>
    </LangContext.Provider>
  );
};
