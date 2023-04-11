import React, { createContext, useState } from "react";
export const ContextApi = createContext(null);
const Provider = ContextApi.Provider;

function Context({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const rootEle = document.documentElement;
  const handleTheme = () => {
    if (isDarkMode) {
      rootEle.style.setProperty("--main-background", "#f5f5f5");
      rootEle.style.setProperty("--shadow", "#2ca4fb4d");
      rootEle.style.setProperty("--textColor", "#181a25");
      rootEle.style.setProperty("--reverseTextColor", "#e8f0e8");
    } else {
      rootEle.style.setProperty("--main-background", "#24282c");
      rootEle.style.setProperty("--shadow", "#181d28");
      rootEle.style.setProperty("--textColor", "#e8f0e8");
      rootEle.style.setProperty("--reverseTextColor", "#181a25");
    }
    setIsDarkMode((prevState) => {
      return !prevState;
    });
  };

  return (
    <Provider value={{ isDarkMode, handleTheme, isModalOpen, setModalOpen }}>
      {children}
    </Provider>
  );
}

export default Context;
