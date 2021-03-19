import React from 'react';

export const IconButton = (props) => {

	const { children, icon, variant = 'text', color = 'primary', isActive, className = '', ...rest } = props;

	const getCssClasses = () => {
		const cssClasses = [];
		cssClasses.push(`btn`);
		cssClasses.push(`btn-icon`);

		if (variant !== 'outline' && variant !== 'text') {
			cssClasses.push(`btn-icon-${color}`);
		}
		if (variant === 'outline') {
			cssClasses.push(`btn-outline-${color}`);
		}
		if (variant === 'text') {
			cssClasses.push(`btn-link`);
			cssClasses.push(`btn-link-${color}`);
		}
		if (isActive) {
			cssClasses.push('active');
		}

		cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<button
			type="button"
			className={getCssClasses()}
			{...rest}
		>
			<span
				className="svg-icon">
				{icon}
			</span>
		</button >
	);
};
