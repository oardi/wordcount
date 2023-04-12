import React from 'react';
import * as styles from './AppBar.module.scss';

export const AppBar = props => {
	const { children, color = 'primary', shadow = true, ...rest } = props;

	const getCssClasses = () => {
		const result = [];
		result.push(styles[color]);
		result.push(styles.appbar);
		shadow && result.push(styles['shadow']);
		return result.filter(r => r).join(' ');
	};

	return (
		<nav className={getCssClasses()} {...rest}>
			{children}
		</nav>
	);
};
