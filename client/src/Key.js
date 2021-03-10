import React from 'react';
import './Key.css';

const Key = ({text, src}) => {
    return (
        <div className='keyboard__key'>
            <div className='keybaord__key--black'></div>
            <p>{text}</p>
        </div>
    )
}

export default Key;