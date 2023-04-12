import { Link } from 'gatsby';
import React from 'react';
import { Icon } from '../Icon/Icon';
import * as styles from './Social.module.scss';

export const Social = ({ children, path, icon }) => {
	return (
		<Link to={path} className={styles.social} target="_blank">
			<div className="inline-flex align-items-center">
				<Icon icon={icon} />

				<span className="ml-2">{children}</span>
			</div>
		</Link>
	);
};
