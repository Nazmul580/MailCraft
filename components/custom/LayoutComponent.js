"use client";
import useLayoutContext from "@/context/LayoutContext";
import useTemplateContext from "@/context/TemplateContext";
import { useState } from "react";

const LayoutComponent = ({ layout }) => {
  const [dragOver, setDragOver] = useState();
  const { template, setTemplate } = useTemplateContext();
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
    return element?.type;
  };
  return (
    <div
      className=""
      style={{
        ...layout?.style,
        display: "grid",
        gridTemplateColumns: `repeat(${layout?.numOfCol}, 1fr)`,
      }}
    >
      {Array.from({ length: layout?.numOfCol }).map((_, i) => (
        <div
          key={i}
          onDragOver={(e) => handleDragOver(e, i)}
          onDrop={handleOnDrop}
          className={`border border-dotted min-h-10 ${
            i === dragOver?.index && dragOver?.columnId && "bg-green-100"
          }`}
        >
          {getElement(layout?.[i]) ?? "drag element here"}
        </div>
      ))}
    </div>
  );
};

export default LayoutComponent;
