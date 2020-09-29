import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const dividerColor = "#4183c4";


const Divider = ({ displayWith, margin }) => {
  if (!displayWith) return null; // if element does not exist: do not display the divider

  return (
    <DividerSvg
      margin={margin}
      viewBox="0 0 1521 24"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2">
      <path d="M748.9.012h-8v24h8v-24zm-6 2v20h4v-20h-4z" fill="#4183c4" />
      <path
        d="M756.915 15.99v-8h-24v8h24zm-22-6v4h20v-4h-20zM776.897 23.988c2.209 0 4-1.8 4-4s-1.791-4-4-4c-2.21 0-4 1.8-4 4s1.79 4 4 4zm0-2c-1.102 0-2-.9-2-2s.898-2 2-2c1.102 0 2 .9 2 2s-.898 2-2 2zM768.897 15.99c2.209 0 4-1.8 4-4s-1.791-4-4-4c-2.21 0-4 1.8-4 4s1.79 4 4 4zm0-2c-1.102 0-2-.9-2-2s.898-2 2-2c1.102 0 2 .9 2 2s-.898 2-2 2zM776.897 7.992c2.209 0 4-1.8 4-4s-1.791-4-4-4c-2.21 0-4 1.8-4 4s1.79 4 4 4zm0-2c-1.102 0-2-.9-2-2s.898-2 2-2c1.102 0 2 .9 2 2s-.898 2-2 2zM784.897 15.99c2.209 0 4-1.8 4-4s-1.791-4-4-4c-2.21 0-4 1.8-4 4s1.79 4 4 4zm0-2c-1.102 0-2-.9-2-2s.898-2 2-2c1.102 0 2 .9 2 2s-.898 2-2 2z"
        fill={dividerColor} />
      <g>
        <path
          d="M1520.855 12.007c0-.55-.646-1-1.293-1H830.149c-.647 0-1.294.45-1.294 1s.647 1 1.294 1h689.413c.647 0 1.293-.45 1.293-1z"
          fill={dividerColor} />
      </g>
      <g>
        <path
          d="M692.855 12.007c0-.55-.646-1-1.293-1H2.149c-.647 0-1.294.45-1.294 1s.647 1 1.294 1h689.413c.647 0 1.293-.45 1.293-1z"
          fill={dividerColor} />
      </g>
    </DividerSvg>
  );
};
Divider.defaultProps = {
  margin: "4rem 0",
};
Divider.propTypes = {
  displayWith: PropTypes.any,
  verticalMargin: PropTypes.string,
};
export default Divider;


const DividerSvg = styled.svg`
  height: 0.7rem;
  max-width: 95vw;
  margin: ${props => props.margin};
`;