"use client";
import useLayoutContext from "@/context/LayoutContext";
import { elements } from "@/data/ElementData";
import { layouts } from "@/data/Layouts";

const Sidebar = () => {
  const { dragElementLayout, setDragElementLayout } = useLayoutContext();

  const onDragLayoutStart = (layout) => {
    setDragElementLayout({
      dragLayout: {
        ...layout,
        id: window.crypto.randomUUID(),
      },
    });
  };
  const onDragElementStart = (element) => {
    setDragElementLayout({
      dragElement: {
        ...element,
        id: window.crypto.randomUUID(),
      },
    });
  };

  return (
    <div className="w-1/6 p-4 border-r">
      <h2 className="font-bold mb-2">Layouts</h2>
      <div className="grid md:grid-cols-2 gap-1">
        {layouts.map((layout) => (
          <div
            key={layout.id}
            draggable
            onDragStart={() => onDragLayoutStart(layout)}
            className="p-2 border-2 border-dashed min-h-20 cursor-grab flex flex-col items-center justify-center gap-2 rounded-sm group hover:border-primary"
          >
            <h3 className="group-hover:text-primary text-gray-700">
              {layout?.icon}
            </h3>
            <h3 className="capitalize  text-sm text-gray-500 font-semibold">
              {layout?.numOfCol} - {layout?.type}
            </h3>
          </div>
        ))}
      </div>

      <h2 className="font-bold mt-4 mb-2">Elements</h2>
      <div className="grid md:grid-cols-2 gap-1">
        {" "}
        {elements.map((el) => (
          <div
            key={el.id}
            draggable
            onDragStart={() => onDragElementStart(el)}
            className="p-2 border-2 border-dashed min-h-20 cursor-grab flex flex-col items-center justify-center gap-2 rounded-sm group hover:border-primary"
          >
            <h3 className="group-hover:text-primary">{el.icon}</h3>
            <h3 className="capitalize  text-sm text-gray-500 font-semibold">
              {el.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
