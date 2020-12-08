import React from 'react';
import './post.css';
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostAction from './PostAction';
import PostComments from './PostComments';
import PostSendCommentForm from './PostSendCommentForm';

function Post() {
    return (
        <div className="post">
            <PostHeader/>
            <PostContent/>
            <PostAction/> 
            <PostComments/>  
            <PostSendCommentForm/>         
        </div>
    );
}

export default Post;