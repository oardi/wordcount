import React, { useState } from "react";
import { AppBar, AppBarTitle, Card, CardBody, CardTitle, Head, Layout, Textarea } from "../components";
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
		withoutSpaces: 0,
		density: []
	});

	const handleInputChange = e => {
		e.persist();
		const val = e.target.value;
		const words = val.split(' ').filter(v => v);

		const density = words.reduce((map, word) =>
			Object.assign(map, {
				[word]: (map[word]) ? map[word] + 1 : 1,
			}), {}
		);

		const densitySortedByValue = Object.keys(density).map(d => ({ key: d, value: density[d] })).sort((a, b) => a.value - b.value).reverse();

		setState({
			characters: val.length,
			withoutSpaces: val.replace(/ /g, '').length,
			wordCount: words.length,
			density: densitySortedByValue
		});
	};

	return (
		<Layout>
			<Head title={data.site.siteMetadata.description} />

			<AppBar>
				<div className="container">
					<AppBarTitle>
						<h1 className="display-4">
							{data.site.siteMetadata.title}
						</h1>
					</AppBarTitle>
				</div>
			</AppBar>

			<main>
				<div className="container">

					<div className="d-flex flex-column align-items-center text-center pt-4 pb-4">
						<h2>
							{data.site.siteMetadata.description}
						</h2>
					</div>

					<div className="grid">
						<div className="col">
							<Card>
								<CardBody>
									<Textarea
										placeholder="type or paste something..."
										onInput={handleInputChange}
									/>
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

							<Card className="mt-2">
								<CardBody>
									<CardTitle>
										Density
									</CardTitle>
									<ul>
										{state.density.length > 0 && state.density.map(d =>
											<li key={d.key}>{d.key} {d.value}</li>
										)}

										{state.density.length === 0 && <li>-</li> }
									</ul>
								</CardBody>
							</Card>
						</div>
					</div>

				</div>
			</main>
		</Layout >
	);
}
