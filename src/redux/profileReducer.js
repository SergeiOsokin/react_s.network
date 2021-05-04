import { getCookie } from '../helpers/getCookie';
import { NEW_INFO } from './types';
// в данном файле в зависимости от типа действия action выполняем ту или иную логику

//задаем начальное состояние для постов
const initialState = {
    profile: {
        urlAvatar: document.cookie ? getCookie().urlAvatar : '',
        nameUser: document.cookie ? getCookie().userName : 'Press: Edit',
        userID: document.cookie ? getCookie().userID : ''
    },
};
//
export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_INFO: // новые данные профиля
            //action.infoProfile - информация о профиле.
            return { ...state, profile: action.payload };
        default:
            return state;
    }
};