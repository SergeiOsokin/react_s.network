import './style/Post.css';
import React from 'react';

function Posts(props) {
    let arrPosts = [];
    arrPosts.push(props)
    return(
        <Post dataPost={arrPosts[arrPosts.length - 1]} />
        // <div className='posts-place'>
        //     {props.arrPosts.map((item, index) => {
        //         return <Post key={index + ' qwe'} arrPosts={item} />
        //     })}
        // </div>
    )
}

function Post(props) {
    console.log('props')
    return (
        <div className='post'>
            <div className='post__header'>
                <div className='post__img_autor' style={{ backgroundImage: `url(${props.dataPost.avatarOwner})` }}></div>
                <p className='post__img_id'>{props.dataPost.owner}</p>
                <i className='post__menu'>...</i>
            </div>

            <img src={`${props.dataPost.imgPost}`} className='post__img' alt='' />
            <div className='post__buttons'>
                <button className='post__like'></button>
                <button className='post__share'>Share</button>
            </div>
            <p className='post__test'>{props.dataPost.textPost}</p>
        </div>
    );
}

export default Posts