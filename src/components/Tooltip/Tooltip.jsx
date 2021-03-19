import React, { cloneElement, Fragment, useEffect, useRef, useState } from 'react';
import { createPopper } from '@popperjs/core';
import styles from './Tooltip.module.scss';

// 	placement?: 'top' | 'bottom' | 'right' | 'left',

export const Tooltip = (props) => {

	const { children, text, placement = 'left' } = props;

	const [show, setShow] = useState(false);
	const refChild = useRef(null);
	const refTooltip = useRef(null);

	useEffect(() => {
		console.warn('asdf');
		if (show === true && refChild && refChild.current) {
			console.warn('shooooow');
			createPopper(refChild.current, (refTooltip.current), {
				placement: placement,
				modifiers: [
					{
						name: 'offset',
						options: {
							offset: [0, 8],
						},
					},
				],
			});
		}
	}, [show]);

	const handleMouseOver = () => {
		console.warn('mouseover');
		setShow(true);
	}

	const handleMouseLeave = () => {
		console.warn('mouseleave');
		setShow(false);
	}

	return (
		<Fragment>
			{children &&
				<div className={styles.tooltipContainer} ref={refChild} id="tooltip-container">
					{cloneElement(children, {
						onMouseOver: handleMouseOver,
						onMouseLeave: handleMouseLeave,
					})}
				</div>
			}
			{show &&
				<div className={styles.tooltip} ref={refTooltip} id="tooltip">
					{text}
					<div id="arrow" data-popper-arrow></div>
				</div >
			}
		</Fragment>
	);
}
