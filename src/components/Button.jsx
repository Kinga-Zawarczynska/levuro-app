import React from 'react'
import './Button.scss'

function Button({name, type, disabled, onClick}) {
    return (
        <div className='button' disabled={disabled} onClick={onClick} >
            {name}
        </div>
    )
}

export default Button
