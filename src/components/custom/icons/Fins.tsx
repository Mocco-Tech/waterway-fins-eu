import React from "react";

export default function Fins({ className }: { className?: string }) {
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
          d="M147 608 c-28 -22 -38 -97 -44 -339 l-6 -235 88 -1 88 -1 -6 212 c-8
285 -29 376 -87 376 -9 0 -24 -6 -33 -12z m61 -35 c6 -10 13 -42 17 -70 l7
-53 -47 0 -48 0 7 61 c3 33 8 65 12 70 9 15 43 10 52 -8z m35 -278 c4 -66 6
-145 5 -175 l-3 -55 -62 0 -63 0 0 116 c0 64 3 144 6 178 l7 62 51 -3 51 -3 8
-120z"
        />
        <path
          d="M163 554 c-7 -18 11 -39 26 -30 17 11 13 46 -4 46 -9 0 -18 -7 -22
-16z"
        />
        <path
          d="M431 603 c-32 -27 -41 -95 -48 -343 l-6 -226 88 -1 87 0 -5 216 c-6
231 -21 334 -53 358 -24 17 -38 16 -63 -4z m62 -26 c3 -8 8 -39 12 -70 l7 -57
-47 0 -47 0 7 57 c4 31 9 62 12 70 7 17 49 17 56 0z m30 -239 c4 -46 7 -126 7
-179 l0 -97 -62 3 -63 3 1 160 c1 89 4 168 7 176 5 12 20 16 55 16 l49 0 6
-82z"
        />
        <path d="M447 556 c-9 -22 18 -40 33 -22 6 9 9 20 5 26 -9 15 -32 12 -38 -4z" />
      </g>
    </svg>
  );
}
