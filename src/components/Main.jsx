/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from './Button';
import { fetchUsers } from '../utils/fetch-users';
import { logOut } from '../utils/logOut';
import { MAIN, NEW_USER, UPDATE_USER } from '../constants/flows';
import { setFlow } from '../state-management/actions/flowActions';
import { clearErrors } from '../state-management/actions/errorActions'
import UserForm from './UserForm';
import SearchBar from './SearchBar';
import './Main.scss';

function Main({ setRememberedUserToken }) {
  const [ users, setUsers ] = useState([]);
  const userToken = useSelector(({ user }) => user.token);
  const flowState = useSelector(({flow}) => flow.path)
  const [path, setPath] = useState(flowState)
  const [updatedUser, setUpdatedUser] = useState()
  const [page, setPage] = useState(1)
  const [noMoreData, setNoMoreData] = useState(false)
  
  const dispatch = useDispatch();

  const moreData = () => {
    fetchUsers(userToken, page, users).then(res => {
      setUsers(prev => [...prev, ...res[0].data]);
      setPage(prev => prev +1)
      if (!res[0].data.length) {
        setNoMoreData(true)
      }
    });
  }

const infiniteScroll = () => {
  if (
    window.innerHeight + document.documentElement.scrollTop
    === document.documentElement.offsetHeight
  ) {
    moreData()
  }
}

  useEffect(() => {
    window.addEventListener('scroll', infiniteScroll);
    return () => window.removeEventListener('scroll', infiniteScroll);
  }, [page])

  useEffect(() => {
    dispatch(clearErrors())
  }, [path])

  useEffect(() => {
    fetchUsers(userToken, page).then(fetchedUsers => setUsers(fetchedUsers[0].data)).then(setFlow(MAIN))
    setPage(page + 1)
  }, [])

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
				<SearchBar users={users} usersData={users} redirectTo={redirectTo} />
			</div>
      {noMoreData && <p>No more data available.</p>}
		</main>
	);
}

export default Main;
