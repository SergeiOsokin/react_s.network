import './style/Post.css';
import React from 'react';

function Posts() {
    return(
        <div className='posts-place'>
            <Post />
        </div>
    )
}

function Post(props) {
    return (
        <div className='post'>
            <div className='post__header'>
                <div className='post__img_autor' style={{ backgroundImage: `url(${'https://cdn.pixabay.com/photo/2020/11/15/17/25/trees-5746604__340.jpg'})` }}></div>
                <p className='post__img_id'>qweqweqwe</p>
                <i className='post__menu'>...</i>
            </div>

            <img src='https://cdn.pixabay.com/photo/2020/11/15/17/25/trees-5746604__340.jpg' className='post__img' alt='' />
            <div className='post__buttons'>
                <button className='post__like'></button>
                <button className='post__share'>Share</button>
            </div>
            <p className='post__test'>Text of post</p>
        </div>
    );
}

export default Posts