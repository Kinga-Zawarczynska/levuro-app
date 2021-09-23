import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from './Button';
import Input from './Input'
import { fetchUsers } from '../utils/fetch-users';
import UserCard from './UserCard';
import { logout } from '../state-management/actions/userTokenActions'
import './Main.scss';

function Main() {
    const [users, setUsers] = useState([])
    const userToken = useSelector(({ user }) => user.token);
    const dispatch = useDispatch();
    const logOut = () => {
      localStorage.removeItem('userToken')
      dispatch(logout())
    }

  useEffect(() => {
    fetchUsers(userToken).then(users => setUsers(users[0].data)) 
    return () => {
      setUsers([])
    }
  }, [userToken])

  console.group('fff', users)
    return (
        <main className='main'>
            <Button name='LOGOUT' onClick={logOut} />
            <Button name='ADD NEW USER' />
            <div className='search-bar'>
            <Input type='text' placeholder='search' />
            <Button name='SEARCH' />
            </div>
            {users.map(item => <UserCard user={item} key={item.id} />
            )}


        </main>
    )
}

export default Main
