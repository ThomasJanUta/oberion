require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Oberion Gaming Website`,
    description: `Create your gaming website within 5 minutes for free with Oberion at https://oberion.io`,
  },
  plugins: [
    /* --- meta --- */
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,

    /* --- CSS --- */
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require("autoprefixer")({ overrideBrowserslist: ["> 1%", "last 2 versions"] }),
        ],
      },
    },

    /* --- image --- */
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    /* --- source --- */
    // {
    //   resolve: "gatsby-source-apiserver",
    //   options: {
    //     url: process.env.API_ENDPOINT,
    //     method: "post",
    //     headers: { "Content-Type": "application/json" },
    //     data: { url: process.env.STEAM_URL },
    //     name: `websiteData`,
    //     entityLevel: `websiteData`,
    //   },
    // },
  ],
};
