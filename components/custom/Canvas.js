"use client";

import LayoutComponent from "./LayoutComponent";

const Canvas = ({ canvasItems, onDrop, onDragOver, onSelectItem }) => {
  const getItems = (item) => {
    if (item?.type === "layout") return <LayoutComponent item={item} />;
  };
  return (
    <div
      className="flex-1 p-4 min-h-screen border"
      onDrop={onDrop}
      onDragOver={onDragOver}
    >
      {canvasItems?.length > 0 &&
        canvasItems.map((item, index) => (
          <div key={index}>{getItems(item)}</div>
        ))}
    </div>
  );
};

export default Canvas;
