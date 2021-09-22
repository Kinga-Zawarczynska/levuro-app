import React, { useEffect, useState } from 'react';
import Button from './Button';
import Input from './Input'
import { fetchUsers } from '../utils/fetch-users';
import UserCard from './UserCard';
import './Main.scss';

function Main({className}) {
    const [users, setUsers] = useState([])

  useEffect(() => {
    fetchUsers().then(users => setUsers(users[0].data)) 
    return () => {
      setUsers([])
    }
  }, [])

  console.group('fff', users)
    return (
        <main className='main'>
            <Button name='LOGOUT' />
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
