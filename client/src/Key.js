import React from 'react';
import './Key.css';

const Key = ({text, mouseDown, mouseUp}) => {
    const key_code = {
        code: 'Key' + text.toUpperCase()
    }
    return (
        <div className='keyboard__key' id={`key-${text}`} onMouseDown={()=> mouseDown(key_code)} onMouseUp={()=> mouseUp(key_code)}>
            <div className='keybaord__key--black'></div>
            <p>{text}</p>
        </div>
    )
}

export default Key;