import React from "react";
import styles from './Card.module.scss';

export const Card = (props) => {

	const { children, className = '', shadow = true, ...rest } = props;

	const getCssClass = () => {
		const cssClasses = [];
		cssClasses.push(styles.card);
		shadow && cssClasses.push(styles.shadow);
		cssClasses.push(className);
		return cssClasses.filter(r => r).join(' ');
	}

	return (
		<div className={getCssClass()} {...rest}>
			{children}
		</div>
	);
}
