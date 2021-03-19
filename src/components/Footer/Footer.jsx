import React from "react";
import { graphql, Link, useStaticQuery } from 'gatsby';
import styles from './Footer.module.scss';

const Footer = () => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					author
				}
			}
		}
	`);
	const year = new Date().getFullYear();

	return (
		<footer className={styles.footer}>
			<div>
				©{year} - {data.site.siteMetadata.author}
			</div>
			<div>
				<Link to="/datenschutz">
					Datenschutz
				</Link>
				&nbsp;
				<Link to="/impressum">
					Impressum
				</Link>
			</div>
		</footer>
	);
}

export default Footer;
