import React from "react";
import PropTypes from "prop-types";
import Footer from "./Footer";

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
    <>
      <header className="header" />
      <main className="main">
        {children}
      </main>
      <Footer legalNotice={legalNotice} supportInfo={supportInfo} />
    </>
  );
};
Layout.propTypes = {
  legalNotice: PropTypes.string,
  supportInfo: PropTypes.object,
};
export default Layout;