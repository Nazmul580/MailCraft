import EditorHeader from "@/components/custom/EditorHeader";
import { ElementContextProvider } from "@/context/ElementContext";
import { LayoutContextProvider } from "@/context/LayoutContext";
import { TemplateContextProvider } from "@/context/TemplateContext";

const EditorLayout = ({ children }) => {
  return (
    <>
      <EditorHeader />
      <LayoutContextProvider>
        <TemplateContextProvider>
          <ElementContextProvider>{children}</ElementContextProvider>
        </TemplateContextProvider>
      </LayoutContextProvider>
    </>
  );
};

export default EditorLayout;
