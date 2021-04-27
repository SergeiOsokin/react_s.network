import { NEW_INFO } from './types';
// в данном файле в зависимости от типа действия action выполняем ту или иную логику

//задаем начальное состояние для постов
const initialState = {
    profile: {
        urlAvatar: '',
        nameUser: '',
        userID: ''
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