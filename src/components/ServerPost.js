import React from 'react';
import Post from './Post';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions';

export default function ServerPosts() {
    const dispatch = useDispatch(); // с помощью этого создаем action creater, который принимает action
    const serverPost = useSelector(state => state.posts.serverPost); //обозначаем, что нужно "достать" и хранилища
    dispatch(fetchPosts()); // вызываем action creater и нужным action
    console.log(serverPost);
    if (!serverPost) { return(<></>) };
    return serverPost.map((item, index) => {
        return <Post key={index + ' qwe'} post={item} />
    });
};