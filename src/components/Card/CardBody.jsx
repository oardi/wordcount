import React from 'react';
import * as styles from './CardBody.module.scss';

export const CardBody = ({ children, ...rest }) => {
	return (
		<div className={styles.cardBody} {...rest}>
			{children}
		</div>
	);
};
