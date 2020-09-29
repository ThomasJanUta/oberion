import React from "react";
import svg from "../svg/divider.min.svg";
import PropTypes from "prop-types";
import styled from "styled-components";


const Divider = ({ displayWith, verticalMargin }) => {
  if (!displayWith) return null; // if element does not exist: do not display the divider

  return (
    <DividerElement
      src={svg}
      alt="Divider Element"
      verticalMargin={verticalMargin}
    />
  );
};
Divider.defaultProps = {
  verticalMargin: 4,
};
Divider.propTypes = {
  displayWith: PropTypes.any,
  verticalMargin: PropTypes.number,
};
export default Divider;


const DividerElement = styled.img`
  height: 0.7rem;
  max-width: 95vw;
  margin: ${props => props.verticalMargin}rem 0;
`;