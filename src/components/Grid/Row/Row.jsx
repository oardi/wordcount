import React, { ReactNode } from 'react';

export const Row = (props) => {

	const { children, className = '', ...rest } = props;

	const getCssClasses = () => {
		const cssClasses = [];
		cssClasses.push(className);
		cssClasses.push('row');
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<div className={getCssClasses()} {...rest}>
			{children}
		</div>
	)
}
