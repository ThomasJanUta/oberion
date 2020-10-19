const fs = require("fs");
const _get = require("lodash/get");
const got = require("got");


exports.onPreExtractQueries = async () => {
  let response;
  const requestOptions = {
    json: {
      sid: process.env.OBERION_SITE_ID,
      key: process.env.OBERION_API_KEY,
    },
  };
  try {
    response = await got.post(process.env.OBERION_API_ENDPOINT, requestOptions).json();
  } catch (error) {
    let body = {};
    if (error instanceof got.HTTPError) body = await error.response.json();
    console.error(
      "",
      error,
      { ...requestOptions.json, ...body },
    );
    process.exit(1);
  }
  const siteData = _get(response, "data.siteData", null);
  console.log("siteData", siteData);
  if (siteData === null) {
    console.error(`error retrieving siteData`, response);
    process.exit(1);
  }
  try {
    await fs.writeFileSync("./res/site-data.json", JSON.stringify(siteData));
  } catch (err) {
    console.error(`Error while saving your site data. Make sure the target directory exists.`, err);
    process.exit(1);
  }
};


/**
 * Create explicit GraphQL type definitions to provide the right types.
 * @see https://www.gatsbyjs.org/docs/schema-customization/#creating-type-definitions
 */
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type siteData implements Node @dontInfer {
      appid: ID
      gameName: String
      description: String
      movies: [Movies]
      screenshots: [Screenshots]
      legalNoticeSteam: String
      supportInfo: SupportInfo
      legal: Legal
      socialMedia: SocialMedia
      images: Images
    }
    type Screenshots {
      screenshotID: ID
      path_thumbnail: String
      path_full: String
    }
    type SupportInfo {
      url: String
      email: String
    }
    type Movies {
      movieID: ID
      name: String
      thumbnail: String
      webm: Webm
      mp4: Mp4
      highlight: Boolean
    }
    type Webm {
      res480: String
      resMax: String
    }
    type Mp4 {
      res480: String
      resMax: String
    }
    type Legal {
      studioName: String
      contact: String
      legalNotice: String
    }
    type SocialMedia {
      discord: String
      facebook: String
      instagram: String
      reddit: String
      twitter: String
      youtube: String
      twitch: String
    }
    type Images {
      hero: String
      logoGame: String
    }
  `;
  createTypes(typeDefs);
};


/** Fix React hot loader warning */
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage.startsWith("develop")) {
    actions.setWebpackConfig({ resolve: { alias: { "react-dom": "@hot-loader/react-dom" } } });
  }
};