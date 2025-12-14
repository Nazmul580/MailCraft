import EditorHeader from "@/components/custom/EditorHeader";

const EditorLayout = ({ children }) => {
  return (
    <>
      <EditorHeader />
      {children}
    </>
  );
};

export default EditorLayout;
