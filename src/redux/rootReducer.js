import { combineReducers } from 'redux';
import { postsReducer } from './postReducer';
import { profileReducer } from './profileReducer';
// файл отвечает за то, чтобы все редюсеры были видны
export const rootReducer = combineReducers({
    posts: postsReducer,
    profile: profileReducer
});