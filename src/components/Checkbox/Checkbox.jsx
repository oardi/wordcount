import React, { useEffect, useRef, useState } from 'react';
import { IconButton } from '../IconButton';
import { CheckSquareRegularIcon, SquareRegularIcon } from '../Icons';

export const Checkbox = (props) => {

	const { id, checked, className = '', label, name, value = "off", ...rest } = props;

	const [isChecked, setIsChecked] = useState(false);
	const checkboxElement = useRef(null);

	useEffect(() => {
		if (checked === true || checked === false) {
			setIsChecked(checked);
		}
	}, [checked]);

	const icons = {
		default: <SquareRegularIcon />,
		selected: <CheckSquareRegularIcon />
	};

	const getCssClasses = () => {
		const cssClasses = [];
		cssClasses.push('checkbox');
		cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	const getIcon = () => {
		return isChecked ? icons.selected : icons.default;
	};

	const handleClick = () => {
		setIsChecked(!isChecked);
		checkboxElement && checkboxElement.current && checkboxElement.current.click();
	};

	return (
		<div className="checkbox-container">

			<IconButton className={getCssClasses()} onClick={handleClick} icon={getIcon()} />

			<label onClick={handleClick}>
				{label}
			</label>

			<input
				type="checkbox"
				ref={checkboxElement}
				id={id}
				name={name}
				checked={isChecked}
				hidden={true}
				value={value}
				{...rest}
				readOnly
			/>
		</div>
	);
}
