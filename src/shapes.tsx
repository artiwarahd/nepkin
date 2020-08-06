import React from "react";
import { t } from "./i18n";

// We inline font-awesome icons in order to save on js size rather than including the font awesome react library
export const SHAPES = [
  {
    icon: (
      <svg width="18.469" height="20.216" viewBox="0 0 18.469 20.216">
        <g id="Arrow" transform="translate(1.559 1.967)">
          <path
            id="Path_9"
            data-name="Path 9"
            d="M336.312,31.291c.328,4.867.015,11.228-1.34,15.694l5.848-5.668,8.117-.612C344.7,38.753,339.734,34.767,336.312,31.291Z"
            transform="translate(-334.972 -31.291)"
            fill="none"
            stroke="#08264a"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    ),
    value: "selection",
    key: "s",
  },
  {
    icon: (
      <svg width="16.165" height="16.165" viewBox="0 0 16.165 16.165">
        <g id="Rectangular" transform="translate(0.75 0.75)">
          <rect
            id="Rectangle_1603"
            data-name="Rectangle 1603"
            width="14.665"
            height="14.665"
            fill="none"
            stroke="#08264a"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    ),
    value: "rectangle",
    key: "r",
  },
  {
    icon: (
      <svg id="Diamond" width="16" height="18" viewBox="0 0 16 18">
        <g
          id="Polygon_15"
          data-name="Polygon 15"
          transform="translate(16 18) rotate(180)"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="bevel"
        >
          <path d="M8,0l8,9L8,18,0,9Z" stroke="none" />
          <path
            d="M 8 2.25779914855957 L 2.006932258605957 9 L 8 15.74220085144043 L 13.99306774139404 9 L 8 2.25779914855957 M 8 0 L 16 9 L 8 18 L 0 9 L 8 0 Z"
            stroke="none"
            fill="#08264a"
          />
        </g>
      </svg>
    ),
    value: "diamond",
    key: "d",
  },
  {
    icon: (
      <svg width="17.433" height="17.433" viewBox="0 0 17.433 17.433">
        <g id="Ellipse" transform="translate(0.75 0.75)">
          <circle
            id="Ellipse_40"
            data-name="Ellipse 40"
            cx="7.966"
            cy="7.966"
            r="7.966"
            fill="none"
            stroke="#08264a"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    ),
    value: "ellipse",
    key: "e",
  },
  {
    icon: (
      <svg width="22.118" height="14.628" viewBox="0 0 22.118 14.628">
        <g id="Arrow" transform="translate(0.75 1.814)">
          <path
            id="Union_3"
            data-name="Union 3"
            d="M-1984.5,20.131h-1.464V6.377l-4.036.836L-1984.5,0l5.5,7.213-4.036-.836V20.131Z"
            transform="translate(20.131 1990) rotate(90)"
            fill="none"
            stroke="#08264a"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    ),
    value: "arrow",
    key: "a",
  },
  {
    icon: (
      <svg width="15.234" height="15.234" viewBox="0 0 15.234 15.234">
        <g id="Line" transform="translate(0.53 0.53)">
          <path
            id="Path_185"
            data-name="Path 185"
            d="M2811.075,540.844h20.044"
            transform="translate(-2370.165 1619.469) rotate(-45)"
            fill="none"
            stroke="#08264a"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    ),
    value: "line",
    key: "l",
  },
  {
    icon: (
      <svg id="Pen" width="22.073" height="22.099" viewBox="0 0 22.073 22.099">
        <g
          id="Path_137"
          data-name="Path 137"
          transform="translate(0 16.885) rotate(-45)"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M5.486.049,20.465,0V7.325L5.486,7.373,0,3.681Z"
            stroke="none"
          />
          <path
            d="M 18.96502113342285 1.504874229431152 L 5.939940452575684 1.547109127044678 L 2.701704025268555 3.691169261932373 L 5.941699981689453 5.871681690216064 L 18.96502113342285 5.829452514648438 L 18.96502113342285 1.504874229431152 M 20.46502113342285 4.76837158203125e-06 L 20.46502113342285 7.324594497680664 L 5.486151695251465 7.373164653778076 L 1.9073486328125e-06 3.680994749069214 L 5.486151695251465 0.04857492446899414 L 20.46502113342285 4.76837158203125e-06 Z"
            stroke="none"
            fill="#08264a"
          />
        </g>
        <g
          id="Rectangle_1557"
          data-name="Rectangle 1557"
          transform="translate(13.349 3.536) rotate(-45)"
          fill="none"
          stroke="#08264a"
          strokeWidth="1.5"
        >
          <path
            d="M0,0H3A2,2,0,0,1,5,2V5.338a2,2,0,0,1-2,2H0a0,0,0,0,1,0,0V0A0,0,0,0,1,0,0Z"
            stroke="none"
          />
          <path
            d="M1.5.75H3A1.25,1.25,0,0,1,4.25,2V5.338A1.25,1.25,0,0,1,3,6.588H1.5a.75.75,0,0,1-.75-.75V1.5A.75.75,0,0,1,1.5.75Z"
            fill="none"
          />
        </g>
        <path
          id="Path_138"
          data-name="Path 138"
          d="M0,0V5.249"
          transform="translate(5.067 13.076) rotate(-45)"
          fill="none"
          stroke="#08264a"
          strokeWidth="1.5"
        />
      </svg>
    ),
    value: "draw",
    key: "x",
  },
  {
    icon: (
      <svg width="10" height="33" viewBox="0 0 10 33">
        <g id="Text" transform="translate(1)">
          <text
            id="t"
            transform="translate(4 26)"
            fill="#08264a"
            fontSize="48"
            fontFamily="Roboto-Regular, Roboto"
          >
            <tspan x="-4.083" y="0">
              {t("labels.t")}
            </tspan>
          </text>
        </g>
      </svg>
    ),
    value: "text",
    key: "t",
  },
  {
    icon: (
      <svg width="18.149" height="18.165" viewBox="0 0 18.149 18.165">
        <g id="Stickynotes" transform="translate(0.75 0.75)">
          <g
            id="Group_155"
            data-name="Group 155"
            transform="translate(-953 -161.5)"
          >
            <path
              id="Path_141"
              data-name="Path 141"
              d="M5.595,0h9.07V14.665H0V5.588Z"
              transform="translate(953 161.5)"
              fill="none"
              stroke="#08264a"
              strokeWidth="1.5"
            />
            <path
              id="Path_140"
              data-name="Path 140"
              d="M0,3.666Z"
              transform="translate(953 161.5)"
              fill="none"
              stroke="#08264a"
              strokeWidth="1.5"
            />
            <path
              id="Path_139"
              data-name="Path 139"
              d="M5.367,0V5.367H0Z"
              transform="translate(953 161.5)"
              fill="none"
              stroke="#08264a"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              id="Path_143"
              data-name="Path 143"
              d="M2945.929,179.165h14.72V164.58"
              transform="translate(-1991 -1)"
              fill="none"
              stroke="#08264a"
              strokeWidth="1.5"
            />
          </g>
        </g>
      </svg>
    ),
    value: "sticky-note",
    key: "n",
  },
] as const;

export const shapesShortcutKeys = SHAPES.map((shape, index) => [
  shape.key,
  (index + 1).toString(),
]).flat(1);

export const findShapeByKey = (key: string) =>
  SHAPES.find((shape, index) => {
    return shape.key === key.toLowerCase() || key === (index + 1).toString();
  })?.value || "selection";
