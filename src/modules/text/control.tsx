import "./index.scss";
import { ControlPanelFC } from "src/types/components";
import { getLocalComponentConfigClone } from "src/utils/loader/components-utils";
import { richText } from ".";

const TextIcon = (
  <svg
    viewBox="0 0 1024 1024"
    className="arco-icon"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
  >
    <path d="M885.005342 152.185075c0 16.95823-13.750165 30.707372-30.709419 30.707372L169.703053 182.892447c-16.95823 0-30.708396-13.749142-30.708396-30.707372l0 0c0-16.959254 13.750165-30.708396 30.708396-30.708396l684.59287 0C871.255177 121.475656 885.005342 135.224798 885.005342 152.185075L885.005342 152.185075 885.005342 152.185075zM512.002047 902.523321c-16.963347 0-30.708396-13.745049-30.708396-30.707372L481.293651 153.189961c0-16.959254 13.746072-30.708396 30.708396-30.708396l0 0c16.95823 0 30.704302 13.749142 30.704302 30.708396l0 718.630081C542.706349 888.778272 528.960277 902.523321 512.002047 902.523321L512.002047 902.523321 512.002047 902.523321z"></path>
  </svg>
);

export const RichTextControl: ControlPanelFC = {
  icon: TextIcon,
  name: "文字",
  getConfig: () => getLocalComponentConfigClone(richText),
};
