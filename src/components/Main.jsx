import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from './Button';
import Input from './Input';
import { fetchUsers } from '../utils/fetch-users';
import UserCard from './UserCard';
import { logOut } from '../utils/logOut';
import { MAIN, NEW_USER, UPDATE_USER } from '../constants/flows';
import { setFlow } from '../state-management/actions/flowActions';
import './Main.scss';
import UserForm from './UserForm';

function Main({ setRememberedUserToken }) {
  const [ users, setUsers ] = useState([]);
  const userToken = useSelector(({ user }) => user.token);
  const flowState = useSelector(({flow}) => flow.path)
  const [path, setPath] = useState(flowState)
  const [updatedUser, setUpdatedUser] = useState()
  
  const dispatch = useDispatch();

  useEffect(() => {
    setFlow(MAIN)
  }, [])

	useEffect(
		() => {
			fetchUsers(userToken).then((users) => setUsers(users[0].data));
			return () => {
				setUsers([]);
			};
		},
		[ userToken ]
  );

  const redirectTo = (path, user) => {
    setPath(path)
    dispatch(setFlow(path))
    user && setUpdatedUser(user)
  }
  
  if (path === NEW_USER) {
    return <UserForm flow={NEW_USER} setPath={setPath} setRememberedUserToken={setRememberedUserToken} />
  }

  if (path === UPDATE_USER) {
    return <UserForm flow={UPDATE_USER} user={updatedUser} setPath={setPath} setRememberedUserToken={setRememberedUserToken} />
  }

	return (
		<main className="main">
			<Button name="LOGOUT" onClick={() => logOut(dispatch, setRememberedUserToken)} />
			<Button name="ADD NEW USER" onClick={() => redirectTo(NEW_USER)} />
			<div className="search-bar">
				<Input type="text" placeholder="search" />
				<Button name="SEARCH" />
			</div>
			{users.map((item) => <UserCard user={item} key={item.id} onClick={() => redirectTo(UPDATE_USER, item)} />)}
		</main>
	);
}

export default Main;
