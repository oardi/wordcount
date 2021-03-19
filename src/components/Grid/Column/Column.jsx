import React, { ReactNode } from 'react';

export const Column = (props) => {

	const { children, className = '', ...rest } = props;

	const getCssClasses = () => {
		const cssClasses = [];
		cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<div className={getCssClasses()} {...rest}>
			{children}
		</div>
	);
}
