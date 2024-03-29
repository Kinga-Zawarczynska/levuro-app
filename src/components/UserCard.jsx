import React from 'react';
import './UserCard.scss';

function UserCard({ user, onClick }) {
	const { avatar, email, first_name, last_name, id } = user;
	return (
		<div id={id} className="card" onClick={onClick}>
			<img src={avatar} alt={email} className='img' />
			<div>
				<p>
					{first_name} {last_name}
				</p>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default UserCard;
