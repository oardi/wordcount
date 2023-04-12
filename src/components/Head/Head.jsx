import { useLocation } from '@reach/router';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

export const Head = props => {
	const { lang = 'de', title, description, image, article } = props;

	const { pathname } = useLocation();
	const { site } = useStaticQuery(query);
	const {
		defaultTitle,
		titleTemplate,
		defaultDescription,
		siteUrl,
		defaultImage,
		googleSiteVerification,
		keywords,
		themeColor,
		viewPort,
	} = site.siteMetadata;

	const seo = {
		title: title || defaultTitle,
		description: description || defaultDescription,
		image: `${siteUrl}${image || defaultImage}`,
		url: `${siteUrl}${pathname}`,
		keywords: keywords,
	};

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={seo.title}
			titleTemplate={titleTemplate}>
			<meta charSet="utf-8" />
			<meta name="description" content={seo.description} />
			<meta name="keywords" content={seo.keywords} />
			<meta name="image" content={seo.image} />

			{seo.url && <meta property="og:url" content={seo.url} />}

			{(article ? true : null) && <meta property="og:type" content="article" />}

			{seo.title && <meta property="og:title" content={seo.title} />}

			{seo.description && <meta property="og:description" content={seo.description} />}

			{seo.image && <meta property="og:image" content={seo.image} />}
			<meta name="twitter:card" content="summary_large_image" />

			{/* {twitterUsername && (
				<meta name="twitter:creator" content={twitterUsername} />
			)} */}

			{seo.title && <meta name="twitter:title" content={seo.title} />}

			{seo.description && <meta name="twitter:description" content={seo.description} />}

			{seo.image && <meta name="twitter:image" content={seo.image} />}
			<link rel="canonical" href={siteUrl} />
			<meta name="theme-color" content={themeColor} />
			<meta name="viewport" content={viewPort} />
			<meta name="google-site-verification" content={googleSiteVerification} />
		</Helmet>
	);
};

const query = graphql`
	query SEO {
		site {
			siteMetadata {
				defaultTitle: title
				titleTemplate
				defaultDescription: description
				siteUrl
				keywords
				themeColor
				googleSiteVerification
				viewPort
				defaultImage: image
			}
		}
	}
`;
