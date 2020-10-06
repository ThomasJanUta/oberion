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
    {
      resolve: "gatsby-source-apiserver",
      options: {
        url: process.env.OBERION_API_ENDPOINT, // copy from https://oberion.io/user/settings/
        method: "post", // use HTTP method post
        headers: { "Content-Type": "application/json" }, // get response as JSON
        data: {
          sid: process.env.OBERION_SITE_ID, // copy from https://oberion.io/user/settings/
          key: process.env.OBERION_API_KEY, // copy from https://oberion.io/user/settings/
        },
        name: `siteData`, // name of the source file i.e. response object
        entityLevel: `data.siteData`, // navigate to the the important part in the response object
        localSave: true, // save a copy  of your data as a local file
        path: `${__dirname}/`, // save in project root directory
        verboseOutput: false, // true for detailed debugging output
      },
    },
  ],
};
