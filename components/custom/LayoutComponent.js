const LayoutComponent = ({ layout }) => {
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
        <div key={i} className="border border-dotted min-h-10">
          {i + 1}
        </div>
      ))}
    </div>
  );
};

export default LayoutComponent;
