import oc from "open-color";

const shades = (i: number) => [
  oc.red[i],
  oc.pink[i],
  oc.grape[i],
  oc.violet[i],
  oc.indigo[i],
  oc.blue[i],
  oc.cyan[i],
  oc.teal[i],
  oc.green[i],
  oc.lime[i],
  oc.yellow[i],
  oc.orange[i],
];

// export default {
//   canvasBackground: [oc.white, oc.gray[0], oc.gray[1], ...shades(0)],
//   elementBackground: [oc.yellow[2], oc.gray[4], ...shades(6), "transparent"],
//   elementStroke: [oc.gray[8], oc.black, ...shades(9), "transparent"],
// };

export default {
  canvasBackground: [oc.white, oc.gray[0], oc.gray[1], ...shades(0)],
  elementBackground: [
    "#08264A",
    "#0073BC",
    "#4ED582",
    "#FFCB00",
    "#DC2284",
    "#464495",
  ],
  elementStroke: [
    "#343A40",
    "#FFFFFF",
    "#08264A",
    "#0073BC",
    "#4ED582",
    "#FFCB00",
    "#DC2284",
    "#464495",
  ],
};

export const DEFAULT_ITEM_STROKE_COLOR = "#343A40";
export const DEFAULT_ITEM_BACKGROUND_COLOR = "#FFCB00";
