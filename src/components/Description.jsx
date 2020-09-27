import React from "react";
import PropTypes from "prop-types";


const Description = ({ description }) => {
  return (
    <>
      <h2 align="center">About this Game</h2>

      <div dangerouslySetInnerHTML={{ __html: description }} className="description" />
    </>
  );
};
Description.propTypes = {
  description: PropTypes.any,
};
export default Description;