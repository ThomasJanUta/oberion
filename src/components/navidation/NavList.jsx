import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { lessOrEqualThan } from "../util/media-query";


const NavSt = styled.nav`
  padding: 0.5rem 0.4rem 0 0.4rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;
const UlSt = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
`;
const LiSt = styled.li`
  padding: 1rem;
  ${lessOrEqualThan.sm`padding: 0 0.5rem`}
`;

const NavList = ({ headerLinks }) => {
  return (
    <NavSt>
      {headerLinks.map((el) => {
        if (el.displayInHeader) {
          return (
            <UlSt key={el.caption}>
              <LiSt>
                <a href={el.to} className="header__link">{el.caption}</a>
              </LiSt>
            </UlSt>
          );
        }
      })}
    </NavSt>
  );
};
export default NavList;
NavList.defaultProps = {
  headerLinks: [],
};
NavList.propTypes = {
  headerLinks: PropTypes.array,
};
