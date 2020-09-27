import React from "react";
import PropTypes from "prop-types";


const Hero = ({ screenshots, children }) => {
  if (screenshots.length === 0) return <div>{children}</div>;
  const heroImg = screenshots[0].path_full;

  const backgroundStyles = {
    backgroundSize: "cover",
    background: `linear-gradient(
      rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 0.45) 60%, rgba(0, 0, 0, 1) 95%) repeat scroll 0% 0%, 
      rgba(0, 0, 0, 0) url(${heroImg}) no-repeat scroll center center`,
  };

  return (
    <div className="hero__container" style={backgroundStyles}>
      {children}
    </div>
  );
};

Hero.propTypes = {
  screenshots: PropTypes.array,
  children: PropTypes.node.isRequired,
};
export default Hero;