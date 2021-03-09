import React from 'react';
import './Key.css';

const Key = ({text }) => {
    
    return (
        <div className='keyboard__key'>
            <div className='keybaord__key--black'></div>
            <audio autoPlay={true}>
                <source src={require(`./Assets/keyboardsounds/${text}.mp3`)} type='audio/mp3' />
            </audio>
            <p>{text}</p>
        </div>
    )
}

export default Key;