import React from "react";
import styles from './Button.module.scss';
import { VARIANT } from '../enums';

export const Button = ({ children, className, color = 'primary', variant = VARIANT.contained, ...rest }) => {

	const getCssClass = () => {
		const result = [];
		result.push(className);
		result.push(styles[color]);
		result.push(styles[variant]);
		result.push(styles.button);
		return result.filter(r => r).join(' ');
	}

	return (
		<button className={getCssClass()} {...rest}>
			{children}
		</button>
	);
}
