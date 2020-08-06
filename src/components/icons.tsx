//
// All icons are imported from https://fontawesome.com/icons?d=gallery
// Icons are under the license https://fontawesome.com/license
//

import React from "react";

type Opts = { width?: number; height?: number; mirror?: true } & React.SVGProps<
  SVGSVGElement
>;

const createIcon = (d: string | React.ReactNode, opts: number | Opts = 512) => {
  const { width = 512, height = width, mirror, style } =
    typeof opts === "number" ? ({ width: opts } as Opts) : opts;
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      role="img"
      viewBox={`0 0 ${width} ${height}`}
      className={mirror && "rtl-mirror"}
      style={style}
    >
      {typeof d === "string" ? <path fill="currentColor" d={d} /> : d}
    </svg>
  );
};

export const link = createIcon(
  "M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z",
  { mirror: true },
);

export const save = createIcon(
  <g id="Save" transform="translate(0.5 0.5)">
    <g id="Group_131" data-name="Group 131" transform="translate(-79.5 -75.5)">
      <path
        id="Path_36"
        data-name="Path 36"
        d="M14.334,2.417,12.075.126a.421.421,0,0,0-.3-.126H10.194V4.153a.427.427,0,0,1-.424.43H2.993a.427.427,0,0,1-.424-.43V0H.424A.427.427,0,0,0,0,.43V14.235a.427.427,0,0,0,.424.43H2.57V8.372h7.624v6.293h3.84a.427.427,0,0,0,.424-.43V2.721A.433.433,0,0,0,14.334,2.417Z"
        transform="translate(79.5 75.5)"
        fill="none"
        stroke="#08264a"
        strokeWidth="1"
      />
      <rect
        id="Rectangle_1578"
        data-name="Rectangle 1578"
        width="2.665"
        height="2.665"
        transform="translate(84.5 75.5)"
        fill="none"
        stroke="#08264a"
        strokeWidth="1"
      />
    </g>
    <path
      id="Path_158"
      data-name="Path 158"
      d="M2073.413,90.165h8.487"
      transform="translate(-2071.226 -75.5)"
      fill="none"
      stroke="#08264a"
      strokeWidth="1"
    />
    <path
      id="Path_159"
      data-name="Path 159"
      d="M2073.413,90.165h4.69"
      transform="translate(-2069.379 -79.5)"
      fill="none"
      stroke="#08264a"
      strokeWidth="1"
    />
    <path
      id="Path_160"
      data-name="Path 160"
      d="M2073.413,90.165h4.69"
      transform="translate(-2069.379 -77.5)"
      fill="none"
      stroke="#08264a"
      strokeWidth="1"
    />
  </g>,
  { width: 15.458, height: 15.665 },
);

export const saveAs = createIcon(
  "M252 54L203 8a28 27 0 00-20-8H28C12 0 0 12 0 27v195c0 15 12 26 28 26h204c15 0 28-11 28-26V73a28 27 0 00-8-19zM130 213c-21 0-37-16-37-36 0-19 16-35 37-35 20 0 37 16 37 35 0 20-17 36-37 36zm56-169v56c0 4-4 6-7 6H44c-4 0-7-2-7-6V42c0-4 3-7 7-7h133l4 2 3 2a7 7 0 012 5z M296 201l87 95-188 205-78 9c-10 1-19-8-18-20l9-84zm141-14l-41-44a31 31 0 00-46 0l-38 41 87 95 38-42c13-14 13-36 0-50z",
  { width: 448, height: 512 },
);

export const load = createIcon(
  <g id="File-open" transform="translate(0.5 0.5)">
    <g
      id="Group_130"
      data-name="Group 130"
      transform="translate(-98.5 -109.494)"
    >
      <path
        id="Path_145"
        data-name="Path 145"
        d="M0-.006H4.129L7.736,1.968h6.929v12.7H0Z"
        transform="translate(98.5 109.5)"
        fill="none"
        stroke="#08264a"
        strokeWidth="1"
      />
      <path
        id="Path_146"
        data-name="Path 146"
        d="M3,3H17.665l-3,9.206H0Z"
        transform="translate(98.5 111.958)"
        fill="#f0f0f0"
        stroke="#08264a"
        strokeLinejoin="round"
        strokeWidth="1"
      />
    </g>
  </g>,
  { width: 18.665, height: 15.67 },
);

export const clipboard = createIcon(
  "M384 112v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h80c0-35.29 28.71-64 64-64s64 28.71 64 64h80c26.51 0 48 21.49 48 48zM192 40c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24m96 114v-20a6 6 0 0 0-6-6H102a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6h180a6 6 0 0 0 6-6z",
  { width: 384, height: 512 },
);

export const trash = createIcon(
  <g id="Empty-canvas" transform="translate(0.5 0.5)">
    <path
      id="Path_161"
      data-name="Path 161"
      d="M2125.827,76.274,2128,87.883h8.426l2.115-11.609"
      transform="translate(-2124.962 -74.269)"
      fill="none"
      stroke="#08264a"
      strokeWidth="1"
    />
    <path
      id="Path_162"
      data-name="Path 162"
      d="M2124.58,76.274H2139.1"
      transform="translate(-2124.58 -73.878)"
      fill="none"
      stroke="#08264a"
      strokeLinecap="round"
      strokeWidth="1"
    />
    <path
      id="Path_163"
      data-name="Path 163"
      d="M2134.992,78.065v6.22"
      transform="translate(-2127.769 -73.06)"
      fill="none"
      stroke="#08264a"
      strokeLinecap="round"
      strokeWidth="1"
    />
    <path
      id="Path_164"
      data-name="Path 164"
      d="M2132.992,78.065l1.387,6.22"
      transform="translate(-2129.237 -73.06)"
      fill="none"
      stroke="#08264a"
      strokeLinecap="round"
      strokeWidth="1"
    />
    <path
      id="Path_165"
      data-name="Path 165"
      d="M2132.992,84.286l1.387-6.22"
      transform="translate(-2123.687 -73.06)"
      fill="none"
      stroke="#08264a"
      strokeLinecap="round"
      strokeWidth="1"
    />
    <path
      id="Path_166"
      data-name="Path 166"
      d="M2130.677,75.217l1.081-2.4h4l.94,2.4"
      transform="translate(-2126.447 -72.82)"
      fill="none"
      stroke="#08264a"
      strokeWidth="1"
    />
  </g>,
  { width: 15.523, height: 14.614 },
);

export const palette = createIcon(
  "M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z",
);

export const exportFile = createIcon(
  <g id="Upload-as-image" transform="translate(0.5)">
    <path
      id="Path_150"
      data-name="Path 150"
      d="M2138.228,78.5h-1.752v7.6h13.079V78.5H2147.8"
      transform="translate(-2136.476 -71.327)"
      fill="none"
      stroke="#08264a"
      strokeWidth="1"
    />
    <g
      id="Path_169"
      data-name="Path 169"
      transform="translate(4.092 1.978)"
      fill="none"
      strokeLinecap="square"
    >
      <path
        d="M-2.378,2.5,2.535-1.978,7.063,2.5H3.918V9H.773V2.5Z"
        stroke="none"
      />
      <path
        d="M 2.50656795501709 -0.5995287895202637 L 0.2031574249267578 1.500000953674316 L 0.7734410762786865 1.500000953674316 L 1.773441076278687 1.500000953674316 L 1.773441076278687 2.500000953674316 L 1.773441076278687 8.000000953674316 L 2.917971134185791 8.000000953674316 L 2.917971134185791 2.500000953674316 L 2.917971134185791 1.500000953674316 L 3.917971134185791 1.500000953674316 L 4.629356384277344 1.500000953674316 L 2.50656795501709 -0.5995287895202637 M 2.534671068191528 -1.978219032287598 L 7.062500953674316 2.500000953674316 L 3.917971134185791 2.500000953674316 L 3.917971134185791 9.000000953674316 L 0.7734410762786865 9.000000953674316 L 0.7734410762786865 2.500000953674316 L -2.378418922424316 2.500000953674316 L 2.534671068191528 -1.978219032287598 Z"
        stroke="none"
        fill="#08264a"
      />
    </g>
  </g>,
  { width: 14.079, height: 15.273 },
);

export const zoomIn = createIcon(
  "M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z",
  { width: 448, height: 512 },
);

export const zoomOut = createIcon(
  "M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z",
  { width: 448, height: 512 },
);

export const done = createIcon(
  "M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z",
  { mirror: true },
);

export const menu = createIcon(
  "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z",
);

export const undo = createIcon(
  "M255.545 8c-66.269.119-126.438 26.233-170.86 68.685L48.971 40.971C33.851 25.851 8 36.559 8 57.941V192c0 13.255 10.745 24 24 24h134.059c21.382 0 32.09-25.851 16.971-40.971l-41.75-41.75c30.864-28.899 70.801-44.907 113.23-45.273 92.398-.798 170.283 73.977 169.484 169.442C423.236 348.009 349.816 424 256 424c-41.127 0-79.997-14.678-110.63-41.556-4.743-4.161-11.906-3.908-16.368.553L89.34 422.659c-4.872 4.872-4.631 12.815.482 17.433C133.798 479.813 192.074 504 256 504c136.966 0 247.999-111.033 248-247.998C504.001 119.193 392.354 7.755 255.545 8z",
  { mirror: true },
);

export const redo = createIcon(
  "M256.455 8c66.269.119 126.437 26.233 170.859 68.685l35.715-35.715C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.75c-30.864-28.899-70.801-44.907-113.23-45.273-92.398-.798-170.283 73.977-169.484 169.442C88.764 348.009 162.184 424 256 424c41.127 0 79.997-14.678 110.629-41.556 4.743-4.161 11.906-3.908 16.368.553l39.662 39.662c4.872 4.872 4.631 12.815-.482 17.433C378.202 479.813 319.926 504 256 504 119.034 504 8.001 392.967 8 256.002 7.999 119.193 119.646 7.755 256.455 8z",
  { mirror: true },
);

// Icon imported form Storybook
// Storybook is licensed under MIT https://github.com/storybookjs/storybook/blob/next/LICENSE
export const resetZoom = createIcon(
  <path
    stroke="currentColor"
    strokeWidth="40"
    fill="currentColor"
    d="M148 560a318 318 0 0 0 522 110 316 316 0 0 0 0-450 316 316 0 0 0-450 0c-11 11-21 22-30 34v4h47c25 0 46 21 46 46s-21 45-46 45H90c-13 0-25-6-33-14-9-9-14-20-14-33V156c0-25 20-45 45-45s45 20 45 45v32l1 1a401 401 0 0 1 623 509l212 212a42 42 0 0 1-59 59L698 757A401 401 0 0 1 65 570a42 42 0 0 1 83-10z"
  />,
  { width: 1024 },
);

export const bringForward = createIcon(
  <g id="Bring-forward" transform="translate(0.75 0.75)">
    <rect
      id="Rectangle_1559"
      data-name="Rectangle 1559"
      width="14.665"
      height="14.665"
      transform="translate(7 7)"
      fill="none"
      stroke="#08264a"
      strokeWidth="1.5"
    />
    <rect
      id="Rectangle_1560"
      data-name="Rectangle 1560"
      width="14.665"
      height="14.665"
      fill="#f0f0f0"
      stroke="#4ed582"
      strokeWidth="1.5"
    />
  </g>,
  { width: 23.165, height: 23.165 },
);

export const sendBackward = createIcon(
  <g id="Send-backward" transform="translate(0.75 0.75)">
    <rect
      id="Rectangle_1562"
      data-name="Rectangle 1562"
      width="14.665"
      height="14.665"
      fill="#f0f0f0"
      stroke="#4ed582"
      strokeWidth="1.5"
    />
    <rect
      id="Rectangle_1563"
      data-name="Rectangle 1563"
      width="14.665"
      height="14.665"
      transform="translate(7 7)"
      fill="#f0f0f0"
      stroke="#08264a"
      strokeWidth="1.5"
    />
  </g>,
  { width: 23.165, height: 23.165 },
);

export const bringToFront = createIcon(
  <g id="Bring-to-Front" transform="translate(0.75 0.75)">
    <rect
      id="Rectangle_1575"
      data-name="Rectangle 1575"
      width="14.665"
      height="14.665"
      fill="#f0f0f0"
      stroke="#08264a"
      strokeWidth="1.5"
    />
    <rect
      id="Rectangle_1573"
      data-name="Rectangle 1573"
      width="14.665"
      height="14.665"
      transform="translate(21 21)"
      fill="#f0f0f0"
      stroke="#08264a"
      strokeWidth="1.5"
    />
    <rect
      id="Rectangle_1576"
      data-name="Rectangle 1576"
      width="14.665"
      height="14.665"
      transform="translate(11 11)"
      fill="#f0f0f0"
      stroke="#4ed582"
      strokeWidth="1.5"
    />
  </g>,
  { width: 37.165, height: 37.165 },
);

export const sendToBack = createIcon(
  <g id="Send-to-Back" transform="translate(0.75 0.75)">
    <rect
      id="Rectangle_1570"
      data-name="Rectangle 1570"
      width="14.665"
      height="14.665"
      transform="translate(11 11)"
      fill="#f0f0f0"
      stroke="#4ed582"
      strokeWidth="1.5"
    />
    <rect
      id="Rectangle_1571"
      data-name="Rectangle 1571"
      width="14.665"
      height="14.665"
      fill="#f0f0f0"
      stroke="#08264a"
      strokeWidth="1.5"
    />
    <rect
      id="Rectangle_1572"
      data-name="Rectangle 1572"
      width="14.665"
      height="14.665"
      transform="translate(21 21)"
      fill="#f0f0f0"
      stroke="#08264a"
      strokeWidth="1.5"
    />
  </g>,
  { width: 37.165, height: 37.165 },
);

export const users = createIcon(
  <g id="attendees" transform="translate(0.5 1)">
    <g
      id="Ellipse_38"
      data-name="Ellipse 38"
      transform="translate(6.068)"
      fill="none"
      stroke="#08264a"
      strokeLinejoin="round"
      strokeWidth="1"
    >
      <circle cx="2.5" cy="2.5" r="2.5" stroke="none" />
      <circle cx="2.5" cy="2.5" r="3" fill="none" />
    </g>
    <path
      id="Path_171"
      data-name="Path 171"
      d="M2249,79.794c0,5.249,4.246,9.338,8.434,9.338s8.316-3.379,8.316-9.338"
      transform="translate(-2249 -72.539)"
      fill="none"
      stroke="#08264a"
      strokeLinecap="round"
      strokeWidth="1"
    />
    <path
      id="Path_172"
      data-name="Path 172"
      d="M0,0C0,3.939,3.336,7.29,6.6,7.29S13.036,4.471,13.036,0"
      transform="translate(15.019 13.207) rotate(180)"
      fill="none"
      stroke="#08264a"
      strokeLinecap="round"
      strokeWidth="1"
    />
    <circle
      id="Ellipse_39"
      data-name="Ellipse 39"
      cx="3"
      cy="3"
      r="3"
      transform="translate(9.589 11)"
      fill="#f0f0f0"
      stroke="#08264a"
      strokeWidth="1"
    />
    <g
      id="Group_138"
      data-name="Group 138"
      transform="translate(-209.65 -73.668)"
    >
      <path
        id="Path_173"
        data-name="Path 173"
        d="M2212.114,83.569V86.5"
        transform="translate(-1989.954 2.551)"
        fill="none"
        stroke="#08264a"
        strokeLinecap="round"
        strokeWidth="1"
      />
      <path
        id="Path_174"
        data-name="Path 174"
        d="M0,0V2.935"
        transform="translate(220.692 87.588) rotate(-90)"
        fill="none"
        stroke="#08264a"
        strokeLinecap="round"
        strokeWidth="1"
      />
    </g>
  </g>,
  { width: 17.75, height: 18.5 },
);

export const start = createIcon(
  "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z",
);

export const stop = createIcon(
  "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm96 328c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16v160z",
);

export const close = createIcon(
  "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",
  { width: 352, height: 512 },
);

export const back = createIcon(
  "M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z",
  { width: 320, height: 512, style: { marginLeft: "-0.2rem" }, mirror: true },
);

export const clone = createIcon(
  "M464 0c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48H176c-26.51 0-48-21.49-48-48V48c0-26.51 21.49-48 48-48h288M176 416c-44.112 0-80-35.888-80-80V128H48c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48v-48H176z",
  { mirror: true },
);

// modified https://feathericons.com/?query=shield
export const shield = createIcon(
  "M11.553 22.894a.998.998 0 00.894 0s3.037-1.516 5.465-4.097C19.616 16.987 21 14.663 21 12V5a1 1 0 00-.649-.936l-8-3a.998.998 0 00-.702 0l-8 3A1 1 0 003 5v7c0 2.663 1.384 4.987 3.088 6.797 2.428 2.581 5.465 4.097 5.465 4.097zm-1.303-8.481l6.644-6.644a.856.856 0 111.212 1.212l-7.25 7.25a.856.856 0 01-1.212 0l-3.75-3.75a.856.856 0 111.212-1.212l3.144 3.144z",
  { width: 24 },
);

export const group = createIcon(
  "M 3 3 L 3 11 L 6 11 L 6 39 L 3 39 L 3 47 L 11 47 L 11 44 L 39 44 L 39 47 L 47 47 L 47 39 L 44 39 L 44 11 L 47 11 L 47 3 L 39 3 L 39 6 L 11 6 L 11 3 L 3 3 z M 11 8 L 39 8 L 39 11 L 42 11 L 42 39 L 39 39 L 39 42 L 11 42 L 11 39 L 8 39 L 8 11 L 11 11 L 11 8 z M 13 13 L 13 28 L 28 28 L 28 13 L 13 13 z M 30 21 L 30 30 L 21 30 L 21 37 L 37 37 L 37 21 L 30 21 z",
  { width: 48 },
);

export const ungroup = createIcon(
  "M 6 6 L 6 12 L 8 12 L 8 29 L 6 29 L 6 35 L 12 35 L 12 33 L 17 33 L 17 38 L 15 38 L 15 44 L 21 44 L 21 42 L 38 42 L 38 44 L 44 44 L 44 38 L 42 38 L 42 21 L 44 21 L 44 15 L 38 15 L 38 17 L 33 17 L 33 12 L 35 12 L 35 6 L 29 6 L 29 8 L 12 8 L 12 6 L 6 6 z M 8 8 L 10 8 L 10 10 L 8 10 L 8 8 z M 31 8 L 33 8 L 33 10 L 31 10 L 31 8 z M 12 10 L 29 10 L 29 12 L 31 12 L 31 29 L 29 29 L 29 31 L 12 31 L 12 29 L 10 29 L 10 12 L 12 12 L 12 10 z M 40 17 L 42 17 L 42 19 L 40 19 L 40 17 z M 33 19 L 38 19 L 38 21 L 40 21 L 40 38 L 38 38 L 38 40 L 21 40 L 21 38 L 19 38 L 19 33 L 29 33 L 29 35 L 35 35 L 35 29 L 33 29 L 33 19 z M 8 31 L 10 31 L 10 33 L 8 33 L 8 31 z M 31 31 L 33 31 L 33 33 L 31 33 L 31 31 z M 17 40 L 19 40 L 19 42 L 17 42 L 17 40 z M 40 40 L 42 40 L 42 42 L 40 42 L 40 40 z",
  { width: 48 },
);
