import React from "react";
import PropTypes from "prop-types";
import Divider from "./Divider";


const Footer = ({ legalNotice, supportInfo }) => {
  return (
    <footer className="footer">
      <Divider displayWith={true} margin="5rem 0 2rem 0" />
      {supportInfo && (
        <div>
          <h2>Say Hello!</h2>
          <p>{supportInfo.email}</p>
        </div>
      )}
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