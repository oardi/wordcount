import React from 'react';

export const ListItemText = ({ primary, secondary }) => (
	<div className="list-item-text">
		<div className="list-item-text-primary">
			{primary}
		</div>
		{secondary &&
			<div className="list-item-text-secondary text-muted" style={{ fontSize: '0.875rem' }}>
				{secondary}
			</div>
		}
	</div>
)
