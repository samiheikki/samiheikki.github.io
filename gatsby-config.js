module.exports = {
  siteMetadata: {
    title: 'Sami Suo-Heikki',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'sami_suo-heikki',
        short_name: 'suo-heikki',
        start_url: '/',
        background_color: '#0C85AC',
        theme_color: '#0C85AC',
        display: 'minimal-ui',
        icon: 'src/images/face.jpg', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
