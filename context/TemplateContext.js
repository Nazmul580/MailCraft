"use client";
import { createContext, useContext, useState } from "react";

const TemplateContext = createContext();

export const TemplateContextProvider = ({ children }) => {
  const [template, setTemplate] = useState([]);
  const [selectedElement, setSelectedElement] = useState([]);
  const value = { template, setTemplate, selectedElement, setSelectedElement };

  return <TemplateContext value={value}>{children}</TemplateContext>;
};

const useTemplateContext = () => {
  return useContext(TemplateContext);
};

export default useTemplateContext;
