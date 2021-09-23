import React from 'react'

function Input({type, placeholder, field}) {
    return (
        <input type={type} placeholder={placeholder} {...field} />
    )
}

export default Input
