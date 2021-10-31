import React from "react";
import { graphql } from "gatsby";
import Home from "../components/Home";
import localFile from "../../res/site-data.json"; // enable when using a local JSON file


const Index = (props) => {
  // Default: Use GraphQL to load your data
  // const { data: { siteData } } = props;

  // Optional: Use a local JSON file to load your data
  // const { data: { siteData } } = localFile;
  const siteData = localFile;

  // There are two ways to inspect your data:
  // 1. Use `console.log(siteData);` to view the log in your browser's developer tools
  // 2. If you use GraphQL, use Gatsby's GraphQL interface at `http://localhost:8000/___graphql`

  // console.log(siteData);

  // ./src/components/Home.jsx contains most of the logic to build your website.
  return <Home siteData={siteData} />;
};
export const query = graphql`
{
  siteData {
    appid
    gameName
    description
    movies {
      movieID
      highlight
      name
      thumbnail
      webm {
        res480
        resMax
      }
      mp4 {
        res480
        resMax
      }
    }
    screenshots {
      screenshotID
      path_full
      path_thumbnail
    }
    supportInfo {
      email
      url
    }
    legalNoticeSteam
    legal {
      studioName
      contact
      legalNotice
    }
    socialMedia {
      discord
      facebook
      instagram
      reddit
      twitter
      youtube
      twitch
    }
    images {
      hero
      logoGame
    }
  }
}
`;
export default Index;
