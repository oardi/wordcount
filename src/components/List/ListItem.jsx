import React from 'react';
import styles from './ListItem.module.scss';

export const ListItem = (props) => {

	const { children, active = false, className, isHoverable = false, isDisabled = false, onClick } = props;

	const getCssClasses = () => {
		const cssClasses = [];
		if (active) {
			cssClasses.push(`active`);
		}
		if (isHoverable) {
			cssClasses.push(`list-group-item-action`);
		}
		if (isDisabled) {
			cssClasses.push(`disabled`);
		}
		if (className) {
			cssClasses.push(className);
		}
		cssClasses.push(styles.listItem);

		return cssClasses.filter(css => css).join(' ');
	}

	const handleClick = (e) => {
		onClick && onClick(e);
	};

	return (
		<li onClick={handleClick} className={getCssClasses()}>
			{children}
		</li>
	);
}
