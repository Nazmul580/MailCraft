const Sidebar = ({ elements, layouts, onDragStart }) => {
  return (
    <div className="w-1/4 p-4 border-r">
      <h2 className="font-bold mb-2">Layouts</h2>
      {layouts.map((layout) => (
        <div
          key={layout.id}
          draggable
          onDragStart={(e) => onDragStart(e, layout, "layout")}
          className="p-2 border mb-2 cursor-grab"
        >
          {layout.icon} {layout.name}
        </div>
      ))}

      <h2 className="font-bold mt-4 mb-2">Elements</h2>
      {elements.map((el) => (
        <div
          key={el.id}
          draggable
          onDragStart={(e) => onDragStart(e, el, "element")}
          className="p-2 border mb-2 cursor-grab"
        >
          {el.icon} {el.name}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
