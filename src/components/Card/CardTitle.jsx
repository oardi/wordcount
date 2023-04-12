import React from 'react';

import * as styles from './CardTitle.module.scss';

export const CardTitle = props => {
	const { children, className, as: As = 'div', ...rest } = props;

	const getCssClasses = () => {
		const cssClasses = [];
		cssClasses.push(styles.cardTitle);
		cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<As className={getCssClasses()} {...rest}>
			{children}
		</As>
	);
};
