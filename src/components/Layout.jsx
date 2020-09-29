import React from "react";
import PropTypes from "prop-types";
import Footer from "./Footer";
import styled from "styled-components";

const PageContainer = styled.div`
  height: 100%;
  min-height: calc(100vh);
  
  display: flex; 
  flex-direction: column;
`;

/**
 * This layout builds your website.
 * Feel free to change the corresponding className attributes / CSS classes in styles.css.
 *
 * It is not recommended to change the JSX code of this file or subcomponents.
 * This might lead to errors in future updates.
 *
 * If required attributes do not exist on your Steam page, an error page will display.
 */
const Layout = ({ children, legalNotice, supportInfo }) => {
  return (
    <PageContainer>
      <header className="header" />
      {children}
      <Footer legalNotice={legalNotice} supportInfo={supportInfo} />
    </PageContainer>
  );
};
Layout.propTypes = {
  legalNotice: PropTypes.string,
  supportInfo: PropTypes.object,
};
export default Layout;