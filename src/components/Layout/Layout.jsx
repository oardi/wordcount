import React from 'react';
import Footer from '../Footer/Footer';
import './layout.scss';

export const Layout = ({ children }) => {
	return (
		<>
			{/* <Header /> */}

			{children}

			<Footer />
		</>
	);
};
