"use client";

const Canvas = ({ canvasItems, onDrop, onDragOver, onSelectItem }) => {
  console.log(canvasItems);
  const getItems = (item, index) => {};
  return (
    <div
      className="flex-1 p-4 min-h-screen border"
      onDrop={onDrop}
      onDragOver={onDragOver}
    >
      {canvasItems.map((item, index) => getItems(item, index))}
    </div>
  );
};

export default Canvas;
