"use client";
import { createContext, useContext } from "react";

const ElementContext = createContext();

export const ElementContextProvider = ({ children }) => {
  const value = {};

  return <ElementContext value={value}>{children}</ElementContext>;
};

const useElementContext = () => {
  return useContext(ElementContext);
};

export default useElementContext;
