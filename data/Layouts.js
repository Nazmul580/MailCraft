import { TbColumns1 } from "react-icons/tb";
import {
  TfiLayoutColumn2,
  TfiLayoutColumn3,
  TfiLayoutColumn4,
} from "react-icons/tfi";

export const layouts = [
  {
    id: "layout-1",
    name: "column",
    type: "column",
    tag: "div",
    numOfCol: 1,
    icon: <TbColumns1 size={20} />,
    style: {
      padding: "5px",
      margin: "0px",
      display: "grid",
      gridTemplateColumns: "repeat(1, 1fr)",
    },
    settings: ["padding", "margin", "backgroundColor"],
  },
  {
    id: "layout-2",
    name: "2-Column",
    type: "column",
    tag: "div",
    numOfCol: 2,
    icon: <TfiLayoutColumn2 size={20} />,
    style: {
      padding: "5px",
      margin: "0px",
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    settings: ["padding", "margin", "backgroundColor"],
  },
  {
    id: "layout-3",
    name: "3-Column",
    type: "column",
    tag: "div",
    numOfCol: 3,
    icon: <TfiLayoutColumn3 size={20} />,
    style: {
      padding: "5px",
      margin: "0px",
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    settings: ["padding", "margin", "backgroundColor"],
  },
  {
    id: "layout-4",
    name: "4-Column",
    type: "column",
    tag: "div",
    numOfCol: 4,
    icon: <TfiLayoutColumn4 size={20} />,
    style: {
      padding: "5px",
      margin: "0px",
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
    },
    settings: ["padding", "margin", "backgroundColor"],
  },
];
