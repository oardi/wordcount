import React from "react";
import { graphql, Link, useStaticQuery } from 'gatsby';
import { Card, CardBody, CardTitle, Layout, Icon, Hero, Head, Button } from '../components';
import ArrowLeftSolid from "../images/arrow-left-solid.svg";
import { VARIANT } from '../components/enums';

const About = () => {

	const data = useStaticQuery(graphql`
	query {
		site {
			siteMetadata {
				author
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
			<Head title="Impressum" />

			<div className="container">
				<Link className="nav-link" to="/">
					<Icon icon={<ArrowLeftSolid />} /> Home
				</Link>

				<Hero>
					<h1 className="display-3">Impressum</h1>
				</Hero>

				<Card>
					<CardBody>
						<CardTitle as="h3">
							Verantwortlich für die Seite
						</CardTitle>

						<div>{data.site.siteMetadata.author}</div>
						<div>
							E-Mail: <Button variant={VARIANT.text} onClick={sendMail}>E-Mail</Button>
							<div><small>(Link anklicken um Standard E-Mail Programm zu öffnen)</small></div>
						</div>
						<div>
							Ust-ID: <span>DE319238777</span>
						</div>
					</CardBody>
				</Card>

				<Card>
					<CardBody>
						<CardTitle as="h3">
							Design und Umsetzung
						</CardTitle>

						{data.site.siteMetadata.author}
					</CardBody>
				</Card>

				<Card>
					<CardBody>
						<CardTitle as="h3">
							Haftungshinweis
						</CardTitle>

						Der Betreiber der Webseite übernimmt keinerlei Gewähr für die
						Aktualität, Korrektheit oder Vollständigkeit der
						bereitgestellten Inhalte. Haftungsansprüche gegen den Author,
						die durch die Nutzung oder Nichtnutzung der dargestellten
						Inhalte verursacht wurden, sind grundsätzlich ausgeschlossen.
					</CardBody>
				</Card>

				<Card>
					<CardBody>
						<CardTitle as="h3">
							Verlinkte Seiten
						</CardTitle>

						Für den Inhalt der verlinkten Seiten sind ausschließlich deren
						Betreiber verantwortlich.
					</CardBody>
				</Card>

				<Card>
					<CardBody>
						<CardTitle as="h3">
							Urheberrecht
						</CardTitle>

						Der Betreiber der Webseite ist bestrebt, in allen Publikationen
						die Urheberrechte der verwendeten Bilder, Grafiken und Texte zu
						beachten, von ihm selbst erstellte Bilder, Grafiken und Texte zu
						nutzen oder auf lizenzfreie Grafiken und Texte zurückzugreifen.
					</CardBody>
				</Card>

			</div>
		</Layout>
	)
}

export default About;
