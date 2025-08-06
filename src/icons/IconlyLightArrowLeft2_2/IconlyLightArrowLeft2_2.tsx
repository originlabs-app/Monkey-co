/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  color: string;
  className: any;
}

export const IconlyLightArrowLeft2_2 = ({
  color = "#130F26",
  className,
}: Props): JSX.Element => {
  return (
    <svg
      className={`iconly-light-arrow-left-2-2 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M15.5 19L8.5 12L15.5 5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

IconlyLightArrowLeft2_2.propTypes = {
  color: PropTypes.string,
};
