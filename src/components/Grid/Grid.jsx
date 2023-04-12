import React from 'react';
import * as styles from './Grid.module.scss';

export const Grid = props => {
	const { children, className, template = '', ...rest } = props;

	const getCssClass = () => {
		const result = [];
		result.push(className);
		result.push(styles.grid);
		return result.filter(r => r).join(' ');
	};

	return (
		<div className={getCssClass()} {...rest}>
			{children}
		</div>
	);
};
