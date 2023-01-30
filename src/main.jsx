import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { LangProvider } from "./components/contexts/LangContext";
import { ThemeProvider } from "./components/contexts/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <LangProvider>
        <App />
      </LangProvider>
    </ThemeProvider>
  </React.StrictMode>
);
