import React from 'react';
import * as styles from './Hero.module.scss';

export const Hero = ({ children }) => {
	return <div className={styles.hero}>{children}</div>;
};
