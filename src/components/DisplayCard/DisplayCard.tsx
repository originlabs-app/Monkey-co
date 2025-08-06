/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  rectangleClassName: any;
  rectangle: string;
  detailsClassName: any;
  contentClassName: any;
  wrapClassName: any;
  divClassName: any;
  text: string;
  statusesClassName: any;
  divClassNameOverride: any;
  divClassName1: any;
  text1: string;
  progressFigmaClassName: any;
  divClassName2: any;
  overlapGroupClassName: any;
  progressBackgroundClassName: any;
  divClassName3: any;
  text2: string;
  statusText?: string;
  progressText?: string;
}

export const DisplayCard = ({
  className,
  rectangleClassName,
  rectangle = "/img/rectangle-2-1.png",
  detailsClassName,
  contentClassName,
  wrapClassName,
  divClassName,
  text = "Rénovation Éco-Quartier Lyon",
  statusesClassName,
  divClassNameOverride,
  divClassName1,
  text1 = "200 kg CO₂ évité",
  progressFigmaClassName,
  divClassName2,
  overlapGroupClassName,
  progressBackgroundClassName,
  divClassName3,
  text2 = "85%",
  statusText = "En cours",
  progressText = "Progression",
}: Props): JSX.Element => {
  return (
    <div className={`display-card ${className}`}>
      <img
        className={`rectangle ${rectangleClassName}`}
        alt="Rectangle"
        src={rectangle}
      />

      <div className={`details ${detailsClassName}`}>
        <div className={`content ${contentClassName}`}>
          <div className={`wrap ${wrapClassName}`}>
            <div className={`r-novation-co ${divClassName}`}>{text}</div>

            <div className={`statuses ${statusesClassName}`}>
              <div className={`text-wrapper ${divClassNameOverride}`}>
                {statusText}
              </div>
            </div>
          </div>

          <div className={`element-kg-CO-vit ${divClassName1}`}>{text1}</div>

          <div className={`progress-figma ${progressFigmaClassName}`}>
            <div className={`text-wrapper-2 ${divClassName2}`}>{progressText}</div>

            <div className={`overlap-group ${overlapGroupClassName}`}>
              <div
                className={`progress-background ${progressBackgroundClassName}`}
              />
            </div>

            <div className={`element ${divClassName3}`}>{text2}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

DisplayCard.propTypes = {
  rectangle: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  statusText: PropTypes.string,
  progressText: PropTypes.string,
};
