import React, { useState } from "react";
import { Chip, Button, Card, CardBody, CardTitle, Head, Icon, Layout, Social } from "../components";
import { StaticImage } from 'gatsby-plugin-image';
import XingBrands from '../images/xing-brands.svg';
import LinkedInBrands from '../images/linkedin-brands.svg';
import EnvelopeRegular from '../images/envelope-regular.svg';
import { VARIANT } from '../components/enums';
import { graphql, useStaticQuery } from 'gatsby';

export default function Home() {

	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title,
					description
				}
			}
		}
	`);

	const sendMail = () => {
		const localPart = 'info';
		const domainPart = 'ardianshala';
		const domain = 'de';
		window.location = `mailto:${localPart}@${domainPart}.${domain}`;
	}

	const [state, setState] = useState({
		characters: 0,
		wordCount: 0,
		withoutSpaces: 0
	});

	const handleInputChange = e => {
		e.persist();

		const val  = e.target.value;
		console.warn(val);

		setState({
			characters: val.length,
			withoutSpaces: val.replace(/ /g,'').length,
			wordCount: val.split(' ').length
		});
	}

	return (
		<Layout>
			<Head title="Wordnumber" />

			<main>
				<div className="container">

					<div className="d-flex flex-column align-items-center text-center pt-4 pb-4">
						{/* <StaticImage
							className="rounded-circle"
							src="../images/ardianshala.png"
							alt={data.site.siteMetadata.title}
							layout="fixed"
							width={180}
							height={180}
						/> */}

						<h1 className="display-4">
							{data.site.siteMetadata.title}
						</h1>
						<h2>
							{data.site.siteMetadata.description}
						</h2>
					</div>

					<Card>
						<CardBody>

							<div className="form-group">
								<textarea className="form-control" onChange={handleInputChange} />
							</div>

						</CardBody>
					</Card>

					<Card>
						<CardBody>
							<div>
								Characters: {state.characters}
							</div>
							<div>
								Word count: {state.wordCount}
							</div>
							<div>
								without whitespaces: {state.withoutSpaces}
							</div>
						</CardBody>
					</Card>

				</div>
			</main>
		</Layout >
	);
}
