import React, { MouseEvent } from 'react';

export const ListItem = (props) => {

	const { children, active = false, className, isHoverable = false, isDisabled = false, onClick } = props;

	const getCssClasses = () => {
		const cssClasses = [];
		cssClasses.push('list-group-item d-flex justify-content-start align-items-center');
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
