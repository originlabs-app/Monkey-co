import React from "react";
import Lottie from "lottie-react";
import leafAnimation from "@/animations/leaf-animation.json";
import "./style.css";

interface Props {
  className?: string;
  width?: number;
  height?: number;
}

export const LeafAnimation = ({ 
  className = "", 
  width = 100, 
  height = 100 
}: Props): JSX.Element => {
  return (
    <div className={`leaf-animation-container ${className}`}>
      <Lottie 
        animationData={leafAnimation}
        loop={true}
        autoplay={true}
        style={{ width, height }}
      />
    </div>
  );
};