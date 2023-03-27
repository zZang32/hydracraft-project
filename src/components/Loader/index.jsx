import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

// css
import "./style.css";

/**
 * Component for displaying a progress bar.
 * @param {number} bar - The percentage of the progress bar that should be filled.
 * @returns {JSX.Element} - A React component representing a progress bar.
 */
export default function Loader({ bar }) {
  return (
    <>
      <ProgressBar
        completed={bar}
        isLabelVisible={false}
        maxCompleted={100}
        borderRadius={"0"}
        barContainerClassName="bar-container"
        bgColor="#e9e9e9"
      />
    </>
  );
}
