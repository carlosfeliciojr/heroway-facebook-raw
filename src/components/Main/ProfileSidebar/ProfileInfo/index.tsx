import React from 'react';
import './profileInfo.css';
import Typing from './Typing';

function ProfileInfo() {
    return (
        <>
            <div className="profile-image">
                <Typing />
            </div>
            <div className="profile-name">
                <span>Amarilda Curvada</span>
            </div>
            <div className="profile-info">
                <div>
                    <span>347</span>
                    <span>Followers</span>
                </div>
                <div>
                    <span>94</span>
                    <span>Following</span>
                </div>
            </div>
        </>
    );
}

export default ProfileInfo;