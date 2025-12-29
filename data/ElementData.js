import { AiOutlineVerticalAlignMiddle } from "react-icons/ai";
import { CiImageOn } from "react-icons/ci";
import { FiCommand } from "react-icons/fi";
import { IoShareSocialOutline } from "react-icons/io5";
import { PiTextbox } from "react-icons/pi";
import { RxButton } from "react-icons/rx";

export const elements = [
  {
    id: "text-1",
    type: "text",
    tag: "p",
    name: "Text Block",
    icon: <PiTextbox size={20} />,
    defaultContent: "Enter your text here...",
    style: {
      fontSize: "16px",
      color: "#000000",
      fontWeight: "normal",
      textAlign: "left",
      padding: "10px",
      margin: "0px",
      backgroundColor: "transparent",
    },
    outerStyle: {
      display: "flex",
      justifyContent: "flex-start",
    },
    settings: [
      { key: "fontSize", label: "Font Size", type: "text" },
      { key: "color", label: "Text Color", type: "color" },
      {
        key: "fontWeight",
        label: "Font Weight",
        type: "select",
        options: ["normal", "bold", "lighter"],
      },
      {
        key: "textAlign",
        label: "Text Align",
        type: "select",
        options: ["left", "center", "right"],
      },
      { key: "padding", label: "Padding", type: "text" },
      { key: "margin", label: "Margin", type: "text" },
      { key: "backgroundColor", label: "Background", type: "color" },
    ],
  },

  {
    id: "image-1",
    type: "image",
    tag: "img",
    name: "Image",
    icon: <CiImageOn size={20} />,
    defaultContent: "https://via.placeholder.com/150",
    style: {
      width: "100%",
      height: "auto",
      borderRadius: "0px",
      margin: "0px",
    },
    outerStyle: {
      display: "flex",
      justifyContent: "center",
    },
    settings: [
      { key: "width", label: "Width", type: "text" },
      { key: "height", label: "Height", type: "text" },
      { key: "borderRadius", label: "Border Radius", type: "text" },
      { key: "margin", label: "Margin", type: "text" },
    ],
  },

  {
    id: "button-1",
    type: "button",
    tag: "button",
    name: "Button",
    icon: <RxButton size={20} />,
    defaultContent: "Click Me",
    style: {
      backgroundColor: "#007BFF",
      color: "#ffffff",
      fontSize: "16px",
      padding: "10px 20px",
      borderRadius: "5px",
      border: "none",
      cursor: "pointer",
      margin: "0px",
    },
    outerStyle: {
      display: "flex",
      justifyContent: "center",
    },
    settings: [
      { key: "backgroundColor", label: "Background", type: "color" },
      { key: "color", label: "Text Color", type: "color" },
      { key: "fontSize", label: "Font Size", type: "text" },
      { key: "padding", label: "Padding", type: "text" },
      { key: "borderRadius", label: "Border Radius", type: "text" },
      { key: "border", label: "Border", type: "text" },
      { key: "margin", label: "Margin", type: "text" },
    ],
  },

  {
    id: "divider-1",
    type: "divider",
    tag: "hr",
    name: "Divider",
    icon: <AiOutlineVerticalAlignMiddle size={20} />,
    style: {
      height: "1px",
      backgroundColor: "#cccccc",
      margin: "10px 0",
      border: "none",
    },
    outerStyle: {
      display: "flex",
      justifyContent: "center",
    },
    settings: [
      { key: "height", label: "Height", type: "text" },
      { key: "backgroundColor", label: "Color", type: "color" },
      { key: "margin", label: "Margin", type: "text" },
    ],
  },

  {
    id: "social-1",
    type: "social",
    tag: "div",
    name: "Social Links",
    icon: <IoShareSocialOutline size={20} />,
    defaultContent: ["facebook", "twitter", "instagram"],
    style: {
      display: "flex",
      gap: "10px",
      justifyContent: "flex-start",
      margin: "10px 0",
    },
    outerStyle: {
      display: "flex",
      justifyContent: "center",
    },
    settings: [
      {
        key: "justifyContent",
        label: "Alignment",
        type: "select",
        options: ["flex-start", "center", "flex-end"],
      },
      { key: "gap", label: "Gap", type: "text" },
      { key: "margin", label: "Margin", type: "text" },
    ],
  },

  {
    id: "logo-1",
    type: "image",
    tag: "img",
    name: "Logo",
    icon: <FiCommand size={20} />,
    defaultContent: "https://via.placeholder.com/150",
    style: {
      width: "auto",
      height: "40px",
      margin: "0px",
    },
    outerStyle: {
      display: "flex",
      justifyContent: "center",
    },
    settings: [
      { key: "width", label: "Width", type: "text" },
      { key: "height", label: "Height", type: "text" },
      { key: "margin", label: "Margin", type: "text" },
    ],
  },
];
