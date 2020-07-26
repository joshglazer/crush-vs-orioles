/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      },
    },
  ],
  siteMetadata: {
    title: `Crush vs. The Orioles`,
    description: `It's 2020 and the baseball season has finally begun. And everyone's wondering, which number will be higher? The amount of wins by The Orioles, or the amount of hits by Crush Davis. Follow along below.`,
    image: `https://crush-vs-orioles.joshglazer.com/images/crush-vs-orioles-opengraph.png`,
    author: `@glazerade`,
  },
}
