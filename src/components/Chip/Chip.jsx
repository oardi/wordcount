import React from 'react';
import * as styles from './Chip.module.scss';

export const Chip = ({ children, color = 'secondary', className, onClick, ...rest }) => {
	const getCssClass = () => {
		const result = [];
		result.push(styles.chip);
		result.push(styles[color]);
		result.push(className);
		onClick && result.push(styles['clickable']);
		return result.filter(r => r).join(' ');
	};

	return (
		<div className={getCssClass()} {...rest}>
			{children}
		</div>
	);
};
