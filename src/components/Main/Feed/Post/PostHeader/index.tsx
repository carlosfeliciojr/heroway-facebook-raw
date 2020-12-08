import React from 'react';
import './postHeader.css';
import image from '../../../../../assets/img/person2.jpg';


function PostHeader() {
    return (
        <div className="post-header">
            <div className="post-header-profile-image">
                <div className="post-header-image-board">
                    <img src={image} alt="Profile" title="Profile"/>
                </div>
            </div>
            <div className="post-header-profile-name">
                <div className="profile-name">João da Silva</div>
                <div className="post-date">Feb 17 at 10:45PM</div>
            </div>
        </div>
    );
}

export default PostHeader;