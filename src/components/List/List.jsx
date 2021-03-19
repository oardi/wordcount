import React, { cloneElement, useEffect, useState } from 'react';
import { ListItemModel } from './list.models';

export const List = (props) => {

	const { children, isFlush = false, isHoverable = false } = props;

	const [listItems, setListItems] = useState([]);

	useEffect(() => {
		console.warn(listItems, setListItems);
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
		cssClasses.push('list list-group');
		if (isFlush) {
			cssClasses.push(`list-group-flush`);
		}
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
