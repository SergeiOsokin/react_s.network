import '../style/Post.css';
import React from 'react';

function Post( { post } ) {
    console.log(post)
    return (
        <div className='post' owner={`${post.idOwnerPost}`}>
            <div className='post__header'>
                <div className='post__img_autor' style={{ backgroundImage: `url(${post.avatarOwner})` }}></div>
                <p className='post__img_id'>{post.ownerPost}</p>
                <i className='post__menu'>...</i>
            </div>

            <img src={`${post.link}`} className='post__img' alt='' />
            <div className='post__buttons'>
                <button className='post__like'></button>
                <button className='post__share'>Share</button>
            </div>
            <p className='post__test'>{post.text}</p>
        </div>
    );
}

export default Post