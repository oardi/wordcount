import React from 'react';
import * as styles from './AppBarTitle.module.scss';

export const AppBarTitle = props => {
	const { children, className, onClick } = props;

	const getCssClass = () => {
		const result = [];
		result.push(className);
		result.push(styles.appbarTitle);
		return result.filter(r => r).join(' ');
	};

	const handleClick = () => {
		onClick && onClick();
	};

	return (
		<div className={getCssClass()} onClick={handleClick} onKeyDown={e => e.key === 13 && handleClick()}>
			{children}
		</div>
	);
};
