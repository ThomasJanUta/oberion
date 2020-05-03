import React from "react";
import spaceCrab from "./space-crab.min.svg";
import spaceUfo from "./space-ufo.min.svg";

const txt = [
  "There was an error with your request",
  "Try again with another URL",
];

const Error = () => {
  return (
    <div className="error__container">
      <h1 className="description">{txt[0]}</h1>
      <div style={{ paddingTop: "2rem" }}>
        <p>{txt[1]}</p>
      </div>
      <img src={spaceCrab}
           alt="Error illustration"
           className="error__illustration" />
      <img src={spaceUfo}
           alt="Error illustration"
           className="error__illustration" />
    </div>
  );
};
export default Error;