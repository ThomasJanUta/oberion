import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { lessOrEqualThan } from "../util/media-query";
import NavList from "./NavList";

const Header = ({ prop }) => {
  return (
    <HeaderSt>
      Logo
      <NavList />
    </HeaderSt>
  );
};
Header.propTypes = {
  prop: PropTypes.any,
};
export default Header;


const HeaderSt = styled.header`
  max-width: 70rem;
  width: 100%;
  height: 100%;
  padding: 0.75rem 0;
  margin: 0 auto;

  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
    
  ${lessOrEqualThan.sm`
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center; 
  `}
`;