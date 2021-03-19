import React, { useState } from "react";
import { Card, CardBody, Head, Layout, Textarea } from "../components";
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

	const [state, setState] = useState({
		characters: 0,
		wordCount: 0,
		withoutSpaces: 0
	});

	const handleInputChange = e => {
		e.persist();
		const val = e.target.value;
		setState({
			characters: val.length,
			withoutSpaces: val.replace(/ /g, '').length,
			wordCount: val.split(' ').filter(w => w).length
		});
	}

	return (
		<Layout>
			<Head title="Wordnumber" />

			<main>
				<div className="container">

					<div className="d-flex flex-column align-items-center text-center pt-4 pb-4">
						<h1 className="display-4">
							{data.site.siteMetadata.title}
						</h1>
						<h2>
							{data.site.siteMetadata.description}
						</h2>
					</div>

					<div className="grid">
						<div className="col">
							<Card>
								<CardBody>
									<Textarea placeholder="type something" onChange={handleInputChange} />
								</CardBody>
							</Card>
						</div>
						<div className="col">
							<Card>
								<CardBody>
									<div>
										Words: {state.wordCount}
									</div>
									<div>
										Characters: {state.characters}
									</div>
									<div>
										Characters without whitespaces: {state.withoutSpaces}
									</div>
								</CardBody>
							</Card>
						</div>
					</div>

					<div>
						SEO CONTENT TODO
					</div>

				</div>
			</main>
		</Layout >
	);
}
