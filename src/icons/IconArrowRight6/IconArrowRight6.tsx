/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const IconArrowRight6 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`icon-arrow-right-6 ${className}`}
      fill="none"
      height="26"
      viewBox="0 0 26 26"
      width="26"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M11.2076 7.12221L17.1196 13.025L11.2076 18.9278C10.9015 19.2334 10.4052 19.2334 10.0991 18.9278C9.79298 18.6222 9.79298 18.1267 10.0991 17.821L15.0117 13.0234L10.0991 8.22899C9.79298 7.92336 9.79298 7.42784 10.0991 7.12221C10.4052 6.81658 10.9015 6.81658 11.2076 7.12221Z"
        fill="#959595"
        fillRule="evenodd"
      />

      <path
        className="path"
        d="M20.8261 1H5.17391C2.86872 1 1 2.86872 1 5.17391V20.8261C1 23.1313 2.86872 25 5.17391 25H20.8261C23.1313 25 25 23.1313 25 20.8261V5.17391C25 2.86872 23.1313 1 20.8261 1Z"
        opacity="0.3"
        stroke="#959595"
      />
    </svg>
  );
};
