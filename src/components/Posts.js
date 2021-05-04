import React from 'react';
import Post from './Post';
import { connect } from 'react-redux';

function Posts({ syncPost }) {
    return syncPost.map((item, index) => {
        //return document.querySelector('.posts-place').insertAdjacentHTML('afterbegin', <Post key={index + ' qwe'} post={item} />)
        return <Post key={index + ' qwe'} post={item} />
    });
};
// сохраняем определенное состояние для компонента, только то, которое нужно. Берем состояние из редюсера posts
const mapStateToProps = (state) => {
    return {
        syncPost: state.posts.posts,
    };
};

export default connect(mapStateToProps, null)(Posts);