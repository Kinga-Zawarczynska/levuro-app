import React from 'react'
import Input from './Input'
import './LoginPage.scss'
import Button from './Button'
import { login } from '../utils/login'

function LoginPage() {
    const loginWithCredentials = () => login('https://reqres.in/api/login', {
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
    })
    return (
        <div className='form'>
            <h2>
                Log in
            </h2>
            <Input type='email' placeholder='email' />
            <Input type='password' placeholder='password' />
            <Button name='Log in' onClick={loginWithCredentials} />  
            
        </div>
    )
}

export default LoginPage
