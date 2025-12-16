"use client";
import { createContext, useContext, useState } from "react";

const LayoutContext = createContext();

export const LayoutContextProvider = ({ children }) => {
  const [dragElementLayout, setDragElementLayout] = useState();
  const value = { dragElementLayout, setDragElementLayout };
  return <LayoutContext value={value}>{children}</LayoutContext>;
};

const useLayoutContext = () => {
  return useContext(LayoutContext);
};

export default useLayoutContext;
