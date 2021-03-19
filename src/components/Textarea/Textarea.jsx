import React from 'react';
import styles from './Textarea.module.scss';

export const Textarea = (props) => {

	const { className, ...rest } = props;

	const getCssClass = () => {
		const result = [];
		result.push(className);
		result.push(styles.textarea);
		return result.filter(r => r).join(' ');
	}

	return (
		<textarea className={getCssClass()} {...rest} />
	);
}
