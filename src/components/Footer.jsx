import React from "react";
import PropTypes from "prop-types";
import svg from "../svg/divider.min.svg";


const Footer = ({ legalNotice, supportInfo }) => {
  return (
    <footer className="footer">
      {supportInfo && (
        <div className="footer__support-info">
          <h2>Say Hello!</h2>
          <p>{supportInfo.email}</p>
        </div>
      )}
      <img src={svg} className="footer__divider" alt="Divider Element" />
      <Attribution />
      {legalNotice && <span>{legalNotice}</span>}
    </footer>
  );
};

const attrTxt = ["Built with ", "https://oberion.io", "Oberion"];
const Attribution = () => (
  <p className="footer__legal">
    {attrTxt[0]}
    <a href={attrTxt[1]} rel="noopener">{attrTxt[2]}</a>
  </p>
);

Footer.propTypes = {
  legalNotice: PropTypes.string,
  supportInfo: PropTypes.object,
};
export default Footer;