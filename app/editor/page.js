"use client";

import Canvas from "@/components/custom/Canvas";
import SettingsPanel from "@/components/custom/SettingsPanel";
import Sidebar from "@/components/custom/Sidebar";

const EditorPage = () => {
  return (
    <div className="flex h-screen">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Canvas */}
      <Canvas />

      {/* Right Settings Panel */}
      <SettingsPanel />
    </div>
  );
};

export default EditorPage;
