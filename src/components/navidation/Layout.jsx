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

const Layout = ({ children, legalNotice, supportInfo }) => {
  return (
    <PageContainer>
      {/*<Header />*/}
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