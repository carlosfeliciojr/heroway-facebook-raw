// Bibliotecas:
import React from 'react';

// CSS:
import './typing.css';

// Interfaces:
import { ITyping } from '../../../../../../redux/interfaces/github';

function Typing(props: ITyping) {
    return (
        <>
            <div className="typing active">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
            <div className="image-board">
                <img src={props.user.avatar_url} alt="Profile" title="Profile" />
            </div>
        </>
    );
}

export default Typing;