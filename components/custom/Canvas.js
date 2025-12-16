"use client";

import useLayoutContext from "@/context/LayoutContext";
import useTemplateContext from "@/context/TemplateContext";
import { useState } from "react";
import LayoutComponent from "./LayoutComponent";

const Canvas = () => {
  const { dragElementLayout, setDragElementLayout } = useLayoutContext();
  const { template, setTemplate } = useTemplateContext();
  const [dragOver, setDragOver] = useState(false);
  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };
  const handleOnDrop = () => {
    setDragOver(false);
    if (dragElementLayout?.dragLayout) {
      setTemplate((prev) => [...prev, dragElementLayout.dragLayout]);
    }
  };
  const getLayout = (layout) => {
    if (layout.type === "column") return <LayoutComponent layout={layout} />;
  };
  return (
    <div
      className={`flex-1 p-4 min-h-screen border ${
        dragOver && "bg-purple-100"
      }`}
      onDrop={handleOnDrop}
      onDragOver={handleDragOver}
    >
      {template?.length > 0 ? (
        template?.map((item, index) => <div key={index}>{getLayout(item)}</div>)
      ) : (
        <div className="text-center capitalize p-4">drag layout here.</div>
      )}
    </div>
  );
};

export default Canvas;
