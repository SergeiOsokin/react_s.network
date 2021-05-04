import { CREATE_POST, SERVER_POSTS } from './types';
// в данном файле в зависимости от типа действия action выполняем ту или иную логику

//задаем начальное состояние для постов
const initialState = {
    posts: [],
    serverPost: []
};
//
export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POST: // новые посты
            //action.payload - посты. Добавляем посты в массив постов, откуда берем из для отображения
            return { ...state, posts: state.posts.concat([action.payload]) };
        case SERVER_POSTS: // загружаемые с сервера
            return { ...state, serverPost: action.payload };
        default:
            return state;
    }
};