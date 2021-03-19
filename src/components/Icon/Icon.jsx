import React from "react";
import styles from './Icon.module.scss';

export const Icon = ({ icon }) => {
	return (
		<i className={styles.icon}>
			{icon}
		</i>
	);
}
