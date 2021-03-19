import React from "react";
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
							<CardTitle as="h3">
								Erreichbarkeit
							</CardTitle>

							<Button variant={VARIANT.text} onClick={sendMail}>
								<div className="d-flex align-items-center">
									<Icon icon={<EnvelopeRegular />} />
									<span className="ml-2">E-Mail</span>
								</div>
							</Button>

							<Social path="https://www.xing.com/profile/Ardian_Shala2" icon={<XingBrands />}>
								Xing
							</Social>

							<Social path="https://www.linkedin.com/in/ardian-shala-79a7a5101/" icon={<LinkedInBrands />}>
								LinkedIn
							</Social>
						</CardBody>
					</Card>

				</div>
			</main>
		</Layout >
	);
}
