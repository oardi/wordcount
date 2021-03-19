import React from "react";

import styles from './CardTitle.module.scss';

export const CardTitle = (props) => {

	const { children, as: As = 'div', ...rest } = props;

	return (
		<As className={styles.cardTitle} {...rest}>
			{children}
		</As>
	);
}
