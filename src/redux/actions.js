import { CREATE_POST, SERVER_POSTS, NEW_INFO } from "./types";
import postsArr from '../components/posts123';
//создаем посты
export function createPost(post) {
    return {
        type: CREATE_POST, // указываем тип события
        payload: post // тут сохраняем пришедший пост
    }
};

export function setProfileInfo(profile) {
    return {
        type: NEW_INFO, // указываем тип события
        payload: profile // тут сохраняем пришедший пост
    }
};

// посты загружаемые с @сервера@
export function fetchPosts() {
    // имитируем загрузку с сервера
    return ({
        type: SERVER_POSTS,
        payload: postsArr
    })
}