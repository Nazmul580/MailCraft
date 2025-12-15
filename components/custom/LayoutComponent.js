const LayoutComponent = ({ item }) => {
  return (
    <div
      className=""
      style={{
        ...item?.style,
        display: "grid",
        gridTemplateColumns: `repeat(${item?.numOfCol}, 1fr)`,
      }}
    >
      {Array.from({ length: item?.numOfCol }).map((_, i) => (
        <div key={i} className="border border-dotted min-h-10">
          {i + 1}
        </div>
      ))}
    </div>
  );
};

export default LayoutComponent;
