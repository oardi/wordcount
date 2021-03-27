import React, { useState } from "react";
import { AppBar, AppBarTitle, Card, CardBody, CardTitle, Head, Layout, Textarea, List, ListItem, ListItemText, Tooltip, Button } from "../components";
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
		density: [],
		textAreaVal: ''
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

		const densitySorted = Object.keys(density)
			.map(d => ({ key: d, value: density[d] }))
			.sort((a, b) => (b.value - a.value) || ((a.key > b.key) - (a.key < b.key)));

		setState({
			characters: val.length,
			withoutSpaces: val.replace(/ /g, '')?.length,
			wordCount: words.length,
			spaces: val.match(/([\s]+)/g)?.length,
			density: densitySorted
		});
	};

	const handleClickClear = () => {
		clearAll();
	};

	const clearAll = () => {
		setState({
			characters: 0,
			wordCount: 0,
			withoutSpaces: 0,
			spaces: 0,
			density: [],
			textAreaVal: ''
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
						<h3>Just type in some text and get the amount of words, characters (with spaces, without spaces) and the density of words.</h3>
					</div>

					<div className="grid">
						<div className="col">
							<Card>
								<CardBody>
									<Textarea
										placeholder="type or paste some text..."
										onChange={handleInputChange}
										value={state.textAreaVal}
									/>
								</CardBody>
							</Card>
						</div>
						<div className="col">
							<Card>
								<CardBody>
									<div className="d-flex">
										<CardTitle>Words</CardTitle>
										{state.characters > 0 &&
											<div className="d-flex ml-auto">
												<div className="ml-auto mb-3">
													<Button color="accent" onClick={handleClickClear}>clear all</Button>
												</div>
											</div>
										}
									</div>

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

							<Card className="mt-2">
								<CardBody>
									<CardTitle>Density</CardTitle>
								</CardBody>

								<List>
									{state.density.map(d =>
										<ListItem key={d.key}>
											<ListItemText
												primary={
													<Tooltip text={d.key} placement="top">
														<div>
															{(d.key && d.key.length >= 30) ? `${d.key.slice(0, 30)}...` : d.key}
														</div>
													</Tooltip>
												}
											/>

											<span className="ml-auto">
												{d.value}
											</span>
										</ListItem>
									)}
								</List>

								{state.density?.length === 0 &&
									<List>
										<ListItem>
											<ListItemText
												primary={'No text yet'}
											/>
										</ListItem>
									</List>
								}
							</Card>

						</div>
					</div>

				</div>
			</main>
		</Layout >
	);
}
