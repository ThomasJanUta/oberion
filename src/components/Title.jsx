import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { lessOrEqualThan } from "./util/media-query";


const Title = ({ gameName }) => {
  return (
    <TitleH1>{gameName}</TitleH1>
  );
};
Title.propTypes = {
  gameName: PropTypes.string.isRequired,
};
export default Title;


const TitleH1 = styled.h1`
  font-style: normal;
  font-weight: bold;
  color: #eee;
  font-size: 9vmin;
  letter-spacing: 0.03em;
  line-height: 1;
  text-shadow: 1px 2px 4px rgba(10, 13, 16, 0.8);
  margin: 1.5em 0.1em;
  ${lessOrEqualThan.sm`margin: 1em 0.1em;`} 
`;