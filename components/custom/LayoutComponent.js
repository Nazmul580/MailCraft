"use client";
import useLayoutContext from "@/context/LayoutContext";
import useTemplateContext from "@/context/TemplateContext";
import { useState } from "react";
import ElementComponent from "./ElementComponent";

const LayoutComponent = ({ layout }) => {
  const [dragOver, setDragOver] = useState();
  const { template, setTemplate, selectedElement, setSelectedElement } =
    useTemplateContext();
  const { dragElementLayout, setDragElementLayout } = useLayoutContext();

  const handleDragOver = (e, index) => {
    e.preventDefault();
    setDragOver({
      index,
      columnId: layout?.id,
    });
  };
  const handleOnDrop = () => {
    const { index } = dragOver;
    setTemplate((prev) =>
      prev.map((col) =>
        col?.id === layout.id
          ? { ...col, [index]: dragElementLayout?.dragElement }
          : col
      )
    );
    setDragOver(null);
  };
  const getElement = (element) => {
    if (element?.type) return <ElementComponent element={element} />;
  };
  return (
    <div
      className=""
      style={{
        ...layout?.style,
      }}
    >
      {Array.from({ length: layout?.numOfCol }).map((_, i) => (
        <div
          key={i}
          onDragOver={(e) => handleDragOver(e, i)}
          onDrop={handleOnDrop}
          onClick={() => setSelectedElement({ layout: layout, index: i })}
          className={`border border-dashed min-h-10 
            ${i === dragOver?.index && dragOver?.columnId && "bg-green-100"}
            ${
              layout?.id === selectedElement?.layout?.id &&
              i === selectedElement?.index &&
              "border-green-400 border-2"
            }
            `}
          style={{ ...layout?.[i]?.outerStyle }}
        >
          {getElement(layout?.[i]) ?? "drag element here"}
        </div>
      ))}
    </div>
  );
};

export default LayoutComponent;
