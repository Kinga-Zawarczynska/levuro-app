import React from 'react';
import './UserCard.scss';

function UserCard({ user }) {
	const { avatar, email, first_name, last_name, id } = user;
	return (
		<div id={id} className="card">
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
