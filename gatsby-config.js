require('dotenv').config({
  REST_URL: `.env.${process.env.GRAPHQL_URL}`,
});

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
      resolve: 'gatsby-source-filesystem',
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-react-svg',
    },
    {
      options: {
        endpoints: [process.env.REST_URL],
      },
      resolve: 'gatsby-source-rest-api',
    },
    {
      options: {
        alias: {
          '@assets': 'src/assets',
          '@components': 'src/components',
          '@icons': 'src/components/icons',
          '@pages': 'src/pages',
          '@src': 'src',
          '@templates': 'src/templates',
          '@theme': 'src/theme',
          '@utils': 'src/utils',
        },
        extensions: ['js'],
      },
      resolve: 'gatsby-plugin-alias-imports',
    },
    {
      options: {
        background_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
        name: 'Neospasmina',
        short_name: 'neospasmina',
        start_url: '/',
        theme_color: '#663399', // TODO: set these up
      },
      resolve: 'gatsby-plugin-manifest',
    },
    'gatsby-plugin-styled-components',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
  siteMetadata: {
    author: '@kjhank',
    description: 'Neospasmina',
    siteUrl: 'https://neospasmina.pl',
    title: 'Neospasmina',
  },
};
