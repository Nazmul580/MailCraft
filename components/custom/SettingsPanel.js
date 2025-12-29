"use client";

import useTemplateContext from "@/context/TemplateContext";
import { useEffect } from "react";

const SettingsPanel = () => {
  const { selectedElement, setSelectedElement, template, setTemplate } =
    useTemplateContext();

  const selectedItem = selectedElement?.layout?.[selectedElement?.index];

  useEffect(() => {
    setTemplate((prev) => {
      return prev.map((layout) => {
        if (layout?.id === selectedElement?.layout?.id)
          return selectedElement?.layout;

        return layout;
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedElement]);

  const updateStyle = (key, value) => {
    setSelectedElement((prev) => ({
      ...prev,
      layout: {
        ...prev.layout,
        [prev.index]: {
          ...prev.layout[prev.index],
          style: {
            ...prev.layout[prev.index].style,
            [key]: value,
          },
        },
      },
    }));
  };

  const renderInput = (setting) => {
    const value = selectedItem.style?.[setting.key] || "";

    switch (setting.type) {
      case "select":
        return (
          <select
            className="w-full border px-2 py-1 rounded"
            value={value}
            onChange={(e) => updateStyle(setting.key, e.target.value)}
          >
            {setting.options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        );

      case "color":
        return (
          <input
            type="color"
            value={value}
            onChange={(e) => updateStyle(setting.key, e.target.value)}
          />
        );

      default:
        return (
          <input
            type="text"
            className="w-full border px-2 py-1 rounded"
            value={value}
            onChange={(e) => updateStyle(setting.key, e.target.value)}
          />
        );
    }
  };

  if (!selectedItem) {
    return (
      <div className="w-1/6 p-4 border-l">
        <h2 className="font-bold mb-2">Settings</h2>
        <p className="text-sm text-gray-500">No element selected</p>
      </div>
    );
  }

  return (
    <div className="w-1/6 p-4 border-l">
      <h2 className="font-bold mb-4">Settings</h2>

      {selectedItem.settings.map((setting) => (
        <div key={setting.key} className="mb-3">
          <label className="block text-sm mb-1">{setting.label}</label>

          {renderInput(setting)}
        </div>
      ))}
    </div>
  );
};

export default SettingsPanel;
