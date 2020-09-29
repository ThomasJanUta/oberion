import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


const Hero = ({ screenshots, children }) => {
  if (screenshots.length === 0) return <div>{children}</div>;
  const heroImg = screenshots[0].path_full;

  return (
    <HeroContainer heroImg={heroImg}>
      {children}
    </HeroContainer>
  );
};
Hero.propTypes = {
  screenshots: PropTypes.array,
  children: PropTypes.node.isRequired,
};
export default Hero;


const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 70vh;
  overflow: hidden;
  background-size: cover;
  background: linear-gradient(
    rgba(10, 13, 16, 0) 25%, rgba(10, 13, 16, 0.45) 60%, rgba(10, 13, 16, 1) 95%) repeat scroll 0 0, 
    rgba(10, 13, 16, 0) url(${props => props.heroImg}) no-repeat scroll center center;
`;