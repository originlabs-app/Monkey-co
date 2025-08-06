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

export const Plus33 = ({
  color = "#4B5563",
  className,
}: Props): JSX.Element => {
  return (
    <svg
      className={`plus-33 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M13.8335 7.16683H8.8335V2.16683C8.8335 1.94582 8.7457 1.73385 8.58942 1.57757C8.43314 1.42129 8.22118 1.3335 8.00016 1.3335C7.77915 1.3335 7.56719 1.42129 7.41091 1.57757C7.25463 1.73385 7.16683 1.94582 7.16683 2.16683V7.16683H2.16683C1.94582 7.16683 1.73385 7.25463 1.57757 7.41091C1.42129 7.56719 1.3335 7.77915 1.3335 8.00016C1.3335 8.22118 1.42129 8.43314 1.57757 8.58942C1.73385 8.7457 1.94582 8.8335 2.16683 8.8335H7.16683V13.8335C7.16683 14.0545 7.25463 14.2665 7.41091 14.4228C7.56719 14.579 7.77915 14.6668 8.00016 14.6668C8.22118 14.6668 8.43314 14.579 8.58942 14.4228C8.7457 14.2665 8.8335 14.0545 8.8335 13.8335V8.8335H13.8335C14.0545 8.8335 14.2665 8.7457 14.4228 8.58942C14.579 8.43314 14.6668 8.22118 14.6668 8.00016C14.6668 7.77915 14.579 7.56719 14.4228 7.41091C14.2665 7.25463 14.0545 7.16683 13.8335 7.16683Z"
        fill={color}
      />
    </svg>
  );
};

Plus33.propTypes = {
  color: PropTypes.string,
};
