import React from "react";
import { graphql } from "gatsby";
import exampleData from "../../log/example-data";
import Home from "../components/Home";


/**
 * ./src/components/Home.jsx contains most of the logic to build your website.
 */
const Index = (props) => {
  // const { data: { websiteData } } = props;
  const websiteData = exampleData.data.websiteData;
  console.log(websiteData);

  // Layout.jsx and its sub components contain most of the logic to build the website
  return <Home websiteData={websiteData} />;
};
export const query = graphql`
{
  websiteData {
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
    legalNotice
  }
}
`;
export default Index;