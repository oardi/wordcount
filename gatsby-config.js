const path = require("path");

module.exports = {
	siteMetadata: {
		title: "Wordcount",
		titleTemplate: "%s - Wordcount",
		description: "A simple Wordcounter - no Ads, no Cookies, no Storage needed",
		siteUrl: "https://wordcount.brosmos.app",
		author: "Ardian Shala",
		keywords: "wordcount,count,counter,character,whitespace,space,amount,online",
		themeColor: "#3f51b5",
		googleSiteVerification: "l8K1FFcrlXgC0-nF_zmWQn3fpdkW_Yw7NFxRlV3fcmk",
		viewPort: "width=device-width, initial-scale=1, maximum-scale=5",
		image: "/images/icon.png"
	},

	plugins: [
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sass`,
		{
			resolve: "gatsby-plugin-react-svg",
			options: {
				rule: {
					include: /images/
				}
			}
		},
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sitemap`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				icon: `src/images/icon.png`,
				name: `Wordcount`,
				short_name: `Wordcount`,
				start_url: `/`,
				background_color: `#f8f9fa`,
				theme_color: `#3f51b5`,
				display: `standalone`,
			},
		},
		`gatsby-plugin-offline`
	],
}
