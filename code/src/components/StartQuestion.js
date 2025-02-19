import React from "react";
import "./StartQuestion.css";

const StartQuestion = ({ onStepChange }) => {
  return (
    <div className="start-container">
      <button className="start-button" onClick={onStepChange}>
        <h2>
          Start The Survey{" "}
          <span className="alien-emoji" role="img" aria-label="Alien-emoji">
            👽
          </span>
        </h2>
      </button>
    </div>
  );
};

export default StartQuestion;
