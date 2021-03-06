import "./index.scss";
import { ControlPanelFC } from "src/types/components-types";
import { IconFile } from "@arco-design/web-react/icon";
import { getLocalComponentConfigClone } from "src/utils/components-utils";
import { richText } from ".";

export const RichTextControl: ControlPanelFC = {
  icon: <IconFile />,
  name: "文字",
  getConfig: () => getLocalComponentConfigClone(richText),
};
