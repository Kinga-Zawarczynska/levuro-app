import React from 'react'
import Input from './Input'
import './LoginPage.scss'

function LoginPage() {
    return (
        <div className='form'>
            <h2>
                Log in
            </h2>
            <Input type='email' placeholder='email' />
            <Input type='password' placeholder='password' />
            
        </div>
    )
}

export default LoginPage
