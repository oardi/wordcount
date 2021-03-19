import React, { useState } from "react";
import { AppBar, AppBarTitle, Card, CardBody, CardTitle, Head, Layout, Textarea, List, ListItem, ListItemText } from "../components";
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
		spaces: 0,
		density: []
	});

	const handleInputChange = e => {
		e.persist();
		const val = e.target.value;
		const words = val.trim().replace(/[^\w\s]/gi, '').replace(/_/g, '').replace(/\r?\n|\r/g, ' ').split(' ').filter(v => v);

		const density = words.reduce((map, word) => {
			const key = word.toLowerCase();
			return ({
				...map,
				[key]: (map[word.toLowerCase()]) ? map[word.toLowerCase()] + 1 : 1
			})
		}, {});

		const densitySortedByValue = Object.keys(density).map(d => ({ key: d, value: density[d] })).sort((a, b) => a.value - b.value).reverse();

		setState({
			characters: val.length,
			withoutSpaces: val.replace(/ /g, '')?.length,
			wordCount: words.length,
			spaces: val.match(/([\s]+)/g)?.length,
			density: densitySortedByValue
		});
	};

	return (
		<Layout>
			<Head title={data.site.siteMetadata.description} />

			<AppBar>
				<div className="container">
					<AppBarTitle>
						<h1>{data.site.siteMetadata.title}</h1>
					</AppBarTitle>
				</div>
			</AppBar>

			<main>
				<div className="container">

					<div className="d-flex flex-column align-items-center text-center pt-4 pb-4">
						<h2>
							{data.site.siteMetadata.description}
						</h2>
						<h3>Count the number of words, characters, and characters without whitespaces by typing or copying text in the text box</h3>
					</div>

					<div className="grid">
						<div className="col">
							<Card>
								<CardBody>
									<Textarea
										placeholder="type or paste some text..."
										onInput={handleInputChange}
									/>
								</CardBody>
							</Card>
						</div>
						<div className="col">
							<Card>
								<CardBody>
									<CardTitle>Words</CardTitle>
									<div>total: {state.wordCount}</div>
								</CardBody>
							</Card>

							<Card className="mt-2">
								<CardBody>
									<CardTitle>Characters</CardTitle>
									<div>
										total: {state.characters}
									</div>
									<div>
										without spaces: {state.withoutSpaces}
									</div>
									<div>
										only spaces: {state.spaces}
									</div>
								</CardBody>
							</Card>

							{state.density.length > 0 &&
								<Card className="mt-2">
									<CardBody>
										<CardTitle>Density</CardTitle>
									</CardBody>
									<List>
										{state.density.map(d =>
											<ListItem key={d.key}>
												<ListItemText
													primary={d.key}
												/>
												<span className="ml-auto">{d.value}</span>
											</ListItem>
										)}
									</List>
								</Card>
							}
						</div>
					</div>

				</div>
			</main>
		</Layout >
	);
}
