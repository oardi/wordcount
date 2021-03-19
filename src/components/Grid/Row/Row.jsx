import React from 'react';

export const Row = (props) => {

	const { children, className = '', start = 1, end = 1, ...rest } = props;

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
