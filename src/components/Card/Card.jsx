import React from "react";
import styles from './Card.module.scss';

export const Card = ({ children, className, ...rest }) => {

	const getCssClass = () => {
		const result = [];
		result.push(styles.card);
		result.push(className);
		return result.filter(r => r).join(' ');
	}

	return (
		<div className={getCssClass()} {...rest}>
			{children}
		</div>
	);
}
