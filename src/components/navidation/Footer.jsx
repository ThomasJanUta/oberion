import React from "react";
import PropTypes from "prop-types";
import Divider from "../Divider";
import styled from "styled-components";


const Footer = ({ legalNotice, supportInfo }) => {
  const copyright = `Copyright © ${new Date().getFullYear()} ${legalNotice}.`;
  return (
    <footer className="footer">
      <Divider displayWith={true} margin="5rem 0 2rem 0" />
      {supportInfo && (
        <div>
          <h2>Say Hello!</h2>
          <p>{supportInfo.email}</p>
        </div>
      )}
      {legalNotice && <span>{legalNotice}</span>}
      <CopyrightDiv>
        <Attribution copyright={copyright} />
      </CopyrightDiv>
    </footer>
  );
};
const attrTxt = [" Created with ", "https://oberion.io", "Oberion"];
const Attribution = ({ copyright }) => (
  <p className="footer__legal">
    {copyright}
    {attrTxt[0]}
    <a href={attrTxt[1]} rel="noopener">{attrTxt[2]}</a>
  </p>
);
Attribution.propTypes = {
  copyright: PropTypes.string.isRequired,
};
Footer.propTypes = {
  legalNotice: PropTypes.string,
  supportInfo: PropTypes.object,
};
export default Footer;


const CopyrightDiv = styled.div`
  margin-top: 3rem;
  text-align: center;
`;