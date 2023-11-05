/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
module.exports = {
  pathPrefix: '/workouts',
  siteMetadata: {
    siteTitle: 'Fish running_page',
    siteUrl: 'https://runningpage.libo.run',
    logo: 'https://avatars.githubusercontent.com/u/119868298?v=4',
    description: '致那些抗争的日子',
    navLinks: [
      {
        name: 'YouTube',
        url: 'https://www.youtube.com/channel/UCBvcXPwXIRhKuTxe-6sVT8A',
      },
      {
        name: '哔哩哔哩',
        url: 'https://space.bilibili.com/38995440',
      },
    ],
  },
  plugins: [
    'gatsby-transformer-json',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',

    {
      resolve: 'gatsby-plugin-vercel',
      options: {
        // (optional) Prints metrics in the console when true
        debug: false,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/static/',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/images/',
      },
    },
    {
      resolve: 'gatsby-alias-imports',
      options: {
        rootFolder: '.',
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        cssLoaderOptions: {
          esModule: false,
          modules: {
            namedExport: false,
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#e1e1e1',
        theme_color: '#e1e1e1',
        display: 'standalone',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
  ],
};
