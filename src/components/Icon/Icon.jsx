import React from 'react';
import * as styles from './Icon.module.scss';

export const Icon = ({ icon }) => {
	return <i className={styles.icon}>{icon}</i>;
};
