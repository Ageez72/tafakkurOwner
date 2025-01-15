"use client";
import React, { createContext, useContext, useReducer, useEffect } from "react";

// Dynamically set initialLang based on localStorage if available
const getInitialLang = () => {
  if (typeof window !== "undefined" && localStorage.getItem("lang")) {
    return localStorage.getItem("lang");
  }
  return "ar"; // Default to "ar"
};

const initialState = {
  HTTP_URL: "https://admin.tafakkur.com/api/",
  URLParms: "",
  LANG: getInitialLang(),
  PAGENAME: "",
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Optionally update localStorage when language state changes
  useEffect(() => {
    localStorage.setItem("lang", state.LANG);
  }, [state.LANG]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

const appReducer = (state, action) => {
  switch (action.type) {
    case "LANG":
      return { ...state, LANG: action.payload };
    case "URLParms":
      return { ...state, URLParms: action.payload };
    case "PAGENAME":
      return { ...state, pageName: action.payload };
    default:
      return state;
  }
};

export default AppProvider;
