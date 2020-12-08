import React from 'react';
import './typing.css';
import image from '../../../../../assets/img/person1.jpg';

function Typing() {
    return (
        <>
            <div className="typing active">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
            <div className="image-board">
                <img src={image} alt="Profile" title="Profile" />
            </div>
        </>
    );
}

export default Typing;