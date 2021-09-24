import React from 'react';
import './Button.scss';

function Button({ name, disabled, onClick }) {
	return (
		<div className="button" disabled={disabled} onClick={onClick}>
			{name}
		</div>
	);
}

export default Button;
