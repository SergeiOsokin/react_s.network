import '../style/Post.css';
import React from 'react';

function Post( { post } ) {

    function isLike(event) {
        document.querySelector('.post__like').classList.toggle('post__like_liked');
        // это для будущего, чтобы снимать лайк и передавать на сервер нужный id
        //event.target.closest(".post").getAttribute("owner");
    }    
    
    return (
        <div className='post' owner={`${post.idOwnerPost}`}>
            <div className='post__header'>
                <div className='post__img_autor' style={{ backgroundImage: `url(${post.avatarOwner})` }}></div>
                <p className='post__img_id'>{post.ownerPost}</p>
                <i className='post__menu'>...</i>
            </div>

            <img src={`${post.link}`} className='post__img' alt='' />
            <div className='post__buttons'>
                <div className='like-container'>
                    <button className='post__like' onClick={isLike}></button>
                    <p className='post__like-sum'>{post.likes.length}</p>
                </div>
                <button className='post__share'>Share</button>
            </div>
            <p className='post__test'>{post.text}</p>
        </div>
    );
}

export default Post