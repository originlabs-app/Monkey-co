/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const IconClose1 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`icon-close-1 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M11.65 5.05C11.8433 4.8567 11.8433 4.5433 11.65 4.35C11.4567 4.1567 11.1433 4.1567 10.95 4.35L8 7.3L5.05 4.35C4.8567 4.1567 4.5433 4.1567 4.35 4.35C4.1567 4.5433 4.1567 4.8567 4.35 5.05L7.3 8L4.35 10.95C4.1567 11.1433 4.1567 11.4567 4.35 11.65C4.5433 11.8433 4.8567 11.8433 5.05 11.65L8 8.7L10.95 11.65C11.1433 11.8433 11.4567 11.8433 11.65 11.65C11.8433 11.4567 11.8433 11.1433 11.65 10.95L8.7 8L11.65 5.05Z"
        fill="#19161D"
      />
    </svg>
  );
};
