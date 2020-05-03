import React from "react";
import * as PropTypes from "prop-types";
import Hero from "./Hero";
import Trailer from "./Trailer";
import StoreLink from "./StoreLink";
import Divider from "./Divider";
import Description from "./Description";
import Screenshots from "./Screenshots";
import Footer from "./Footer";
import Error from "./error/Error";

/**
 * This layout builds your website.
 * Feel free to change the corresponding className attributes / CSS classes in styles.css.
 *
 * It is not recommended to change the JSX code of this file or subcomponents.
 * This might lead to errors in future updates.
 *
 * The essential attributes for a site to work are
 * @param websiteData.appid
 * @param websiteData.appName
 * @param websiteData.description
 * @param websiteData.legalNotice
 *
 * If these attributes do not exist on your Steam page, an error page will display.
 */
const Layout = ({ websiteData }) => {

  if (!websiteData) {
    return <Error />;
  }
  console.log(websiteData);
  const { appid, gameName, screenshots, movies, description, supportInfo, legalNotice }
    = websiteData;

  if (!websiteData || !appid || !gameName || !description || !legalNotice) {
    return <Error />;
  }

  return (
    <>
      <header className="header"></header>
      <main className="main">

        {screenshots && (
          <Hero heroImg={screenshots[0].path_full}>
            <h1 className="hero__heading">{gameName}</h1>
            {movies && <Trailer trailer={movies[0]} />}
          </Hero>
        )}

        <article className="content">
          <StoreLink appid={appid}
                     gameName={gameName} />
          <Divider />
          <Description description={description} />

          {screenshots && (
            <>
              <Divider />
              <Screenshots screenshots={screenshots} />
            </>
          )}
        </article>

        <Divider />
      </main>
      <Footer legalNotice={legalNotice} supportInfo={supportInfo} />
    </>
  );
};
Layout.propTypes = {
  websiteData: PropTypes.shape({
    appid: PropTypes.number,
    gameName: PropTypes.string,
    description: PropTypes.string,
    movies: PropTypes.array,
    screenshots: PropTypes.array,
    legalNotice: PropTypes.string,
    supportInfo: PropTypes.object,
  }).isRequired,
};
export default Layout;