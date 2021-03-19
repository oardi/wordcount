import React from "react";
import { Link } from "gatsby";
import { Head, Hero, Layout } from '../components';

export default function Home() {
	return (
		<Layout>
			<Head title="404" />

			<div className="container text-center">
				<Hero>
					<h1>404</h1>
				</Hero>

				<p>
					Going back to the <Link to="/">Homepage</Link>
				</p>
			</div>
		</Layout>
	)
}
