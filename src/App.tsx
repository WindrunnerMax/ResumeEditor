import "./App.css";
import Debug from "./components/debug";
import { ControlPanel } from "./views/control-panel";
import { EditorPanel } from "./views/editor-panel";
import { MainPanel } from "./views/main-panel";
import { AppProvider } from "./store/context";
import "./styles/asse-style.scss";
import { useEffect, useState } from "react";

export default () => {
  const [isRender, setIsRender] = useState(false);

  useEffect(() => {
    if (isRender) {
      window.print();
      setIsRender(false);
    }
  }, [isRender]);
  const exportPDF = () => {
    setIsRender(true);
  };

  return (
    <div className="resume-editor">
      <AppProvider mode={isRender ? "render" : "editor"}>
        <Debug></Debug>
        <ControlPanel className="control-panel"></ControlPanel>
        <MainPanel
          className="main-panel"
          rowHeight={8}
          cols={60}
          minHeight="296mm"
          allowOverlap={false}
        ></MainPanel>
        <EditorPanel className="editor-panel" exportPDF={exportPDF}></EditorPanel>
      </AppProvider>
    </div>
  );
};
