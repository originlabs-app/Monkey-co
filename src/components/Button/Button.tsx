/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Plus33 } from "../../icons/Plus33";
import "./style.css";

interface Props {
  showIconRight: boolean;
  showIconLeft: boolean;
  value: string;
  size: "md" | "lg" | "sm";
  state: "fantome" | "default";
  variant: "primary" | "danger" | "secondary" | "disabled";
  className: any;
  visible: boolean;
  divClassName: any;
  text: string;
  visible1: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export const Button = ({
  showIconRight = true,
  showIconLeft = true,
  value = "Button",
  size,
  state,
  variant,
  className,
  visible = true,
  divClassName,
  text = "Button",
  visible1 = true,
  onClick,
  style,
}: Props): JSX.Element => {
  return (
    <div className={`button ${size} ${variant} ${state} ${className}`} onClick={onClick} style={style}>
      {visible && (
        <Plus33
          className={`${size === "lg" ? "class" : "class-2"}`}
          color={
            variant === "primary" || (size === "sm" && variant === "danger")
              ? "white"
              : variant === "disabled" ||
                  (size === "lg" && variant === "danger")
                ? "#F6F7F9"
                : state === "default" && variant === "secondary"
                  ? "#0C210E"
                  : state === "fantome"
                    ? "#4B5563"
                    : undefined
          }
        />
      )}

      <div className={`div ${divClassName}`}>
        {["lg", "md"].includes(size) && <>{text}</>}

        {size === "sm" && <>Small</>}
      </div>

      {visible1 && (
        <Plus33
          className={`${size === "lg" ? "class" : "class-2"}`}
          color={
            variant === "primary" || (size === "sm" && variant === "danger")
              ? "white"
              : variant === "disabled" ||
                  (size === "lg" && variant === "danger")
                ? "#F6F7F9"
                : state === "default" && variant === "secondary"
                  ? "#0C210E"
                  : state === "fantome"
                    ? "#4B5563"
                    : undefined
          }
        />
      )}
    </div>
  );
};

Button.propTypes = {
  showIconRight: PropTypes.bool,
  showIconLeft: PropTypes.bool,
  value: PropTypes.string,
  size: PropTypes.oneOf(["md", "lg", "sm"]),
  state: PropTypes.oneOf(["fantome", "default"]),
  variant: PropTypes.oneOf(["primary", "danger", "secondary", "disabled"]),
  visible: PropTypes.bool,
  text: PropTypes.string,
  visible1: PropTypes.bool,
};
