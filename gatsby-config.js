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
    //     url: process.env.OBERION_API_ENDPOINT, // see `.env.sample` for instructions
    //     method: "post", // use HTTP method post
    //     headers: { "Content-Type": "application/json" }, // get response as JSON
    //     data: {
    //       sid: process.env.OBERION_SITE_ID, // see `.env.sample` for instructions
    //       key: process.env.OBERION_API_KEY, // see `.env.sample` for instructions
    //     },
    //     name: `siteData`, // name of the source file i.e. response object
    //     entityLevel: `data.siteData`, // navigate to the the important part in the response object
    //     localSave: true, // save a copy  of your data as a local file
    //     path: `${__dirname}/res/`, // save in local directory
    //     verboseOutput: false, // true for detailed debugging output
    //   },
    // },
  ],
};
