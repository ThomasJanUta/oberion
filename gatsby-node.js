/** Fix React hot loader warning */
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage.startsWith("develop")) {
    actions.setWebpackConfig({ resolve: { alias: { "react-dom": "@hot-loader/react-dom" } } });
  }
};

/**
 * Create a GraphQL type definition to provide the right objects for each JSX component.
 *
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
