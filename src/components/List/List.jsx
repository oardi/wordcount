import React, { cloneElement, useEffect, useState } from 'react';
import { ListItemModel } from './list.models';
import styles from './List.module.scss';

export const List = (props) => {

	const { children, isFlush = false, isHoverable = false } = props;

	const [listItems, setListItems] = useState([]);

	useEffect(() => {
		if (children) {
			if (Array.isArray(children)) {
				setListItems(children.map(child => new ListItemModel(child)));
			} else {
				setListItems([new ListItemModel(children)]);
			}
		}
	}, [children]);

	const getCssClasses = () => {
		const cssClasses = [];
		if (isFlush) {
			cssClasses.push(styles.flush);
		}
		cssClasses.push(styles.list);
		return cssClasses.filter(css => css).join(' ');
	}

	return (
		<ul className={getCssClasses()}>
			{listItems && listItems.map((listItem, index) => (
				cloneElement(listItem, {
					isHoverable: isHoverable,
					key: listItem.key ? listItem.key : index
				})
			))}
		</ul>
	);
}
