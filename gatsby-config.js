const path = require("path");

module.exports = {
	siteMetadata: {
		title: "Wordcount light",
		titleTemplate: "%s - Wordcount light",
		description: "Instantly count words, characters and characters without white spaces by typing or copy-pasting your text in our free online word count tool.",
		siteUrl: "https://wordcountlight.de",
		author: "Ardian Shala",
		keywords: "TODO",
		themeColor: "#3f51b5",
		googleSiteVerification: "p5ABZNkLPeuO8Ct7t152F89XCl-0PqDnCLLzI7wO3sc",
		viewPort: "width=device-width, initial-scale=1, maximum-scale=5",
		image: "/images/ardianshala.png"
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
		`gatsby-plugin-sitemap`
	],
}
