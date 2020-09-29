import React from "react";
import PropTypes from "prop-types";
import Hero from "./Hero";
import Trailer from "./Trailer";
import StoreLink from "./StoreLink";
import Divider from "./Divider";
import Description from "./Description";
import Screenshots from "./Screenshots";
import Layout from "./Layout";
import Error from "./error/Error";


const Home = ({ websiteData }) => {
  const { appid, gameName, description, screenshots, movies, supportInfo, legalNotice }
    = websiteData;
  if (!websiteData || !appid || !gameName || !description) return <Error />;

  return (
    <Layout supportInfo={supportInfo} legalNotice={legalNotice}>

      <Hero screenshots={screenshots}>
        <h1 className="hero__heading">{gameName}</h1>
        <Trailer movies={movies} />
      </Hero>

      <article className="content">
        <StoreLink appid={appid} gameName={gameName} />
        <Divider nextElement={description} />
        <Description description={description} />
        <Divider nextElement={screenshots} />
        <Screenshots screenshots={screenshots} />
      </article>

    </Layout>
  );
};
Home.propTypes = {
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
export default Home;