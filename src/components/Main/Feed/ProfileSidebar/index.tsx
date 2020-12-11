// Bibliotecas:
import React from 'react';

// Componentes:
import ProfileInfo from './ProfileInfo';

// CSS:
import './profileSidebar.css';

// Interfaces:
import { IProfileSidebar } from '../../../../redux/interfaces/github';

function ProfileSidebar(props : IProfileSidebar) {
    return (
        <div className="profile">
            <ProfileInfo user={props.user}/>
        </div>
    );
}

export default ProfileSidebar;