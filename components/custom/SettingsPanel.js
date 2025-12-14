const SettingsPanel = ({ selectedItem, onChangeStyle }) => {
  if (!selectedItem)
    return <div className="w-1/4 p-4 border-l">Select an item</div>;

  return (
    <div className="w-1/4 p-4 border-l">
      <h2 className="font-bold mb-2">Settings: {selectedItem.name}</h2>
      {selectedItem.settings.map((prop) => (
        <div key={prop} className="mb-2">
          <label className="block">{prop}</label>
          <input
            type="text"
            value={selectedItem.style[prop] || ""}
            onChange={(e) => onChangeStyle(prop, e.target.value)}
            className="border p-1 w-full"
          />
        </div>
      ))}
    </div>
  );
};

export default SettingsPanel;
