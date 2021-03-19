import React, { ReactNode } from 'react';

export const Column = (props) => {

	const {
		children,
		className = '',
		xs,
		sm,
		md,
		lg,
		xl,
		...rest
	} = props;

	const getCssClasses = () => {
		const cssClasses = [];
		cssClasses.push(className);
		!xs && !sm && !md && !lg && !xl && cssClasses.push('col');
		if (xs) cssClasses.push(`col-${xs.toString()}`);
		if (sm) cssClasses.push(`col-sm-${sm.toString()}`);
		if (md) cssClasses.push(`col-md-${md.toString()}`);
		if (lg) cssClasses.push(`col-lg-${lg.toString()}`);
		if (xl) cssClasses.push(`col-xl-${xl.toString()}`);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<div className={getCssClasses()} {...rest}>
			{children}
		</div>
	)
}
