import React, { cloneElement, Fragment, useEffect, useRef, useState } from 'react';
import { createPopper } from '@popperjs/core';
import styles from './Tooltip.module.scss';

export const Tooltip = (props) => {

	const { children, text, placement = 'bottom' } = props;

	const [show, setShow] = useState(false);
	const refChild = useRef(null);
	const refTooltip = useRef(null);

	useEffect(() => {
		if (show === true && refChild && refChild.current) {
			createPopper(refChild.current, (refTooltip.current), {
				placement: placement,
				modifiers: [
					{
						name: 'offset',
						options: { offset: [0, 8] }
					},
				],
			});
		}
	}, [show]);

	const handleMouseOver = () => {
		setShow(true);
	}

	const handleMouseLeave = () => {
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
