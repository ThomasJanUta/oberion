import React from "react";
import svg from "../svg/divider.min.svg";
import PropTypes from "prop-types";

const Divider = (nextElement) => {
  if (!nextElement) return null;

  return (
    <img src={svg} className="divider" alt="Divider Element" />
  );
};
Divider.propTypes = {
  nextElement: PropTypes.any,
};
export default Divider;