module.exports = {
  siteMetadata: {
    title: ``,
    description: `Radio INNOVA te acompaña...`,
    author: `@manchu`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `🔥 INNOVA 📻 🔥`,
        short_name: `INNOVA RADIO`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
      
    },

    `gatsby-plugin-offline`
  ],
}
