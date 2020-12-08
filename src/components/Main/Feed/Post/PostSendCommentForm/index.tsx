import React from 'react';
import './postSendCommentForm.css'

function PostSendCommentForm() {
    return (
        <div className="post-send-comment">
            <div className="post-send-form">
                <input type="text" placeholder="Write your comment" />
            </div>
        </div>
    );
}

export default PostSendCommentForm;