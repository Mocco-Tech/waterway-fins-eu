import React from "react";

export default function Blades({ className }: { className?: string }) {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="64.000000pt"
      height="64.000000pt"
      viewBox="0 0 64.000000 64.000000"
      preserveAspectRatio="xMidYMid meet"
      className={`w-6 h-6 stroke-2 fill-black/90 group-hover:fill-primary ${className}`}
    >
      <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)">
        <path
          d="M150 575 c-19 -23 -29 -141 -30 -341 l0 -180 86 -1 87 -1 -7 217
c-11 329 -9 321 -80 321 -26 0 -48 -6 -56 -15z m89 -46 c18 -53 15 -59 -34
-59 -42 0 -45 2 -45 26 0 66 59 91 79 33z m24 -214 c4 -66 6 -145 5 -175 l-3
-55 -62 0 -63 0 0 116 c0 64 3 144 6 178 l7 62 51 -3 51 -3 8 -120z"
        />
        <path
          d="M370 575 c-19 -23 -29 -141 -30 -341 l0 -180 86 -1 87 -1 -7 217
c-11 329 -9 321 -80 321 -26 0 -48 -6 -56 -15z m89 -46 c18 -53 15 -59 -34
-59 -42 0 -45 2 -45 26 0 66 59 91 79 33z m24 -214 c4 -66 6 -145 5 -175 l-3
-55 -62 0 -63 0 0 116 c0 64 3 144 6 178 l7 62 51 -3 51 -3 8 -120z"
        />
      </g>
    </svg>
  );
}
