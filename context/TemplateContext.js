"use client";
import { createContext, useContext, useState } from "react";

const TemplateContext = createContext();

export const TemplateContextProvider = ({ children }) => {
  const [template, setTemplate] = useState([]);
  const value = { template, setTemplate };

  return <TemplateContext value={value}>{children}</TemplateContext>;
};

const useTemplateContext = () => {
  return useContext(TemplateContext);
};

export default useTemplateContext;
