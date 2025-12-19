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
    settings: [
      "fontSize",
      "color",
      "fontWeight",
      "textAlign",
      "padding",
      "margin",
      "backgroundColor",
    ],
  },
  {
    id: "image-1",
    type: "image",
    tag: "img", // Image er jonno 'img' tag
    name: "Image",
    icon: <CiImageOn size={20} />,
    defaultContent: "https://via.placeholder.com/150",
    style: {
      width: "100%",
      height: "auto",
      borderRadius: "0px",
      margin: "0px",
    },
    settings: ["width", "height", "borderRadius", "margin"],
  },
  {
    id: "button-1",
    type: "button",
    tag: "button", // Button er jonno 'button' tag
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
    settings: [
      "backgroundColor",
      "color",
      "fontSize",
      "padding",
      "borderRadius",
      "border",
      "margin",
    ],
  },
  {
    id: "divider-1",
    type: "divider",
    tag: "hr", // Divider er jonno 'hr' tag
    name: "Divider",
    icon: <AiOutlineVerticalAlignMiddle size={20} />,
    style: {
      height: "1px",
      border: "none",
      backgroundColor: "#cccccc",
      margin: "10px 0",
    },
    settings: ["height", "backgroundColor", "margin"],
  },
  {
    id: "social-1",
    type: "social",
    tag: "div", // Social links container er jonno 'div'
    name: "Social Links",
    icon: <IoShareSocialOutline size={20} />,
    defaultContent: ["facebook", "twitter", "instagram"],
    style: {
      display: "flex",
      gap: "10px",
      justifyContent: "flex-start",
      margin: "10px 0",
    },
    settings: ["display", "gap", "justifyContent", "margin"],
  },
  {
    id: "logo",
    type: "image",
    tag: "img", // Social links container er jonno 'div'
    name: "Logo",
    icon: <FiCommand size={20} />,
    defaultContent: "https://via.placeholder.com/150",
    style: {
      margin: "0",
      maxHeigth: "40px",
    },
    settings: ["width", "height", "margin"],
  },
];
