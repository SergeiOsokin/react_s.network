import React from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import { fetchPosts } from '../redux/actions';

function Posts({ syncPost }) {
    return syncPost.map((item, index) => {
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