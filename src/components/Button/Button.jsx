import React from 'react';
import { VARIANT } from '../enums';
import * as styles from './Button.module.scss';

export const Button = props => {
	const { children, className, color = 'primary', variant = VARIANT.contained, ...rest } = props;

	const getCssClass = () => {
		const result = [];
		result.push(className);
		result.push(styles[color]);
		result.push(styles[variant]);
		result.push(styles.button);
		return result.filter(r => r).join(' ');
	};

	return (
		<button className={getCssClass()} {...rest}>
			{children}
		</button>
	);
};
