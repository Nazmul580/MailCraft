"use client";

import Canvas from "@/components/custom/Canvas";
import SettingsPanel from "@/components/custom/SettingsPanel";
import Sidebar from "@/components/custom/Sidebar";
import { elements } from "@/data/ElementData";
import { layouts } from "@/data/Layouts";
import { useState } from "react";

const EditorPage = () => {
  const [canvasItems, setCanvasItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  // Sidebar theke drag start handle
  const handleDragStart = (e, item, type) => {
    e.dataTransfer.setData(
      "application/json",
      JSON.stringify({ ...item, type })
    );
  };

  // Canvas e drop handle
  const handleDrop = (e) => {
    e.preventDefault();
    const data = JSON.parse(e.dataTransfer.getData("application/json"));
    setCanvasItems((prev) => [...prev, data]);
  };

  const handleDragOver = (e) => e.preventDefault();

  // Right panel style change
  const handleChangeStyle = (prop, value) => {
    setCanvasItems((prev) =>
      prev.map((item) =>
        item.id === selectedItem.id
          ? { ...item, style: { ...item.style, [prop]: value } }
          : item
      )
    );
  };

  return (
    <div className="flex h-screen">
      {/* Left Sidebar */}
      <Sidebar
        elements={elements}
        layouts={layouts}
        onDragStart={handleDragStart}
      />

      {/* Canvas */}
      <Canvas
        canvasItems={canvasItems}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onSelectItem={setSelectedItem}
      />

      {/* Right Settings Panel */}
      <SettingsPanel
        selectedItem={selectedItem}
        onChangeStyle={handleChangeStyle}
      />
    </div>
  );
};

export default EditorPage;
