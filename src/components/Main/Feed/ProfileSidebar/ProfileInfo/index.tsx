// Bibliotecas:
import React from 'react';

// Componentes:
import Typing from './Typing';

// Interfaces:
import { IProfileInfo } from '../../../../../redux/interfaces/github';

// CSS:
import './profileInfo.css';

function ProfileInfo(props: IProfileInfo) {
    return (
        <>
            <div className="profile-image">
                <Typing user={props.user} />
            </div>
            <div className="profile-name">
                <span>{props.user.login}</span>
            </div>
            <div className="profile-info">
                <div>
                    <span>Mais de 8 mil!</span>
                    <span>Followers</span>
                </div>
                <div>
                    <span>200</span>
                    <span>Following</span>
                </div>
            </div>
        </>
    );
}

export default ProfileInfo;