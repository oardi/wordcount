import React from "react";
import { Link } from 'gatsby';
import { Card, CardTitle, CardBody, Layout, Head, Hero, Icon } from '../components';
import ArrowLeftSolid from "../images/arrow-left-solid.svg";

const About = () => {
	return (
		<Layout>
			<Head title="Datenschutz" />

			<div className="container">
				<Link className="nav-link" to="/">
					<Icon icon={<ArrowLeftSolid />} /> Home
				</Link>

				<Hero>
					<h1>Datenschutz</h1>
				</Hero>

				<Card className="mb-3">
					<CardBody>
						<CardTitle as="h3">
							Datenerhebung
						</CardTitle>

						Es werden keine personenbezogenen Daten erhoben.
					</CardBody>
				</Card>

				<Card className="mb-3">
					<CardBody>
						<CardTitle as="h3">
							SSL-Verschlüsselung
						</CardTitle>

						Um die Sicherheit Ihrer Daten bei der Übertragung zu
						schützen, verwenden wir dem aktuellen Stand der Technik
						entsprechende Verschlüsselungsverfahren (z. B. SSL) über
						HTTPS.
					</CardBody>
				</Card>

				<Card className="mb-3">
					<CardBody>
						<CardTitle as="h3">
							Änderung unserer Datenschutzbestimmungen
						</CardTitle>

						Wir behalten uns vor, diese Datenschutzerklärung anzupassen,
						damit sie stets den aktuellen rechtlichen Anforderungen
						entspricht oder um Änderungen unserer Leistungen in der
						Datenschutzerklärung umzusetzen, z.B. bei der Einführung
						neuer Services. Für Ihren erneuten Besuch gilt dann die neue
						Datenschutzerklärung.
					</CardBody>
				</Card>

				<Card className="mb-3">
					<CardBody>
						<CardTitle as="h3">
							Fragen an den Datenschutzbeauftragten
						</CardTitle>

						Für Fragen zum Datenschutz schicken Sie uns bitte eine
						Nachricht an <a href="mailto:info@ardianshala.de?subject=Datenschutz">info@ardianshala.de</a> mit dem Betreff „Datenschutz“.
					</CardBody>
				</Card>
			</div>
		</Layout>
	)
}

export default About;
