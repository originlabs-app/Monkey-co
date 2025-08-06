/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const IconArrowLeft1 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`icon-arrow-left-1 ${className}`}
      fill="none"
      height="26"
      viewBox="0 0 26 26"
      width="26"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M14.7924 7.12221L8.88045 13.025L14.7924 18.9278C15.0985 19.2334 15.5948 19.2334 15.9009 18.9278C16.207 18.6222 16.207 18.1267 15.9009 17.821L10.9883 13.0234L15.9009 8.22899C16.207 7.92336 16.207 7.42784 15.9009 7.12221C15.5948 6.81658 15.0985 6.81658 14.7924 7.12221Z"
        fill="#959595"
        fillRule="evenodd"
      />

      <path
        className="path"
        d="M5.17391 1H20.8261C23.1313 1 25 2.86872 25 5.17391V20.8261C25 23.1313 23.1313 25 20.8261 25H5.17391C2.86872 25 1 23.1313 1 20.8261V5.17391C1 2.86872 2.86872 1 5.17391 1Z"
        opacity="0.3"
        stroke="#959595"
      />
    </svg>
  );
};
