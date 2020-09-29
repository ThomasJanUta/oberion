import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";
import { A_REL } from "./link";

const LogoCompanyImg = styled.img` 
  box-sizing: border-box;
  display: block;
  height: 2.25rem;
  padding: 0.25rem 0;
  width: auto;
`;
const LogoGameImg = styled(LogoCompanyImg)` 
  height: 4rem;
  padding: 0 0.5rem;
`;
const TransitionLink = styled.a`
  opacity: 1;
  transition: .5s ease;
  :hover { opacity: 0.7 }
  :active { opacity: 0.7 }
`;


export const LogoGame = ({ src, alt, route }) => {
  return (
    <TransitionLink as={GatsbyLink} to={route}>
      <LogoGameImg src={src} alt={alt} />
    </TransitionLink>
  );
};
LogoGame.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};


export const LogoCompany = (src, alt, href) => {
  return (
    <TransitionLink href={href} rel={A_REL.ENDORSE}>
      <LogoCompanyImg src={src} alt={alt} />
    </TransitionLink>
  );
};
LogoCompany.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
