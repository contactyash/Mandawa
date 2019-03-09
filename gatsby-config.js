module.exports = {
  siteMetadata: {
    title: 'Mandawa Heritage Tours',
    description: `Mandawa Heritage Tours is tours an travels service provider agency located in Mandawa, Rajasthan`,
    siteUrl: 'https://manadawaheritagetours.com/',
    canonicalUrl: 'https://manadawaheritagetours.com',
    image: 'https://manadawaheritagetours.com/manadawaheritagetours.png',
    author: {
      name: 'Mandawa Heritage Tours',
      minibio: `
        <strong>Mandawa Heritage Tours</strong> is tour and travels service provider agency located in Mandawa,Rajasthan.
      `
    },
    organization: {
      name: 'Mandawa Heritage Tours',
      url: 'https://manadawaheritagetours.com',
      logo: ""
    },
    social: {
      twitter: '@manadawaheritagetours',
      fbAppID: '1064878900381957'
    }
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `homepageImages`,
        path: `${__dirname}/src/images/homepageImages`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `attractionsImages`,
        path: `${__dirname}/src/images/attractionsImages/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `experiencesImages`,
        path: `${__dirname}/src/images/experiencesImages`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `servicesImages`,
        path: `${__dirname}/src/images/servicesImages`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contactImages`,
        path: `${__dirname}/src/images/contactImages`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `packagesImages`,
        path: `${__dirname}/src/images/packagesImages`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `aboutImages`,
        path: `${__dirname}/src/images/aboutImages`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants'
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-131368471-1`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Yash Rathore`,
        short_name: `Yash`,
        start_url: `/`,
        background_color: `#eee`,
        theme_color: `#020020`,
        display: `minimal-ui`,
        icons: [
          {
            src: 'icons/icon-48x48.png',
            sizes: '48x48',
            type: 'image/png'
          },
          {
            src: 'icons/icon-72x72.png',
            sizes: '72x72',
            type: 'image/png'
          },
          {
            src: 'icons/icon-96x96.png',
            sizes: '96x96',
            type: 'image/png'
          },
          {
            src: 'icons/icon-144x144.png',
            sizes: '144x144',
            type: 'image/png'
          },
          {
            src: 'icons/icon-192x192.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'icons/icon-256x256.png',
            sizes: '256x256',
            type: 'image/png'
          },
          {
            src: 'icons/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png'
          },
          {
            src: 'icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`
  ]
};
